(function () {
  "use strict";

  const kategoriAdlari = {
    burslar: "Burslar",
    dernekler: "Dernekler ve Destek",
    egitimler: "Ücretsiz Eğitimler",
    girisimcilik: "Girişimcilik ve Finansman",
    hukuki: "Hukuki Destek",
    saglik: "Sağlık"
  };

  const aramaInput = document.querySelector("#arama");
  const filtreAlani = document.querySelector("#kategori-filtreleri");
  const gecmisCheckbox = document.querySelector("#suresi-gecenleri-goster");
  const liste = document.querySelector("#kaynak-listesi");
  const sonucSayisi = document.querySelector("#sonuc-sayisi");
  const bosDurum = document.querySelector("#bos-durum");
  const siteGuncelleme = document.querySelector("#site-guncelleme");

  const durum = {
    arama: "",
    kategori: "hepsi",
    gecmisleriGoster: false
  };

  const bugun = gunBaslangici(new Date());

  function turkceNormalize(metin) {
    return String(metin || "")
      .toLocaleLowerCase("tr")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ı/g, "i");
  }

  function gunBaslangici(tarih) {
    return new Date(tarih.getFullYear(), tarih.getMonth(), tarih.getDate());
  }

  function tarihOku(deger) {
    if (!deger) return null;
    const parcalar = deger.split("-").map(Number);
    return new Date(parcalar[0], parcalar[1] - 1, parcalar[2]);
  }

  function tarihYaz(deger) {
    if (!deger) return "Belirtilmemiş";
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(tarihOku(deger));
  }

  function tarihiGecmisMi(kaynak) {
    const tarih = tarihOku(kaynak.sonBasvuru);
    return tarih ? tarih < bugun : false;
  }

  function bilgiEskiMi(kaynak) {
    const kontrol = tarihOku(kaynak.sonKontrol);
    if (!kontrol) return true;
    const gunFarki = (bugun - kontrol) / (1000 * 60 * 60 * 24);
    return gunFarki > 90;
  }

  function aramaMetni(kaynak) {
    return turkceNormalize([
      kaynak.ad,
      kaynak.aciklama,
      kaynak.kimlerBasvurabilir,
      kaynak.sehir,
      (kaynak.etiketler || []).join(" ")
    ].join(" "));
  }

  function kaynaklariSirala(kaynaklar) {
    return [...kaynaklar].sort((a, b) => {
      const tarihA = tarihOku(a.sonBasvuru);
      const tarihB = tarihOku(b.sonBasvuru);

      if (tarihA && tarihB) return tarihA - tarihB;
      if (tarihA && !tarihB) return -1;
      if (!tarihA && tarihB) return 1;

      return a.ad.localeCompare(b.ad, "tr");
    });
  }

  function kaynaklariFiltrele() {
    const aranan = turkceNormalize(durum.arama.trim());

    return kaynaklariSirala(KAYNAKLAR.filter((kaynak) => {
      const kategoriUygun = durum.kategori === "hepsi" || kaynak.kategori === durum.kategori;
      const aramaUygun = !aranan || aramaMetni(kaynak).includes(aranan);
      const sureUygun = durum.gecmisleriGoster || !tarihiGecmisMi(kaynak);

      return kategoriUygun && aramaUygun && sureUygun;
    }));
  }

  function kartOlustur(kaynak) {
    const kart = document.createElement("article");
    const gecmis = tarihiGecmisMi(kaynak);
    const eski = bilgiEskiMi(kaynak);
    kart.className = `resource-card${gecmis ? " is-expired" : ""}`;

    const sonBasvuruSatiri = kaynak.sonBasvuru
      ? `<div><dt>Son başvuru</dt><dd>${tarihYaz(kaynak.sonBasvuru)}</dd></div>`
      : "";

    kart.innerHTML = `
      <div class="card-top">
        <h3>${guvenliMetin(kaynak.ad)}</h3>
        <span class="badge ${kaynak.kategori}">${kategoriAdlari[kaynak.kategori] || "Kaynak"}</span>
      </div>
      <p>${guvenliMetin(kaynak.aciklama)}</p>
      <dl class="meta-list">
        <div><dt>Kimler başvurabilir?</dt><dd>${guvenliMetin(kaynak.kimlerBasvurabilir)}</dd></div>
        ${sonBasvuruSatiri}
        <div><dt>Şehir / bölge</dt><dd>${guvenliMetin(kaynak.sehir || "Tüm Türkiye")}</dd></div>
      </dl>
      ${gecmis ? '<p class="notice expired">Başvuru süresi doldu</p>' : ""}
      ${eski ? '<p class="notice old">Bilgi eski olabilir, resmî siteden doğrulayın</p>' : ""}
      <a class="resource-link" href="${guvenliUrl(kaynak.link)}" target="_blank" rel="noopener noreferrer">Resmî Siteye Git</a>
      <p class="last-check">Son kontrol: ${tarihYaz(kaynak.sonKontrol)}</p>
    `;

    return kart;
  }

  function guvenliMetin(deger) {
    const span = document.createElement("span");
    span.textContent = String(deger || "");
    return span.innerHTML;
  }

  function guvenliUrl(deger) {
    const url = String(deger || "#");
    return /^https?:\/\//i.test(url) ? url : "#";
  }

  function render() {
    const kaynaklar = kaynaklariFiltrele();
    liste.replaceChildren(...kaynaklar.map(kartOlustur));

    sonucSayisi.textContent = `${kaynaklar.length} kaynak bulundu`;
    bosDurum.hidden = kaynaklar.length > 0;
  }

  function kategoriSec(kategori) {
    durum.kategori = kategori;
    filtreAlani.querySelectorAll(".filter-button").forEach((buton) => {
      const aktif = buton.dataset.category === kategori;
      buton.classList.toggle("is-active", aktif);
      buton.setAttribute("aria-pressed", String(aktif));
    });
    render();
  }

  aramaInput.addEventListener("input", (event) => {
    durum.arama = event.target.value;
    render();
  });

  filtreAlani.addEventListener("click", (event) => {
    const buton = event.target.closest(".filter-button");
    if (!buton) return;
    kategoriSec(buton.dataset.category);
  });

  gecmisCheckbox.addEventListener("change", (event) => {
    durum.gecmisleriGoster = event.target.checked;
    render();
  });

  siteGuncelleme.textContent = `Son güncelleme: ${tarihYaz(SITE_GUNCELLEME_TARIHI)}`;
  render();
})();
