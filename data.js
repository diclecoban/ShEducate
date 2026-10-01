/*
  KADINLAR ICIN KAYNAK REHBERI - VERI DOSYASI

  Yeni kaynak ekleme adimlari:
  1. Asagidaki KAYNAKLAR listesinin sonuna yeni bir nesne ekleyin.
  2. id alanini benzersiz bir sayi yapin.
  3. kategori alanini su degerlerden biriyle doldurun:
     burslar, dernekler, egitimler, girisimcilik, hukuki, saglik
  4. sonBasvuru yoksa null yazin; varsa "YYYY-MM-DD" biciminde yazin.
  5. sonKontrol alanini bilgiyi resmi kaynaktan kontrol ettiginiz gun olarak
     "YYYY-MM-DD" biciminde guncelleyin.
  6. Gercek bir kurum, burs veya program eklemeden once mutlaka resmi
     sayfasindan dogrulayin.

  Alanlarin anlami:
  - id: Kaynagin benzersiz numarasi.
  - ad: Kartta gorunecek kaynak adi.
  - kategori: Filtreleme ve rozet rengi icin kategori kodu.
  - aciklama: Kaynagin kisa, anlasilir ozeti.
  - kimlerBasvurabilir: Hedef kitle veya basvuru kosullari.
  - sehir: Il, bolge veya "Tum Turkiye".
  - sonBasvuru: Son basvuru tarihi; yoksa null.
  - link: Resmi sayfa baglantisi.
  - sonKontrol: Bilginin en son kontrol edildigi tarih.
  - etiketler: Aramada kullanilacak ek anahtar kelimeler.

  Not: Bu ilk surumde gercek kurum bilgisi uydurmamak icin her kategoriden
  birer adet acikca ORNEK olarak isaretlenmis yer tutucu kayit vardir.
*/

const SITE_GUNCELLEME_TARIHI = "2026-10-02";

const KAYNAKLAR = [
  {
    id: 1,
    ad: "[ORNEK] Burs Programi Adi",
    kategori: "burslar",
    aciklama: "Bu kayit, burs kategorisinin nasil gorunecegini gostermek icin eklenmis ornek bir yer tutucudur.",
    kimlerBasvurabilir: "Ornek kosullari saglayan ogrenciler.",
    sehir: "Tum Turkiye",
    sonBasvuru: "2026-12-31",
    link: "https://ornek.com",
    sonKontrol: "2026-10-02",
    etiketler: ["burs", "ogrenci", "universite", "ornek"]
  },
  {
    id: 2,
    ad: "[ORNEK] Kadin Dernegi veya Destek Kurulusu",
    kategori: "dernekler",
    aciklama: "Bu kayit, dernekler ve destek kuruluslari kategorisi icin ornek olarak hazirlanmistir.",
    kimlerBasvurabilir: "Destek arayan kadinlar ve ilgili yakinlari.",
    sehir: "Tum Turkiye",
    sonBasvuru: null,
    link: "https://ornek.com",
    sonKontrol: "2026-10-02",
    etiketler: ["dernek", "destek", "dayanisma", "ornek"]
  },
  {
    id: 3,
    ad: "[ORNEK] Ucretsiz Egitim Programi",
    kategori: "egitimler",
    aciklama: "Bu kayit, ucretsiz egitim firsatlarinin kartta nasil listelenecegini gosteren ornek bir iceriktir.",
    kimlerBasvurabilir: "Kendini gelistirmek isteyen kadinlar.",
    sehir: "Tum Turkiye",
    sonBasvuru: "2026-11-15",
    link: "https://ornek.com",
    sonKontrol: "2026-10-02",
    etiketler: ["egitim", "kurs", "sertifika", "ornek"]
  },
  {
    id: 4,
    ad: "[ORNEK] Girisimcilik ve Finansman Destegi",
    kategori: "girisimcilik",
    aciklama: "Bu kayit, girisimcilik ve finansman desteklerinin nasil sunulacagini gosteren ornek bir kayittir.",
    kimlerBasvurabilir: "Is fikri olan veya isini buyutmek isteyen kadinlar.",
    sehir: "Tum Turkiye",
    sonBasvuru: null,
    link: "https://ornek.com",
    sonKontrol: "2026-10-02",
    etiketler: ["girisimcilik", "finansman", "hibe", "ornek"]
  },
  {
    id: 5,
    ad: "[ORNEK] Hukuki Destek Kaynagi",
    kategori: "hukuki",
    aciklama: "Bu kayit, hukuki destek kaynaklari icin ornek kart yapisini gostermek amaciyla eklenmistir.",
    kimlerBasvurabilir: "Hukuki bilgi veya yonlendirme arayan kadinlar.",
    sehir: "Tum Turkiye",
    sonBasvuru: null,
    link: "https://ornek.com",
    sonKontrol: "2026-10-02",
    etiketler: ["hukuk", "danisma", "haklar", "ornek"]
  },
  {
    id: 6,
    ad: "[ORNEK] Saglik Kaynagi",
    kategori: "saglik",
    aciklama: "Bu kayit, saglik kaynaklarinin nasil listelenecegini gosteren ornek bir yer tutucudur.",
    kimlerBasvurabilir: "Saglik bilgisi veya yonlendirme arayan kadinlar.",
    sehir: "Tum Turkiye",
    sonBasvuru: "2026-01-15",
    link: "https://ornek.com",
    sonKontrol: "2026-01-01",
    etiketler: ["saglik", "danisma", "destek", "ornek"]
  }
];
