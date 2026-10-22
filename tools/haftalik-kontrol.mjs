import { readFile, mkdir, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import { pathToFileURL } from 'node:url';

const gun = 86400000;
export function oncelik(kaynak, bugun) {
  const nedenler = [];
  const kalan = kaynak.sonBasvuru ? (Date.parse(kaynak.sonBasvuru) - Date.parse(bugun)) / gun : null;
  if (kalan !== null && kalan < 0 && kaynak.basvuruDurumu === 'acik') nedenler.push('Tarih geçmiş, durum hâlâ açık');
  if (kalan !== null && kalan >= 0 && kalan <= 14) nedenler.push('Son başvuru 14 gün içinde');
  if (kaynak.basvuruDurumu === 'acik') nedenler.push('Açık başvuru');
  if (kaynak.basvuruDurumu === 'belirsiz') nedenler.push('Başvuru durumu belirsiz');
  const yas = kaynak.sonKontrol ? (Date.parse(bugun) - Date.parse(kaynak.sonKontrol)) / gun : Infinity;
  if (!kaynak.sonKontrol) nedenler.push('Resmî kontrol tarihi yok');
  else if (yas >= 30) nedenler.push('Son kontrol en az 30 gün önce');
  return nedenler;
}

export async function baglantiKontrol(url, fetcher = fetch) {
  try {
    const response = await fetcher(url, { redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Sheducate-Link-Check/1.0' } });
    const durum = response.status;
    await response.body?.cancel();
    return { durum, sonuc: response.ok ? 'Erişilebilir' : [401, 403, 429].includes(durum) ? 'Otomatik erişim engeli / sınırı; elle kontrol' : 'Bağlantı kontrol edilmeli', url: response.url };
  } catch (error) {
    return { durum: null, sonuc: `Erişim doğrulanamadı (${error.name}); elle kontrol`, url };
  }
}

export async function raporHazirla({ ag = true, bugun = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul' }).format(new Date()) } = {}) {
  const source = await readFile(new URL('../data.js', import.meta.url), 'utf8');
  const kaynaklar = vm.runInNewContext(`${source}\nKAYNAKLAR`, {}, { timeout: 1000 });
  const linkler = [...new Set(kaynaklar.map(k => k.link))];
  const kontroller = new Map();
  // En fazla altı eşzamanlı istek; her URL yalnızca bir kez taranır.
  let index = 0;
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (index < linkler.length) {
      const url = linkler[index++];
      kontroller.set(url, ag ? await baglantiKontrol(url) : { durum: null, sonuc: 'Ağ taraması yapılmadı', url });
    }
  }));
  const kayitlar = kaynaklar.map(k => ({ id: k.id, ad: k.ad, link: k.link, sonKontrol: k.sonKontrol, nedenler: oncelik(k, bugun), baglanti: kontroller.get(k.link) }));
  const sirali = kayitlar.filter(k => k.nedenler.length || (ag && k.baglanti.sonuc !== 'Erişilebilir')).sort((a, b) => {
    const score = k => (ag && k.baglanti.sonuc !== 'Erişilebilir' ? 100 : 0) + (k.nedenler.some(n => /Tarih geçmiş|14 gün/.test(n)) ? 50 : 0) + k.nedenler.length;
    return score(b) - score(a) || a.id - b.id;
  });
  const temiz = s => String(s).replace(/[\r\n|]/g, ' ');
  const metin = [
    `# Sheducate haftalık kontrol — ${bugun}`,
    '', `Taranan kayıt: ${kayitlar.length}. Takip listesi: ${sirali.length}. Ağ taraması: ${ag ? 'yapıldı' : 'yapılmadı'}.`,
    '', 'Bu rapor başvuru doğrulaması değildir. HTTP 200 yalnızca sayfanın erişilebilir olduğunu gösterir; içerik, tarih ve koşullar resmî sayfadan ayrıca incelenmelidir. Kaynakların son kontrol tarihleri ve durumları otomatik değiştirilmez.',
    '', 'Önce tarih çelişkilerini ve yaklaşan son tarihleri, ardından erişim sorunlarını ve açık başvuruları inceleyebilirsin. Belirsiz / eski kayıtları sırayla ele alabilirsin. Form bildirimleri bu taramaya dahil değildir; Google Forms yanıtları ayrıca incelenmelidir.',
    '', '| ID | Kaynak | Kontrol nedeni | Bağlantı | Son resmî kontrol |', '| --- | --- | --- | --- | --- |',
    ...sirali.map(k => `| ${k.id} | ${temiz(k.ad)} | ${temiz(k.nedenler.join('; ') || 'Bağlantı kontrolü')} | ${k.baglanti.durum ?? '—'} · ${temiz(k.baglanti.sonuc)} | ${k.sonKontrol || 'Yok'} |`),
    '', '## Resmî bağlantılar', '', ...sirali.map(k => `- ${k.id} · ${temiz(k.ad)}: ${k.link}`), ''
  ].join('\n');
  await mkdir('reports', { recursive: true });
  await writeFile('reports/haftalik-kontrol.md', metin);
  await writeFile('reports/haftalik-kontrol.json', JSON.stringify({ tarih: bugun, agTaramasi: ag, kayitlar }, null, 2));
  if (process.env.GITHUB_STEP_SUMMARY) await writeFile(process.env.GITHUB_STEP_SUMMARY, metin);
  console.log(`${kayitlar.length} kayıt incelendi; ${sirali.length} kayıt takip listesinde. reports/haftalik-kontrol.md`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await raporHazirla({ ag: !process.argv.includes('--no-network') });
}
