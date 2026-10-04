/*
  KADINLAR ICIN KAYNAK REHBERI - VERI DOSYASI

  Bu dosya ShEducate_kaynak_listesi.xlsx dosyasindan uretilmistir.
  Elle Kontrol Tarihi bos olan kayitlarda sonKontrol null birakilir;
  arayuz bu kayitlari "Kontrol edilmeli" ve 90 gun uyarisi ile gosterir.
*/

const SITE_GUNCELLEME_TARIHI = "2026-10-05";

const KAYNAKLAR = [
  {
    "id": 1,
    "ad": "KIZÇEV Bursu",
    "kategori": "burslar",
    "aciklama": "Kız Çocukları Eğitim Derneği. Aylık 4.000 TL karşılıksız burs (2026'da 400 öğrenci). Başvuru durumu: 2026-27 başvurusu 1–7 Eylül'de alındı; sonraki dönemi takip edin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Devlet / %100 burslu vakıf üniversitelerinde lisans okuyan kadın öğrenciler",
    "sehir": "Türkiye (İstanbul, Ankara, İzmir öncelikli)",
    "sonBasvuru": null,
    "link": "https://kizcev.com",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "KIZÇEV Bursu",
      "Kız Çocukları Eğitim Derneği",
      "2026-27 başvurusu 1–7 Eylül'de alındı; sonraki dönemi takip edin"
    ]
  },
  {
    "id": 2,
    "ad": "Meliha Ercan Vakfı Kız Öğrenci Bursu",
    "kategori": "burslar",
    "aciklama": "Meliha Ercan Vakfı. Karşılıksız burs, mecburi hizmet yok. Başvuru durumu: 2026-27: 1–30 Eylül (kapandı); her yıl Eylül'de açılıyor. Doğrulama notu: Aramada teyit edildi (Eki 2026) (link kontrol edilmeli)",
    "kimlerBasvurabilir": "Devlet veya %100 burslu vakıf üniversitelerinde lisans okuyan, maddi desteğe ihtiyaç duyan kız öğrenciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.melihaercanvakfi.org",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Meliha Ercan Vakfı Kız Öğrenci Bursu",
      "Meliha Ercan Vakfı",
      "2026-27: 1–30 Eylül (kapandı); her yıl Eylül'de açılıyor"
    ]
  },
  {
    "id": 3,
    "ad": "Türkan Yamantürk Kız Öğrenci Burs Fonu",
    "kategori": "burslar",
    "aciklama": "Yamantürk Vakfı. Karşılıksız burs. Başvuru durumu: 2026-27: 1–15 Ağustos (kapandı). Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kız öğrenciler (fon koşullarına göre)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.yamanturkvakfi.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Türkan Yamantürk Kız Öğrenci Burs Fonu",
      "Yamantürk Vakfı",
      "2026-27: 1–15 Ağustos (kapandı)"
    ]
  },
  {
    "id": 4,
    "ad": "Aydın Doğan Vakfı BBOG Eğitim Bursu",
    "kategori": "burslar",
    "aciklama": "Aydın Doğan Vakfı. Eğitim bursu. Başvuru durumu: Şu an başvuruya kapalı; yeni dönemi takip edin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "'Baba Beni Okula Gönder' pansiyonlarında kalmış, 23 yaşından küçük, devlet üniversitesi lisans kız öğrencileri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.aydindoganvakfi.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Aydın Doğan Vakfı BBOG Eğitim Bursu",
      "Aydın Doğan Vakfı",
      "Şu an başvuruya kapalı; yeni dönemi takip edin"
    ]
  },
  {
    "id": 5,
    "ad": "ÇYDD Burs Programı",
    "kategori": "burslar",
    "aciklama": "Çağdaş Yaşamı Destekleme Derneği. Eğitim bursu ve kız çocuklarına destek. Başvuru durumu: Dönemsel. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "İlköğretimden üniversiteye maddi desteğe ihtiyaç duyan, özellikle kız öğrenciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.cydd.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "ÇYDD Burs Programı",
      "Çağdaş Yaşamı Destekleme Derneği",
      "Dönemsel"
    ]
  },
  {
    "id": 6,
    "ad": "Türk Eğitim Vakfı (TEV) Bursu",
    "kategori": "burslar",
    "aciklama": "Türk Eğitim Vakfı. Karşılıksız burs. Başvuru durumu: Dönemsel (genelde yaz-sonbahar). Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Lisans ve lisansüstü başarılı, ihtiyaç sahibi öğrenciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tev.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Türk Eğitim Vakfı (TEV) Bursu",
      "Türk Eğitim Vakfı",
      "Dönemsel (genelde yaz-sonbahar)"
    ]
  },
  {
    "id": 7,
    "ad": "KYK Burs ve Kredi",
    "kategori": "burslar",
    "aciklama": "Kredi ve Yurtlar Genel Müdürlüğü. Aylık burs / öğrenim kredisi, yurt imkânı. Başvuru durumu: Her yıl dönemsel; e-Devlet üzerinden. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Üniversite öğrencileri (şartları sağlayanlar)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kyk.gsb.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "KYK Burs ve Kredi",
      "Kredi ve Yurtlar Genel Müdürlüğü",
      "Her yıl dönemsel; e-Devlet üzerinden"
    ]
  },
  {
    "id": 8,
    "ad": "VGM Yükseköğrenim Bursu",
    "kategori": "burslar",
    "aciklama": "Vakıflar Genel Müdürlüğü. Aylık burs (2026 için 4.000 TL olarak belirlenmişti). Başvuru durumu: 2026-27 rakamları için resmî duyuruyu bekleyin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Maddi desteğe ihtiyaç duyan üniversite öğrencileri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.vgm.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "VGM Yükseköğrenim Bursu",
      "Vakıflar Genel Müdürlüğü",
      "2026-27 rakamları için resmî duyuruyu bekleyin"
    ]
  },
  {
    "id": 9,
    "ad": "İSOV Bursu",
    "kategori": "burslar",
    "aciklama": "İstanbul Sanayi Odası Vakfı. Yılda 9 ay karşılıksız burs. Başvuru durumu: 2026-27: 1–30 Eylül (kapandı). Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "İstanbul, Kocaeli, Tekirdağ'daki mühendislik fakültelerinde %100 ÖSYM burslu öğrenciler (kadınlara özel değil)",
    "sehir": "İstanbul, Kocaeli, Tekirdağ",
    "sonBasvuru": null,
    "link": "https://www.isov.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "İSOV Bursu",
      "İstanbul Sanayi Odası Vakfı",
      "2026-27: 1–30 Eylül (kapandı)"
    ]
  },
  {
    "id": 10,
    "ad": "İTO Eğitim Bursu",
    "kategori": "burslar",
    "aciklama": "İstanbul Ticaret Odası. Eğitim bursu. Başvuru durumu: Dönemsel. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Lisans, yüksek lisans ve doktora öğrencileri (kadınlara özel değil)",
    "sehir": "Türkiye / İstanbul",
    "sonBasvuru": null,
    "link": "https://www.ito.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "İTO Eğitim Bursu",
      "İstanbul Ticaret Odası",
      "Dönemsel"
    ]
  },
  {
    "id": 11,
    "ad": "Kızılay Bursu",
    "kategori": "burslar",
    "aciklama": "Türk Kızılay. Eğitim bursu. Başvuru durumu: Eylül 2026'da tarih henüz açıklanmamıştı. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Maddi desteğe ihtiyaç duyan öğrenciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kizilay.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Kızılay Bursu",
      "Türk Kızılay",
      "Eylül 2026'da tarih henüz açıklanmamıştı"
    ]
  },
  {
    "id": 12,
    "ad": "TÜBİTAK Lisans Bursları (BİDEB)",
    "kategori": "burslar",
    "aciklama": "TÜBİTAK. Aylık burs ve araştırma projesi destekleri. Başvuru durumu: Programa göre değişir. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Lisans / lisansüstü öğrencileri (kadınlara özel değil)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tubitak.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "TÜBİTAK Lisans Bursları (BİDEB)",
      "TÜBİTAK",
      "Programa göre değişir"
    ]
  },
  {
    "id": 13,
    "ad": "L'Oréal-UNESCO Kadın ve Bilim Programı",
    "kategori": "burslar",
    "aciklama": "L'Oréal Türkiye / UNESCO Türkiye Milli Komisyonu. Bilim insanı kadınlara burs / ödül. Başvuru durumu: Yıllık çağrı (genelde yılın ilk yarısı). Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Doktora ve doktora sonrası kadın bilim insanları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.unesco.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "L'Oréal-UNESCO Kadın ve Bilim Programı",
      "L'Oréal Türkiye / UNESCO Türkiye Milli Komisyonu",
      "Yıllık çağrı (genelde yılın ilk yarısı)"
    ]
  },
  {
    "id": 14,
    "ad": "Generation Google Scholarship",
    "kategori": "burslar",
    "aciklama": "Google. Burs ve Google topluluğuna erişim. Başvuru durumu: Yıllık çağrı. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Bilgisayar bilimleri okuyan, kadınları ve az temsil edilen grupları hedefleyen burs",
    "sehir": "EMEA bölgesi (Türkiye dahil)",
    "sonBasvuru": null,
    "link": "https://buildyourfuture.withgoogle.com/scholarships",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Generation Google Scholarship",
      "Google",
      "Yıllık çağrı"
    ]
  },
  {
    "id": 15,
    "ad": "Women Techmakers Scholars Program",
    "kategori": "burslar",
    "aciklama": "Google. Burs, mentorluk, topluluk. Başvuru durumu: Yıllık çağrı. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Teknoloji alanında okuyan / çalışan kadınlar",
    "sehir": "Küresel",
    "sonBasvuru": null,
    "link": "https://www.womentechmakers.com",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Women Techmakers Scholars Program",
      "Google",
      "Yıllık çağrı"
    ]
  },
  {
    "id": 16,
    "ad": "Fulbright Türkiye Programları",
    "kategori": "burslar",
    "aciklama": "Türkiye Fulbright Eğitim Komisyonu. Yurt dışı burs. Başvuru durumu: Yıllık çağrı. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "ABD'de yüksek lisans / doktora / araştırma yapmak isteyen adaylar (kadınlara özel değil)",
    "sehir": "Türkiye → ABD",
    "sonBasvuru": null,
    "link": "https://www.fulbright.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Fulbright Türkiye Programları",
      "Türkiye Fulbright Eğitim Komisyonu",
      "Yıllık çağrı"
    ]
  },
  {
    "id": 17,
    "ad": "Chevening Bursları",
    "kategori": "burslar",
    "aciklama": "Birleşik Krallık Hükümeti. Tam burs. Başvuru durumu: Yıllık çağrı (Ağustos-Kasım arası). Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "İngiltere'de yüksek lisans yapmak isteyen, liderlik potansiyeli olan adaylar",
    "sehir": "Türkiye → Birleşik Krallık",
    "sonBasvuru": null,
    "link": "https://www.chevening.org",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Chevening Bursları",
      "Birleşik Krallık Hükümeti",
      "Yıllık çağrı (Ağustos-Kasım arası)"
    ]
  },
  {
    "id": 18,
    "ad": "DAAD Burs Programları",
    "kategori": "burslar",
    "aciklama": "DAAD Türkiye. Tam burs ve harcırah. Başvuru durumu: Programa göre değişir. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Almanya'da lisansüstü / araştırma yapmak isteyenler",
    "sehir": "Türkiye → Almanya",
    "sonBasvuru": null,
    "link": "https://www.daad.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "DAAD Burs Programları",
      "DAAD Türkiye",
      "Programa göre değişir"
    ]
  },
  {
    "id": 19,
    "ad": "Erasmus+ Hareketlilik Programı",
    "kategori": "burslar",
    "aciklama": "Türkiye Ulusal Ajansı. Avrupa'da eğitim / staj hibesi. Başvuru durumu: Yıllık; üniversitenizin Erasmus ofisi. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Üniversite öğrencileri ve akademik personel",
    "sehir": "Türkiye → Avrupa",
    "sonBasvuru": null,
    "link": "https://www.ua.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Erasmus+ Hareketlilik Programı",
      "Türkiye Ulusal Ajansı",
      "Yıllık; üniversitenizin Erasmus ofisi"
    ]
  },
  {
    "id": 20,
    "ad": "Marie Skłodowska-Curie Eylemleri",
    "kategori": "burslar",
    "aciklama": "Avrupa Komisyonu. Doktora ve doktora sonrası araştırma bursu. Başvuru durumu: Sürekli çağrılar. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Araştırmacılar (kadın başvuruları teşvik ediliyor)",
    "sehir": "Avrupa",
    "sonBasvuru": null,
    "link": "https://marie-sklodowska-curie-actions.ec.europa.eu",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Marie Skłodowska-Curie Eylemleri",
      "Avrupa Komisyonu",
      "Sürekli çağrılar"
    ]
  },
  {
    "id": 21,
    "ad": "IFUW / Graduate Women International Bursları",
    "kategori": "burslar",
    "aciklama": "Graduate Women International. Kadınlara lisansüstü eğitim bursu. Başvuru durumu: Yıllık çağrı. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Üniversite mezunu kadınlar",
    "sehir": "Küresel",
    "sonBasvuru": null,
    "link": "https://graduatewomen.org",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "IFUW / Graduate Women International Bursları",
      "Graduate Women International",
      "Yıllık çağrı"
    ]
  },
  {
    "id": 22,
    "ad": "Mor Çatı Kadın Sığınağı Vakfı",
    "kategori": "dernekler",
    "aciklama": "Mor Çatı. Danışmanlık, hukuki / psikolojik destek, yönlendirme. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Şiddet gören kadınlar",
    "sehir": "İstanbul (online destek de var)",
    "sonBasvuru": null,
    "link": "https://www.morcati.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Mor Çatı Kadın Sığınağı Vakfı",
      "Mor Çatı",
      "Sürekli"
    ]
  },
  {
    "id": 23,
    "ad": "KA-MER",
    "kategori": "dernekler",
    "aciklama": "Kadın Merkezi Vakfı. Kadın merkezleri, eğitim, danışmanlık. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Şiddet, yoksulluk, eğitimsizlik yaşayan kadınlar",
    "sehir": "Güneydoğu / Doğu Anadolu illeri",
    "sonBasvuru": null,
    "link": "https://www.ka-mer.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KA-MER",
      "Kadın Merkezi Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 24,
    "ad": "Kadın Dayanışma Vakfı",
    "kategori": "dernekler",
    "aciklama": "Kadın Dayanışma Vakfı. Hukuki danışmanlık, dayanışma, eğitim. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "link": "https://www.kadindayanismavakfi.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Dayanışma Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 25,
    "ad": "KİH-YÇ (Kadının İnsan Hakları – Yeni Çözümler Derneği)",
    "kategori": "dernekler",
    "aciklama": "KİH-YÇ. Haklar eğitimi, savunuculuk. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İstanbul / Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kadinininsanhaklari.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KİH-YÇ (Kadının İnsan Hakları – Yeni Çözümler Derneği)",
      "KİH-YÇ",
      "Sürekli"
    ]
  },
  {
    "id": 26,
    "ad": "Kadın Cinayetlerini Durduracağız Platformu",
    "kategori": "dernekler",
    "aciklama": "KCDP. Hukuki destek, izleme, dayanışma. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadincinayetlerinidurduracagiz.net",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Cinayetlerini Durduracağız Platformu",
      "KCDP",
      "Sürekli"
    ]
  },
  {
    "id": 27,
    "ad": "KADEM",
    "kategori": "dernekler",
    "aciklama": "Kadın ve Demokrasi Vakfı. Araştırma, gençlik ve liderlik programları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İstanbul / Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kadem.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KADEM",
      "Kadın ve Demokrasi Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 28,
    "ad": "KAGİDER",
    "kategori": "dernekler",
    "aciklama": "Türkiye Kadın Girişimciler Derneği. Mentorluk, eğitim, Geleceğin Kadın Liderleri programı. Başvuru durumu: Programlara göre dönemsel. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler ve genç kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kagider.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KAGİDER",
      "Türkiye Kadın Girişimciler Derneği",
      "Programlara göre dönemsel"
    ]
  },
  {
    "id": 29,
    "ad": "KA.DER",
    "kategori": "dernekler",
    "aciklama": "Kadın Adayları Destekleme ve Eğitme Derneği. Eğitim, aday destek, savunuculuk. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Siyasete katılmak isteyen kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kader.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KA.DER",
      "Kadın Adayları Destekleme ve Eğitme Derneği",
      "Sürekli"
    ]
  },
  {
    "id": 30,
    "ad": "KEIG",
    "kategori": "dernekler",
    "aciklama": "Kadın Emeği ve İstihdamı Girişimi. Araştırma, haklar bilgisi, savunuculuk. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Çalışan ve iş arayan kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.keig.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KEIG",
      "Kadın Emeği ve İstihdamı Girişimi",
      "Sürekli"
    ]
  },
  {
    "id": 31,
    "ad": "KEDV",
    "kategori": "dernekler",
    "aciklama": "Kadın Emeğini Değerlendirme Vakfı. Kadın kooperatifleri, gelir getirici projeler, çocuk bakım merkezleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Düşük gelirli kadınlar",
    "sehir": "İstanbul ve çeşitli iller",
    "sonBasvuru": null,
    "link": "https://www.kedv.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KEDV",
      "Kadın Emeğini Değerlendirme Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 32,
    "ad": "Uçan Süpürge",
    "kategori": "dernekler",
    "aciklama": "Uçan Süpürge Kadın İletişim ve Araştırma Derneği. Medya, araştırma, kadın hakları eğitimi. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara / Türkiye",
    "sonBasvuru": null,
    "link": "https://www.ucansupurge.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Uçan Süpürge",
      "Uçan Süpürge Kadın İletişim ve Araştırma Derneği",
      "Sürekli"
    ]
  },
  {
    "id": 33,
    "ad": "Kadın Koalisyonu",
    "kategori": "dernekler",
    "aciklama": "Kadın Koalisyonu. Kadın dernekleri ağı, bilgi ve savunuculuk. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kadinkoalisyonu.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Koalisyonu",
      "Sürekli"
    ]
  },
  {
    "id": 34,
    "ad": "Türkiye Kadın Dernekleri Federasyonu",
    "kategori": "dernekler",
    "aciklama": "TKDF. Üye derneklerle dayanışma, eğitim. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar ve kadın dernekleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tkdf.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Türkiye Kadın Dernekleri Federasyonu",
      "TKDF",
      "Sürekli"
    ]
  },
  {
    "id": 35,
    "ad": "Türk Kadınlar Birliği",
    "kategori": "dernekler",
    "aciklama": "Türk Kadınlar Birliği. Eğitim, burs, sosyal destek faaliyetleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara / şubeler",
    "sonBasvuru": null,
    "link": "https://www.tkb.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Türk Kadınlar Birliği",
      "Sürekli"
    ]
  },
  {
    "id": 36,
    "ad": "Kadın Eserleri Kütüphanesi ve Bilgi Merkezi",
    "kategori": "dernekler",
    "aciklama": "Kadın Eserleri Kütüphanesi Vakfı. Kadın tarihi arşivi, kütüphane, etkinlik. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Araştırmacı, öğrenci, kadınlar",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "link": "https://www.kadineserleri.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Eserleri Kütüphanesi ve Bilgi Merkezi",
      "Kadın Eserleri Kütüphanesi Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 37,
    "ad": "Kadının Statüsü Genel Müdürlüğü (KSGM)",
    "kategori": "dernekler",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı. Resmî politika, proje ve destek programları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadininstatusu.aile.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadının Statüsü Genel Müdürlüğü (KSGM)",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 38,
    "ad": "Şiddet Önleme ve İzleme Merkezleri (ŞÖNİM)",
    "kategori": "dernekler",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı. Danışmanlık, barınma yönlendirmesi, koruma. Başvuru durumu: 7/24. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Şiddete maruz kalan veya risk altındaki kadınlar",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Şiddet Önleme ve İzleme Merkezleri (ŞÖNİM)",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "7/24"
    ]
  },
  {
    "id": 39,
    "ad": "Kadın Konukevleri",
    "kategori": "dernekler",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı. Geçici barınma ve destek. Başvuru durumu: ALO 183 veya ŞÖNİM üzerinden. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Şiddet mağduru kadınlar ve çocukları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Konukevleri",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "ALO 183 veya ŞÖNİM üzerinden"
    ]
  },
  {
    "id": 40,
    "ad": "Türkiye Aile Sağlığı ve Planlaması Vakfı (TAPV)",
    "kategori": "dernekler",
    "aciklama": "TAPV. Üreme sağlığı eğitim ve danışmanlığı. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar, gençler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tapv.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Türkiye Aile Sağlığı ve Planlaması Vakfı (TAPV)",
      "TAPV",
      "Sürekli"
    ]
  },
  {
    "id": 41,
    "ad": "AÇEV",
    "kategori": "dernekler",
    "aciklama": "Anne Çocuk Eğitim Vakfı. Okuma yazma, aile eğitimi, anne eğitim programları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Anneler, aileler, yetişkin kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.acev.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "AÇEV",
      "Anne Çocuk Eğitim Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 42,
    "ad": "TOG (Toplum Gönüllüleri Vakfı)",
    "kategori": "dernekler",
    "aciklama": "TOG. Gönüllülük ve gençlik programları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Gençler ve kadınlar (gönüllülük)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tog.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "TOG (Toplum Gönüllüleri Vakfı)",
      "TOG",
      "Sürekli"
    ]
  },
  {
    "id": 43,
    "ad": "TEGV",
    "kategori": "dernekler",
    "aciklama": "Türkiye Eğitim Gönüllüleri Vakfı. Gönüllülük, eğitim parkları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Gönüllü olmak isteyenler, çocuklar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tegv.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "TEGV",
      "Türkiye Eğitim Gönüllüleri Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 44,
    "ad": "UN Women Türkiye",
    "kategori": "dernekler",
    "aciklama": "BM Kadın Birimi. Toplumsal cinsiyet eşitliği programları ve raporlar. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar, STK'lar, kurumlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://turkiye.unwomen.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "UN Women Türkiye",
      "BM Kadın Birimi",
      "Sürekli"
    ]
  },
  {
    "id": 45,
    "ad": "UNFPA Türkiye",
    "kategori": "dernekler",
    "aciklama": "BM Nüfus Fonu. Üreme sağlığı ve şiddetle mücadele programları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar, genç kızlar, mülteciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://turkiye.unfpa.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "UNFPA Türkiye",
      "BM Nüfus Fonu",
      "Sürekli"
    ]
  },
  {
    "id": 46,
    "ad": "SGDD-ASAM",
    "kategori": "dernekler",
    "aciklama": "Sığınmacılar ve Göçmenlerle Dayanışma Derneği. Hukuki, psikososyal destek ve yönlendirme. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Göçmen ve sığınmacı kadınlar",
    "sehir": "Çeşitli iller",
    "sonBasvuru": null,
    "link": "https://www.sgdd.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "SGDD-ASAM",
      "Sığınmacılar ve Göçmenlerle Dayanışma Derneği",
      "Sürekli"
    ]
  },
  {
    "id": 47,
    "ad": "Hayata Destek Derneği",
    "kategori": "dernekler",
    "aciklama": "Hayata Destek. Psikososyal destek ve geçim programları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Dezavantajlı kadınlar, göçmenler",
    "sehir": "Çeşitli iller",
    "sonBasvuru": null,
    "link": "https://www.hayatadestek.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Hayata Destek Derneği",
      "Hayata Destek",
      "Sürekli"
    ]
  },
  {
    "id": 48,
    "ad": "USİKAD",
    "kategori": "dernekler",
    "aciklama": "Uluslararası Sanayici İş Kadınları Derneği. Ağ, mentorluk, sanayide kadın projeleri. Başvuru durumu: Sürekli. Doğrulama notu: Aramada teyit edildi (Eki 2026) (link kontrol edilmeli)",
    "kimlerBasvurabilir": "Sanayide çalışan / girişimci kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.usikad.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "USİKAD",
      "Uluslararası Sanayici İş Kadınları Derneği",
      "Sürekli"
    ]
  },
  {
    "id": 49,
    "ad": "Habitat Derneği",
    "kategori": "dernekler",
    "aciklama": "Habitat Derneği. Sosyal projeler, eğitim, gönüllülük. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Gençler ve kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.habitatdernegi.org",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Habitat Derneği",
      "Sürekli"
    ]
  },
  {
    "id": 50,
    "ad": "Geleceği Yazan Kadınlar",
    "kategori": "egitimler",
    "aciklama": "Turkcell. Ücretsiz dijital beceri, girişimcilik ve teknoloji eğitimleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar (özellikle girişimci, genç ve kooperatif üyeleri)",
    "sehir": "Türkiye / online",
    "sonBasvuru": null,
    "link": "https://gelecegiyazankadinlar.com",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Geleceği Yazan Kadınlar",
      "Turkcell",
      "Sürekli"
    ]
  },
  {
    "id": 51,
    "ad": "Kodluyoruz",
    "kategori": "egitimler",
    "aciklama": "Kodluyoruz. Ücretsiz yazılım bootcamp ve eğitimler. Başvuru durumu: Dönemsel başvuru. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Yazılım öğrenmek isteyenler (kadınlara özel kohortlar da açılıyor)",
    "sehir": "Türkiye / online",
    "sonBasvuru": null,
    "link": "https://kodluyoruz.org",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Kodluyoruz",
      "Dönemsel başvuru"
    ]
  },
  {
    "id": 52,
    "ad": "BTK Akademi",
    "kategori": "egitimler",
    "aciklama": "BTK. Ücretsiz bilişim ve yazılım eğitimleri, sertifika. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.btkakademi.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "BTK Akademi",
      "BTK",
      "Sürekli"
    ]
  },
  {
    "id": 53,
    "ad": "Google Dijital Atölye",
    "kategori": "egitimler",
    "aciklama": "Google Türkiye. Ücretsiz dijital pazarlama ve beceri dersleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://learndigital.withgoogle.com/dijitalatolye",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Google Dijital Atölye",
      "Google Türkiye",
      "Sürekli"
    ]
  },
  {
    "id": 54,
    "ad": "Google Kariyer Sertifikaları",
    "kategori": "egitimler",
    "aciklama": "Google. Veri analizi, UX, proje yönetimi sertifika programları. Başvuru durumu: Sürekli (ücret / mali yardım var). Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://grow.google/certificates",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Google Kariyer Sertifikaları",
      "Google",
      "Sürekli (ücret / mali yardım var)"
    ]
  },
  {
    "id": 55,
    "ad": "Coursera Mali Yardım",
    "kategori": "egitimler",
    "aciklama": "Coursera. Kurslara ücretsiz erişim için mali yardım başvurusu. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.coursera.org",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Coursera Mali Yardım",
      "Coursera",
      "Sürekli"
    ]
  },
  {
    "id": 56,
    "ad": "edX (ücretsiz dinleme)",
    "kategori": "egitimler",
    "aciklama": "edX. Üniversite dersleri (audit modu ücretsiz). Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.edx.org",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "edX (ücretsiz dinleme)",
      "edX",
      "Sürekli"
    ]
  },
  {
    "id": 57,
    "ad": "Microsoft Learn",
    "kategori": "egitimler",
    "aciklama": "Microsoft. Ücretsiz bulut, yazılım ve veri eğitimleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://learn.microsoft.com",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Microsoft Learn",
      "Microsoft",
      "Sürekli"
    ]
  },
  {
    "id": 58,
    "ad": "Cisco Networking Academy",
    "kategori": "egitimler",
    "aciklama": "Cisco. Ağ ve siber güvenlik kursları. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.netacad.com",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Cisco Networking Academy",
      "Cisco",
      "Sürekli"
    ]
  },
  {
    "id": 59,
    "ad": "AWS Skill Builder",
    "kategori": "egitimler",
    "aciklama": "Amazon Web Services. Ücretsiz bulut bilişim eğitimleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://skillbuilder.aws",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "AWS Skill Builder",
      "Amazon Web Services",
      "Sürekli"
    ]
  },
  {
    "id": 60,
    "ad": "IBM SkillsBuild",
    "kategori": "egitimler",
    "aciklama": "IBM. Ücretsiz yapay zeka, veri ve kariyer eğitimleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://skillsbuild.org",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "IBM SkillsBuild",
      "IBM",
      "Sürekli"
    ]
  },
  {
    "id": 61,
    "ad": "CS50 (Harvard)",
    "kategori": "egitimler",
    "aciklama": "Harvard Üniversitesi. Ücretsiz bilgisayar bilimi giriş dersi. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://cs50.harvard.edu",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "CS50 (Harvard)",
      "Harvard Üniversitesi",
      "Sürekli"
    ]
  },
  {
    "id": 62,
    "ad": "MIT OpenCourseWare",
    "kategori": "egitimler",
    "aciklama": "MIT. Ücretsiz üniversite ders materyalleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://ocw.mit.edu",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "MIT OpenCourseWare",
      "MIT",
      "Sürekli"
    ]
  },
  {
    "id": 63,
    "ad": "OpenLearn",
    "kategori": "egitimler",
    "aciklama": "Open University. Ücretsiz kısa kurslar. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.open.edu/openlearn",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "OpenLearn",
      "Open University",
      "Sürekli"
    ]
  },
  {
    "id": 64,
    "ad": "Khan Academy Türkçe",
    "kategori": "egitimler",
    "aciklama": "Khan Academy. Ücretsiz matematik, fen ve ekonomi dersleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Öğrenciler ve yetişkinler",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://tr.khanacademy.org",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Khan Academy Türkçe",
      "Khan Academy",
      "Sürekli"
    ]
  },
  {
    "id": 65,
    "ad": "Patika.dev",
    "kategori": "egitimler",
    "aciklama": "Patika.dev. Ücretsiz yazılım yol haritaları ve bootcamp'ler. Başvuru durumu: Sürekli / dönemsel. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Yazılım öğrenmek isteyenler",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.patika.dev",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Patika.dev",
      "Sürekli / dönemsel"
    ]
  },
  {
    "id": 66,
    "ad": "İŞKUR Mesleki Eğitim Kursları",
    "kategori": "egitimler",
    "aciklama": "İŞKUR. Ücretsiz mesleki kurslar, katılım harçlığı olabilir. Başvuru durumu: Sürekli; İŞKUR Esube / e-Şube. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "İş arayan kadınlar ve erkekler",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://www.iskur.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "İŞKUR Mesleki Eğitim Kursları",
      "İŞKUR",
      "Sürekli; İŞKUR Esube / e-Şube"
    ]
  },
  {
    "id": 67,
    "ad": "İŞKUR Girişimcilik Eğitimi",
    "kategori": "egitimler",
    "aciklama": "İŞKUR. Ücretsiz girişimcilik eğitimi, destek yönlendirmesi. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Girişimci adayları (kadınlar dahil)",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://www.iskur.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "İŞKUR Girişimcilik Eğitimi",
      "İŞKUR",
      "Sürekli"
    ]
  },
  {
    "id": 68,
    "ad": "Halk Eğitim Merkezleri (Hayat Boyu Öğrenme)",
    "kategori": "egitimler",
    "aciklama": "Milli Eğitim Bakanlığı. Ücretsiz el sanatları, okuma yazma, mesleki kurslar. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "18 yaş üstü herkes",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://hbogm.meb.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Halk Eğitim Merkezleri (Hayat Boyu Öğrenme)",
      "Milli Eğitim Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 69,
    "ad": "Açık Öğretim Lisesi (AÖL)",
    "kategori": "egitimler",
    "aciklama": "Milli Eğitim Bakanlığı. Uzaktan lise eğitimi. Başvuru durumu: Dönemlik kayıt. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Liseyi tamamlamak isteyen yetişkinler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://aol.meb.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Açık Öğretim Lisesi (AÖL)",
      "Milli Eğitim Bakanlığı",
      "Dönemlik kayıt"
    ]
  },
  {
    "id": 70,
    "ad": "Anadolu Üniversitesi Açıköğretim (AÖF)",
    "kategori": "egitimler",
    "aciklama": "Anadolu Üniversitesi. Uzaktan lisans / ön lisans. Başvuru durumu: Yıllık kayıt. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Üniversite okumak isteyen yetişkinler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://aof.anadolu.edu.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Anadolu Üniversitesi Açıköğretim (AÖF)",
      "Anadolu Üniversitesi",
      "Yıllık kayıt"
    ]
  },
  {
    "id": 71,
    "ad": "İSMEK",
    "kategori": "egitimler",
    "aciklama": "İstanbul Büyükşehir Belediyesi. Ücretsiz meslek ve beceri kursları. Başvuru durumu: Dönemsel kayıt. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "İstanbul'da yaşayan yetişkinler",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "link": "https://ismek.ist",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "İSMEK",
      "İstanbul Büyükşehir Belediyesi",
      "Dönemsel kayıt"
    ]
  },
  {
    "id": 72,
    "ad": "Belediye Kurs Merkezleri (ASMEK, İZMEK, BUSMEK vb.)",
    "kategori": "egitimler",
    "aciklama": "Büyükşehir belediyeleri. Ücretsiz meslek ve el sanatları kursları. Başvuru durumu: Dönemsel kayıt; kendi belediyenize bakın. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Yetişkinler",
    "sehir": "Ankara, İzmir, Bursa ve diğer iller",
    "sonBasvuru": null,
    "link": "https://www.ankara.bel.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Belediye Kurs Merkezleri (ASMEK, İZMEK, BUSMEK vb.)",
      "Büyükşehir belediyeleri",
      "Dönemsel kayıt; kendi belediyenize bakın"
    ]
  },
  {
    "id": 73,
    "ad": "Türkiye Kadın Girişimci Akademisi",
    "kategori": "egitimler",
    "aciklama": "Garanti BBVA. Eğitim, mentorluk (6 bin kadına ulaşıldı). Başvuru durumu: Dönemsel. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.garantibbva.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Türkiye Kadın Girişimci Akademisi",
      "Garanti BBVA",
      "Dönemsel"
    ]
  },
  {
    "id": 74,
    "ad": "Geleceğin Kadın Liderleri",
    "kategori": "egitimler",
    "aciklama": "KAGİDER + Sanofi Türkiye. Dört günlük liderlik eğitimi, mezunlara mentorluk. Başvuru durumu: Yıllık başvuru. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Genç kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kagider.org",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Geleceğin Kadın Liderleri",
      "KAGİDER + Sanofi Türkiye",
      "Yıllık başvuru"
    ]
  },
  {
    "id": 75,
    "ad": "Dijitalde Hayat Kolay",
    "kategori": "egitimler",
    "aciklama": "Türk Telekom. Eğitim, mentörlük ve hibe desteği. Başvuru durumu: Dönemsel. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Girişimci kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.turktelekom.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Dijitalde Hayat Kolay",
      "Türk Telekom",
      "Dönemsel"
    ]
  },
  {
    "id": 76,
    "ad": "Meta Blueprint",
    "kategori": "egitimler",
    "aciklama": "Meta. Ücretsiz dijital reklam ve sosyal medya eğitimleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Küçük işletme sahipleri, girişimciler",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.facebook.com/business/learn",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Meta Blueprint",
      "Meta",
      "Sürekli"
    ]
  },
  {
    "id": 77,
    "ad": "Duolingo",
    "kategori": "egitimler",
    "aciklama": "Duolingo. Ücretsiz dil öğrenimi. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.duolingo.com",
    "sonKontrol": null,
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Duolingo",
      "Sürekli"
    ]
  },
  {
    "id": 78,
    "ad": "EY Girişimci Kadın Liderler Programı 2026",
    "kategori": "girisimcilik",
    "aciklama": "EY Türkiye. Büyüme, liderlik ve uluslararası pazar programı. Başvuru durumu: AÇIK: 15 Kasım 2026'ya kadar. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Şirkette en az %25 hisse sahibi, karar verici kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.ey.com/tr_tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "EY Girişimci Kadın Liderler Programı 2026",
      "EY Türkiye",
      "AÇIK: 15 Kasım 2026'ya kadar"
    ]
  },
  {
    "id": 79,
    "ad": "KOSGEB Girişimci Destek Programı",
    "kategori": "girisimcilik",
    "aciklama": "KOSGEB. İş geliştirme desteği (geri ödemeli, üst limit kadınlar için +150 bin TL) ve 1 milyon TL'ye kadar kredi finansman desteği. Başvuru durumu: Dönemsel çağrı; 2026'da 3–31 Ocak ve 20 Nisan–8 Mayıs'ta alındı, yeni çağrıyı takip edin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Girişimci adayları; kadın ve gençlere ek avantaj",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kosgeb.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "KOSGEB Girişimci Destek Programı",
      "KOSGEB",
      "Dönemsel çağrı; 2026'da 3–31 Ocak ve 20 Nisan–8 Mayıs'ta alındı, yeni çağrıyı takip edin"
    ]
  },
  {
    "id": 80,
    "ad": "KOSGEB Uygulamalı Girişimcilik Eğitimi",
    "kategori": "girisimcilik",
    "aciklama": "KOSGEB. Başvuru için gerekli ücretsiz eğitim. Başvuru durumu: Sürekli. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "KOSGEB desteği almak isteyenler",
    "sehir": "Türkiye / online",
    "sonBasvuru": null,
    "link": "https://www.kosgeb.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "KOSGEB Uygulamalı Girişimcilik Eğitimi",
      "KOSGEB",
      "Sürekli"
    ]
  },
  {
    "id": 81,
    "ad": "Halkbank Kadın Girişimci Kredisi",
    "kategori": "girisimcilik",
    "aciklama": "Halkbank. Uygun koşullu kadın girişimci kredisi. Başvuru durumu: Sürekli; güncel tutar için şubeye danışın. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.halkbank.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Halkbank Kadın Girişimci Kredisi",
      "Halkbank",
      "Sürekli; güncel tutar için şubeye danışın"
    ]
  },
  {
    "id": 82,
    "ad": "Halkbank Üreten Kadınlar Buluşmaları",
    "kategori": "girisimcilik",
    "aciklama": "Halkbank. Bilgilendirme ve ağ buluşmaları. Başvuru durumu: Dönemsel. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Üretici ve girişimci kadınlar",
    "sehir": "Farklı şehirler",
    "sonBasvuru": null,
    "link": "https://www.halkbank.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Halkbank Üreten Kadınlar Buluşmaları",
      "Halkbank",
      "Dönemsel"
    ]
  },
  {
    "id": 83,
    "ad": "Girişimde Kadın Gücü Projesi",
    "kategori": "girisimcilik",
    "aciklama": "Türkiye İş Bankası. Finansman ve eğitim desteği. Başvuru durumu: Sürekli. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.isbank.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Girişimde Kadın Gücü Projesi",
      "Türkiye İş Bankası",
      "Sürekli"
    ]
  },
  {
    "id": 84,
    "ad": "TEB Kadın Bankacılığı",
    "kategori": "girisimcilik",
    "aciklama": "TEB. Finansman; EBRD ile 50 milyon euroluk kadın KOBİ kredi anlaşması. Başvuru durumu: Sürekli. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler ve kadın liderliğindeki KOBİ'ler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.teb.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "TEB Kadın Bankacılığı",
      "TEB",
      "Sürekli"
    ]
  },
  {
    "id": 85,
    "ad": "Garanti BBVA Kadın Girişimci Programı",
    "kategori": "girisimcilik",
    "aciklama": "Garanti BBVA. Finansman, eğitim, Ticaretin Kadınları platformu. Başvuru durumu: Sürekli. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.garantibbva.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Garanti BBVA Kadın Girişimci Programı",
      "Garanti BBVA",
      "Sürekli"
    ]
  },
  {
    "id": 86,
    "ad": "Türkiye'nin Kadın Girişimcisi Yarışması",
    "kategori": "girisimcilik",
    "aciklama": "Garanti BBVA + Ekonomist + KAGİDER. Yarışma, ödül ve görünürlük (2026'da 19. kez yapıldı). Başvuru durumu: Yıllık başvuru. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler ve kadın kooperatifleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.garantibbva.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Türkiye'nin Kadın Girişimcisi Yarışması",
      "Garanti BBVA + Ekonomist + KAGİDER",
      "Yıllık başvuru"
    ]
  },
  {
    "id": 87,
    "ad": "Kadın Girişimcilere Turuncu Destek",
    "kategori": "girisimcilik",
    "aciklama": "ING Türkiye. Finansman ve destek. Başvuru durumu: Güncelliğini teyit edin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Deprem bölgesindeki kadın girişimciler",
    "sehir": "Deprem bölgesi",
    "sonBasvuru": null,
    "link": "https://www.ing.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Kadın Girişimcilere Turuncu Destek",
      "ING Türkiye",
      "Güncelliğini teyit edin"
    ]
  },
  {
    "id": 88,
    "ad": "Girişimci Kadınlara Teknoloji Gücü",
    "kategori": "girisimcilik",
    "aciklama": "Hepsiburada. E-ticarette ilk 1 milyon TL ciroya kadar %50 komisyon indirimi, eğitim. Başvuru durumu: Sürekli. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "En az %51 hissesi kadınlara ait işletmeler, kadın kooperatifleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.hepsiburada.com",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Girişimci Kadınlara Teknoloji Gücü",
      "Hepsiburada",
      "Sürekli"
    ]
  },
  {
    "id": 89,
    "ad": "Türkiye'nin Girişimci Kadınları Buluşuyor",
    "kategori": "girisimcilik",
    "aciklama": "Hepsiburada + Aile ve Sosyal Hizmetler Bakanlığı. E-ticaret eğitimleri, şehir turları. Başvuru durumu: 2026 boyunca farklı şehirlerde. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Girişimci kadınlar ve kadın kooperatifleri",
    "sehir": "Ankara, Bursa ve diğer şehirler",
    "sonBasvuru": null,
    "link": "https://www.hepsiburada.com",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Türkiye'nin Girişimci Kadınları Buluşuyor",
      "Hepsiburada + Aile ve Sosyal Hizmetler Bakanlığı",
      "2026 boyunca farklı şehirlerde"
    ]
  },
  {
    "id": 90,
    "ad": "Yol Arkadaşın Burada",
    "kategori": "girisimcilik",
    "aciklama": "Hepsiburada + KAGİDER. Mentorluk ve destek programı. Başvuru durumu: Programa göre. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Girişimci kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kagider.org",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Yol Arkadaşın Burada",
      "Hepsiburada + KAGİDER",
      "Programa göre"
    ]
  },
  {
    "id": 91,
    "ad": "İyi İşler Programı",
    "kategori": "girisimcilik",
    "aciklama": "Boyner Grup + KAGİDER. Eğitim ve istihdam programı. Başvuru durumu: Programa göre. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Perakende sektöründe çalışmak isteyen kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kagider.org",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "İyi İşler Programı",
      "Boyner Grup + KAGİDER",
      "Programa göre"
    ]
  },
  {
    "id": 92,
    "ad": "Trendyol Kadın Üretici Programları",
    "kategori": "girisimcilik",
    "aciklama": "Trendyol. E-ticaret ve e-ihracat imkânları. Başvuru durumu: Satıcı başvurusu. Doğrulama notu: Aramada teyit edildi (Eki 2026) (genel; program adını kontrol edin)",
    "kimlerBasvurabilir": "Kadın üreticiler, el emeği satıcıları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.trendyol.com",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Trendyol Kadın Üretici Programları",
      "Trendyol",
      "Satıcı başvurusu"
    ]
  },
  {
    "id": 93,
    "ad": "Yükselen Kadınlar Programı",
    "kategori": "girisimcilik",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı. Kadının güçlenmesi eylem planı kapsamında program. Başvuru durumu: Duyuruları takip edin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadininstatusu.aile.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Yükselen Kadınlar Programı",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "Duyuruları takip edin"
    ]
  },
  {
    "id": 94,
    "ad": "Küresel Temiz Teknolojiler Girişimcilik Programı",
    "kategori": "girisimcilik",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı. Temiz teknoloji girişimciliği desteği. Başvuru durumu: Duyuruları takip edin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadininstatusu.aile.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Küresel Temiz Teknolojiler Girişimcilik Programı",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "Duyuruları takip edin"
    ]
  },
  {
    "id": 95,
    "ad": "Geleceğini Kuran Genç Kadınlar Projesi",
    "kategori": "girisimcilik",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı. Girişimcilik ve beceri desteği. Başvuru durumu: Duyuruları takip edin. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Genç kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadininstatusu.aile.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Geleceğini Kuran Genç Kadınlar Projesi",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "Duyuruları takip edin"
    ]
  },
  {
    "id": 96,
    "ad": "Kadın Kooperatifleri Destek Programları",
    "kategori": "girisimcilik",
    "aciklama": "Ticaret Bakanlığı. Kooperatif destek programları ve hibe çağrıları. Başvuru durumu: Çağrıya göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadın kooperatifleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://ticaret.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Kadın Kooperatifleri Destek Programları",
      "Ticaret Bakanlığı",
      "Çağrıya göre"
    ]
  },
  {
    "id": 97,
    "ad": "Kırsal Kalkınma Yatırımlarının Desteklenmesi (hibe)",
    "kategori": "girisimcilik",
    "aciklama": "Tarım ve Orman Bakanlığı. Yatırım hibesi. Başvuru durumu: Yıllık çağrı. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kırsalda üretim yapan girişimciler (kadınlara öncelik / puan avantajı olabilir)",
    "sehir": "Kırsal alanlar",
    "sonBasvuru": null,
    "link": "https://www.tarimorman.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Kırsal Kalkınma Yatırımlarının Desteklenmesi (hibe)",
      "Tarım ve Orman Bakanlığı",
      "Yıllık çağrı"
    ]
  },
  {
    "id": 98,
    "ad": "IPARD Hibe Programı",
    "kategori": "girisimcilik",
    "aciklama": "TKDK. Yatırım hibesi. Başvuru durumu: Çağrıya göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Tarım ve gıda alanında yatırım yapan girişimciler (kadınlara avantaj olabilir)",
    "sehir": "Kırsal alanlar",
    "sonBasvuru": null,
    "link": "https://www.tkdk.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "IPARD Hibe Programı",
      "TKDK",
      "Çağrıya göre"
    ]
  },
  {
    "id": 99,
    "ad": "Kalkınma Ajansları Mali Destek Programları",
    "kategori": "girisimcilik",
    "aciklama": "İSTKA, İZKA, ANKARAKA ve diğer ajanslar. Proje hibeleri. Başvuru durumu: Çağrıya göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kâr amacı gütmeyen kuruluşlar, KOBİ'ler (bazı programlar kadın odaklı)",
    "sehir": "Bölgeye göre",
    "sonBasvuru": null,
    "link": "https://www.istka.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Kalkınma Ajansları Mali Destek Programları",
      "İSTKA, İZKA, ANKARAKA ve diğer ajanslar",
      "Çağrıya göre"
    ]
  },
  {
    "id": 100,
    "ad": "TÜBİTAK BiGG Girişimci Destekleri",
    "kategori": "girisimcilik",
    "aciklama": "TÜBİTAK. Girişim sermayesi ve hızlandırma. Başvuru durumu: Çağrıya göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Teknoloji girişimcileri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tubitak.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "TÜBİTAK BiGG Girişimci Destekleri",
      "TÜBİTAK",
      "Çağrıya göre"
    ]
  },
  {
    "id": 101,
    "ad": "TEKNOFEST Girişim Programı",
    "kategori": "girisimcilik",
    "aciklama": "TEKNOFEST. Hızlandırma ve yatırım programı (2026 başvuruları Nisan'da başladı). Başvuru durumu: Yıllık çağrı. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.teknofest.org",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "TEKNOFEST Girişim Programı",
      "TEKNOFEST",
      "Yıllık çağrı"
    ]
  },
  {
    "id": 102,
    "ad": "Teknogirişim Sermaye Desteği",
    "kategori": "girisimcilik",
    "aciklama": "Sanayi ve Teknoloji Bakanlığı. Sermaye ve iş geliştirme desteği. Başvuru durumu: Çağrıya göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Teknoloji girişimcileri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.sanayi.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Teknogirişim Sermaye Desteği",
      "Sanayi ve Teknoloji Bakanlığı",
      "Çağrıya göre"
    ]
  },
  {
    "id": 103,
    "ad": "Google for Startups",
    "kategori": "girisimcilik",
    "aciklama": "Google. Hızlandırma, mentorluk, kaynak. Başvuru durumu: Programa göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Girişimciler (kadın kurucu odaklı programlar)",
    "sehir": "Küresel / Avrupa",
    "sonBasvuru": null,
    "link": "https://startup.google.com",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Google for Startups",
      "Google",
      "Programa göre"
    ]
  },
  {
    "id": 104,
    "ad": "EBRD Women in Business",
    "kategori": "girisimcilik",
    "aciklama": "EBRD. Finansman ve danışmanlık. Başvuru durumu: Aracı bankalar üzerinden. Doğrulama notu: Aramada teyit edildi (Eki 2026)",
    "kimlerBasvurabilir": "Kadın liderliğindeki KOBİ'ler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.ebrd.com",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "EBRD Women in Business",
      "EBRD",
      "Aracı bankalar üzerinden"
    ]
  },
  {
    "id": 105,
    "ad": "We-Fi (Kadın Girişimci Finansman Girişimi)",
    "kategori": "girisimcilik",
    "aciklama": "Dünya Bankası Grubu. Küresel finansman ve ağlara erişim bilgisi. Başvuru durumu: Bilgilendirme. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Küresel",
    "sonBasvuru": null,
    "link": "https://we-fi.org",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "We-Fi (Kadın Girişimci Finansman Girişimi)",
      "Dünya Bankası Grubu",
      "Bilgilendirme"
    ]
  },
  {
    "id": 106,
    "ad": "TOBB Kadın Girişimciler Kurulu",
    "kategori": "girisimcilik",
    "aciklama": "TOBB. Ağ, eğitim, mentorluk. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadın iş insanları ve girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tobb.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "TOBB Kadın Girişimciler Kurulu",
      "TOBB",
      "Sürekli"
    ]
  },
  {
    "id": 107,
    "ad": "Ashoka Türkiye",
    "kategori": "girisimcilik",
    "aciklama": "Ashoka. Sosyal girişimcilik ağı ve destek. Başvuru durumu: Programa göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Sosyal girişimciler (kadın girişimciler dahil)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.ashoka.org/tr-tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Ashoka Türkiye",
      "Ashoka",
      "Programa göre"
    ]
  },
  {
    "id": 108,
    "ad": "Sabancı Vakfı Hibe Programları",
    "kategori": "girisimcilik",
    "aciklama": "Sabancı Vakfı. Hibe çağrıları. Başvuru durumu: Çağrıya göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "STK'lar, toplumsal cinsiyet eşitliği projeleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.sabancivakfi.org",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Sabancı Vakfı Hibe Programları",
      "Sabancı Vakfı",
      "Çağrıya göre"
    ]
  },
  {
    "id": 109,
    "ad": "Endeavor Türkiye",
    "kategori": "girisimcilik",
    "aciklama": "Endeavor. Mentorluk ve ağ (kadınlara özel değil). Başvuru durumu: Seçim dönemlerine göre. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Yüksek büyüme potansiyelli girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://endeavor.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Endeavor Türkiye",
      "Endeavor",
      "Seçim dönemlerine göre"
    ]
  },
  {
    "id": 110,
    "ad": "Kredi Garanti Fonu Kefalet Desteği",
    "kategori": "girisimcilik",
    "aciklama": "KGF. Banka kredileri için kefalet. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Teminat sıkıntısı yaşayan girişimciler (kadın girişimci kefalet ürünü var mı kontrol edin)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kgf.com.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Kredi Garanti Fonu Kefalet Desteği",
      "KGF",
      "Sürekli"
    ]
  },
  {
    "id": 111,
    "ad": "İŞKUR Kadın İstihdamı ve Bakım Desteği",
    "kategori": "girisimcilik",
    "aciklama": "İŞKUR. İstihdam ve bakım destekleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadın çalışanlar ve kadın çalıştıran işverenler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.iskur.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "İŞKUR Kadın İstihdamı ve Bakım Desteği",
      "İŞKUR",
      "Sürekli"
    ]
  },
  {
    "id": 112,
    "ad": "Adli Yardım Bürosu",
    "kategori": "hukuki",
    "aciklama": "Türkiye Barolar Birliği ve barolar. Ücretsiz avukat desteği. Başvuru durumu: Sürekli; kendi ilinizdeki baroya başvurun. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Avukat tutamayacak durumdaki herkes",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://www.barobirlik.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Adli Yardım Bürosu",
      "Türkiye Barolar Birliği ve barolar",
      "Sürekli; kendi ilinizdeki baroya başvurun"
    ]
  },
  {
    "id": 113,
    "ad": "İstanbul Barosu Kadın Hakları Merkezi",
    "kategori": "hukuki",
    "aciklama": "İstanbul Barosu. Ücretsiz hukuki danışmanlık. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "link": "https://www.istanbulbarosu.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "İstanbul Barosu Kadın Hakları Merkezi",
      "İstanbul Barosu",
      "Sürekli"
    ]
  },
  {
    "id": 114,
    "ad": "Ankara Barosu Kadın Hakları Merkezi",
    "kategori": "hukuki",
    "aciklama": "Ankara Barosu. Ücretsiz hukuki danışmanlık. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "link": "https://www.ankarabarosu.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Ankara Barosu Kadın Hakları Merkezi",
      "Ankara Barosu",
      "Sürekli"
    ]
  },
  {
    "id": 115,
    "ad": "İzmir Barosu Kadın Hakları Merkezi",
    "kategori": "hukuki",
    "aciklama": "İzmir Barosu. Ücretsiz hukuki danışmanlık. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İzmir",
    "sonBasvuru": null,
    "link": "https://www.izmirbarosu.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "İzmir Barosu Kadın Hakları Merkezi",
      "İzmir Barosu",
      "Sürekli"
    ]
  },
  {
    "id": 116,
    "ad": "UYAP Vatandaş Portal",
    "kategori": "hukuki",
    "aciklama": "Adalet Bakanlığı. Dosya sorgulama, e-başvuru. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://vatandas.uyap.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "UYAP Vatandaş Portal",
      "Adalet Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 117,
    "ad": "CİMER",
    "kategori": "hukuki",
    "aciklama": "Cumhurbaşkanlığı İletişim Merkezi. Kamu kurumlarına şikâyet / başvuru. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.cimer.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "CİMER",
      "Cumhurbaşkanlığı İletişim Merkezi",
      "Sürekli"
    ]
  },
  {
    "id": 118,
    "ad": "Türkiye İnsan Hakları ve Eşitlik Kurumu (TİHEK)",
    "kategori": "hukuki",
    "aciklama": "TİHEK. Ayrımcılık ve insan hakları ihlali başvurusu. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Ayrımcılığa uğrayanlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tihek.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Türkiye İnsan Hakları ve Eşitlik Kurumu (TİHEK)",
      "TİHEK",
      "Sürekli"
    ]
  },
  {
    "id": 119,
    "ad": "Kamu Denetçiliği Kurumu (Ombudsman)",
    "kategori": "hukuki",
    "aciklama": "KDK. İdare şikâyetleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kamu hizmetinden şikâyetçi olanlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.ombudsman.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Kamu Denetçiliği Kurumu (Ombudsman)",
      "KDK",
      "Sürekli"
    ]
  },
  {
    "id": 120,
    "ad": "ALO 170 Çalışma ve Sosyal Güvenlik Hattı",
    "kategori": "hukuki",
    "aciklama": "ÇSGB. Danışma ve şikâyet. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Çalışanlar (mobbing, işten çıkarma, maaş sorunları)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.alo170.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "ALO 170 Çalışma ve Sosyal Güvenlik Hattı",
      "ÇSGB",
      "Sürekli"
    ]
  },
  {
    "id": 121,
    "ad": "SGK Doğum Borçlanması ve Analık Hakları",
    "kategori": "hukuki",
    "aciklama": "SGK. Doğum borçlanması, analık ödeneği bilgisi. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Çalışan / çalışmış kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.sgk.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "SGK Doğum Borçlanması ve Analık Hakları",
      "SGK",
      "Sürekli"
    ]
  },
  {
    "id": 122,
    "ad": "Mevzuat Bilgi Sistemi (6284 sayılı Kanun vb.)",
    "kategori": "hukuki",
    "aciklama": "Cumhurbaşkanlığı. Kanun metinleri, koruma ve önleme düzenlemeleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.mevzuat.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Mevzuat Bilgi Sistemi (6284 sayılı Kanun vb.)",
      "Cumhurbaşkanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 123,
    "ad": "Kadın Dayanışma Vakfı Hukuki Danışma",
    "kategori": "hukuki",
    "aciklama": "Kadın Dayanışma Vakfı. Boşanma, şiddet, miras konularında yönlendirme. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "link": "https://www.kadindayanismavakfi.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Kadın Dayanışma Vakfı Hukuki Danışma",
      "Kadın Dayanışma Vakfı",
      "Sürekli"
    ]
  },
  {
    "id": 124,
    "ad": "MHRS (ALO 182) Hastane Randevusu",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığı. Randevu alma, jinekoloji ve diğer branşlar. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.mhrs.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "MHRS (ALO 182) Hastane Randevusu",
      "Sağlık Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 125,
    "ad": "KETEM (Kanser Erken Teşhis, Tarama ve Eğitim Merkezleri)",
    "kategori": "saglik",
    "aciklama": "Halk Sağlığı Genel Müdürlüğü. Ücretsiz meme (mamografi), rahim ağzı (smear) taraması. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Belirli yaş gruplarındaki kadınlar",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://hsgm.saglik.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "KETEM (Kanser Erken Teşhis, Tarama ve Eğitim Merkezleri)",
      "Halk Sağlığı Genel Müdürlüğü",
      "Sürekli"
    ]
  },
  {
    "id": 126,
    "ad": "Ana Çocuk Sağlığı ve Aile Planlaması",
    "kategori": "saglik",
    "aciklama": "Halk Sağlığı Genel Müdürlüğü. Doğum öncesi bakım, aile planlaması danışmanlığı. Başvuru durumu: Aile sağlığı merkezleri aracılığıyla. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar, gebeler, anneler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://hsgm.saglik.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Ana Çocuk Sağlığı ve Aile Planlaması",
      "Halk Sağlığı Genel Müdürlüğü",
      "Aile sağlığı merkezleri aracılığıyla"
    ]
  },
  {
    "id": 127,
    "ad": "Gebe Bilgilendirme Sınıfları",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığı / Aile Sağlığı Merkezleri. Ücretsiz gebelik ve doğum eğitimi. Başvuru durumu: Aile sağlığı merkezinize sorun. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Hamile kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://hsgm.saglik.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Gebe Bilgilendirme Sınıfları",
      "Sağlık Bakanlığı / Aile Sağlığı Merkezleri",
      "Aile sağlığı merkezinize sorun"
    ]
  },
  {
    "id": 128,
    "ad": "e-Nabız",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığı. Kendi sağlık kayıtlarına erişim. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://enabiz.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "e-Nabız",
      "Sağlık Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 129,
    "ad": "Sağlık Bakanlığı İletişim Merkezi (ALO 184 SABİM)",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığı. Bilgi ve şikâyet hattı. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.saglik.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Sağlık Bakanlığı İletişim Merkezi (ALO 184 SABİM)",
      "Sağlık Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 130,
    "ad": "Toplum Ruh Sağlığı Merkezleri (TRSM)",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığı. Ücretsiz psikiyatrik destek. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Ruh sağlığı desteğine ihtiyaç duyanlar",
    "sehir": "Çeşitli iller",
    "sonBasvuru": null,
    "link": "https://www.saglik.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Toplum Ruh Sağlığı Merkezleri (TRSM)",
      "Sağlık Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 131,
    "ad": "Türk Psikologlar Derneği",
    "kategori": "saglik",
    "aciklama": "TPD. Psikolog bulma, ruh sağlığı bilgisi. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.psikolog.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Türk Psikologlar Derneği",
      "TPD",
      "Sürekli"
    ]
  },
  {
    "id": 132,
    "ad": "Türk Jinekoloji ve Obstetrik Derneği",
    "kategori": "saglik",
    "aciklama": "TJOD. Kadın sağlığı bilgilendirmeleri. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tjod.org",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Türk Jinekoloji ve Obstetrik Derneği",
      "TJOD",
      "Sürekli"
    ]
  },
  {
    "id": 133,
    "ad": "ALO 171 Sigara Danışma Hattı",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığı. Ücretsiz danışma ve bırakma desteği. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Sigarayı bırakmak isteyenler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.saglik.gov.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "ALO 171 Sigara Danışma Hattı",
      "Sağlık Bakanlığı",
      "Sürekli"
    ]
  },
  {
    "id": 134,
    "ad": "YEDAM (ALO 115)",
    "kategori": "saglik",
    "aciklama": "Yeşilay. Ücretsiz danışmanlık. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Bağımlılıkla mücadele edenler ve yakınları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.yesilay.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "YEDAM (ALO 115)",
      "Yeşilay",
      "Sürekli"
    ]
  },
  {
    "id": 135,
    "ad": "TAPV Üreme Sağlığı Bilgi Merkezi",
    "kategori": "saglik",
    "aciklama": "TAPV. Üreme sağlığı bilgisi ve yönlendirme. Başvuru durumu: Sürekli. Doğrulama notu: Resmî sitede teyit edin",
    "kimlerBasvurabilir": "Kadınlar, gençler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tapv.org.tr",
    "sonKontrol": null,
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "TAPV Üreme Sağlığı Bilgi Merkezi",
      "TAPV",
      "Sürekli"
    ]
  }
];
