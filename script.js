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
  let modalOncesiOdak = null;
  let aktifNasilSlayt = 0;

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
      <p class="resource-description">${guvenliMetin(kaynak.aciklama)}</p>
      <dl class="meta-list">
        <div><dt>Kimler başvurabilir:</dt><dd>${guvenliMetin(kaynak.kimlerBasvurabilir)}</dd></div>
        <div><dt>Şehir:</dt><dd>${guvenliMetin(kaynak.sehir || "Tüm Türkiye")}</dd></div>
        ${sonBasvuruSatiri}
        <div><dt>Son kontrol:</dt><dd>${kaynak.sonKontrol ? tarihYaz(kaynak.sonKontrol) : "Kontrol edilmeli"}</dd></div>
      </dl>
      ${gecmis ? '<p class="notice expired">Başvuru süresi doldu</p>' : ""}
      ${eski ? '<p class="notice old">Lütfen ayrıntıları resmî siteden doğrulayın</p>' : ""}
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

    return svgler[kategori] || svgler.burslar;
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
      nasilIleriButon.textContent = sonSlayt ? "Listeye git" : "İleri";
    }
  }

  function nasilModalAc() {
    if (!nasilModal || depodanOku(nasilDepolamaAnahtari) === "evet") return;
    modalOncesiOdak = document.activeElement;
    nasilSlaytGoster(0);
    nasilModal.hidden = false;
    document.body.classList.add("modal-open");
    const ilkOdak = nasilModal.querySelector("button, input, a");
    if (ilkOdak) ilkOdak.focus();
  }

  function nasilModalKapat() {
    if (!nasilModal || nasilModal.hidden) return;
    if (nasilGizleCheckbox && nasilGizleCheckbox.checked) {
      depoyaYaz(nasilDepolamaAnahtari, "evet");
    }
    nasilModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (modalOncesiOdak && typeof modalOncesiOdak.focus === "function") {
      modalOncesiOdak.focus();
    }
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

  kategoriKartlari.forEach((kart) => {
    kart.addEventListener("click", () => {
      kategoriSec(kart.dataset.categoryCard);
      document.querySelector("#kaynak-arama").scrollIntoView({
        behavior: hareketAzalt ? "auto" : "smooth",
        block: "start"
      });
    });
  });

  gecmisCheckbox.addEventListener("change", (event) => {
    durum.gecmisleriGoster = event.target.checked;
    render();
  });

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

  siteGuncelleme.textContent = `Son güncelleme: ${tarihYaz(SITE_GUNCELLEME_TARIHI)}`;
  render();
  nasilModalAc();
})();
