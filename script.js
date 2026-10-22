(function () {
  "use strict";

  const kategoriAdlari = {
    burslar: "Burslar",
    dernekler: "Dernekler ve Destek",
    egitimler: "Ücretsiz Eğitimler",
    girisimcilik: "Girişimcilik ve Finansman",
    hukuki: "Hukuki Destek",
    saglik: "Sağlık",
    kariyer: "Kariyer ve İstihdam",
    barinma: "Barınma ve Sosyal Destek",
    ebeveynlik: "Çocuk Bakımı ve Ebeveynlik"
  };

  const aramaInput = document.querySelector("#arama");
  const filtreAlani = document.querySelector("#kategori-filtreleri");
  const gecmisCheckbox = document.querySelector("#suresi-gecenleri-goster");
  const basvuruFiltre = document.querySelector("#basvuru-durumu");
  const sehirFiltre = document.querySelector("#sehir-filtre");
  const kayitFiltre = document.querySelector("#kaydedilenler-filtre");
  const kayitSayisi = document.querySelector("#kayit-sayisi");
  const kayitBilgisi = document.querySelector("#kayit-bilgisi");
  const kayitAnahtari = "sheducate-kaydedilenler-v1";
  let kaydedilenler = kayitlariOku();
  const durumAdlari = {
    acik: "Başvurusu açık", kapali: "Başvurusu kapalı",
    surekli: "Sürekli erişim / destek", belirsiz: "Durum doğrulanmalı"
  };
  const liste = document.querySelector("#kaynak-listesi");
  const sonucSayisi = document.querySelector("#sonuc-sayisi");
  const sayfalama = document.querySelector("#sayfalama");
  const sayfaBilgisi = document.querySelector("#sayfa-bilgisi");
  const oncekiSayfaButon = document.querySelector("[data-page-prev]");
  const sonrakiSayfaButon = document.querySelector("[data-page-next]");
  const bosDurum = document.querySelector("#bos-durum");
  const siteGuncelleme = document.querySelector("#site-guncelleme");
  const menuToggle = document.querySelector(".menu-toggle");
  const anaMenu = document.querySelector("#ana-menu");
  const kategoriKartlari = document.querySelectorAll("[data-category-card]");
  const nasilModal = document.querySelector("#nasil-kullanilir-modal");
  const nasilGizleCheckbox = document.querySelector("#nasil-kullanilir-gizle");
  const nasilKapatButonlari = document.querySelectorAll("[data-how-close]");
  const nasilSlaytlar = document.querySelectorAll("[data-how-slide]");
  const nasilNoktalar = document.querySelectorAll("[data-how-dot]");
  const nasilGeriButon = document.querySelector("[data-how-prev]");
  const nasilIleriButon = document.querySelector("[data-how-next]");
  const hareketAzalt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nasilDepolamaAnahtari = "sheducate-nasil-kullanilir-gizle";
  const sayfaBoyutu = 9;
  let modalOncesiOdak = null;
  let aktifNasilSlayt = 0;

  const durum = {
    arama: "",
    kategori: "hepsi",
    gecmisleriGoster: false,
    basvuru: "hepsi",
    sehir: "hepsi",
    kaydedilenler: false,
    sayfa: 1
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

  function basvuruDurumu(kaynak) {
    if (tarihiGecmisMi(kaynak)) return "kapali";
    // Tarihli bir dönem, eski veriye bakılarak yeniden açık sayılmaz.
    return durumAdlari[kaynak.basvuruDurumu] ? kaynak.basvuruDurumu : "belirsiz";
  }

  function kayitlariOku() {
    try {
      const ids = JSON.parse(depodanOku(kayitAnahtari) || "[]");
      return new Set(Array.isArray(ids) ? ids.filter(id => KAYNAKLAR.some(k => k.id === id)) : []);
    } catch (_hata) { return new Set(); }
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
      const kategoriUygun = durum.kategori === "hepsi" || kaynak.kategori === durum.kategori || (kaynak.ekKategoriler || []).includes(durum.kategori);
      const aramaUygun = !aranan || aramaMetni(kaynak).includes(aranan);
      const basvuru = basvuruDurumu(kaynak);
      const sureUygun = durum.gecmisleriGoster || durum.basvuru === "kapali" || basvuru !== "kapali";
      const basvuruUygun = durum.basvuru === "hepsi" || basvuru === durum.basvuru;
      const sehirUygun = durum.sehir === "hepsi"
        || (durum.sehir === "ulke" ? kaynak.ulkeCapinda
          : durum.sehir === "online" ? kaynak.cevrimici
          : kaynak.ulkeCapinda || (kaynak.sehirler || []).includes(durum.sehir));
      const kayitUygun = !durum.kaydedilenler || kaydedilenler.has(kaynak.id);

      return kategoriUygun && aramaUygun && sureUygun && basvuruUygun && sehirUygun && kayitUygun;
    }));
  }

  function dogrulamaBilgisi(kaynak) {
    const bilgi = kaynak.dogrulama;
    if (!bilgi) return "";
    const kismi = bilgi.durum === "kismi";
    const kaynaklar = (bilgi.kaynaklar || []).map((url, indeks) =>
      `<li><a href="${guvenliMetin(guvenliUrl(url))}" target="_blank" rel="noopener noreferrer">Resmî kaynak ${indeks + 1}</a></li>`
    ).join("");
    return `<details class="verification-details${kismi ? " is-partial" : ""}">
      <summary>${kismi ? "Kaynak kontrolü: Kısmi teyit" : "Kaynak kontrolü ve kapsamı"}</summary>
      <p>${kismi ? "Kontrol denemesi" : "Kontrol tarihi"}: ${tarihYaz(bilgi.tarih)}</p>
      <p>${guvenliMetin(bilgi.not)}</p>
      <ul>${kaynaklar}</ul>
    </details>`;
  }

  function kartOlustur(kaynak) {
    const kart = document.createElement("article");
    const basvuru = basvuruDurumu(kaynak);
    const gecmis = basvuru === "kapali";
    const kayitli = kaydedilenler.has(kaynak.id);
    const eski = bilgiEskiMi(kaynak);
    kart.className = `resource-card ${kaynak.kategori}${gecmis ? " is-expired" : ""}`;

    const sonBasvuruSatiri = kaynak.sonBasvuru
      ? `<div><dt>Son başvuru:</dt><dd>${tarihYaz(kaynak.sonBasvuru)}</dd></div>`
      : "";

    kart.innerHTML = `
      <div class="card-arch" aria-hidden="true">
        <span class="dot dot-one"></span>
        <span class="dot dot-two"></span>
        <span class="dot dot-three"></span>
        <span class="dot dot-four"></span>
        <div class="gingham-panel">
          ${cicekSvg(kaynak.kategori)}
        </div>
      </div>
      <span class="badge ${kaynak.kategori}">${(kategoriAdlari[kaynak.kategori] || "Kaynak").toLocaleUpperCase("tr")}</span>
      <h3>${guvenliMetin(kaynak.ad)}</h3>
      <p class="application-status status-${basvuru}">${durumAdlari[basvuru]}</p>
      <p class="application-note">${guvenliMetin(kaynak.basvuruNotu)}</p>
      <p class="resource-description">${guvenliMetin(kaynak.aciklama)}</p>
      <dl class="meta-list">
        <div><dt>Kimler başvurabilir:</dt><dd>${guvenliMetin(kaynak.kimlerBasvurabilir)}</dd></div>
        <div><dt>Şehir:</dt><dd>${guvenliMetin(kaynak.sehir || "Tüm Türkiye")}</dd></div>
        ${sonBasvuruSatiri}
        <div><dt>${kaynak.kontrolKaynagi === "csv" ? "Dosyada bildirilen son kontrol:" : "Son kontrol:"}</dt><dd>${kaynak.sonKontrol ? tarihYaz(kaynak.sonKontrol) : kaynak.dogrulama?.durum === "kismi" ? "Teyit tamamlanmadı" : "Kontrol edilmeli"}</dd></div>
      </dl>

      ${eski ? `<p class="notice old">${kaynak.dogrulama?.durum === "kismi" ? "Güncel bilgiler kısmen doğrulanabildi. Kaynak kontrolü notunu inceleyin." : "Lütfen ayrıntıları resmî siteden doğrulayın"}</p>` : ""}
      ${dogrulamaBilgisi(kaynak)}
      <button type="button" class="save-resource" data-save="${kaynak.id}" aria-pressed="${kayitli}" aria-label="${guvenliMetin(kaynak.ad)}: ${kayitli ? "kaydı kaldır" : "kaydet"}">${kayitli ? "✓ Kaydedildi" : "☆ Kaydet"}</button>
      <a class="resource-link" href="${guvenliUrl(kaynak.link)}" target="_blank" rel="noopener noreferrer">Resmî Siteye Git</a>
    `;

    return kart;
  }

  function cicekSvg(kategori) {
    const ortak = 'class="flower-svg" viewBox="0 0 160 160" aria-hidden="true" focusable="false"';
    const redDaisy = (x, y, s = 1) => `<g class="mini-flower red" transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-13" rx="6" ry="14"/><ellipse cx="0" cy="13" rx="6" ry="14"/><ellipse cx="-13" cy="0" rx="14" ry="6"/><ellipse cx="13" cy="0" rx="14" ry="6"/><ellipse cx="-9" cy="-9" rx="5" ry="12" transform="rotate(-45 -9 -9)"/><ellipse cx="9" cy="-9" rx="5" ry="12" transform="rotate(45 9 -9)"/><ellipse cx="-9" cy="9" rx="5" ry="12" transform="rotate(45 -9 9)"/><ellipse cx="9" cy="9" rx="5" ry="12" transform="rotate(-45 9 9)"/><circle cx="0" cy="0" r="6"/></g>`;
    const whiteDaisy = (x, y, s = 1) => `<g class="mini-flower white" transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-14" rx="6" ry="15"/><ellipse cx="0" cy="14" rx="6" ry="15"/><ellipse cx="-14" cy="0" rx="15" ry="6"/><ellipse cx="14" cy="0" rx="15" ry="6"/><ellipse cx="-10" cy="-10" rx="5" ry="13" transform="rotate(-45 -10 -10)"/><ellipse cx="10" cy="-10" rx="5" ry="13" transform="rotate(45 10 -10)"/><ellipse cx="-10" cy="10" rx="5" ry="13" transform="rotate(45 -10 10)"/><ellipse cx="10" cy="10" rx="5" ry="13" transform="rotate(-45 10 10)"/><circle cx="0" cy="0" r="6"/></g>`;
    const leaf = (x, y, r = 0, cls = "blue-leaf") => `<ellipse class="${cls}" cx="${x}" cy="${y}" rx="10" ry="25" transform="rotate(${r} ${x} ${y})"/>`;

    const svgler = {
      burslar: `<svg ${ortak}><g class="sticker-stroke"><path d="M54 130C66 96 66 66 58 34M96 130C92 94 96 64 112 36"/>${leaf(45, 82, -42)}${leaf(72, 105, 42)}${leaf(96, 82, 42)}${leaf(116, 108, -42)}${redDaisy(54, 34, 0.86)}${redDaisy(112, 36, 0.86)}</g><g class="folk-flower">${leaf(45, 82, -42)}${leaf(72, 105, 42)}${leaf(96, 82, 42)}${leaf(116, 108, -42)}<path class="stem" d="M54 130C66 96 66 66 58 34M96 130C92 94 96 64 112 36"/>${redDaisy(54, 34, 0.86)}${redDaisy(112, 36, 0.86)}</g></svg>`,
      dernekler: `<img class="flower-image" src="assets/illustrations/dernekler-cropped.png" alt="" aria-hidden="true">`,
      egitimler: `<svg ${ortak}><g class="sticker-stroke"><path d="M80 132V74M58 130C60 98 56 74 48 50M104 130C106 100 108 76 118 52"/>${leaf(59, 92, -35, "green-leaf")}${leaf(103, 94, 35, "green-leaf")}<path d="M80 74C48 52 58 28 80 44c22-16 32 8 0 30Z"/><path d="M47 52C28 40 36 20 52 32c16-12 24 8-5 20Z"/><path d="M118 54C99 40 107 20 123 32c16-12 24 8-5 22Z"/></g><g class="folk-flower tulip">${leaf(59, 92, -35, "green-leaf")}${leaf(103, 94, 35, "green-leaf")}<path class="stem" d="M80 132V74M58 130C60 98 56 74 48 50M104 130C106 100 108 76 118 52"/><path class="tulip-head" d="M80 74C48 52 58 28 80 44c22-16 32 8 0 30Z"/><path class="tulip-head" d="M47 52C28 40 36 20 52 32c16-12 24 8-5 20Z"/><path class="tulip-head" d="M118 54C99 40 107 20 123 32c16-12 24 8-5 22Z"/></g></svg>`,
      girisimcilik: `<svg ${ortak}><g class="sticker-stroke"><path d="M80 134V94"/>${leaf(55, 112, -55, "green-leaf")}${leaf(105, 112, 55, "green-leaf")}<circle cx="80" cy="72" r="18"/><g>${redDaisy(80, 72, 1.28)}</g></g><g class="folk-flower sunflower">${leaf(55, 112, -55, "green-leaf")}${leaf(105, 112, 55, "green-leaf")}<path class="stem" d="M80 134V94"/>${redDaisy(80, 72, 1.28)}</g></svg>`,
      hukuki: `<img class="flower-image" src="assets/illustrations/hukuki-cropped.png" alt="" aria-hidden="true">`,
      saglik: `<svg ${ortak}><g class="sticker-stroke"><path d="M62 132C65 96 58 68 54 40M105 132C103 96 108 70 118 42"/>${leaf(53, 96, -35, "green-leaf")}${leaf(73, 116, 35, "green-leaf")}${leaf(107, 96, 35, "green-leaf")}${leaf(124, 116, -35, "green-leaf")}<path d="M54 38c24 8 32 26 16 42c-26-4-34-24-16-42Z"/><path d="M118 42c-24 8-32 26-16 42c26-4 34-24 16-42Z"/></g><g class="folk-flower poppy">${leaf(53, 96, -35, "green-leaf")}${leaf(73, 116, 35, "green-leaf")}${leaf(107, 96, 35, "green-leaf")}${leaf(124, 116, -35, "green-leaf")}<path class="stem" d="M62 132C65 96 58 68 54 40M105 132C103 96 108 70 118 42"/><path class="poppy-head" d="M54 38c24 8 32 26 16 42c-26-4-34-24-16-42Z"/><path class="poppy-head" d="M118 42c-24 8-32 26-16 42c26-4 34-24 16-42Z"/></g></svg>`
    };

    const yeniKategoriGorselleri = { kariyer: svgler.girisimcilik, barinma: svgler.egitimler, ebeveynlik: svgler.burslar };
    return svgler[kategori] || yeniKategoriGorselleri[kategori] || svgler.burslar;
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

  function depodanOku(anahtar) {
    try {
      return window.localStorage.getItem(anahtar);
    } catch (_hata) {
      return null;
    }
  }

  function depoyaYaz(anahtar, deger) {
    try {
      window.localStorage.setItem(anahtar, deger);
    } catch (_hata) {
      // Gizli mod gibi durumlarda tercih kaydedilemeyebilir; modal yine çalışır.
    }
  }

  function nasilSlaytGoster(indeks) {
    if (!nasilSlaytlar.length) return;
    aktifNasilSlayt = Math.max(0, Math.min(indeks, nasilSlaytlar.length - 1));

    nasilSlaytlar.forEach((slayt, slaytIndeks) => {
      slayt.classList.toggle("is-active", slaytIndeks === aktifNasilSlayt);
    });

    nasilNoktalar.forEach((nokta, noktaIndeks) => {
      const aktif = noktaIndeks === aktifNasilSlayt;
      nokta.classList.toggle("is-active", aktif);
      nokta.setAttribute("aria-current", aktif ? "step" : "false");
    });

    if (nasilGeriButon) {
      nasilGeriButon.disabled = aktifNasilSlayt === 0;
    }

    if (nasilIleriButon) {
      const sonSlayt = aktifNasilSlayt === nasilSlaytlar.length - 1;
      nasilIleriButon.textContent = sonSlayt ? "Keşfetmeye başla" : "İleri";
    }
  }

  function nasilModalAc() {
    if (!nasilModal || depodanOku(nasilDepolamaAnahtari) === "evet") return;
    modalOncesiOdak = document.activeElement;
    nasilSlaytGoster(0);
    nasilModal.hidden = false;
    document.body.classList.add("modal-open");
    const ilkOdak = nasilModal.querySelector("button, input, a");
    if (ilkOdak) ilkOdak.focus({ preventScroll: true });
  }

  function nasilModalKapat() {
    if (!nasilModal || nasilModal.hidden) return;
    if (nasilGizleCheckbox && nasilGizleCheckbox.checked) {
      depoyaYaz(nasilDepolamaAnahtari, "evet");
    }
    nasilModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (modalOncesiOdak && typeof modalOncesiOdak.focus === "function") {
      modalOncesiOdak.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  function render() {
    kayitSayisi.textContent = kaydedilenler.size;
    const kaynaklar = kaynaklariFiltrele();
    const toplamSayfa = Math.max(1, Math.ceil(kaynaklar.length / sayfaBoyutu));
    durum.sayfa = Math.min(durum.sayfa, toplamSayfa);
    const baslangic = (durum.sayfa - 1) * sayfaBoyutu;
    const gorunenKaynaklar = kaynaklar.slice(baslangic, baslangic + sayfaBoyutu);

    liste.replaceChildren(...gorunenKaynaklar.map(kartOlustur));

    sonucSayisi.textContent = kaynaklar.length > sayfaBoyutu
      ? `${kaynaklar.length} kaynak bulundu; ${baslangic + 1}-${baslangic + gorunenKaynaklar.length} arası gösteriliyor`
      : `${kaynaklar.length} kaynak bulundu`;
    bosDurum.hidden = kaynaklar.length > 0;

    if (sayfalama && sayfaBilgisi && oncekiSayfaButon && sonrakiSayfaButon) {
      const sayfalamaGerekli = kaynaklar.length > sayfaBoyutu;
      sayfalama.hidden = !sayfalamaGerekli;
      sayfaBilgisi.textContent = `${durum.sayfa} / ${toplamSayfa}`;
      oncekiSayfaButon.disabled = durum.sayfa === 1;
      sonrakiSayfaButon.disabled = durum.sayfa === toplamSayfa;
    }
  }

  function kaynakBasinaKaydir() {
    document.querySelector("#kaynak-arama").scrollIntoView({
      behavior: hareketAzalt ? "auto" : "smooth",
      block: "start"
    });
  }

  function sayfaDegistir(yeniSayfa) {
    durum.sayfa = yeniSayfa;
    render();
    kaynakBasinaKaydir();
  }

  function kategoriSec(kategori) {
    durum.kategori = kategori;
    durum.sayfa = 1;
    filtreAlani.querySelectorAll(".filter-button").forEach((buton) => {
      const aktif = buton.dataset.category === kategori;
      buton.classList.toggle("is-active", aktif);
      buton.setAttribute("aria-pressed", String(aktif));
    });
    render();
  }

  const sehirler = [...new Set(KAYNAKLAR.flatMap(k => k.sehirler || []))].sort((a, b) => a.localeCompare(b, "tr"));
  sehirler.forEach(sehir => {
    const option = document.createElement("option");
    option.value = sehir;
    option.textContent = sehir;
    sehirFiltre.append(option);
  });

  [[basvuruFiltre, "basvuru"], [sehirFiltre, "sehir"]].forEach(([select, key]) => {
    select.addEventListener("change", () => {
      durum[key] = select.value;
      if (key === "basvuru" && select.value === "kapali") {
        durum.gecmisleriGoster = true;
        gecmisCheckbox.checked = true;
      }
      durum.sayfa = 1;
      render();
    });
  });
  kayitFiltre.addEventListener("change", () => {
    durum.kaydedilenler = kayitFiltre.checked;
    durum.sayfa = 1;
    render();
  });
  liste.addEventListener("click", event => {
    const button = event.target.closest("[data-save]");
    if (!button) return;
    const id = Number(button.dataset.save);
    const kayitliydi = kaydedilenler.has(id);
    if (kayitliydi) kaydedilenler.delete(id); else kaydedilenler.add(id);
    try {
      window.localStorage.setItem(kayitAnahtari, JSON.stringify([...kaydedilenler]));
      kayitBilgisi.textContent = kayitliydi ? "Kaynak kaydedilenlerden kaldırıldı." : "Kaynak bu tarayıcıya kaydedildi.";
    } catch (_hata) {
      kayitBilgisi.textContent = "Tarayıcıda saklama kullanılamıyor; kaydettiklerin yalnızca bu sayfa açıkken korunur.";
    }
    const index = [...liste.querySelectorAll("[data-save]")].indexOf(button);
    render();
    const buttons = liste.querySelectorAll("[data-save]");
    const focus = liste.querySelector(`[data-save="${id}"]`) || buttons[Math.min(index, buttons.length - 1)] || kayitFiltre;
    focus.focus();
  });
  window.addEventListener("storage", event => {
    if (event.key === kayitAnahtari || event.key === null) {
      kaydedilenler = kayitlariOku();
      render();
    }
  });
  document.querySelector("#filtreleri-sifirla").addEventListener("click", () => {
    Object.assign(durum, { arama: "", basvuru: "hepsi", sehir: "hepsi", kaydedilenler: false, gecmisleriGoster: false });
    aramaInput.value = "";
    basvuruFiltre.value = sehirFiltre.value = "hepsi";
    kayitFiltre.checked = gecmisCheckbox.checked = false;
    kategoriSec("hepsi");
    aramaInput.focus();
  });

  aramaInput.addEventListener("input", (event) => {
    durum.arama = event.target.value;
    durum.sayfa = 1;
    render();
  });

  filtreAlani.addEventListener("click", (event) => {
    const buton = event.target.closest(".filter-button");
    if (!buton) return;
    kategoriSec(buton.dataset.category);
  });

  kategoriKartlari.forEach((kart) => {
    kart.addEventListener("click", () => {
      kategoriSec(kart.dataset.categoryCard);
      kaynakBasinaKaydir();
    });
  });

  gecmisCheckbox.addEventListener("change", (event) => {
    durum.gecmisleriGoster = event.target.checked;
    if (!durum.gecmisleriGoster && durum.basvuru === "kapali") {
      durum.basvuru = "hepsi";
      basvuruFiltre.value = "hepsi";
    }
    durum.sayfa = 1;
    render();
  });

  if (oncekiSayfaButon && sonrakiSayfaButon) {
    oncekiSayfaButon.addEventListener("click", () => {
      if (durum.sayfa > 1) sayfaDegistir(durum.sayfa - 1);
    });

    sonrakiSayfaButon.addEventListener("click", () => {
      sayfaDegistir(durum.sayfa + 1);
    });
  }

  if (menuToggle && anaMenu) {
    menuToggle.addEventListener("click", () => {
      const acik = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!acik));
      anaMenu.classList.toggle("is-open", !acik);
    });

    anaMenu.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      menuToggle.setAttribute("aria-expanded", "false");
      anaMenu.classList.remove("is-open");
    });
  }

  nasilKapatButonlari.forEach((buton) => {
    buton.addEventListener("click", nasilModalKapat);
  });

  if (nasilGeriButon) {
    nasilGeriButon.addEventListener("click", () => {
      nasilSlaytGoster(aktifNasilSlayt - 1);
    });
  }

  if (nasilIleriButon) {
    nasilIleriButon.addEventListener("click", () => {
      if (aktifNasilSlayt === nasilSlaytlar.length - 1) {
        nasilModalKapat();
        return;
      }
      nasilSlaytGoster(aktifNasilSlayt + 1);
    });
  }

  nasilNoktalar.forEach((nokta) => {
    nokta.addEventListener("click", () => {
      nasilSlaytGoster(Number(nokta.dataset.howDot));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nasilModalKapat();
    } else if (nasilModal && !nasilModal.hidden && event.key === "ArrowRight") {
      nasilSlaytGoster(aktifNasilSlayt + 1);
    } else if (nasilModal && !nasilModal.hidden && event.key === "ArrowLeft") {
      nasilSlaytGoster(aktifNasilSlayt - 1);
    }
  });

  document.querySelectorAll('.info-dialog').forEach((dialog) => {
    let acanBaglanti = null;
    document.querySelectorAll(`a[aria-controls="${dialog.id}"]`).forEach((baglanti) => {
      baglanti.addEventListener('click', (event) => {
        event.preventDefault();
        acanBaglanti = baglanti;
        dialog.showModal();
        dialog.scrollTop = 0;
        document.body.classList.add('info-modal-open');
      });
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('info-modal-open');
      if (acanBaglanti) acanBaglanti.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right ||
            event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
      }
      // Sayfa içindeki forma yönelirken pencereyi kapat.
      if (event.target.closest('a[href="#kaynak-oner"]')) dialog.close();
    });
  });

  siteGuncelleme.textContent = `Son güncelleme: ${tarihYaz(SITE_GUNCELLEME_TARIHI)}`;
  render();
  nasilModalAc();
})();
