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
  const turFiltre = document.querySelector("#kaynak-turu");
  const turAdlari = { program: "Program / fırsat", kurum: "Kurum / ağ", hizmet: "Hizmet / danışmanlık", bilgi: "Bilgi / öğrenme kaynağı" };
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
  const nasilKapatButonlari = document.querySelectorAll("[data-how-close]");
  const nasilSlaytlar = document.querySelectorAll("[data-how-slide]");
  const nasilNoktalar = document.querySelectorAll("[data-how-dot]");
  const nasilGeriButon = document.querySelector("[data-how-prev]");
  const nasilIleriButon = document.querySelector("[data-how-next]");
  const hareketAzalt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobilKaynakEkrani = window.matchMedia("(max-width: 679px)");
  let sayfaBoyutu = mobilKaynakEkrani.matches ? 4 : 9;
  let modalOncesiOdak = null;
  let aktifNasilSlayt = 0;

  const durum = {
    arama: "",
    kategori: "hepsi",
    tur: "hepsi",
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

      return (durum.tur === "hepsi" || kaynak.kaynakTuru === durum.tur) && kategoriUygun && aramaUygun && sureUygun && basvuruUygun && sehirUygun && kayitUygun;
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
    kart.dataset.resourceId = kaynak.id;
    kart.className = `resource-card ${kaynak.kategori}${gecmis ? " is-expired" : ""}`;

    const sonBasvuruSatiri = kaynak.sonBasvuru
      ? `<div><dt>Son başvuru:</dt><dd>${tarihYaz(kaynak.sonBasvuru)}</dd></div>`
      : "";

    kart.innerHTML = `
      <div class="card-arch" aria-hidden="true">
        <span class="dot dot-one"></span>
        <span class="dot dot-three"></span>
        <span class="dot dot-four"></span>
        <div class="gingham-panel"></div>
      </div>
      <span class="badge ${kaynak.kategori}">${(kategoriAdlari[kaynak.kategori] || "Kaynak").toLocaleUpperCase("tr")}</span>
      <p class="resource-kind">${turAdlari[kaynak.kaynakTuru] || "Kaynak"}</p>
      <h3>${guvenliMetin(kaynak.ad)}</h3>
      <p class="application-status status-${basvuru}">${durumAdlari[basvuru]}</p>
      ${kaynak.kaynakTuru === "kurum" ? '<p class="application-note">Kurumun genel sayfasıdır; açık bir başvuru ilanı değildir.</p>' : ""}
      <p class="application-note">${guvenliMetin(kaynak.basvuruNotu)}</p>
      <p class="resource-description">${guvenliMetin(kaynak.aciklama)}</p>
      <dl class="meta-list">
        <div><dt>${kaynak.kaynakTuru === "program" ? "Kimler başvurabilir" : kaynak.kaynakTuru === "hizmet" ? "Kimler yararlanabilir" : "Kimlere yönelik"}:</dt><dd>${guvenliMetin(kaynak.kimlerBasvurabilir)}</dd></div>
        <div><dt>Şehir:</dt><dd>${guvenliMetin(kaynak.sehir || "Tüm Türkiye")}</dd></div>
        ${sonBasvuruSatiri}
        <div><dt>${kaynak.kontrolKaynagi === "csv" ? "Dosyada bildirilen son kontrol:" : "Son kontrol:"}</dt><dd>${kaynak.sonKontrol ? tarihYaz(kaynak.sonKontrol) : kaynak.dogrulama?.durum === "kismi" ? "Teyit tamamlanmadı" : "Kontrol edilmeli"}</dd></div>
      </dl>

      ${eski ? `<p class="notice old">${kaynak.dogrulama?.durum === "kismi" ? "Güncel bilgiler kısmen doğrulanabildi. Kaynak kontrolü notunu inceleyin." : "Lütfen ayrıntıları resmî siteden doğrulayın"}</p>` : ""}
      ${dogrulamaBilgisi(kaynak)}
      <p class="compact-deadline">${kaynak.sonBasvuru ? `Son gün: ${tarihYaz(kaynak.sonBasvuru)}` : "Son tarih belirtilmemiş"}</p>
      <button type="button" class="mobile-resource-details" data-details="${kaynak.id}" aria-haspopup="dialog" aria-controls="kaynak-detay" aria-label="${guvenliMetin(kaynak.ad)}: ayrıntıları aç"><span>Ayrıntılar ↗</span></button>
      <button type="button" class="save-resource" data-save="${kaynak.id}" aria-pressed="${kayitli}" aria-label="${guvenliMetin(kaynak.ad)}: ${kayitli ? "kaydı kaldır" : "kaydet"}">${kayitli ? "✓ Kaydedildi" : "☆ Kaydet"}</button>
      <a class="resource-link" href="${guvenliUrl(kaynak.link)}" target="_blank" rel="noopener noreferrer">Resmî Siteye Git</a>
    `;

    return kart;
  }

  const kaynakDialog = document.querySelector("#kaynak-detay");
  const kaynakDialogIcerik = document.querySelector("#kaynak-detay-icerik");
  let detayKaynakId = null;
  liste.addEventListener("click", event => {
    const button = event.target.closest("[data-details]");
    if (!button) return;
    detayKaynakId = Number(button.dataset.details);
    const kaynak = KAYNAKLAR.find(k => k.id === detayKaynakId);
    const card = kartOlustur(kaynak);
    card.classList.add("is-detail");
    card.querySelector("h3").id = "kaynak-detay-baslik";
    card.querySelector(".mobile-resource-details").remove();
    kaynakDialogIcerik.replaceChildren(card);
    kaynakDialog.showModal();
    kaynakDialog.scrollTop = 0;
    document.body.classList.add("info-modal-open");
  });
  kaynakDialog.addEventListener("close", () => {
    const button = liste.querySelector(`[data-details="${detayKaynakId}"]`)
      || document.querySelector('[data-quick="saved"]');
    button?.focus({ preventScroll: true });
  });

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
    if (!nasilModal || nasilModal.open) return;
    modalOncesiOdak = document.activeElement;
    nasilSlaytGoster(0);
    nasilModal.showModal();
    document.body.classList.add("modal-open");
    nasilModal.querySelector("[data-how-close]").focus({ preventScroll: true });
  }

  function nasilModalKapat() {
    if (nasilModal?.open) nasilModal.close();
  }

  nasilModal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    modalOncesiOdak?.focus({ preventScroll: true });
  });
  document.querySelectorAll("[data-how-open]").forEach(button => {
    button.addEventListener("click", nasilModalAc);
  });
  nasilModal.addEventListener("click", event => {
    if (event.target === nasilModal) nasilModalKapat();
  });

  function filtreGorunumunuGuncelle() {
    document.querySelector('[data-quick="open"]').setAttribute("aria-pressed", String(durum.basvuru === "acik"));
    document.querySelector('[data-quick="saved"]').setAttribute("aria-pressed", String(durum.kaydedilenler));
    document.querySelector("#hizli-kayit-sayisi").textContent = kaydedilenler.size;
    const etiketler = document.querySelector("#filtre-etiketleri");
    etiketler.replaceChildren();
    function etiketEkle(metin, kaldir) {
      const buton = document.createElement("button");
      buton.type = "button";
      buton.className = "filter-chip";
      buton.textContent = `${metin} ×`;
      buton.setAttribute("aria-label", `${metin} filtresini kaldır`);
      buton.addEventListener("click", () => {
        kaldir();
        const hedef = document.querySelector("#aktif-filtreler").hidden ? aramaInput : document.querySelector("#secimleri-temizle");
        hedef.focus({ preventScroll: true });
      });
      etiketler.append(buton);
    }
    if (durum.kategori !== "hepsi") etiketEkle(kategoriAdlari[durum.kategori], () => kategoriSec("hepsi"));
    if (durum.arama.trim()) etiketEkle(`Arama: ${durum.arama.trim()}`, () => {
      aramaInput.value = "";
      aramaInput.dispatchEvent(new Event("input", { bubbles: true }));
    });
    [turFiltre, basvuruFiltre, sehirFiltre].forEach(select => {
      if (select.value !== "hepsi") etiketEkle(select.selectedOptions[0].textContent, () => {
        select.value = "hepsi";
        select.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
    if (durum.kaydedilenler) etiketEkle("Kaydettiklerim", () => kayitFiltre.click());
    if (durum.gecmisleriGoster) etiketEkle("Kapalı başvurular dahil", () => gecmisCheckbox.click());
    document.querySelector("#aktif-filtreler").hidden = etiketler.childElementCount === 0;
  }

  function render() {
    filtreGorunumunuGuncelle();
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

  mobilKaynakEkrani.addEventListener("change", () => {
    // Ekran değiştiğinde ilk görünen kaynağı içeren sayfada kal.
    const ilkKaynak = (durum.sayfa - 1) * sayfaBoyutu;
    sayfaBoyutu = mobilKaynakEkrani.matches ? 4 : 9;
    durum.sayfa = Math.floor(ilkKaynak / sayfaBoyutu) + 1;
    render();
  });

  function kaynakBasinaKaydir() {
    document.querySelector("#kaynak-arama").scrollIntoView({
      behavior: hareketAzalt ? "auto" : "smooth",
      block: "start"
    });
  }

  function sayfaDegistir(yeniSayfa) {
    durum.sayfa = yeniSayfa;
    render();
    if (mobilKaynakEkrani.matches) {
      sonucSayisi.focus({ preventScroll: true });
      sonucSayisi.scrollIntoView({ behavior: hareketAzalt ? "auto" : "smooth", block: "start" });
    } else {
      kaynakBasinaKaydir();
    }
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

  [[basvuruFiltre, "basvuru"], [sehirFiltre, "sehir"], [turFiltre, "tur"]].forEach(([select, key]) => {
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
  document.querySelectorAll("[data-quick]").forEach(buton => {
    buton.addEventListener("click", () => {
      if (buton.dataset.quick === "open") {
        basvuruFiltre.value = durum.basvuru === "acik" ? "hepsi" : "acik";
        basvuruFiltre.dispatchEvent(new Event("change", { bubbles: true }));
      } else {
        kayitFiltre.click();
      }
    });
  });
  document.querySelector("#secimleri-temizle").addEventListener("click", () => {
    document.querySelector("#filtreleri-sifirla").click();
  });
  kayitFiltre.addEventListener("change", () => {
    durum.kaydedilenler = kayitFiltre.checked;
    durum.sayfa = 1;
    render();
  });
  function kaynakKaydet(event) {
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
    if (kaynakDialog.contains(button)) {
      render();
      button.textContent = kaydedilenler.has(id) ? "✓ Kaydedildi" : "☆ Kaydet";
      button.setAttribute("aria-pressed", String(kaydedilenler.has(id)));
      button.setAttribute("aria-label", `${KAYNAKLAR.find(k => k.id === id).ad}: ${kaydedilenler.has(id) ? "kaydı kaldır" : "kaydet"}`);
      return;
    }
    const index = [...liste.querySelectorAll("[data-save]")].indexOf(button);
    render();
    const buttons = liste.querySelectorAll("[data-save]");
    const focus = liste.querySelector(`[data-save="${id}"]`) || buttons[Math.min(index, buttons.length - 1)] || document.querySelector('[data-quick="saved"]');
    focus.focus();
  }
  liste.addEventListener("click", kaynakKaydet);
  kaynakDialog.addEventListener("click", kaynakKaydet);
  window.addEventListener("storage", event => {
    if (event.key === kayitAnahtari || event.key === null) {
      kaydedilenler = kayitlariOku();
      render();
    }
  });
  document.querySelector("#filtreleri-sifirla").addEventListener("click", () => {
    Object.assign(durum, { arama: "", tur: "hepsi", basvuru: "hepsi", sehir: "hepsi", kaydedilenler: false, gecmisleriGoster: false });
    aramaInput.value = "";
    basvuruFiltre.value = sehirFiltre.value = turFiltre.value = "hepsi";
    kayitFiltre.checked = gecmisCheckbox.checked = false;
    kategoriSec("hepsi");
    aramaInput.focus();
  });

  aramaInput.addEventListener("input", (event) => {
    durum.arama = event.target.value;
    durum.sayfa = 1;
    render();
  });

  document.querySelector("#arama-formu").addEventListener("submit", (event) => {
    event.preventDefault();
    durum.arama = aramaInput.value;
    durum.sayfa = 1;
    render();
    // Sonuç başlığına odak taşımak mobil klavyeyi de kapatır.
    sonucSayisi.focus({ preventScroll: true });
    sonucSayisi.scrollIntoView({
      behavior: hareketAzalt ? "auto" : "smooth",
      block: "start"
    });
  });

  filtreAlani.addEventListener("click", (event) => {
    const buton = event.target.closest(".filter-button");
    if (!buton) return;
    kategoriSec(buton.dataset.category);
  });

  document.querySelectorAll("[data-start-category]").forEach((buton) => {
    buton.addEventListener("click", () => {
      Object.assign(durum, { arama: "", tur: "hepsi", basvuru: "hepsi", sehir: "hepsi", kaydedilenler: false, gecmisleriGoster: false });
      aramaInput.value = "";
      turFiltre.value = basvuruFiltre.value = sehirFiltre.value = "hepsi";
      kayitFiltre.checked = gecmisCheckbox.checked = false;
      kategoriSec(buton.dataset.startCategory);
      kaynakBasinaKaydir();
      aramaInput.focus({ preventScroll: true });
    });
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
    if (event.key === "Tab" && nasilModal?.open) {
      const controls = [...nasilModal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex="0"]')]
        .filter(element => element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || !nasilModal.contains(document.activeElement))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !nasilModal.contains(document.activeElement))) {
        event.preventDefault();
        first?.focus();
      }
    }
    if (event.key === "Escape") {
      nasilModalKapat();
    } else if (nasilModal && nasilModal.open && event.key === "ArrowRight") {
      nasilSlaytGoster(aktifNasilSlayt + 1);
    } else if (nasilModal && nasilModal.open && event.key === "ArrowLeft") {
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
})();
