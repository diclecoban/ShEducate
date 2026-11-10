/*
  KADINLAR ICIN KAYNAK REHBERI - VERI DOSYASI

  2026-10-23: sheducate_burslar.tsv resmî kaynaklardan denetlendi;
  Chevening (ID 17) güncellendi, ID 172–174 eklendi. Denetim bu dört kayıtla sınırlıdır.

  Bu dosya ShEducate_kaynak_listesi.xlsx dosyasindan uretilmistir.
  Yapilandirilmis basvuru ve konum alanlari mevcut metinlerden aktarildi;
  bu aktarim yeni bir resmi kaynak kontrolu degildir. basvuruNotu ozgun
  durum bilgisini korur. Yeni donemde durum ve tarihler birlikte guncellenmelidir.
  2026-10-22 tarihinde eklenen kariyer, barinma ve ebeveynlik kaynaklarinin
  resmi hizmet sayfalari kontrol edildi; sonKontrol hizmet bilgisinin
  kontrol tarihidir, acik basvuru veya kontenjan garantisi degildir.
  shEducate_kaynaklar.csv dosyasindan eklenen kayitlarda kontrolKaynagi="csv"
  dosyada bildirilen kontrol tarihini belirtir; aktarim yeni web dogrulamasi degildir.
  2026-10-22 web denetimi CSV ile iliskili 62 benzersiz kaydi kapsar.
  dogrulama alani resmi kanitlari ve sinirlari tutar. Kismi teyitte sonKontrol
  null kalir; dosyada bildirilen tarih ayrica korunur.
  Ayni gun ek kontrolde sonKontrol alani bos 20 kayit daha resmi icerikten
  incelendi; ardindan bos tarihli 50 kayit daha kontrol edildi. Kapsam ve
  kaynaklar dogrulama alaninda tutulur. Kalan 36 kayit da incelendi;
  kismi teyit edilenlerde sonKontrol bos birakildi. Bu denetimlerin
  kapsami disindaki kayitlara yeni dogrulama tarihi atanmadi.
  ekKategoriler ayni kaynagi cogaltmadan diger kategori filtrelerine dahil eder.
  Elle Kontrol Tarihi bos olan kayitlarda sonKontrol null birakilir;
  arayuz bu kayitlari "Kontrol edilmeli" ve 90 gun uyarisi ile gosterir.
*/

const SITE_GUNCELLEME_TARIHI = "2026-11-11";

const KAYNAKLAR = [
  {
    "id": 4,
    "kaynakTuru": "program",
    "ad": "Aydın Doğan Vakfı BBOG Eğitim Bursu",
    "kategori": "burslar",
    "aciklama": "Baba Beni Okula Gönder pansiyonlarında kalmış ve devlet üniversitesinde lisans eğitimine başlayan kız öğrencilere burs ve mentorluk desteği sunar.",
    "kimlerBasvurabilir": "Ortaöğretimde Baba Beni Okula Gönder pansiyonlarında kalmış, devlet üniversitesinde lisans eğitimine başlayan ve maddi desteğe ihtiyaç duyan kız öğrenciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://aydindoganvakfi.org.tr/guclu-kizlar-guclu-yarinlar/guclu-kizlar-guclu-universite/burslar-ve-mentorluk-programi/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Aydın Doğan Vakfı",
      "Aydın Doğan Vakfı BBOG Eğitim Bursu"
    ],
    "basvuruNotu": "Programın hedef grubu ve destek türü doğrulandı. Güncel başvuru takvimi ile önceki 23 yaş sınırı doğrulanamadı; açık veya kapalı başvuru varsayılmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Programın hedef grubu ve destek türü doğrulandı. Güncel başvuru takvimi ile önceki 23 yaş sınırı doğrulanamadı; açık veya kapalı başvuru varsayılmadı.",
      "kaynaklar": [
        "https://aydindoganvakfi.org.tr/guclu-kizlar-guclu-yarinlar/guclu-kizlar-guclu-universite/burslar-ve-mentorluk-programi/"
      ]
    }
  },
  {
    "id": 11,
    "kaynakTuru": "program",
    "ad": "Kızılay Bursu",
    "kategori": "burslar",
    "aciklama": "Türk Kızılay’ın öğrencilere yönelik burs çalışmalarına ilişkin kaynaktır.",
    "kimlerBasvurabilir": "Maddi desteğe ihtiyaç duyan öğrenciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kizilayburslari.kizilay.org.tr/",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Türk Kızılay",
      "Kızılay Bursu"
    ],
    "basvuruNotu": "Kızılay ana sayfasındaki resmî burs bağlantısı doğrulandı; burs portalı zaman aşımına uğradı. 2026–2027 için yeni başvuru alınıp alınmadığı resmî içerikten doğrulanamadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web-kismi",
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-10-24",
      "not": "Kızılay ana sayfasındaki resmî burs bağlantısı doğrulandı; burs portalı zaman aşımına uğradı. 2026–2027 için yeni başvuru alınıp alınmadığı resmî içerikten doğrulanamadı. 24 Ekim yeniden kontrolünde tam teyit sağlanamadı; belirsiz durum ve boş son kontrol tarihi korundu.",
      "kaynaklar": [
        "https://www.kizilay.org.tr/",
        "https://kizilayburslari.kizilay.org.tr/"
      ]
    }
  },
  {
    "id": 18,
    "kaynakTuru": "program",
    "ad": "DAAD Burs Programları",
    "kategori": "burslar",
    "aciklama": "DAAD’nin öğrenim ve araştırma burslarını eğitim düzeyi ve alana göre aramaya yardımcı olan resmî burs bilgi bankasıdır.",
    "kimlerBasvurabilir": "Almanya'da lisansüstü / araştırma yapmak isteyenler",
    "sehir": "Türkiye → Almanya",
    "sonBasvuru": null,
    "link": "https://www.daad-turkiye.org/tr/destek-bul/burs-veri-bankasi/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "DAAD Burs Programları",
      "DAAD Türkiye",
      "Programa göre değişir"
    ],
    "basvuruNotu": "Tek bir başvuru dönemi yoktur; son tarihler ve destek kapsamı programa göre değişir. Bilgi bankasında seçtiğin programın çağrısını inceleyebilirsin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Güncel DAAD Türkiye adresi ve burs bilgi bankası doğrulandı. Genel liste için ortak açık başvuru durumu veya son tarih atanmadı.",
      "kaynaklar": [
        "https://www.daad-turkiye.org/tr/destek-bul/burs-veri-bankasi/"
      ]
    }
  },
  {
    "id": 19,
    "kaynakTuru": "program",
    "ad": "Erasmus+ Hareketlilik Programı",
    "kategori": "burslar",
    "aciklama": "Erasmus+ kapsamında yükseköğrenim öğrencilerinin yurt dışında öğrenim hareketliliğine ve ilgili hibe olanaklarına ilişkin resmî bilgilendirmedir.",
    "kimlerBasvurabilir": "Programa katılan yükseköğretim kurumlarında kayıtlı önlisans, lisans, yüksek lisans ve doktora öğrencileri",
    "sehir": "Türkiye → Avrupa",
    "sonBasvuru": null,
    "link": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Erasmus+ Hareketlilik Programı",
      "Türkiye Ulusal Ajansı",
      "Yıllık; üniversitenizin Erasmus ofisi"
    ],
    "basvuruNotu": "Merkezî bireysel başvuru formu yoktur. Başvuru sürecini ve tarihleri kendi üniversitenin Erasmus / uluslararası ilişkiler ofisinden öğrenebilirsin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Öğrenim hareketliliği ve üniversite üzerinden başvuru yöntemi Avrupa Komisyonu sayfasından doğrulandı. Ulusal Ajans sayfasına erişim sağlanamadı; bağlantı resmî AB rehberine güncellendi. Ortak son tarih atanmadı.",
      "kaynaklar": [
        "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad"
      ]
    }
  },
  {
    "id": 20,
    "kaynakTuru": "program",
    "ad": "Marie Skłodowska-Curie Eylemleri",
    "kategori": "burslar",
    "aciklama": "Avrupa Komisyonu’nun doktora eğitimi, doktora sonrası araştırma ve araştırmacı hareketliliğini destekleyen MSCA programlarıdır.",
    "kimlerBasvurabilir": "İlgili MSCA eyleminin kariyer aşaması ve hareketlilik koşullarını sağlayan araştırmacılar",
    "sehir": "Avrupa",
    "sonBasvuru": null,
    "link": "https://marie-sklodowska-curie-actions.ec.europa.eu/actions",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "burs",
      "öğrenci",
      "destek",
      "Marie Skłodowska-Curie Eylemleri",
      "Avrupa Komisyonu"
    ],
    "basvuruNotu": "Başvuru yöntemi ve takvim seçilen eyleme göre değişir; program listesi tüm çağrıların sürekli açık olduğu anlamına gelmez.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "MSCA eylemleri ve doktora sonrası araştırma koşulları resmî rehberlerden doğrulandı. Tek bir açık çağrı veya ortak tarih iddia edilmedi.",
      "kaynaklar": [
        "https://marie-sklodowska-curie-actions.ec.europa.eu/actions",
        "https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
      ]
    }
  },
  {
    "id": 22,
    "kaynakTuru": "kurum",
    "ad": "Mor Çatı Kadın Sığınağı Vakfı",
    "kategori": "dernekler",
    "aciklama": "Şiddete maruz kalan kadınlara dayanışma, bilgilendirme ve ihtiyaçlarına göre destek yönlendirmesi sağlar.",
    "kimlerBasvurabilir": "Şiddet gören kadınlar",
    "sehir": "İstanbul (online destek de var)",
    "sonBasvuru": null,
    "link": "https://morcati.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Mor Çatı Kadın Sığınağı Vakfı",
      "Mor Çatı"
    ],
    "basvuruNotu": "Dayanışma merkeziyle iletişime geçin; sığınak ihtiyacı ve kabul koşulları görüşmede değerlendirilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Dayanışma ve sığınak modeli kurumun rehberiyle eşleştirildi; sığınak kabulü uygunluk görüşmesine bağlıdır.",
      "kaynaklar": [
        "https://morcati.org.tr/",
        "https://morcati.org.tr/wp-content/uploads/2022/07/Kadina-Yonelik-Siddetle-Mucadelede-Siginaklar.pdf"
      ]
    }
  },
  {
    "id": 23,
    "kaynakTuru": "kurum",
    "ad": "KAMER Vakfı",
    "kategori": "dernekler",
    "aciklama": "Kadınların güçlenmesi, şiddetle mücadele ve dayanışma alanlarında çalışmalar yürütür.",
    "kimlerBasvurabilir": "Şiddet, yoksulluk, eğitimsizlik yaşayan kadınlar",
    "sehir": "Güneydoğu / Doğu Anadolu illeri",
    "sonBasvuru": null,
    "link": "https://www.kamer.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KA-MER",
      "Kadın Merkezi Vakfı"
    ],
    "basvuruNotu": "Yerel merkez ve destek kapsamı için KAMER ile iletişime geçin.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kurum ve kadınlara yönelik destek çalışmaları doğrulandı; hizmetin bulunduğunuz bölgedeki kapsamı ayrıca sorulmalıdır.",
      "kaynaklar": [
        "https://www.kamer.org.tr/",
        "https://kamer.org.tr/icerik_detay.php?id=719"
      ]
    }
  },
  {
    "id": 24,
    "kaynakTuru": "kurum",
    "ad": "Kadın Dayanışma Vakfı",
    "kategori": "dernekler",
    "aciklama": "Şiddete maruz kalan kadınlara ücretsiz sosyal, hukuki ve psikolojik destek sunan kadın danışma merkezidir.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "link": "https://www.kadindayanismavakfi.org.tr/kadin-danisma-merkezimize-basvurabilirsiniz/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Dayanışma Vakfı"
    ],
    "basvuruNotu": "Danışma merkezine başvurun. Hukuki destek bilgilendirme ve yönlendirme içerir; duruşmada temsil ayrıca değerlendirilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz sosyal, hukuki ve psikolojik danışma doğrulandı; mahkemede avukatla temsil otomatik bir hizmet değildir.",
      "kaynaklar": [
        "https://www.kadindayanismavakfi.org.tr/kadin-danisma-merkezimize-basvurabilirsiniz/"
      ]
    }
  },
  {
    "id": 25,
    "kaynakTuru": "kurum",
    "ad": "Kadının İnsan Hakları Derneği",
    "kategori": "dernekler",
    "aciklama": "Kadınların hak bilincini ve eşit katılımını KİHEP eğitimleri, savunuculuk ve yayınlarla destekler.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İstanbul / Türkiye",
    "sonBasvuru": null,
    "link": "https://kadinininsanhaklari.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KİH-YÇ (Kadının İnsan Hakları – Yeni Çözümler Derneği)",
      "KİH-YÇ"
    ],
    "basvuruNotu": "KİHEP katılım formu ve yerel grup koşullarını dernekten öğrenin; belirli bir grubun güncel kayıt durumu teyit edilmedi.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Güncel kurum adı ve KİHEP programı doğrulandı.",
      "kaynaklar": [
        "https://kadinininsanhaklari.org/"
      ]
    }
  },
  {
    "id": 26,
    "kaynakTuru": "kurum",
    "ad": "Kadın Cinayetlerini Durduracağız Platformu",
    "kategori": "dernekler",
    "aciklama": "Kadına yönelik şiddetle mücadele, başvuru karşılama ve hukuki destek çalışmaları yürütür.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadincinayetlerinidurduracagiz.net/hakkimizda",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Cinayetlerini Durduracağız Platformu",
      "KCDP"
    ],
    "basvuruNotu": "Danışma ve destek talebi için platformun resmî iletişim kanallarını kullanın.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Platformun başvuru mekanizması ve hukuki destek çalışmaları doğrulandı.",
      "kaynaklar": [
        "https://kadincinayetlerinidurduracagiz.net/hakkimizda"
      ]
    }
  },
  {
    "id": 27,
    "kaynakTuru": "kurum",
    "ad": "KADEM",
    "kategori": "dernekler",
    "aciklama": "Kadınların güçlenmesi için eğitim, araştırma, temsilcilik ve proje çalışmaları yürütür.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İstanbul / Türkiye",
    "sonBasvuru": null,
    "link": "https://kadem.org.tr/hakkimizda/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KADEM",
      "Kadın ve Demokrasi Vakfı"
    ],
    "basvuruNotu": "Program ve temsilcilik duyurularından koşulları ve takvimi kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kurumun eğitim, proje ve yerel temsilcilik çalışmaları doğrulandı; programlara katılım ayrı koşullara tabidir.",
      "kaynaklar": [
        "https://kadem.org.tr/hakkimizda/"
      ]
    }
  },
  {
    "id": 28,
    "kaynakTuru": "kurum",
    "ad": "KAGİDER",
    "kategori": "dernekler",
    "aciklama": "Kadınların girişimcilik yoluyla güçlenmesi için eğitim, ağ kurma ve mentorluk projeleri yürüten dernektir.",
    "kimlerBasvurabilir": "Kadın girişimciler ve genç kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kagider.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KAGİDER",
      "Türkiye Kadın Girişimciler Derneği"
    ],
    "basvuruNotu": "Üyelik ve programların tarih, ücret ve uygunluk koşullarını ilgili duyurudan kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "ekKategoriler": [
      "girisimcilik"
    ],
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Girişimcilik, eğitim ve mentorluk çalışmaları doğrulandı; her programın başvurusu ayrı değerlendirilmelidir.",
      "kaynaklar": [
        "https://kagider.org/"
      ]
    }
  },
  {
    "id": 29,
    "kaynakTuru": "kurum",
    "ad": "KA.DER — Kadın Adayları Destekleme Derneği",
    "kategori": "dernekler",
    "aciklama": "Kadınların siyasette ve karar alma mekanizmalarında eşit temsili için eğitim, araştırma ve savunuculuk çalışmaları yürütür.",
    "kimlerBasvurabilir": "Siyasete katılmak isteyen kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://ka-der.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KA.DER",
      "Kadın Adayları Destekleme ve Eğitme Derneği"
    ],
    "basvuruNotu": "Eğitim ve etkinliklerin başvuru dönemlerini derneğin duyurularından takip edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Eşit temsil, eğitim ve güçlendirme çalışmaları doğrulandı; CSV’deki hatalı alan adı düzeltildi.",
      "kaynaklar": [
        "https://ka-der.org.tr/"
      ]
    }
  },
  {
    "id": 30,
    "kaynakTuru": "kurum",
    "ad": "KEIG",
    "kategori": "dernekler",
    "aciklama": "Kadın emeği ve istihdamı konusunda araştırma, bilgi notları ve savunuculuk çalışmaları yayımlayan platformdur.",
    "kimlerBasvurabilir": "Çalışan ve iş arayan kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.keig.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KEIG",
      "Kadın Emeği ve İstihdamı Girişimi"
    ],
    "basvuruNotu": "Yayınlara çevrim içi erişilebilir; bu kayıt doğrudan işe yerleştirme hizmeti değildir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kadın emeği ve istihdamı üzerine araştırma, yayın ve savunuculuk içeriği doğrulandı.",
      "kaynaklar": [
        "https://www.keig.org/"
      ]
    }
  },
  {
    "id": 31,
    "kaynakTuru": "kurum",
    "ad": "KEDV",
    "kategori": "dernekler",
    "aciklama": "Dar gelirli kadınların güçlenmesi, yerel örgütlenmesi ve kadın kooperatiflerinin gelişmesi için çalışmalar yürütür.",
    "kimlerBasvurabilir": "Düşük gelirli kadınlar",
    "sehir": "İstanbul ve çeşitli iller",
    "sonBasvuru": null,
    "link": "https://www.kedv.org.tr/guclendirme-ve-kooperatiflesme",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "KEDV",
      "Kadın Emeğini Değerlendirme Vakfı"
    ],
    "basvuruNotu": "Yerel çalışma, eğitim ve destek koşullarını vakıftan öğrenin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kooperatifleşme ve kadınların güçlenmesine yönelik çalışmalar doğrulandı.",
      "kaynaklar": [
        "https://www.kedv.org.tr/guclendirme-ve-kooperatiflesme"
      ]
    }
  },
  {
    "id": 32,
    "kaynakTuru": "kurum",
    "ad": "Uçan Süpürge Kadın İletişim ve Araştırma Derneği",
    "kategori": "dernekler",
    "aciklama": "Kadın hakları, iletişim ve araştırma alanında çalışan dernektir.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara / Türkiye",
    "sonBasvuru": null,
    "link": "https://ucansupurgedernegi.org/iletisim/",
    "sonKontrol": null,
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Uçan Süpürge",
      "Uçan Süpürge Kadın İletişim ve Araştırma Derneği"
    ],
    "basvuruNotu": "Resmî iletişim adresi arama dizininde bulundu; tarayıcıda sertifika hatası nedeniyle sayfa açılamadı. Güncel hizmet ve program erişimi doğrulanamadı. Uçan Süpürge Vakfı ayrı bir kuruluştur.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web-kismi",
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-10-24",
      "not": "Resmî iletişim adresi arama dizininde bulundu; tarayıcıda sertifika hatası nedeniyle sayfa açılamadı. Güncel hizmet ve program erişimi doğrulanamadı. Uçan Süpürge Vakfı ayrı bir kuruluştur. 24 Ekim yeniden kontrolünde tam teyit sağlanamadı; belirsiz durum ve boş son kontrol tarihi korundu.",
      "kaynaklar": [
        "https://ucansupurgedernegi.org/iletisim/"
      ]
    }
  },
  {
    "id": 33,
    "kaynakTuru": "kurum",
    "ad": "Kadın Koalisyonu",
    "kategori": "dernekler",
    "aciklama": "Kadınların siyasal katılımı ve toplumsal cinsiyet eşitliği için çalışan örgütlerin dayanışma ağıdır.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadinkoalisyonu.org/kimiz/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Koalisyonu",
      "Sürekli"
    ],
    "basvuruNotu": "Kurumsal bilgi ve savunuculuk çalışmalarına erişilebilir; bireysel burs veya maddi yardım başvuru programı olarak değerlendirilmemelidir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Koalisyonun çalışma alanı ve ağ yapısı kendi tanıtım sayfasından doğrulandı. Bireysel destek kontenjanı doğrulanmadı.",
      "kaynaklar": [
        "https://kadinkoalisyonu.org/kimiz/"
      ]
    }
  },
  {
    "id": 34,
    "kaynakTuru": "kurum",
    "ad": "Türkiye Kadın Dernekleri Federasyonu",
    "kategori": "dernekler",
    "aciklama": "Toplumsal cinsiyet eşitliği ve şiddetle mücadele alanlarında çalışan bağımsız kadın örgütleri federasyonudur.",
    "kimlerBasvurabilir": "Kadınlar ve kadın dernekleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://tkdf.org.tr/sss",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Türkiye Kadın Dernekleri Federasyonu",
      "TKDF",
      "Sürekli"
    ],
    "basvuruNotu": "Federasyonun resmî SSS sayfasında çalışma alanları ve şiddetle ilgili yönlendirme hizmetleri açıklanır; dönemsel eğitim ve projelerin koşulları ayrıca değişebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Federasyonun kimliği, savunuculuk, eğitim ve yönlendirme çalışmaları resmî SSS sayfasından doğrulandı. Program kontenjanı veya her hizmet için kesintisiz erişim garantisi verilmedi.",
      "kaynaklar": [
        "https://tkdf.org.tr/sss"
      ]
    }
  },
  {
    "id": 35,
    "kaynakTuru": "kurum",
    "ad": "Türk Kadınlar Birliği",
    "kategori": "dernekler",
    "aciklama": "Kadın hakları ve eşitlik alanında çalışan Türk Kadınlar Birliği’nin kurumsal bilgi ve şube kaynağıdır.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara / şubeler",
    "sonBasvuru": null,
    "link": "https://www.turkkadinlarbirligi.org/tr",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Türk Kadınlar Birliği"
    ],
    "basvuruNotu": "Resmî site tarayıcıda açılarak kurumsal içerik, şubeler ve duyurular doğrulandı. Her şubede sürekli burs veya bireysel sosyal destek verildiği doğrulanmadı; faaliyet koşullarını ilgili şubeden öğrenebilirsin.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî site tarayıcıda açılarak kurumsal içerik, şubeler ve duyurular doğrulandı. Her şubede sürekli burs veya bireysel sosyal destek verildiği doğrulanmadı; faaliyet koşullarını ilgili şubeden öğrenebilirsin.",
      "kaynaklar": [
        "https://www.turkkadinlarbirligi.org/tr"
      ]
    }
  },
  {
    "id": 36,
    "kaynakTuru": "kurum",
    "ad": "Kadın Eserleri Kütüphanesi ve Bilgi Merkezi",
    "kategori": "dernekler",
    "aciklama": "Kadın tarihi ve kadın hareketi üzerine kitap, arşiv ve çeşitli koleksiyonları bir araya getiren kütüphane ve bilgi merkezidir.",
    "kimlerBasvurabilir": "Araştırmacı, öğrenci, kadınlar",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "link": "https://kadineserleri.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Eserleri Kütüphanesi ve Bilgi Merkezi",
      "Kadın Eserleri Kütüphanesi Vakfı",
      "Sürekli"
    ],
    "basvuruNotu": "Koleksiyonlara erişim ve ziyaret koşulları için kurumun güncel iletişim ve çalışma bilgilerini inceleyebilirsin.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kütüphane, arşiv ve koleksiyon bilgileri resmî siteden doğrulandı; özel etkinlik veya ziyaret randevusu garanti edilmedi.",
      "kaynaklar": [
        "https://kadineserleri.org/"
      ]
    }
  },
  {
    "id": 37,
    "kaynakTuru": "kurum",
    "ad": "Kadının Statüsü Genel Müdürlüğü (KSGM)",
    "kategori": "dernekler",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı bünyesinde kadın politikaları, toplumsal cinsiyet eşitliği ve ilgili çalışmalar hakkında resmî bilgi sunan kamu birimidir.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr/ksgm/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadının Statüsü Genel Müdürlüğü (KSGM)",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "Sürekli"
    ],
    "basvuruNotu": "Kamu bilgilendirme kaynağıdır; tek bir bireysel burs veya maddi yardım başvuru programı değildir. Proje duyurularının koşulları ayrıca incelenebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Bakanlığın güncel KSGM sayfası ve kurumsal faaliyetleri doğrulandı. Eski alt alan adı güncellendi; bireysel yardım hakkı veya açık çağrı iddiası eklenmedi.",
      "kaynaklar": [
        "https://www.aile.gov.tr/ksgm/"
      ]
    }
  },
  {
    "id": 38,
    "kaynakTuru": "hizmet",
    "ad": "Şiddet Önleme ve İzleme Merkezleri (ŞÖNİM)",
    "kategori": "dernekler",
    "aciklama": "Şiddete maruz kalan veya risk altındaki kadınlara destek, izleme ve ilgili hizmetlere yönlendirme sunan merkezlerdir.",
    "kimlerBasvurabilir": "Şiddete maruz kalan veya risk altındaki kadınlar",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr/ksgm/siddete-maruz-kalindiginda/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Şiddet Önleme ve İzleme Merkezleri (ŞÖNİM)",
      "Aile ve Sosyal Hizmetler Bakanlığı"
    ],
    "basvuruNotu": "Bulunduğunuz ildeki ŞÖNİM veya Aile ve Sosyal Hizmetler İl Müdürlüğüne başvurun.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Bakanlığın resmî başvuru yönlendirmesinde ŞÖNİM doğrulandı.",
      "kaynaklar": [
        "https://www.aile.gov.tr/ksgm/siddete-maruz-kalindiginda/"
      ]
    }
  },
  {
    "id": 39,
    "kaynakTuru": "hizmet",
    "ad": "Kadın Konukevleri",
    "kategori": "dernekler",
    "aciklama": "Şiddete maruz kalan veya risk altındaki kadınlara ve beraberindeki çocuklara geçici güvenli barınma ve sosyal destek sunar.",
    "kimlerBasvurabilir": "Şiddet mağduru kadınlar ve çocukları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://aile.gov.tr/sss/kadinin-statusu-genel-mudurlugu/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Kadın Konukevleri",
      "Aile ve Sosyal Hizmetler Bakanlığı"
    ],
    "basvuruNotu": "Konukevi kabulü için il müdürlüğü, ŞÖNİM veya kolluk birimlerine başvurun; yerleştirme değerlendirmeyle yapılır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "ekKategoriler": [
      "barinma"
    ],
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Konukevi hizmeti ve il müdürlüğü, ŞÖNİM veya kolluk üzerinden başvuru yolları doğrulandı.",
      "kaynaklar": [
        "https://aile.gov.tr/sss/kadinin-statusu-genel-mudurlugu/",
        "https://www.aile.gov.tr/ksgm/siddete-maruz-kalindiginda/"
      ]
    }
  },
  {
    "id": 40,
    "kaynakTuru": "kurum",
    "ad": "Türkiye Aile Sağlığı ve Planlaması Vakfı (TAPV)",
    "kategori": "dernekler",
    "aciklama": "Cinsel sağlık ve üreme sağlığı alanında eğitim, danışmanlık ve farkındalık çalışmaları yürüten vakıftır.",
    "kimlerBasvurabilir": "Kadınlar, gençler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tapv.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Türkiye Aile Sağlığı ve Planlaması Vakfı (TAPV)",
      "TAPV",
      "Sürekli"
    ],
    "basvuruNotu": "Eğitim içerikleri ve danışmanlık bilgileri resmî sitede yer alır. Belirli eğitim ve projelerin kayıt koşulları ayrıca incelenebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Vakfın çalışma alanları, danışmanlık bilgisi ve TAPV Akademi bağlantısı doğrulandı; belirli bir kursun açık olduğu varsayılmadı.",
      "kaynaklar": [
        "https://www.tapv.org.tr/"
      ]
    }
  },
  {
    "id": 41,
    "kaynakTuru": "kurum",
    "ad": "AÇEV",
    "kategori": "dernekler",
    "aciklama": "Erken çocukluk gelişimi ile anne ve babaların ebeveynlik becerilerini destekleyen eğitimler yürüten vakıftır.",
    "kimlerBasvurabilir": "Anneler, aileler, yetişkin kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.acev.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "AÇEV",
      "Anne Çocuk Eğitim Vakfı"
    ],
    "basvuruNotu": "Yaş grubu, yerel uygulama ve başvuru takvimi programa göre değişir.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "AÇEV’in anne, baba ve erken çocukluk eğitim programları doğrulandı.",
      "kaynaklar": [
        "https://www.acev.org/"
      ]
    }
  },
  {
    "id": 42,
    "kaynakTuru": "kurum",
    "ad": "TOG (Toplum Gönüllüleri Vakfı)",
    "kategori": "dernekler",
    "aciklama": "Gençlerin sosyal sorumluluk projelerine ve gönüllülük çalışmalarına katılımını destekleyen vakıftır.",
    "kimlerBasvurabilir": "Gençler ve kadınlar (gönüllülük)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tog.org.tr/gonullu-ol",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "TOG (Toplum Gönüllüleri Vakfı)",
      "TOG",
      "Sürekli"
    ],
    "basvuruNotu": "Bu kayıt gönüllülük ve gençlik çalışmalarına ilişkindir. TOG’un 2026–2027 burs başvuruları 2 Ekim 2026’da sona ermiştir; gönüllülük ile burs takvimleri farklıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî gönüllülük sayfası ve ana sayfadaki burs kapanış duyurusu incelendi. Sürekli erişim etiketi gönüllülük kaynağı içindir, burs başvurusunun açık olduğu anlamına gelmez.",
      "kaynaklar": [
        "https://www.tog.org.tr/gonullu-ol",
        "https://www.tog.org.tr/"
      ]
    }
  },
  {
    "id": 43,
    "kaynakTuru": "kurum",
    "ad": "TEGV",
    "kategori": "dernekler",
    "aciklama": "Çocuklara bilişim, sanat, okuma, matematik ve diğer alanlarda eğitim etkinlikleri sunar.",
    "kimlerBasvurabilir": "Gönüllü olmak isteyenler, çocuklar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://tegv.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "TEGV",
      "Türkiye Eğitim Gönüllüleri Vakfı"
    ],
    "basvuruNotu": "Çocuğun yaşına uygun program, etkinlik noktası ve kayıt koşullarını TEGV’den öğrenin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "ekKategoriler": [
      "ebeveynlik"
    ],
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Çocuklara yönelik eğitim etkinlikleri doğrulandı; merkez ve kayıt koşulları programa göre değişir.",
      "kaynaklar": [
        "https://tegv.org/"
      ]
    }
  },
  {
    "id": 44,
    "kaynakTuru": "kurum",
    "ad": "UN Women Türkiye",
    "kategori": "dernekler",
    "aciklama": "Kadınların güçlenmesi, eşitlik, liderlik ve şiddetin önlenmesi için Türkiye’de program ve politika çalışmaları yürütür.",
    "kimlerBasvurabilir": "Kadınlar, STK'lar, kurumlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://turkiye.un.org/tr/315484-un-women-t%C3%BCrkiye-bilgi-notu",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "UN Women Türkiye",
      "BM Kadın Birimi"
    ],
    "basvuruNotu": "Bu kayıt kurum hakkında bilgi içindir. Bireysel destek veya açık başvuru programı olduğu anlamına gelmez.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "UN Women Türkiye çalışmaları BM’nin güncel resmî bilgi notuyla doğrulandı; eski site doğrudan erişimi 403 döndürdü.",
      "kaynaklar": [
        "https://turkiye.un.org/tr/315484-un-women-t%C3%BCrkiye-bilgi-notu"
      ]
    }
  },
  {
    "id": 45,
    "kaynakTuru": "kurum",
    "ad": "UNFPA Türkiye",
    "kategori": "dernekler",
    "aciklama": "UNFPA Türkiye; cinsel sağlık ve üreme sağlığı, toplumsal cinsiyet eşitliği ve insani yardım alanlarında bilgi ve programlar sunar.",
    "kimlerBasvurabilir": "Kadınlar, genç kızlar, mülteciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://turkiye.unfpa.org/tr",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "UNFPA Türkiye",
      "BM Nüfus Fonu",
      "Sürekli"
    ],
    "basvuruNotu": "Kurumsal program ve yayınlara erişim içindir; bireysel yardım, burs veya hizmet başvurularının uygunluk koşulları ilgili proje kapsamında değişir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Türkiye ofisinin resmî sayfası, çalışma başlıkları ve güncel yayınları doğrulandı. Bireysel başvuruya açık bir program veya kontenjan garanti edilmedi.",
      "kaynaklar": [
        "https://turkiye.unfpa.org/tr"
      ]
    }
  },
  {
    "id": 46,
    "kaynakTuru": "kurum",
    "ad": "SGDD-ASAM",
    "kategori": "dernekler",
    "aciklama": "Sosyal Gelişim ve Dayanışma Derneği (SGDD-ASAM), ihtiyaç sahiplerine psikososyal destek ve koruma, sağlık, eğitim ve hukuk alanlarında danışmanlık çalışmaları yürütür.",
    "kimlerBasvurabilir": "Göçmen ve sığınmacı kadınlar",
    "sehir": "Çeşitli iller",
    "sonBasvuru": null,
    "link": "https://sgdd.org.tr/degerlerimiz/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "SGDD-ASAM",
      "Sığınmacılar ve Göçmenlerle Dayanışma Derneği",
      "Sürekli"
    ],
    "basvuruNotu": "Destek kapsamı ve yerel erişim, ilgili ofis ve projeye göre değişebilir. Bulunduğun yerdeki hizmetler için kurumla iletişime geçebilirsin.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Güncel kurum adı ve danışmanlık çalışma alanları kendi resmî sayfasından doğrulandı; yerel kontenjan veya tüm illerde hizmet garantisi verilmedi.",
      "kaynaklar": [
        "https://sgdd.org.tr/degerlerimiz/"
      ]
    }
  },
  {
    "id": 47,
    "kaynakTuru": "kurum",
    "ad": "Hayata Destek Derneği",
    "kategori": "dernekler",
    "aciklama": "Afetten etkilenen ve risk altındaki bireylerin hak ve hizmetlere erişimi için koruma ve psikososyal destek çalışmaları yürütür.",
    "kimlerBasvurabilir": "Dezavantajlı kadınlar, göçmenler",
    "sehir": "Çeşitli iller",
    "sonBasvuru": null,
    "link": "https://www.hayatadestek.org/programlarimiz/koruma/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Hayata Destek Derneği",
      "Hayata Destek"
    ],
    "basvuruNotu": "Hizmet bölgesi, uygunluk ve başvuru yolu için kurumun güncel iletişim kanallarından bilgi alın.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "ekKategoriler": [
      "barinma"
    ],
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Hak ve hizmetlere erişim, vaka yönetimi ve psikososyal destek çalışmaları doğrulandı.",
      "kaynaklar": [
        "https://www.hayatadestek.org/programlarimiz/koruma/"
      ]
    }
  },
  {
    "id": 48,
    "kaynakTuru": "kurum",
    "ad": "USİKAD",
    "kategori": "dernekler",
    "aciklama": "Uluslararası Sanayici ve İş Kadınları Derneği, kadınların iş yaşamındaki katılımını güçlendirmeye yönelik çalışmalar yürütür.",
    "kimlerBasvurabilir": "Sanayide çalışan / girişimci kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://usikad.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Uluslararası Sanayici İş Kadınları Derneği",
      "USİKAD"
    ],
    "basvuruNotu": "Resmî alan adı ve derneğin eğitim, iş ağı ve kapasite geliştirme amaçları doğrulandı. Belirli bir mentorluk programı için açık başvuru veya ortak takvim doğrulanmadı.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî alan adı ve derneğin eğitim, iş ağı ve kapasite geliştirme amaçları doğrulandı. Belirli bir mentorluk programı için açık başvuru veya ortak takvim doğrulanmadı.",
      "kaynaklar": [
        "https://usikad.org/",
        "https://usikad.org/dernek-amaci/"
      ]
    }
  },
  {
    "id": 49,
    "kaynakTuru": "kurum",
    "ad": "Habitat Derneği",
    "kategori": "dernekler",
    "aciklama": "Dijital beceriler, girişimcilik ve gönüllülük alanlarında sosyal projeler ve eğitimler yürüten dernektir.",
    "kimlerBasvurabilir": "Gençler ve kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://habitatdernegi.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dernek",
      "destek",
      "dayanışma",
      "Habitat Derneği"
    ],
    "basvuruNotu": "Kurumsal çalışmalar ve gönüllülük bilgileri incelendi. Belirli eğitimlerin başvuru tarihleri ve hedef grupları kendi duyurularına göre değişir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kurumsal çalışmalar ve gönüllülük bilgileri incelendi. Belirli eğitimlerin başvuru tarihleri ve hedef grupları kendi duyurularına göre değişir.",
      "kaynaklar": [
        "https://habitatdernegi.org/"
      ]
    }
  },
  {
    "id": 50,
    "kaynakTuru": "program",
    "ad": "Geleceği Yazan Kadınlar",
    "kategori": "egitimler",
    "aciklama": "Turkcell ve TOBB iş birliğiyle kadınların yazılım becerilerini, teknoloji alanındaki istihdamını ve girişimciliğini desteklemek üzere başlatılan projedir.",
    "kimlerBasvurabilir": "İlgili proje döneminin katılım koşullarını sağlayan kadınlar",
    "sehir": "Türkiye / online",
    "sonBasvuru": null,
    "link": "https://gelecegiyazanlar.turkcell.com.tr/hakkimizda",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Turkcell",
      "Geleceği Yazan Kadınlar"
    ],
    "basvuruNotu": "Projenin varlığı ve amacı Turkcell’in resmî açıklamasından doğrulandı. Yeni bir kadınlara özel dönem veya ortak son tarih doğrulanmadı; platformdaki genel eğitimlere erişim, bu projeye açık başvuru anlamına gelmez.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Projenin varlığı ve amacı Turkcell’in resmî açıklamasından doğrulandı. Yeni bir kadınlara özel dönem veya ortak son tarih doğrulanmadı; platformdaki genel eğitimlere erişim, bu projeye açık başvuru anlamına gelmez.",
      "kaynaklar": [
        "https://gelecegiyazanlar.turkcell.com.tr/hakkimizda"
      ]
    }
  },
  {
    "id": 51,
    "kaynakTuru": "program",
    "ad": "Kodluyoruz",
    "kategori": "egitimler",
    "aciklama": "Yazılım, dijital beceriler ve mentorluk alanlarında eğitim programları sunar.",
    "kimlerBasvurabilir": "Yazılım öğrenmek isteyenler (kadınlara özel kohortlar da açılıyor)",
    "sehir": "Türkiye / online",
    "sonBasvuru": null,
    "link": "https://www.kodluyoruz.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Kodluyoruz"
    ],
    "basvuruNotu": "Ücretsiz programların yaş, katılım ve son başvuru koşullarını ilgili duyurudan kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Güncel resmî eğitim duyuruları arama dizininden doğrulandı; eski kök alan adının doğrudan erişimi sınırlıydı.",
      "kaynaklar": [
        "https://www.kodluyoruz.org/",
        "https://www.kodluyoruz.org/product/dijital-dunyada-guclu-kizlar-2"
      ]
    }
  },
  {
    "id": 52,
    "kaynakTuru": "bilgi",
    "ad": "BTK Akademi",
    "kategori": "egitimler",
    "aciklama": "Bilişim ve teknoloji alanlarında çevrim içi içerikler ile dönemsel eğitimler sunan BTK eğitim platformudur.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.btkakademi.gov.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "BTK",
      "BTK Akademi"
    ],
    "basvuruNotu": "Resmî eğitim duyurularında ücretsiz eğitim ve sertifika olanakları doğrulandı. Yüz yüze veya canlı eğitimlerde ön koşul, kontenjan ve ayrı başvuru takvimi olabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî eğitim duyurularında ücretsiz eğitim ve sertifika olanakları doğrulandı. Yüz yüze veya canlı eğitimlerde ön koşul, kontenjan ve ayrı başvuru takvimi olabilir.",
      "kaynaklar": [
        "https://www.btkakademi.gov.tr/portal/en/news/btk-akademi-de-yeni-bir-donem-yepyeni-bir-heyecan-guz-donemi-egitimleri-basliyor-12354",
        "https://www.turkpatent.gov.tr/haberler/turkpatent-ve-btk-akademi-is-birligiyle-cevrim-ici-sinai-mulkiyet-haklari-egitimi-yayinlandi"
      ]
    }
  },
  {
    "id": 53,
    "kaynakTuru": "bilgi",
    "ad": "Grow with Google — Dijital Eğitim Kaynakları",
    "kategori": "egitimler",
    "aciklama": "Dijital beceriler, yapay zekâ ve kariyer eğitimlerine erişim sağlayan Google kaynağıdır.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://grow.google/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Google Dijital Atölye",
      "Google Türkiye"
    ],
    "basvuruNotu": "Eski Dijital Atölye adresi bu sayfaya yönleniyor. Eğitimlerin dil, bölge, ücret ve ücretsiz erişim koşulları değişebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Eski Dijital Atölye adresi Grow with Google’a yönleniyor; tüm eğitimlerin ücretsiz olduğu iddiası kaldırıldı.",
      "kaynaklar": [
        "https://grow.google/"
      ]
    }
  },
  {
    "id": 54,
    "kaynakTuru": "program",
    "ad": "Google Kariyer Sertifikaları",
    "kategori": "egitimler",
    "aciklama": "Google’ın veri analizi, proje yönetimi, kullanıcı deneyimi ve diğer alanlarda çevrim içi mesleki sertifika programlarını tanıtan kaynağıdır.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://grow.google/certificates/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Google",
      "Google Kariyer Sertifikaları"
    ],
    "basvuruNotu": "Programlar ve kayıt bağlantıları doğrulandı. Ücretsiz sertifika veya mali yardım garantisi verilmez; ücret, dil ve erişim koşullarını seçtiğin programın kayıt sayfasından inceleyebilirsin.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Programlar ve kayıt bağlantıları doğrulandı. Ücretsiz sertifika veya mali yardım garantisi verilmez; ücret, dil ve erişim koşullarını seçtiğin programın kayıt sayfasından inceleyebilirsin.",
      "kaynaklar": [
        "https://grow.google/certificates/"
      ]
    }
  },
  {
    "id": 55,
    "kaynakTuru": "program",
    "ad": "Coursera Mali Yardım",
    "kategori": "egitimler",
    "aciklama": "Coursera’da uygun kurslar için mali yardım başvurusu seçeneği bulunur.",
    "kimlerBasvurabilir": "Mali yardım sunulan kursların başvuru ve değerlendirme koşullarını sağlayan öğrenenler",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.coursera.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Coursera",
      "Coursera Mali Yardım"
    ],
    "basvuruNotu": "Resmî ana sayfanın SSS bölümünde mali yardım seçeneği doğrulandı. Her kurs için geçerli değildir; ücretsiz ön izleme, deneme üyeliği ve mali yardım farklı seçeneklerdir. Yardım onayı veya sertifikanın tamamen ücretsiz olması garanti edilmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî ana sayfanın SSS bölümünde mali yardım seçeneği doğrulandı. Her kurs için geçerli değildir; ücretsiz ön izleme, deneme üyeliği ve mali yardım farklı seçeneklerdir. Yardım onayı veya sertifikanın tamamen ücretsiz olması garanti edilmez.",
      "kaynaklar": [
        "https://www.coursera.org/"
      ]
    }
  },
  {
    "id": 56,
    "kaynakTuru": "bilgi",
    "ad": "edX (ücretsiz dinleme)",
    "kategori": "egitimler",
    "aciklama": "edX’te uygun derslerin içeriklerine ücretsiz dinleyici (audit) seçeneğiyle erişilebilir.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.edx.org/about-us/how-it-works",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "edX",
      "edX (ücretsiz dinleme)"
    ],
    "basvuruNotu": "Ücretsiz dinleyici erişimi sınırlıdır; notlandırılan değerlendirmeler ve doğrulanmış sertifika bu seçeneğe dahil değildir. Her programın ücretsiz olduğu varsayılmamalıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz dinleyici erişimi sınırlıdır; notlandırılan değerlendirmeler ve doğrulanmış sertifika bu seçeneğe dahil değildir. Her programın ücretsiz olduğu varsayılmamalıdır.",
      "kaynaklar": [
        "https://www.edx.org/about-us/how-it-works"
      ]
    }
  },
  {
    "id": 57,
    "kaynakTuru": "bilgi",
    "ad": "Microsoft Learn",
    "kategori": "egitimler",
    "aciklama": "Microsoft ürünleri ve teknolojileri için kendi hızında ilerleyebileceğin öğrenme yolları ve modüller sunar.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://learn.microsoft.com/en-us/training/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Microsoft",
      "Microsoft Learn"
    ],
    "basvuruNotu": "Eğitim modüllerinin ücretsiz olduğu resmî SSS’den doğrulandı. Eğitim içeriği ile sertifikasyon sınavı ve ürün kullanım maliyetleri ayrı değerlendirilmelidir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Eğitim modüllerinin ücretsiz olduğu resmî SSS’den doğrulandı. Eğitim içeriği ile sertifikasyon sınavı ve ürün kullanım maliyetleri ayrı değerlendirilmelidir.",
      "kaynaklar": [
        "https://learn.microsoft.com/en-us/training/",
        "https://learn.microsoft.com/en-us/training/support/faq"
      ]
    }
  },
  {
    "id": 58,
    "kaynakTuru": "bilgi",
    "ad": "Cisco Networking Academy",
    "kategori": "egitimler",
    "aciklama": "Ağ teknolojileri, siber güvenlik ve programlama alanlarında öğrenme kaynakları sunan Cisco eğitim platformudur.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.netacad.com/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Cisco",
      "Cisco Networking Academy"
    ],
    "basvuruNotu": "Cisco’nun resmî tanıtımında ücretsiz, kendi hızında çevrim içi kurslar doğrulandı. Her sınavın, sertifikanın veya kurum üzerinden verilen eğitimin ücretsiz olduğu iddia edilmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Cisco’nun resmî tanıtımında ücretsiz, kendi hızında çevrim içi kurslar doğrulandı. Her sınavın, sertifikanın veya kurum üzerinden verilen eğitimin ücretsiz olduğu iddia edilmez.",
      "kaynaklar": [
        "https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html"
      ]
    }
  },
  {
    "id": 59,
    "kaynakTuru": "bilgi",
    "ad": "AWS Skill Builder",
    "kategori": "egitimler",
    "aciklama": "AWS’nin bulut ve yapay zekâ alanlarında dijital eğitim kaynakları sunduğu Skill Builder platformudur.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://aws.amazon.com/training/digital/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Amazon Web Services",
      "AWS Skill Builder"
    ],
    "basvuruNotu": "Ücretsiz öğrenme kaynakları ile ücretli abonelik kapsamındaki uygulama deneyimleri resmî sayfada ayrı sunuluyor. Tüm içerik veya sınavların ücretsiz olduğu varsayılmamalıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz öğrenme kaynakları ile ücretli abonelik kapsamındaki uygulama deneyimleri resmî sayfada ayrı sunuluyor. Tüm içerik veya sınavların ücretsiz olduğu varsayılmamalıdır.",
      "kaynaklar": [
        "https://aws.amazon.com/training/digital/"
      ]
    }
  },
  {
    "id": 60,
    "kaynakTuru": "bilgi",
    "ad": "IBM SkillsBuild",
    "kategori": "egitimler",
    "aciklama": "IBM’in yapay zekâ, siber güvenlik, veri ve kariyer becerileri alanlarında ücretsiz öğrenme içerikleri sunduğu platformdur.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://skillsbuild.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "IBM",
      "IBM SkillsBuild"
    ],
    "basvuruNotu": "Ücretsiz eğitim kapsamı ve yetişkin, üniversite ve lise öğrencilerine yönelik öğrenme yolları doğrulandı. Her içeriğin dili ve katılım koşulları ayrıca incelenebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz eğitim kapsamı ve yetişkin, üniversite ve lise öğrencilerine yönelik öğrenme yolları doğrulandı. Her içeriğin dili ve katılım koşulları ayrıca incelenebilir.",
      "kaynaklar": [
        "https://skillsbuild.org/"
      ]
    }
  },
  {
    "id": 61,
    "kaynakTuru": "bilgi",
    "ad": "CS50 (Harvard)",
    "kategori": "egitimler",
    "aciklama": "Harvard’ın bilgisayar bilimine giriş dersi CS50x, açık ders materyalleriyle çevrim içi öğrenme olanağı sunar.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://cs50.harvard.edu/x/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Harvard Üniversitesi",
      "CS50 (Harvard)"
    ],
    "basvuruNotu": "2026 CS50x ders içeriğine ücretsiz katılım doğrulandı. Farklı sertifika ve akademik kredi seçenekleri ayrı koşullara tabidir; ücretsiz ders erişimi bunların tamamını kapsamaz.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "2026 CS50x ders içeriğine ücretsiz katılım doğrulandı. Farklı sertifika ve akademik kredi seçenekleri ayrı koşullara tabidir; ücretsiz ders erişimi bunların tamamını kapsamaz.",
      "kaynaklar": [
        "https://cs50.harvard.edu/x/"
      ]
    }
  },
  {
    "id": 62,
    "kaynakTuru": "bilgi",
    "ad": "MIT OpenCourseWare",
    "kategori": "egitimler",
    "aciklama": "MIT’nin üniversite derslerine ait açık eğitim materyallerini ücretsiz yayımladığı kaynaktır.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://ocw.mit.edu/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "MIT",
      "MIT OpenCourseWare"
    ],
    "basvuruNotu": "Ücretsiz ders materyali erişimi doğrulandı. Bu kayıt üniversiteye kayıt, diploma veya sertifika programına kabul anlamına gelmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz ders materyali erişimi doğrulandı. Bu kayıt üniversiteye kayıt, diploma veya sertifika programına kabul anlamına gelmez.",
      "kaynaklar": [
        "https://ocw.mit.edu/"
      ]
    }
  },
  {
    "id": 63,
    "kaynakTuru": "bilgi",
    "ad": "OpenLearn",
    "kategori": "egitimler",
    "aciklama": "The Open University’nin ücretsiz kurslar, makaleler ve etkileşimli öğrenme içerikleri sunduğu platformdur.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.open.edu/openlearn/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Open University",
      "OpenLearn"
    ],
    "basvuruNotu": "Ücretsiz öğrenme kaynakları ve kurs kataloğu doğrulandı. Tamamlama belgesi veya rozet olanakları seçilen kursa göre incelenebilir; üniversite diplomasıyla eşdeğerlik iddia edilmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz öğrenme kaynakları ve kurs kataloğu doğrulandı. Tamamlama belgesi veya rozet olanakları seçilen kursa göre incelenebilir; üniversite diplomasıyla eşdeğerlik iddia edilmez.",
      "kaynaklar": [
        "https://www.open.edu/openlearn/"
      ]
    }
  },
  {
    "id": 64,
    "kaynakTuru": "bilgi",
    "ad": "Khan Academy Türkçe",
    "kategori": "egitimler",
    "aciklama": "Khan Academy’nin Türkçe ders, video ve alıştırmalar sunan ücretsiz öğrenme kaynağıdır.",
    "kimlerBasvurabilir": "Öğrenciler ve yetişkinler",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://tr.khanacademy.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "Khan Academy",
      "Khan Academy Türkçe"
    ],
    "basvuruNotu": "Türkçe içerik ve ücretsiz erişim, Khan Academy’nin kendi tanıtım ve dil desteği açıklamalarından doğrulandı. Sertifika veya diploma programı olarak sunulmaz.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Türkçe içerik ve ücretsiz erişim, Khan Academy’nin kendi tanıtım ve dil desteği açıklamalarından doğrulandı. Sertifika veya diploma programı olarak sunulmaz.",
      "kaynaklar": [
        "https://support.khanacademy.org/hc/en-us/articles/360037662392-T%C3%BCrk-tak%C4%B1m%C4%B1-The-Turkish-Team",
        "https://support.khanacademy.org/hc/en-us/articles/226457308-What-languages-is-Khan-Academy-available-in"
      ]
    }
  },
  {
    "id": 65,
    "kaynakTuru": "program",
    "ad": "Patika.dev",
    "kategori": "egitimler",
    "aciklama": "Yazılım ve yapay zekâ alanlarında eğitim ve bootcamp programları sunar.",
    "kimlerBasvurabilir": "Yazılım öğrenmek isteyenler",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.patika.dev/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Patika.dev"
    ],
    "basvuruNotu": "Programların ücret, katılım ve dönem koşulları farklıdır; ücretsiz programı kendi duyurusundan seçin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Eğitim ve bootcamp hizmetleri doğrulandı; ücretsiz ve ücretli programlar ayrıştırıldı.",
      "kaynaklar": [
        "https://www.patika.dev/"
      ]
    }
  },
  {
    "id": 66,
    "kaynakTuru": "program",
    "ad": "İŞKUR Mesleki Eğitim Kursları",
    "kategori": "egitimler",
    "aciklama": "İŞKUR’a kayıtlı iş arayanların meslek edinmesini destekleyen mesleki eğitim kurslarıdır.",
    "kimlerBasvurabilir": "İş arayan kadınlar ve erkekler",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://engelsiz.iskur.gov.tr/sikca-sorulan-sorular/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "İŞKUR Mesleki Eğitim Kursları",
      "İŞKUR"
    ],
    "basvuruNotu": "Açık kursları İŞKUR üzerinden sorgulayın; katılım ve ödeme koşulları kursa göre değişir.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Mesleki eğitim kursları resmî SSS’de doğrulandı; mevcut kurs kontenjanı teyit edilmedi.",
      "kaynaklar": [
        "https://engelsiz.iskur.gov.tr/sikca-sorulan-sorular/"
      ]
    }
  },
  {
    "id": 68,
    "kaynakTuru": "program",
    "ad": "Halk Eğitim Merkezleri (Hayat Boyu Öğrenme)",
    "kategori": "egitimler",
    "aciklama": "Halk eğitimi merkezleri mesleki beceri ve kişisel gelişim alanlarında yaygın eğitim kursları sunar.",
    "kimlerBasvurabilir": "18 yaş üstü herkes",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://hbogm.meb.gov.tr/www/sss.php",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Halk Eğitim Merkezleri (Hayat Boyu Öğrenme)",
      "Milli Eğitim Bakanlığı"
    ],
    "basvuruNotu": "e-Yaygın üzerinden ön kayıt yapılabilir; kesin kayıt, kurs açılışı ve kontenjan için ilgili halk eğitimi merkeziyle görüşün.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Halk eğitimi kursları ve e-Yaygın ön kayıt yolu resmî SSS’den doğrulandı.",
      "kaynaklar": [
        "https://hbogm.meb.gov.tr/www/sss.php"
      ]
    }
  },
  {
    "id": 70,
    "kaynakTuru": "program",
    "ad": "Anadolu Üniversitesi Açıköğretim (AÖF)",
    "kategori": "egitimler",
    "aciklama": "Anadolu Üniversitesi Açıköğretim programları için resmî kayıt takvimi ve eğitim bilgilerini sunar.",
    "kimlerBasvurabilir": "İlgili kabul türünün yerleştirme, ikinci üniversite veya diğer kayıt koşullarını sağlayan adaylar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.anadolu.edu.tr/acikogretim/acikogretim-akademik-takvim/turkiye-programlari-2026-2027-ogretim-yili-akademik-takvim",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "Anadolu Üniversitesi",
      "Anadolu Üniversitesi Açıköğretim (AÖF)"
    ],
    "basvuruNotu": "2026–2027 akademik takvimi doğrulandı. İkinci üniversite ve kayıt yenileme için 23 Ekim 2026, diğer kabul türleri için farklı tarihler bulunuyor. Tüm programa ortak son tarih veya açık başvuru durumu atanmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "2026–2027 akademik takvimi doğrulandı. İkinci üniversite ve kayıt yenileme için 23 Ekim 2026, diğer kabul türleri için farklı tarihler bulunuyor. Tüm programa ortak son tarih veya açık başvuru durumu atanmadı.",
      "kaynaklar": [
        "https://www.anadolu.edu.tr/acikogretim/acikogretim-akademik-takvim/turkiye-programlari-2026-2027-ogretim-yili-akademik-takvim"
      ]
    }
  },
  {
    "id": 71,
    "kaynakTuru": "program",
    "ad": "İSMEK",
    "kategori": "egitimler",
    "aciklama": "Enstitü İstanbul İSMEK, meslek ve beceri alanlarında eğitimler sunar.",
    "kimlerBasvurabilir": "İstanbul'da yaşayan yetişkinler",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "link": "https://enstitu.ibb.istanbul/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "İstanbul Büyükşehir Belediyesi",
      "İSMEK"
    ],
    "basvuruNotu": "Resmî eğitim kataloğu ve kayıt SSS’si doğrulandı. Kayıt uygulamasına İBB Hesap veya İstanbul Senin üzerinden erişiliyor. Kontenjan ve başvuru tarihleri eğitime göre değişir; tek bir açık dönem varsayılmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî eğitim kataloğu ve kayıt SSS’si doğrulandı. Kayıt uygulamasına İBB Hesap veya İstanbul Senin üzerinden erişiliyor. Kontenjan ve başvuru tarihleri eğitime göre değişir; tek bir açık dönem varsayılmadı.",
      "kaynaklar": [
        "https://enstitu.ibb.istanbul/",
        "https://enstitu.ibb.istanbul/portal/kayitsistemiSSS.aspx"
      ]
    }
  },
  {
    "id": 72,
    "kaynakTuru": "program",
    "ad": "Belediye Kurs Merkezleri — Ankara BELMEK Örneği",
    "kategori": "egitimler",
    "aciklama": "Belediyelerin meslek ve el sanatları kurslarına örnek olarak Ankara Büyükşehir Belediyesi BELMEK kaynağını sunar.",
    "kimlerBasvurabilir": "BELMEK’in ilgili kurs ve kayıt koşullarını sağlayan katılımcılar",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "link": "https://www.ankara.bel.tr/hizmetler/egitim-ve-kurslar/belmek",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "Büyükşehir belediyeleri",
      "Belediye Kurs Merkezleri — Ankara BELMEK Örneği"
    ],
    "basvuruNotu": "Ankara için doğru kurs adı BELMEK olarak düzeltildi. Bu kayıtla doğrulanan örnek Ankara’dır; diğer belediyelerin ücret, uygunluk, kurs ve takvim koşulları ayrı incelenebilir.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ankara için doğru kurs adı BELMEK olarak düzeltildi. Bu kayıtla doğrulanan örnek Ankara’dır; diğer belediyelerin ücret, uygunluk, kurs ve takvim koşulları ayrı incelenebilir.",
      "kaynaklar": [
        "https://www.ankara.bel.tr/hizmetler/egitim-ve-kurslar/belmek"
      ]
    }
  },
  {
    "id": 74,
    "kaynakTuru": "program",
    "ad": "Geleceğin Kadın Liderleri",
    "kategori": "egitimler",
    "aciklama": "KAGİDER’in Sanofi desteğiyle yeni mezun genç kadınları iş yaşamına hazırlamak için yürüttüğü eğitim ve kariyer gelişimi projesidir.",
    "kimlerBasvurabilir": "Üniversiteden yeni mezun, ilgili dönem koşullarını sağlayan genç kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kagider.org/tr/genc-kagider/projeler/gelecegin-kadin-liderleri",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "KAGİDER + Sanofi Türkiye",
      "Geleceğin Kadın Liderleri"
    ],
    "basvuruNotu": "Projenin hedef kitlesi ve dört günlük eğitim yapısı doğrulandı. Güncel dönem başvurusu veya kesin son tarih bu tanıtım sayfasından doğrulanmadığı için durum belirsiz bırakıldı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Projenin hedef kitlesi ve dört günlük eğitim yapısı doğrulandı. Güncel dönem başvurusu veya kesin son tarih bu tanıtım sayfasından doğrulanmadığı için durum belirsiz bırakıldı.",
      "kaynaklar": [
        "https://kagider.org/tr/genc-kagider/projeler/gelecegin-kadin-liderleri"
      ]
    }
  },
  {
    "id": 75,
    "kaynakTuru": "program",
    "ad": "Dijitalde Hayat Kolay",
    "kategori": "egitimler",
    "aciklama": "Türk Telekom’un TOBB, UNDP ve Habitat Derneği iş birliğiyle kadınların dijital becerilerini geliştirmek için yürüttüğü projedir.",
    "kimlerBasvurabilir": "İlgili eğitim döneminin koşullarını sağlayan 18 yaş üstü kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.turktelekom.com.tr/turkiyeyedeger/dijitalde-hayat-kolay",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Türk Telekom",
      "Dijitalde Hayat Kolay"
    ],
    "basvuruNotu": "Resmî proje açıklaması dijital okuryazarlık ve pazarlama eğitimlerini doğruluyor. Eğitim, mentorluk ve dönemsel destekler aynı başvuru değildir; güncel hibe veya açık kayıt takvimi doğrulanmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî proje açıklaması dijital okuryazarlık ve pazarlama eğitimlerini doğruluyor. Eğitim, mentorluk ve dönemsel destekler aynı başvuru değildir; güncel hibe veya açık kayıt takvimi doğrulanmadı.",
      "kaynaklar": [
        "https://www.turktelekom.com.tr/turkiyeyedeger/dijitalde-hayat-kolay"
      ]
    }
  },
  {
    "id": 76,
    "kaynakTuru": "bilgi",
    "ad": "Meta Blueprint",
    "kategori": "egitimler",
    "aciklama": "Meta teknolojileriyle dijital pazarlama, reklam ve topluluk yönetimi konularında çevrim içi eğitim kataloğudur.",
    "kimlerBasvurabilir": "Küçük işletme sahipleri, girişimciler",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.facebookblueprint.com/student/catalog/list",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "sertifika",
      "Meta",
      "Meta Blueprint"
    ],
    "basvuruNotu": "Güncel katalog ve ücretsiz kurslara yönlendirme doğrulandı. Sertifikasyon sınavları ve etkinliklerin koşulları ayrı incelenebilir; bazı içerikler giriş gerektirebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Güncel katalog ve ücretsiz kurslara yönlendirme doğrulandı. Sertifikasyon sınavları ve etkinliklerin koşulları ayrı incelenebilir; bazı içerikler giriş gerektirebilir.",
      "kaynaklar": [
        "https://www.facebookblueprint.com/student/catalog/list",
        "https://asp.facebookblueprint.com/student/path/565368/activity/547786"
      ]
    }
  },
  {
    "id": 77,
    "kaynakTuru": "bilgi",
    "ad": "Duolingo",
    "kategori": "egitimler",
    "aciklama": "Ücretsiz dil öğrenme dersleri sunan; isteğe bağlı ücretli abonelik seçenekleri de bulunan platformdur.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Online",
    "sonBasvuru": null,
    "link": "https://www.duolingo.com/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kurs",
      "Duolingo"
    ],
    "basvuruNotu": "Derslere ücretsiz erişim ile Super / Max aboneliklerinin ayrı olduğu Duolingo’nun resmî açıklamasından doğrulandı. Bu kayıt ücretli dil sınavını kapsamaz.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Derslere ücretsiz erişim ile Super / Max aboneliklerinin ayrı olduğu Duolingo’nun resmî açıklamasından doğrulandı. Bu kayıt ücretli dil sınavını kapsamaz.",
      "kaynaklar": [
        "https://blog.duolingo.com/is-duolingo-free/"
      ]
    }
  },
  {
    "id": 78,
    "kaynakTuru": "program",
    "ad": "EY Girişimci Kadın Liderler Programı — 2027 Dönemi",
    "kategori": "girisimcilik",
    "aciklama": "EY’nin kadın girişimcilere eğitim, mentorluk, iş geliştirme ve uluslararası ağ olanakları sunduğu ücretsiz programdır.",
    "kimlerBasvurabilir": "Türkiye merkezli en az 3 yıllık şirkette en az %25 hisse sahibi ve karar verici kadınlar; son iki yıl yıllık ciro koşulu 20 milyon TL üzeridir",
    "sehir": "Türkiye",
    "sonBasvuru": "2026-11-15",
    "link": "https://www.ey.com/tr_tr/newsroom/2026/9/ey-girisimci-kadin-liderler-programi-2026-basvurulari-acildi",
    "sonKontrol": "2026-10-24",
    "etiketler": [
      "girişimcilik",
      "EY Türkiye",
      "EY Girişimci Kadın Liderler Programı — 2027 Dönemi"
    ],
    "basvuruNotu": "Resmî duyurunun başlığı 2027 dönemini belirtir; başvurular 15 Kasım 2026’ya kadar sürüyor. Şirket yaşı, ciro, hisse ve karar verici olma koşulları vardır.",
    "basvuruDurumu": "acik",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-24",
      "not": "Resmî duyurunun başlığı 2027 dönemini belirtir; başvurular 15 Kasım 2026’ya kadar sürüyor. Şirket yaşı, ciro, hisse ve karar verici olma koşulları vardır.",
      "kaynaklar": [
        "https://www.ey.com/tr_tr/newsroom/2026/9/ey-girisimci-kadin-liderler-programi-2026-basvurulari-acildi"
      ]
    }
  },
  {
    "id": 80,
    "kaynakTuru": "program",
    "ad": "KOSGEB e-Akademi Girişimcilik Eğitimleri",
    "kategori": "girisimcilik",
    "aciklama": "KOSGEB e-Akademi üzerinden geleneksel ve ileri girişimcilik eğitimlerine çevrim içi erişim sağlanır.",
    "kimlerBasvurabilir": "KOSGEB desteği almak isteyenler",
    "sehir": "Türkiye / online",
    "sonBasvuru": null,
    "link": "https://www.kosgeb.gov.tr/site/tr/genel/detay/7472/kosgeb-eakademi",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "KOSGEB",
      "KOSGEB e-Akademi Girişimcilik Eğitimleri"
    ],
    "basvuruNotu": "Ücretsiz ve aracısız girişimcilik eğitimi erişimi resmî açıklamadan doğrulandı. Eski uygulamalı eğitim adı güncellendi. Eğitimi tamamlamak tek başına destek veya kredi hakkı sağlamaz.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz ve aracısız girişimcilik eğitimi erişimi resmî açıklamadan doğrulandı. Eski uygulamalı eğitim adı güncellendi. Eğitimi tamamlamak tek başına destek veya kredi hakkı sağlamaz.",
      "kaynaklar": [
        "https://www.kosgeb.gov.tr/site/tr/genel/detay/7472/kosgeb-eakademi"
      ]
    }
  },
  {
    "id": 81,
    "kaynakTuru": "program",
    "ad": "Halkbank Kadın Girişimci Kredisi",
    "kategori": "girisimcilik",
    "aciklama": "Kadın girişimcilerin işletme finansmanı için Halkbank tarafından sunulan kredi ürünüdür.",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.halkbank.com.tr/tr/ureten-kadinlar/kadin-girisimci-kredileri/kadin-girisimci-kredisi",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "Halkbank Kadın Girişimci Kredisi",
      "Halkbank"
    ],
    "basvuruNotu": "Bu bir kredidir. Faiz, vade, teminat ve uygunluk koşulları için bankanın güncel ürün sayfasını ve şubesini kontrol edin.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kadın girişimci kredi ürünü doğrulandı; kredi onayı ve maliyetler bankanın değerlendirmesine bağlıdır.",
      "kaynaklar": [
        "https://www.halkbank.com.tr/tr/ureten-kadinlar/kadin-girisimci-kredileri/kadin-girisimci-kredisi"
      ]
    }
  },
  {
    "id": 83,
    "kaynakTuru": "program",
    "ad": "Girişimde Kadın Gücü Projesi",
    "kategori": "girisimcilik",
    "aciklama": "İş Bankası ve TÜRKONFED iş birliğiyle kadın girişimcilerin dijitalleşme ve iş geliştirme becerilerini destekleyen projedir.",
    "kimlerBasvurabilir": "İlgili faaliyet koşullarını sağlayan kadın girişimciler ve girişimci adayları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.isbank.com.tr/is-ticari/girisimde-kadin-gucu",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Türkiye İş Bankası",
      "Girişimde Kadın Gücü Projesi"
    ],
    "basvuruNotu": "Resmî proje sayfasında eğitim, mentorluk ve buluşma çalışmaları doğrulandı. Bunlar doğrudan hibe veya kredi garantisi değildir; güncel eğitim / etkinlik kayıt takvimi ayrıca incelenebilir.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî proje sayfasında eğitim, mentorluk ve buluşma çalışmaları doğrulandı. Bunlar doğrudan hibe veya kredi garantisi değildir; güncel eğitim / etkinlik kayıt takvimi ayrıca incelenebilir.",
      "kaynaklar": [
        "https://www.isbank.com.tr/is-ticari/girisimde-kadin-gucu"
      ]
    }
  },
  {
    "id": 84,
    "kaynakTuru": "hizmet",
    "ad": "TEB Kadın Bankacılığı",
    "kategori": "girisimcilik",
    "aciklama": "TEB’in kadın işletme sahiplerine yönelik bankacılık, eğitim ve iş geliştirme kaynaklarıdır.",
    "kimlerBasvurabilir": "Kadın girişimciler ve kadın liderliğindeki KOBİ'ler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.teb.com.tr/kadin-patronum/kadin-patrona-ozel/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "TEB",
      "TEB Kadın Bankacılığı"
    ],
    "basvuruNotu": "Resmî Kadın Patronum bölümünde bankacılık ürünleri ve Kadın Akademisi eğitimleri doğrulandı. Önceki 50 milyon avro iddiası kaldırıldı. Kredi hibe değildir; onay, maliyet ve eğitim takvimi ilgili ürün koşullarına bağlıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî Kadın Patronum bölümünde bankacılık ürünleri ve Kadın Akademisi eğitimleri doğrulandı. Önceki 50 milyon avro iddiası kaldırıldı. Kredi hibe değildir; onay, maliyet ve eğitim takvimi ilgili ürün koşullarına bağlıdır.",
      "kaynaklar": [
        "https://www.teb.com.tr/kadin-patronum/kadin-patrona-ozel/"
      ]
    }
  },
  {
    "id": 85,
    "kaynakTuru": "program",
    "ad": "Garanti BBVA Kadın Girişimci Programı",
    "kategori": "girisimcilik",
    "aciklama": "Garanti BBVA’nın kadın girişimcilere finansmana erişim, eğitim ve yeni pazarlara açılma alanlarında sunduğu programdır.",
    "kimlerBasvurabilir": "Kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.garantibbva.com.tr/isim-icin/esnaf-ve-kobilere-ozel/kadin-girisimci-destek-programi",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Garanti BBVA",
      "Garanti BBVA Kadın Girişimci Programı"
    ],
    "basvuruNotu": "Resmî program sayfası doğrulandı. Finansman başvuruları banka değerlendirmesine bağlıdır; doğrudan hibe veya kredi onayı garantisi verilmez. Eğitim ve etkinliklerin tarihleri ayrı incelenebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî program sayfası doğrulandı. Finansman başvuruları banka değerlendirmesine bağlıdır; doğrudan hibe veya kredi onayı garantisi verilmez. Eğitim ve etkinliklerin tarihleri ayrı incelenebilir.",
      "kaynaklar": [
        "https://www.garantibbva.com.tr/isim-icin/esnaf-ve-kobilere-ozel/kadin-girisimci-destek-programi"
      ]
    }
  },
  {
    "id": 86,
    "kaynakTuru": "program",
    "ad": "Türkiye'nin Kadın Girişimcisi Yarışması",
    "kategori": "girisimcilik",
    "aciklama": "Garanti BBVA, KAGİDER ve Ekonomist iş birliğiyle kadın girişimcileri ödüllendiren yarışmadır.",
    "kimlerBasvurabilir": "Yarışmanın ilgili kategori ve uygunluk koşullarını sağlayan kadın girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": "2026-11-15",
    "link": "https://www.garantibbva.com.tr/kurumsal-iletisim/turkiyenin-kadin-girisimci-yarismasinda-yirminci-yil-heyecani",
    "sonKontrol": "2026-10-24",
    "etiketler": [
      "girişimcilik",
      "Garanti BBVA + Ekonomist + KAGİDER",
      "Türkiye'nin Kadın Girişimcisi Yarışması"
    ],
    "basvuruNotu": "Resmî duyuruda 2026 yılındaki 20. dönem başvuruları için son tarih 15 Kasım 2026 olarak veriliyor. Ödül ve uygunluk koşulları yarışmanın kendi sayfasından incelenebilir.",
    "basvuruDurumu": "acik",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-24",
      "not": "Resmî duyuruda 2026 yılındaki 20. dönem başvuruları için son tarih 15 Kasım 2026 olarak veriliyor. Ödül ve uygunluk koşulları yarışmanın kendi sayfasından incelenebilir.",
      "kaynaklar": [
        "https://www.garantibbva.com.tr/kurumsal-iletisim/turkiyenin-kadin-girisimci-yarismasinda-yirminci-yil-heyecani"
      ]
    }
  },
  {
    "id": 88,
    "kaynakTuru": "program",
    "ad": "Girişimci Kadınlara Teknoloji Gücü",
    "kategori": "girisimcilik",
    "aciklama": "Hepsiburada’nın kadın girişimcilere e-ticaret, eğitim ve program kapsamındaki ticari avantajlar sunduğu destek programıdır.",
    "kimlerBasvurabilir": "En az %51 hissesi kadınlara ait işletmeler, kadın kooperatifleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.hepsiburada.com/girisimcikadinlar",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Hepsiburada",
      "Girişimci Kadınlara Teknoloji Gücü"
    ],
    "basvuruNotu": "Program sayfası ve başvuru yönlendirmesi doğrulandı. Eski komisyon oranı / ciro limiti iddiaları kaldırıldı; faydalar, şirket ortaklık koşulları ve ücretler güncel sözleşmeye göre incelenebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Program sayfası ve başvuru yönlendirmesi doğrulandı. Eski komisyon oranı / ciro limiti iddiaları kaldırıldı; faydalar, şirket ortaklık koşulları ve ücretler güncel sözleşmeye göre incelenebilir.",
      "kaynaklar": [
        "https://www.hepsiburada.com/girisimcikadinlar"
      ]
    }
  },
  {
    "id": 91,
    "kaynakTuru": "program",
    "ad": "İyi İşler Programı",
    "kategori": "girisimcilik",
    "aciklama": "KAGİDER ve Boyner Grup’un kadın girişimci ve tedarikçilerin işletme kapasitelerini geliştirmeye yönelik eğitim ve mentorluk projesidir.",
    "kimlerBasvurabilir": "Tekstil, hazır giyim, ayakkabı, çanta ve aksesuar gibi belirtilen alanlarda üretim yapan veya yöneten kadın girişimci ve tedarikçiler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kagider.org/tr/projeler/iyi-isler",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Boyner Grup + KAGİDER",
      "İyi İşler Programı"
    ],
    "basvuruNotu": "Resmî sayfa belirli üretim sektörlerindeki kadın girişimci ve tedarikçileri hedefliyor; genel bir işe yerleştirme programı değildir. Güncel başvuru takvimi doğrulanmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî sayfa belirli üretim sektörlerindeki kadın girişimci ve tedarikçileri hedefliyor; genel bir işe yerleştirme programı değildir. Güncel başvuru takvimi doğrulanmadı.",
      "kaynaklar": [
        "https://kagider.org/tr/projeler/iyi-isler"
      ]
    }
  },
  {
    "id": 93,
    "kaynakTuru": "program",
    "ad": "Yükselen Kadınlar Programı",
    "kategori": "girisimcilik",
    "aciklama": "Yükselen Kadınlar: Kendi İşim, Benim İzim programı kadın girişimcilerin iş geliştirme becerilerini desteklemeyi amaçlar.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://kadingirisimci.gov.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Aile ve Sosyal Hizmetler Bakanlığı",
      "Yükselen Kadınlar Programı"
    ],
    "basvuruNotu": "Bakanlığın resmî kadın girişimcilik portalında Halkbank iş birliği ve eğitim alanları doğrulandı. Güncel bireysel başvuru takvimi veya doğrudan hibe çağrısı doğrulanmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Bakanlığın resmî kadın girişimcilik portalında Halkbank iş birliği ve eğitim alanları doğrulandı. Güncel bireysel başvuru takvimi veya doğrudan hibe çağrısı doğrulanmadı.",
      "kaynaklar": [
        "https://kadingirisimci.gov.tr/"
      ]
    }
  },
  {
    "id": 95,
    "kaynakTuru": "program",
    "ad": "Geleceğini Kuran Genç Kadınlar Projesi",
    "kategori": "girisimcilik",
    "aciklama": "Ne eğitimde ne istihdamda olan genç kadınlara eğitim, mentorluk ve fırsat haritası üzerinden yönlendirme sunan projedir.",
    "kimlerBasvurabilir": "18–35 yaş grubunda ne eğitimde ne istihdamda yer alan genç kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://geleceginikurangenckadinlar.org/sikca-sorulan-sorular/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "NEET",
      "fırsat haritası",
      "Geleceğini Kuran Genç Kadınlar Projesi"
    ],
    "basvuruNotu": "Resmî SSS’de hedef grup 18–35 yaş olarak belirtiliyor. Proje doğrudan bireysel finansal destek vermiyor; STK hibe programının tamamlandığı açıklanıyor. Her eğitim veya mentorluk döneminin açık olduğu varsayılmamalıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî SSS’de hedef grup 18–35 yaş olarak belirtiliyor. Proje doğrudan bireysel finansal destek vermiyor; STK hibe programının tamamlandığı açıklanıyor. Her eğitim veya mentorluk döneminin açık olduğu varsayılmamalıdır.",
      "kaynaklar": [
        "https://geleceginikurangenckadinlar.org/sikca-sorulan-sorular/"
      ]
    }
  },
  {
    "id": 98,
    "kaynakTuru": "program",
    "ad": "IPARD Hibe Programı",
    "kategori": "girisimcilik",
    "aciklama": "IPARD kapsamında uygun kırsal yatırım projeleri için çağrı bazlı hibe destekleri sunulur.",
    "kimlerBasvurabilir": "Tarım ve gıda alanında yatırım yapan girişimciler (kadınlara avantaj olabilir)",
    "sehir": "Kırsal alanlar",
    "sonBasvuru": null,
    "link": "https://tkdk.gov.tr/ProjeIslemleri/CagriIlanArsiv",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "IPARD Hibe Programı",
      "TKDK"
    ],
    "basvuruNotu": "Tarih, sektör ve uygunluk ilgili tedbire göre değişir. M7’nin planlanan eylül çağrısı ertelendi; güncel çağrı arşivini kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "IPARD çağrıları doğrulandı; M7 çağrısının ertelenmesi nedeniyle genel program açık olarak işaretlenmedi.",
      "kaynaklar": [
        "https://tkdk.gov.tr/ProjeIslemleri/CagriIlanArsiv",
        "https://tkdk.gov.tr/Duyuru/ipard-iii-m7-ciftlik-faaliyetlerinin-cesitlendirilmesi-ve-is-gelistirme-tedbiri-cagri-ilani-tarihinde-degisiklik-yapilmasina-iliskin-duyuru-13179?lang=tr"
      ]
    }
  },
  {
    "id": 99,
    "kaynakTuru": "program",
    "ad": "Kalkınma Ajansları Mali Destek Programları",
    "kategori": "girisimcilik",
    "aciklama": "Kalkınma ajanslarının bölgesel destek ve çağrılarına örnek olarak İSTKA programlarını sunar.",
    "kimlerBasvurabilir": "İlgili ajans ve çağrının bölge ve tüzel kişilik koşullarını sağlayan başvuru sahipleri",
    "sehir": "Bölgeye göre",
    "sonBasvuru": null,
    "link": "https://www.istka.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "İSTKA, İZKA, ANKARAKA ve diğer ajanslar",
      "Kalkınma Ajansları Mali Destek Programları"
    ],
    "basvuruNotu": "İSTKA resmî sitesindeki destek ve duyuru bölümleri doğrulandı. Ajans, bölge ve çağrıya göre uygun başvuru sahibi, destek türü ve tarih değişir; her program hibe veya bireylere açık destek değildir.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "İSTKA resmî sitesindeki destek ve duyuru bölümleri doğrulandı. Ajans, bölge ve çağrıya göre uygun başvuru sahibi, destek türü ve tarih değişir; her program hibe veya bireylere açık destek değildir.",
      "kaynaklar": [
        "https://www.istka.org.tr/"
      ]
    }
  },
  {
    "id": 103,
    "kaynakTuru": "program",
    "ad": "Google for Startups",
    "kategori": "girisimcilik",
    "aciklama": "Google’ın girişimcilere programlar, teknik kaynaklar ve bulut desteği olanakları sunduğu girişimcilik platformudur.",
    "kimlerBasvurabilir": "İlgili programın ülke, sektör ve girişim aşaması koşullarını sağlayan girişimciler",
    "sehir": "Küresel / Avrupa",
    "sonBasvuru": null,
    "link": "https://startup.google.com/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Google",
      "Google for Startups"
    ],
    "basvuruNotu": "Kurumsal program ve kaynak listesi doğrulandı. Ülke uygunluğu, seçim koşulları ve son tarihler programa göre değişir; tek bir ortak açık çağrı doğrulanmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kurumsal program ve kaynak listesi doğrulandı. Ülke uygunluğu, seçim koşulları ve son tarihler programa göre değişir; tek bir ortak açık çağrı doğrulanmadı.",
      "kaynaklar": [
        "https://startup.google.com/"
      ]
    }
  },
  {
    "id": 104,
    "kaynakTuru": "program",
    "ad": "EBRD Women in Business",
    "kategori": "girisimcilik",
    "aciklama": "EBRD Women in Business, kadınların sahip olduğu veya yönettiği işletmelere finansmana erişim ve danışmanlık desteği sunar.",
    "kimlerBasvurabilir": "Programın ilgili ülke, işletme büyüklüğü ve kadın sahipliği / yönetimi koşullarını sağlayan işletmeler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.ebrd.com/home/what-we-do/products-and-services/support-for-start-ups-and-msmes/our-programmes/women-in-business.overview.html",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "EBRD",
      "EBRD Women in Business"
    ],
    "basvuruNotu": "Resmî program sayfasında Türkiye kapsamı ve destek modeli doğrulandı. Finansmana erişim ortak kuruluşlar üzerinden ve uygunluk değerlendirmesiyle sağlanır; herkese açık doğrudan bireysel hibe başvurusu değildir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî program sayfasında Türkiye kapsamı ve destek modeli doğrulandı. Finansmana erişim ortak kuruluşlar üzerinden ve uygunluk değerlendirmesiyle sağlanır; herkese açık doğrudan bireysel hibe başvurusu değildir.",
      "kaynaklar": [
        "https://www.ebrd.com/home/what-we-do/products-and-services/support-for-start-ups-and-msmes/our-programmes/women-in-business.overview.html"
      ]
    }
  },
  {
    "id": 105,
    "kaynakTuru": "bilgi",
    "ad": "We-Fi (Kadın Girişimci Finansman Girişimi)",
    "kategori": "girisimcilik",
    "aciklama": "Kadın girişimcilerin finansmana, beceri gelişimine, ağlara ve pazarlara erişimini uygulayıcı ortaklar üzerinden destekleyen uluslararası girişimdir.",
    "kimlerBasvurabilir": "İlgili ülke ve uygulayıcı ortak projesinin koşullarına uyan kadın girişimciler",
    "sehir": "Küresel",
    "sonBasvuru": null,
    "link": "https://we-fi.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Dünya Bankası Grubu",
      "We-Fi (Kadın Girişimci Finansman Girişimi)"
    ],
    "basvuruNotu": "Finansman ve kapasite geliştirme modeli ile uygulayıcı ortaklar doğrulandı. Bu site Türkiye’de herkese açık doğrudan bireysel hibe başvurusu olarak sunulmaz; uygunluk ülke ve projeye göre değişir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Finansman ve kapasite geliştirme modeli ile uygulayıcı ortaklar doğrulandı. Bu site Türkiye’de herkese açık doğrudan bireysel hibe başvurusu olarak sunulmaz; uygunluk ülke ve projeye göre değişir.",
      "kaynaklar": [
        "https://we-fi.org/",
        "https://we-fi.org/implementing-partners/"
      ]
    }
  },
  {
    "id": 106,
    "kaynakTuru": "kurum",
    "ad": "TOBB Kadın Girişimciler Kurulu",
    "kategori": "girisimcilik",
    "aciklama": "Kadın girişimciliğinin gelişmesi için eğitim, yol gösterme ve yerel ağ çalışmaları yürüten istişari kuruldur.",
    "kimlerBasvurabilir": "Kadın iş insanları ve girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://tobb.org.tr/TOBBKadinGirisimcilerKurulu/Sayfalar/Hakkimizda.php",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "finansman",
      "hibe",
      "TOBB Kadın Girişimciler Kurulu",
      "TOBB"
    ],
    "basvuruNotu": "İlinizdeki kadın girişimciler kurulunun eğitim ve etkinlik duyurularını takip edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kurulun girişimcilik eğitimleri ve 81 ildeki yapılanması resmî tanıtımla doğrulandı.",
      "kaynaklar": [
        "https://tobb.org.tr/TOBBKadinGirisimcilerKurulu/Sayfalar/Hakkimizda.php"
      ]
    }
  },
  {
    "id": 107,
    "kaynakTuru": "kurum",
    "ad": "Ashoka Türkiye",
    "kategori": "girisimcilik",
    "aciklama": "Sosyal girişimcilerin toplumsal değişim çalışmalarını destekleyen Ashoka’nın Türkiye ağıdır.",
    "kimlerBasvurabilir": "Sosyal girişimciler (kadın girişimciler dahil)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.ashoka.org/tr-tr",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Ashoka",
      "Ashoka Türkiye"
    ],
    "basvuruNotu": "Resmî Türkiye sayfasında Ashoka Fellow aday havuzuna başvuru ve aday gösterme sürecinin yıl boyunca açık olduğu belirtiliyor. Başvuru kabulü, seçilme veya finansman garantisi değildir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî Türkiye sayfasında Ashoka Fellow aday havuzuna başvuru ve aday gösterme sürecinin yıl boyunca açık olduğu belirtiliyor. Başvuru kabulü, seçilme veya finansman garantisi değildir.",
      "kaynaklar": [
        "https://www.ashoka.org/tr-tr"
      ]
    }
  },
  {
    "id": 109,
    "kaynakTuru": "kurum",
    "ad": "Endeavor Türkiye",
    "kategori": "girisimcilik",
    "aciklama": "Büyüme potansiyeli taşıyan girişimcilere mentorluk, iş ağı ve ölçeklenme desteği sunan Endeavor Türkiye platformudur.",
    "kimlerBasvurabilir": "Yüksek büyüme potansiyelli girişimciler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://turkiye.endeavor.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "Endeavor",
      "Endeavor Türkiye"
    ],
    "basvuruNotu": "Güncel resmî adres ve program yapısı doğrulandı. Bireysel programların seçim ve başvuru dönemleri ayrı olduğundan tek bir açık başvuru veya son tarih atanmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Güncel resmî adres ve program yapısı doğrulandı. Bireysel programların seçim ve başvuru dönemleri ayrı olduğundan tek bir açık başvuru veya son tarih atanmadı.",
      "kaynaklar": [
        "https://turkiye.endeavor.org/"
      ]
    }
  },
  {
    "id": 110,
    "kaynakTuru": "hizmet",
    "ad": "Kredi Garanti Fonu Kefalet Desteği",
    "kategori": "girisimcilik",
    "aciklama": "Kredi Garanti Fonu’nun ilgili finans kuruluşları üzerinden krediye erişimi destekleyen kefalet programıdır.",
    "kimlerBasvurabilir": "İlgili program ve kredi veren finans kuruluşunun koşullarını sağlayan işletmeler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kgf.com.tr/index.php/tr/urunlerimiz/ozkaynak-kefaletlerimiz/banka-kredileri/kgf-genel-destek-programi",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "KGF",
      "Kredi Garanti Fonu Kefalet Desteği"
    ],
    "basvuruNotu": "Genel destek ürünü, finans kuruluşları ve ücret / komisyon yapısı resmî sayfadan doğrulandı. Hibe değildir; kredi ve kefalet onayı, maliyetler ve limitler ilgili değerlendirmeye bağlıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Genel destek ürünü, finans kuruluşları ve ücret / komisyon yapısı resmî sayfadan doğrulandı. Hibe değildir; kredi ve kefalet onayı, maliyetler ve limitler ilgili değerlendirmeye bağlıdır.",
      "kaynaklar": [
        "https://www.kgf.com.tr/index.php/tr/urunlerimiz/ozkaynak-kefaletlerimiz/banka-kredileri/kgf-genel-destek-programi"
      ]
    }
  },
  {
    "id": 111,
    "kaynakTuru": "program",
    "ad": "İŞKUR Kadın İstihdamı ve Bakım Desteği",
    "kategori": "girisimcilik",
    "aciklama": "İŞKUR’un KİPAP uygulaması, koşulları sağlayan işverenlere kadın istihdamı desteği ve uygun katılımcılara çocuk bakım desteği içerir.",
    "kimlerBasvurabilir": "KİPAP’ın işveren, kadın katılımcı ve çocuk bakım desteği için ayrı belirlediği koşulları sağlayanlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://engelsiz.iskur.gov.tr/faaliyetlerimiz/kadin-istihdaminda-pozitif-ayrimcilik-projesi-kipap/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "girişimcilik",
      "İŞKUR",
      "İŞKUR Kadın İstihdamı ve Bakım Desteği"
    ],
    "basvuruNotu": "Resmî KİPAP sayfasında istihdam ve bakım desteği doğrulandı. Başvuru, işveren ve katılımcı koşullarına bağlıdır; tüm çalışan annelere otomatik ödeme yapılmaz. Yerel uygulama ve güncel kabul durumunu İŞKUR’dan öğrenebilirsin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî KİPAP sayfasında istihdam ve bakım desteği doğrulandı. Başvuru, işveren ve katılımcı koşullarına bağlıdır; tüm çalışan annelere otomatik ödeme yapılmaz. Yerel uygulama ve güncel kabul durumunu İŞKUR’dan öğrenebilirsin.",
      "kaynaklar": [
        "https://engelsiz.iskur.gov.tr/faaliyetlerimiz/kadin-istihdaminda-pozitif-ayrimcilik-projesi-kipap/"
      ]
    }
  },
  {
    "id": 112,
    "kaynakTuru": "hizmet",
    "ad": "Adli Yardım Bürosu",
    "kategori": "hukuki",
    "aciklama": "Avukat desteğine ihtiyaç duyan ve adli yardım koşullarını sağlayan kişilerin başvurabildiği baro hizmetidir.",
    "kimlerBasvurabilir": "Avukat tutamayacak durumdaki herkes",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://www.barobirlik.org.tr/Barolar",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Adli Yardım Bürosu",
      "Türkiye Barolar Birliği ve barolar"
    ],
    "basvuruNotu": "İlgili baronun adli yardım bürosundan başvuru koşullarını ve istenen belgeleri öğrenin; avukat görevlendirmesi değerlendirmeye tabidir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Baroların adli yardım sistemi TBB’nin resmî duyurusuyla eşleştirildi.",
      "kaynaklar": [
        "https://www.barobirlik.org.tr/Barolar",
        "https://www.barobirlik.org.tr/Haberler/duyuru-202452-85066"
      ]
    }
  },
  {
    "id": 113,
    "kaynakTuru": "kurum",
    "ad": "İstanbul Barosu Kadın Hakları Merkezi",
    "kategori": "hukuki",
    "aciklama": "İstanbul Barosu’nun kadın hakları alanındaki merkez ve birimlerine ulaşmak için kurumsal bilgi kaynağıdır.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "link": "https://istanbulbarosu.org.tr/idari-birimler-iletisim",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "İstanbul Barosu",
      "İstanbul Barosu Kadın Hakları Merkezi"
    ],
    "basvuruNotu": "Resmî iletişim sayfasında Kadın Hakları Uygulama Merkezi bilgisi doğrulandı. Danışmanlık, adli yardım ve davada temsilin kapsamı aynı değildir; uygunluk ve randevu koşulları barodan öğrenilebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî iletişim sayfasında Kadın Hakları Uygulama Merkezi bilgisi doğrulandı. Danışmanlık, adli yardım ve davada temsilin kapsamı aynı değildir; uygunluk ve randevu koşulları barodan öğrenilebilir.",
      "kaynaklar": [
        "https://istanbulbarosu.org.tr/idari-birimler-iletisim",
        "https://istanbulbarosu.org.tr/merkez-ve-subeler"
      ]
    }
  },
  {
    "id": 114,
    "kaynakTuru": "kurum",
    "ad": "Ankara Barosu Kadın Hakları Merkezi",
    "kategori": "hukuki",
    "aciklama": "Ankara Barosu Kadın Hakları Merkezi hakkında resmî kurumsal bilgi sunar.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "link": "https://www.ankarabarosu.org.tr/Merkezler/4cbbc7ea-a41d-11eb-9877-000c29c9dfce",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Ankara Barosu",
      "Ankara Barosu Kadın Hakları Merkezi"
    ],
    "basvuruNotu": "Merkezin varlığı ve güncel kurumsal sayfası doğrulandı. Ücretsiz bireysel danışmanlık, otomatik avukat ataması veya randevusuz hizmet bu sayfadan doğrulanmadı; başvuru koşulları baroyla görüşülebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Merkezin varlığı ve güncel kurumsal sayfası doğrulandı. Ücretsiz bireysel danışmanlık, otomatik avukat ataması veya randevusuz hizmet bu sayfadan doğrulanmadı; başvuru koşulları baroyla görüşülebilir.",
      "kaynaklar": [
        "https://www.ankarabarosu.org.tr/Merkezler/4cbbc7ea-a41d-11eb-9877-000c29c9dfce"
      ]
    }
  },
  {
    "id": 115,
    "kaynakTuru": "kurum",
    "ad": "İzmir Barosu Kadın Hakları Merkezi",
    "kategori": "hukuki",
    "aciklama": "İzmir Barosu’nun kadın hakları merkezi ve kadına yönelik şiddet danışma hattına ilişkin kurumsal iletişim kaynağıdır.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "İzmir",
    "sonBasvuru": null,
    "link": "https://www.izmirbarosu.org.tr/iletisim.aspx",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "İzmir Barosu",
      "İzmir Barosu Kadın Hakları Merkezi"
    ],
    "basvuruNotu": "Merkez ve danışma iletişimi resmî baro sayfasından doğrulandı. Adli yardım ve mahkemede temsil için ayrıca başvuru ve uygunluk değerlendirmesi gerekebilir; sınırsız ücretsiz avukatlık sözü verilmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "İzmir"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Merkez ve danışma iletişimi resmî baro sayfasından doğrulandı. Adli yardım ve mahkemede temsil için ayrıca başvuru ve uygunluk değerlendirmesi gerekebilir; sınırsız ücretsiz avukatlık sözü verilmez.",
      "kaynaklar": [
        "https://www.izmirbarosu.org.tr/iletisim.aspx",
        "https://www.izmirbarosu.org.tr/sayfa.aspx?id=86"
      ]
    }
  },
  {
    "id": 116,
    "kaynakTuru": "hizmet",
    "ad": "UYAP Vatandaş Portal",
    "kategori": "hukuki",
    "aciklama": "Adalet Bakanlığı UYAP Vatandaş Portalı, kişilerin tarafı olduğu yargı ve icra dosyalarını çevrim içi takip etmesine yardımcı olur.",
    "kimlerBasvurabilir": "Portalın kimlik doğrulama koşullarını sağlayan, ilgili dosyaların tarafı olan kişiler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://vatandas.uyap.gov.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Adalet Bakanlığı",
      "UYAP Vatandaş Portal"
    ],
    "basvuruNotu": "Portalın işlevi resmî UYAP açıklamasından doğrulandı. Kimlik doğrulama gerekir; dava açma ve evrak gönderme gibi işlemler için giriş yöntemi ve ek koşullar farklı olabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Portalın işlevi resmî UYAP açıklamasından doğrulandı. Kimlik doğrulama gerekir; dava açma ve evrak gönderme gibi işlemler için giriş yöntemi ve ek koşullar farklı olabilir.",
      "kaynaklar": [
        "https://uyap.gov.tr/Genel-Bilgi",
        "https://uyap.gov.tr/Hizmetler"
      ]
    }
  },
  {
    "id": 117,
    "kaynakTuru": "hizmet",
    "ad": "CİMER",
    "kategori": "hukuki",
    "aciklama": "Kamu kurumlarına istek, şikâyet, bilgi talebi ve görüş iletmek için kullanılan resmî başvuru sistemidir.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.cimer.gov.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Cumhurbaşkanlığı İletişim Merkezi",
      "CİMER"
    ],
    "basvuruNotu": "Resmî başvuru ve e-Devlet yönlendirmeleri doğrulandı. Acil yardım kanalı değildir; başvuru türü ve uygunluk koşulları sistemden incelenebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî başvuru ve e-Devlet yönlendirmeleri doğrulandı. Acil yardım kanalı değildir; başvuru türü ve uygunluk koşulları sistemden incelenebilir.",
      "kaynaklar": [
        "https://www.cimer.gov.tr/"
      ]
    }
  },
  {
    "id": 118,
    "kaynakTuru": "kurum",
    "ad": "Türkiye İnsan Hakları ve Eşitlik Kurumu (TİHEK)",
    "kategori": "hukuki",
    "aciklama": "TİHEK’in ayrımcılık yasağı ve görev alanındaki diğer başvuruların koşullarını açıklayan resmî kaynağıdır.",
    "kimlerBasvurabilir": "TİHEK’in görev alanı ve başvuru koşullarına uyan gerçek ve tüzel kişiler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tihek.gov.tr/kategori/pages/basvurular",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "TİHEK",
      "Türkiye İnsan Hakları ve Eşitlik Kurumu (TİHEK)"
    ],
    "basvuruNotu": "Başvuru kapsamı ve e-başvuru seçeneği doğrulandı. Ayrımcılık başvurularında ilgili tarafa önce başvurma gibi ön koşullar bulunur; her hak ihlali iddiasının otomatik olarak kapsamda olduğu varsayılmamalıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Başvuru kapsamı ve e-başvuru seçeneği doğrulandı. Ayrımcılık başvurularında ilgili tarafa önce başvurma gibi ön koşullar bulunur; her hak ihlali iddiasının otomatik olarak kapsamda olduğu varsayılmamalıdır.",
      "kaynaklar": [
        "https://www.tihek.gov.tr/kategori/pages/basvurular"
      ]
    }
  },
  {
    "id": 119,
    "kaynakTuru": "kurum",
    "ad": "Kamu Denetçiliği Kurumu (Ombudsman)",
    "kategori": "hukuki",
    "aciklama": "Kamu Denetçiliği Kurumu’nun idareyle ilgili şikâyet başvurusuna e-Devlet üzerinden erişim sağlayan resmî kurum sayfasıdır.",
    "kimlerBasvurabilir": "Kamu hizmetinden şikâyetçi olanlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.turkiye.gov.tr/kamu-denetciligi-kurumu",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "KDK",
      "Kamu Denetçiliği Kurumu (Ombudsman)"
    ],
    "basvuruNotu": "Kurumun kendi sitesi bu taramada açılamadı; şikâyet başvuru hizmeti e-Devlet kurum sayfasından doğrulandı. Başvuruya ilişkin konu, süre ve usul koşulları ayrıca incelenebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kurumun kendi sitesi bu taramada açılamadı; şikâyet başvuru hizmeti e-Devlet kurum sayfasından doğrulandı. Başvuruya ilişkin konu, süre ve usul koşulları ayrıca incelenebilir.",
      "kaynaklar": [
        "https://www.turkiye.gov.tr/kamu-denetciligi-kurumu"
      ]
    }
  },
  {
    "id": 120,
    "kaynakTuru": "hizmet",
    "ad": "ALO 170 Çalışma ve Sosyal Güvenlik Hattı",
    "kategori": "hukuki",
    "aciklama": "Çalışma hayatı ve sosyal güvenlik konularında bilgi, talep ve şikâyet iletilebilen iletişim hattıdır.",
    "kimlerBasvurabilir": "Çalışanlar (mobbing, işten çıkarma, maaş sorunları)",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.alo170.gov.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "ALO 170 Çalışma ve Sosyal Güvenlik Hattı",
      "ÇSGB"
    ],
    "basvuruNotu": "Çalışma hayatı ve sosyal güvenlik konularındaki talepler için 170 hattını veya resmî portalı kullanın.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Bakanlığın resmî yayını ALO 170 hizmetini doğruluyor; siteye doğrudan erişimde zaman aşımı oldu.",
      "kaynaklar": [
        "https://www.alo170.gov.tr/",
        "https://www.csgb.gov.tr/media/88312/turkce_isgucu-yonetim-prosedurleri_lmp_23032022.pdf"
      ]
    }
  },
  {
    "id": 121,
    "kaynakTuru": "hizmet",
    "ad": "SGK Doğum Borçlanması ve Analık Hakları",
    "kategori": "hukuki",
    "aciklama": "SGK’nın doğum borçlanması ve analık sigortası kapsamındaki haklara ilişkin resmî bilgilendirme kaynağıdır.",
    "kimlerBasvurabilir": "İlgili sigortalılık ve SGK koşullarını sağlayan kişiler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.sgk.gov.tr/Content/Post/4aa4cd49-4af5-43f2-8ecc-ec00326153ff/Dogum-Borclanmasi-2026-05-11-10-54-53",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "SGK",
      "SGK Doğum Borçlanması ve Analık Hakları"
    ],
    "basvuruNotu": "Doğum borçlanması ve analık hali açıklamaları incelendi. Borçlanma prim ödemesi gerektirir; analık ödeneğiyle aynı işlem değildir. Bireysel hak sahipliği, süre ve tutarlar SGK değerlendirmesine bağlıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Doğum borçlanması ve analık hali açıklamaları incelendi. Borçlanma prim ödemesi gerektirir; analık ödeneğiyle aynı işlem değildir. Bireysel hak sahipliği, süre ve tutarlar SGK değerlendirmesine bağlıdır.",
      "kaynaklar": [
        "https://www.sgk.gov.tr/Content/Post/4aa4cd49-4af5-43f2-8ecc-ec00326153ff/Dogum-Borclanmasi-2026-05-11-10-54-53",
        "https://www.sgk.gov.tr/Content/Post/709f7f1b-d7e7-4509-8eac-745fec3a25bf/Analik-Hali-2025-02-27-11-34-31"
      ]
    }
  },
  {
    "id": 122,
    "kaynakTuru": "bilgi",
    "ad": "Mevzuat Bilgi Sistemi (6284 sayılı Kanun vb.)",
    "kategori": "hukuki",
    "aciklama": "Mevzuat Bilgi Sistemi, kanun ve diğer mevzuat metinlerine erişim için resmî kaynaktır.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.mevzuat.gov.tr/",
    "sonKontrol": null,
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Cumhurbaşkanlığı",
      "Mevzuat Bilgi Sistemi (6284 sayılı Kanun vb.)"
    ],
    "basvuruNotu": "Siteye erişim bu kontrolde zaman aşımına uğradı; güncel konsolide 6284 metni içerik olarak doğrulanamadı. Eski kanun yayını güncel mevzuat metni yerine kullanılmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web-kismi",
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-10-24",
      "not": "Siteye erişim bu kontrolde zaman aşımına uğradı; güncel konsolide 6284 metni içerik olarak doğrulanamadı. Eski kanun yayını güncel mevzuat metni yerine kullanılmadı. 24 Ekim yeniden kontrolünde tam teyit sağlanamadı; belirsiz durum ve boş son kontrol tarihi korundu.",
      "kaynaklar": [
        "https://www.mevzuat.gov.tr/"
      ]
    }
  },
  {
    "id": 123,
    "kaynakTuru": "hizmet",
    "ad": "Kadın Dayanışma Vakfı Hukuki Danışma",
    "kategori": "hukuki",
    "aciklama": "Şiddete maruz kalan kadınlara ücretsiz sosyal, hukuki ve psikolojik destek sunan kadın danışma merkezi kaynağıdır.",
    "kimlerBasvurabilir": "Şiddete maruz kalan ve danışma desteğine ihtiyaç duyan kadınlar",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "link": "https://www.kadindayanismavakfi.org.tr/kadin-danisma-merkezimize-basvurabilirsiniz/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "hukuk",
      "danışma",
      "haklar",
      "Kadın Dayanışma Vakfı",
      "Kadın Dayanışma Vakfı Hukuki Danışma"
    ],
    "basvuruNotu": "Destek kapsamı doğrulandı. Hukuki destek bilgilendirme ve yönlendirmeyi içerir; gönüllü avukatlar kural olarak duruşmalarda temsili üstlenmez. Merkez pazartesi, salı, çarşamba ve cuma 10.00–17.00 arasında ulaşılabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Destek kapsamı doğrulandı. Hukuki destek bilgilendirme ve yönlendirmeyi içerir; gönüllü avukatlar kural olarak duruşmalarda temsili üstlenmez. Merkez pazartesi, salı, çarşamba ve cuma 10.00–17.00 arasında ulaşılabilir.",
      "kaynaklar": [
        "https://www.kadindayanismavakfi.org.tr/kadin-danisma-merkezimize-basvurabilirsiniz/"
      ]
    }
  },
  {
    "id": 124,
    "kaynakTuru": "hizmet",
    "ad": "MHRS (ALO 182) Hastane Randevusu",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığına bağlı sağlık kuruluşlarından MHRS web, mobil uygulama veya ALO 182 üzerinden randevu alınmasını sağlar.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.mhrs.gov.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "MHRS (ALO 182) Hastane Randevusu",
      "Sağlık Bakanlığı"
    ],
    "basvuruNotu": "Uygun hekim ve randevu saatleri sistemdeki kontenjana bağlıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Sağlık Bakanlığının güncel kurum sayfasında web, mobil ve ALO 182 kanalları doğrulandı; ana siteye erişim 502 döndürdü.",
      "kaynaklar": [
        "https://www.mhrs.gov.tr/",
        "https://narlidereadsm.saglik.gov.tr/TR-169516/randevu-nasil--alinir.html"
      ]
    }
  },
  {
    "id": 125,
    "kaynakTuru": "hizmet",
    "ad": "KETEM (Kanser Erken Teşhis, Tarama ve Eğitim Merkezleri)",
    "kategori": "saglik",
    "aciklama": "Ulusal program kapsamında hedef yaş gruplarına yönelik ücretsiz meme, rahim ağzı ve kolorektal kanser taramaları sunulur.",
    "kimlerBasvurabilir": "İlgili kanser taramasının yaş ve sağlık koşullarını sağlayan kişiler",
    "sehir": "81 il",
    "sonBasvuru": null,
    "link": "https://hsgm.saglik.gov.tr/tr/programlar/tarama-programlari?format=html",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "KETEM (Kanser Erken Teşhis, Tarama ve Eğitim Merkezleri)",
      "Halk Sağlığı Genel Müdürlüğü"
    ],
    "basvuruNotu": "Yaşa uygun tarama ve hizmet noktası için aile hekiminiz, KETEM veya Sağlıklı Hayat Merkeziyle görüşün.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz ulusal kanser taramaları Bakanlığın eğitim rehberiyle doğrulandı; eski smear ifadesi yerine genel tarama tanımı kullanıldı.",
      "kaynaklar": [
        "https://hsgm.saglik.gov.tr/tr/programlar/tarama-programlari?format=html",
        "https://hsgm.saglik.gov.tr/depo/Yayinlarimiz/Rehberler/izleme_ve_degerlendirme_egitim_rehberi.pdf"
      ]
    }
  },
  {
    "id": 126,
    "kaynakTuru": "hizmet",
    "ad": "Ana Çocuk Sağlığı ve Aile Planlaması",
    "kategori": "saglik",
    "aciklama": "Aile hekimliği kapsamında gebelik izlemi ve anne-çocuk sağlığına yönelik takip ve yönlendirme hizmetleridir.",
    "kimlerBasvurabilir": "Kadınlar, gebeler, anneler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://hsgm.saglik.gov.tr/depo/Yayinlarimiz/Rehberler/AILE_HEKIMLIGI_REHBERI_2025.pdf",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Ana Çocuk Sağlığı ve Aile Planlaması",
      "Halk Sağlığı Genel Müdürlüğü"
    ],
    "basvuruNotu": "Size uygun izlem, danışmanlık ve yönlendirme için kayıtlı aile sağlığı merkezinizle görüşün.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Gebe izlemi aile hekimliği rehberiyle doğrulandı; kişiye özel hizmet kapsamı sağlık biriminden öğrenilmelidir.",
      "kaynaklar": [
        "https://hsgm.saglik.gov.tr/depo/Yayinlarimiz/Rehberler/AILE_HEKIMLIGI_REHBERI_2025.pdf"
      ]
    }
  },
  {
    "id": 127,
    "kaynakTuru": "program",
    "ad": "Gebe Bilgilendirme Sınıfları",
    "kategori": "saglik",
    "aciklama": "Sağlık kuruluşlarının gebe okulları ve bilgilendirme sınıfları gebelik, doğum ve doğum sonrası döneme yönelik eğitimler sunar.",
    "kimlerBasvurabilir": "Hamile kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://haydarpasanumuneah.saglik.gov.tr/TR-333940/gebe-okulu.html",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Gebe Bilgilendirme Sınıfları"
    ],
    "basvuruNotu": "Resmî hastane sayfalarında gebe okulu eğitimi doğrulandı. Eğitim, randevu ve katılım koşulları kuruma göre değişir; her aile sağlığı merkezinde sınıf bulunduğu varsayılmamalıdır.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî hastane sayfalarında gebe okulu eğitimi doğrulandı. Eğitim, randevu ve katılım koşulları kuruma göre değişir; her aile sağlığı merkezinde sınıf bulunduğu varsayılmamalıdır.",
      "kaynaklar": [
        "https://haydarpasanumuneah.saglik.gov.tr/TR-333940/gebe-okulu.html",
        "https://bafradh.saglik.gov.tr/TR-1080994/gebe-okulu.html"
      ]
    }
  },
  {
    "id": 128,
    "kaynakTuru": "hizmet",
    "ad": "e-Nabız",
    "kategori": "saglik",
    "aciklama": "Sağlık Bakanlığı’nın kişisel sağlık kayıtlarına erişim ve sağlık bilgilerini yönetme sistemidir.",
    "kimlerBasvurabilir": "e-Nabız sisteminin kimlik doğrulama koşullarını sağlayan kullanıcılar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://enabiz.gov.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Sağlık Bakanlığı",
      "e-Nabız"
    ],
    "basvuruNotu": "Resmî giriş sayfası ve kişisel sağlık kaydı işlevi doğrulandı. Kullanım kimlik doğrulama gerektirir; bu site üzerinden kişisel sağlık verilerine erişilmedi.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî giriş sayfası ve kişisel sağlık kaydı işlevi doğrulandı. Kullanım kimlik doğrulama gerektirir; bu site üzerinden kişisel sağlık verilerine erişilmedi.",
      "kaynaklar": [
        "https://enabiz.gov.tr/"
      ]
    }
  },
  {
    "id": 129,
    "kaynakTuru": "hizmet",
    "ad": "Sağlık Bakanlığı İletişim Merkezi (ALO 184 SABİM)",
    "kategori": "saglik",
    "aciklama": "Sağlık sistemiyle ilgili soru, sorun, talep ve şikâyetlerin iletilebildiği Sağlık Bakanlığı İletişim Merkezi’dir.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://istanbulism.saglik.gov.tr/TR-157212/sabim.html",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Sağlık Bakanlığı",
      "Sağlık Bakanlığı İletişim Merkezi (ALO 184 SABİM)"
    ],
    "basvuruNotu": "ALO 184 SABİM’in işlevi ve günün her saati başvuru alınabildiği resmî sağlık müdürlüğü açıklamasından doğrulandı. Tıbbi muayene veya acil müdahale hizmeti değildir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "ALO 184 SABİM’in işlevi ve günün her saati başvuru alınabildiği resmî sağlık müdürlüğü açıklamasından doğrulandı. Tıbbi muayene veya acil müdahale hizmeti değildir.",
      "kaynaklar": [
        "https://istanbulism.saglik.gov.tr/TR-157212/sabim.html"
      ]
    }
  },
  {
    "id": 130,
    "kaynakTuru": "hizmet",
    "ad": "Toplum Ruh Sağlığı Merkezleri (TRSM)",
    "kategori": "saglik",
    "aciklama": "Şizofreni, şizoafektif bozukluk ve bipolar bozukluk gibi süreğen ruhsal hastalıklarla yaşayan kişilere yönelik takip ve rehabilitasyon merkezleridir.",
    "kimlerBasvurabilir": "TRSM değerlendirme koşullarını sağlayan, ilgili süreğen ruhsal hastalık tanıları bulunan kişiler",
    "sehir": "Çeşitli iller",
    "sonBasvuru": null,
    "link": "https://surmenedh.saglik.gov.tr/TR-1590775/toplum-ruh-sagligi-merkezi-trsm.html",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Sağlık Bakanlığı",
      "Toplum Ruh Sağlığı Merkezleri (TRSM)"
    ],
    "basvuruNotu": "TRSM’nin hedef grubu ve psikiyatri birimleriyle bağlantılı çalışma modeli resmî hastane açıklamasından doğrulandı. Genel amaçlı, herkese açık psikolojik danışmanlık olarak sunulmaz; yerel kabul ve yönlendirme koşulları merkezden öğrenilebilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "TRSM’nin hedef grubu ve psikiyatri birimleriyle bağlantılı çalışma modeli resmî hastane açıklamasından doğrulandı. Genel amaçlı, herkese açık psikolojik danışmanlık olarak sunulmaz; yerel kabul ve yönlendirme koşulları merkezden öğrenilebilir.",
      "kaynaklar": [
        "https://surmenedh.saglik.gov.tr/TR-1590775/toplum-ruh-sagligi-merkezi-trsm.html"
      ]
    }
  },
  {
    "id": 131,
    "kaynakTuru": "kurum",
    "ad": "Türk Psikologlar Derneği",
    "kategori": "saglik",
    "aciklama": "Türk Psikologlar Derneği’nin psikoloji alanındaki kurumsal çalışmalarına, yayınlarına ve bilgi kaynaklarına erişim sağlar.",
    "kimlerBasvurabilir": "Herkes",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.psikolog.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "TPD",
      "Türk Psikologlar Derneği"
    ],
    "basvuruNotu": "Resmî site ve bilgi bankası doğrulandı. Herkese ücretsiz terapi veya doğrudan psikolog eşleştirme hizmeti sunduğu doğrulanmadığından bu tür bir garanti verilmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî site ve bilgi bankası doğrulandı. Herkese ücretsiz terapi veya doğrudan psikolog eşleştirme hizmeti sunduğu doğrulanmadığından bu tür bir garanti verilmez.",
      "kaynaklar": [
        "https://www.psikolog.org.tr/"
      ]
    }
  },
  {
    "id": 132,
    "kaynakTuru": "kurum",
    "ad": "Türk Jinekoloji ve Obstetrik Derneği",
    "kategori": "saglik",
    "aciklama": "Türk Jinekoloji ve Obstetrik Derneği’nin kadın sağlığı alanındaki mesleki bilgi, yayın ve duyurularını sunan kaynaktır.",
    "kimlerBasvurabilir": "Bilgi edinmek isteyenler ve kadın sağlığı alanındaki sağlık profesyonelleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tjod.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "TJOD",
      "Türk Jinekoloji ve Obstetrik Derneği"
    ],
    "basvuruNotu": "Resmî dernek sayfası ve bilimsel bilgi kaynakları doğrulandı. İçeriklerin bir bölümü sağlık profesyonellerine yöneliktir; muayene, tedavi veya bireysel danışmanlık hizmeti olarak sunulmaz.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî dernek sayfası ve bilimsel bilgi kaynakları doğrulandı. İçeriklerin bir bölümü sağlık profesyonellerine yöneliktir; muayene, tedavi veya bireysel danışmanlık hizmeti olarak sunulmaz.",
      "kaynaklar": [
        "https://www.tjod.org/"
      ]
    }
  },
  {
    "id": 133,
    "kaynakTuru": "hizmet",
    "ad": "ALO 171 Sigara Danışma Hattı",
    "kategori": "saglik",
    "aciklama": "Sigarayı bırakmak isteyenlere bilgi, danışmanlık ve ilgili hizmetlere yönlendirme sunan ALO 171 hattıdır.",
    "kimlerBasvurabilir": "Sigarayı bırakmak isteyenler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://alo171.saglik.gov.tr/TR-66752/nasil-destek-alabilirim-.html",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Sağlık Bakanlığı",
      "ALO 171 Sigara Danışma Hattı"
    ],
    "basvuruNotu": "171 üzerinden danışmanlık ve sigara bırakma polikliniklerine yönlendirme resmî sayfadan doğrulandı. Danışmanlık, herkes için ücretsiz ilaç veya kesin tedavi sonucu garantisi anlamına gelmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "171 üzerinden danışmanlık ve sigara bırakma polikliniklerine yönlendirme resmî sayfadan doğrulandı. Danışmanlık, herkes için ücretsiz ilaç veya kesin tedavi sonucu garantisi anlamına gelmez.",
      "kaynaklar": [
        "https://alo171.saglik.gov.tr/TR-66752/nasil-destek-alabilirim-.html"
      ]
    }
  },
  {
    "id": 134,
    "kaynakTuru": "hizmet",
    "ad": "YEDAM (ALO 115)",
    "kategori": "saglik",
    "aciklama": "Yeşilay Danışmanlık Merkezleri, bağımlılıkla ilgili sorun yaşayan kişilere ve yakınlarına psikolojik ve sosyal destek sunar.",
    "kimlerBasvurabilir": "Bağımlılıkla mücadele edenler ve yakınları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.yedam.org.tr/ne-yapiyoruz",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "Yeşilay",
      "YEDAM (ALO 115)"
    ],
    "basvuruNotu": "Resmî YEDAM sayfasında ücretsiz destek ve 115 danışma numarası doğrulandı. Yerel görüşme, randevu ve hizmet koşulları merkezden öğrenilebilir; acil müdahale kanalı olarak sunulmaz.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî YEDAM sayfasında ücretsiz destek ve 115 danışma numarası doğrulandı. Yerel görüşme, randevu ve hizmet koşulları merkezden öğrenilebilir; acil müdahale kanalı olarak sunulmaz.",
      "kaynaklar": [
        "https://www.yedam.org.tr/ne-yapiyoruz"
      ]
    }
  },
  {
    "id": 135,
    "kaynakTuru": "bilgi",
    "ad": "TAPV Cinsel Sağlık ve Üreme Sağlığı Danışma Kaynakları",
    "kategori": "saglik",
    "aciklama": "TAPV’nin cinsel sağlık ve üreme sağlığı alanındaki bilgilendirme ve danışma kaynaklarıdır.",
    "kimlerBasvurabilir": "Kadınlar, gençler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.tapv.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sağlık",
      "danışma",
      "destek",
      "TAPV",
      "TAPV Cinsel Sağlık ve Üreme Sağlığı Danışma Kaynakları"
    ],
    "basvuruNotu": "Resmî sitede Cinsel Sağlık Danışma Hattı ve hafta içi 09.00–18.00 erişim bilgisi doğrulandı. Ayrı bir klinik veya tedavi merkezi olduğu iddia edilmez.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî sitede Cinsel Sağlık Danışma Hattı ve hafta içi 09.00–18.00 erişim bilgisi doğrulandı. Ayrı bir klinik veya tedavi merkezi olduğu iddia edilmez.",
      "kaynaklar": [
        "https://www.tapv.org.tr/"
      ]
    }
  },
  {
    "id": 136,
    "kaynakTuru": "hizmet",
    "ad": "İŞKUR İş ve Meslek Danışmanlığı",
    "kategori": "kariyer",
    "aciklama": "İş arama ve meslek seçimi sürecinde bireysel danışmanlık sağlar. Danışman bilgilerine İŞKUR İnternet Şubesi üzerinden ulaşılabilir.",
    "kimlerBasvurabilir": "İş arayanlar ve meslek seçimi veya değişimi için danışmanlık isteyenler",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://engelsiz.iskur.gov.tr/sikca-sorulan-sorular/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "iş arama",
      "danışmanlık",
      "meslek seçimi"
    ],
    "basvuruNotu": "İŞKUR kaydı ve danışman bilgileri için İnternet Şubesi veya ilgili İŞKUR birimi kullanılabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "İş arayan kaydı ve iş ve meslek danışmanlığı resmî SSS üzerinden doğrulandı.",
      "kaynaklar": [
        "https://engelsiz.iskur.gov.tr/sikca-sorulan-sorular/"
      ]
    }
  },
  {
    "id": 137,
    "kaynakTuru": "hizmet",
    "ad": "İŞKUR İş Kulüpleri",
    "kategori": "kariyer",
    "aciklama": "Özgeçmiş, mülakat ve iş arama yöntemleri konusunda yoğunlaştırılmış danışmanlık sunar. Çevrim içi eğitim seçeneği de bulunmaktadır.",
    "kimlerBasvurabilir": "Kadınlar dahil iş arama sürecinde yoğun desteğe ihtiyaç duyan kişiler",
    "sehir": "Türkiye / çevrim içi",
    "sonBasvuru": null,
    "link": "https://engelsiz.iskur.gov.tr/sikca-sorulan-sorular/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "CV",
      "özgeçmiş",
      "mülakat",
      "iş arama"
    ],
    "basvuruNotu": "Grup ve eğitim tarihleri için en yakın İş Kulübüyle iletişime geçin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true
  },
  {
    "id": 138,
    "kaynakTuru": "hizmet",
    "ad": "İBB Bölgesel İstihdam Ofisleri",
    "kategori": "kariyer",
    "aciklama": "İstanbul’da iş arayanlarla işverenleri buluşturur. Ofislerden kariyer danışmanlığı alınabilir; portal üzerinden ilanlar takip edilebilir.",
    "kimlerBasvurabilir": "İstanbul’da iş arayan kişiler",
    "sehir": "İstanbul / çevrim içi",
    "sonBasvuru": null,
    "link": "https://bio.ibb.istanbul/offices",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "iş ilanı",
      "kariyer danışmanlığı",
      "istihdam"
    ],
    "basvuruNotu": "Ofis veya portal üzerinden başvurun; koşullar ve tarihler iş ilanına göre değişir.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": true
  },
  {
    "id": 139,
    "kaynakTuru": "hizmet",
    "ad": "YenidenBiz — İş Hayatına Dönüş",
    "kategori": "kariyer",
    "aciklama": "Kariyer molası veren kadınları eğitimler, topluluk ve kurumlarla buluşturarak işe dönüşlerini destekler.",
    "kimlerBasvurabilir": "Kariyerine ara vermiş, iş hayatına dönmek isteyen deneyimli kadınlar",
    "sehir": "Programa göre",
    "sonBasvuru": null,
    "link": "https://www.yenidenbiz.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "işe dönüş",
      "kariyer molası",
      "kadın istihdamı"
    ],
    "basvuruNotu": "Üyelik, program tarihleri, katılım koşulları ve varsa ücretleri dernekten kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false
  },
  {
    "id": 140,
    "kaynakTuru": "hizmet",
    "ad": "SYDV Barınma Yardımları",
    "kategori": "barinma",
    "aciklama": "Sağlıklı konutu olmayan ihtiyaç sahibi kişiler için koşullara bağlı ev onarımı veya konut desteği sunar. Başvuru ikamet edilen yerdeki SYDV’ye veya e-Devlet üzerinden yapılabilir.",
    "kimlerBasvurabilir": "Gelir, ikamet ve konut koşulları değerlendirmesinde uygun bulunan ihtiyaç sahipleri",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr/sygm/programlarimiz/sosyal-yardim-programlarimiz/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "konut",
      "ev onarımı",
      "barınma",
      "SYDV"
    ],
    "basvuruNotu": "Başvurular koşul değerlendirmesine tabidir; güncel şartları SYDV’den öğrenin.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false
  },
  {
    "id": 141,
    "kaynakTuru": "hizmet",
    "ad": "e-Devlet Sosyal Yardım Başvuru Hizmeti",
    "kategori": "barinma",
    "aciklama": "Sosyal yardım talebini Bakanlığa iletmek için kullanılan çevrim içi başvuru hizmetidir. Hizmete giriş için kimlik doğrulaması gerekir.",
    "kimlerBasvurabilir": "Sosyal yardım talebi iletmek isteyen, e-Devlet üzerinden kimliğini doğrulayabilen kişiler",
    "sehir": "Türkiye / çevrim içi",
    "sonBasvuru": null,
    "link": "https://www.turkiye.gov.tr/aile-ve-sosyal-hizmetler-sosyal-yardim-basvuru-hizmeti",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "e-Devlet",
      "sosyal yardım",
      "başvuru"
    ],
    "basvuruNotu": "Başvuru kanalı erişilebilir; yararlanma koşulları ilgili yardım için ayrıca değerlendirilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Başvuru hizmeti ve kimlik doğrulama gereksinimi doğrulandı; giriş yapılmadı, kişisel uygunluk değerlendirilmedi.",
      "kaynaklar": [
        "https://www.turkiye.gov.tr/aile-ve-sosyal-hizmetler-sosyal-yardim-basvuru-hizmeti"
      ]
    }
  },
  {
    "id": 142,
    "kaynakTuru": "hizmet",
    "ad": "Eşi Vefat Etmiş Kadınlara Yönelik Nakit Yardım",
    "kategori": "barinma",
    "aciklama": "Son resmî nikâhlı eşini kaybetmiş, programın ihtiyaç sahipliği koşullarını karşılayan kadınlara düzenli nakit desteğidir.",
    "kimlerBasvurabilir": "Hanede sosyal güvenceli birey bulunmayan ve program koşullarını karşılayan kadınlar",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr/sygm/programlarimiz/sosyal-yardim-programlarimiz/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dul",
      "eşi vefat",
      "nakit destek",
      "SYDV"
    ],
    "basvuruNotu": "Uygunluk ve güncel ödeme bilgileri için ikamet ettiğiniz yerdeki SYDV’ye başvurun.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false
  },
  {
    "id": 143,
    "kaynakTuru": "hizmet",
    "ad": "Sosyal ve Ekonomik Destek (SED)",
    "kategori": "barinma",
    "aciklama": "Ekonomik ve psikososyal destekle çocukların aileleri yanında büyümesini destekleyen sosyal hizmet modelidir. İl müdürlüğü, Sosyal Hizmet Merkezi veya e-Devlet üzerinden talep iletilebilir.",
    "kimlerBasvurabilir": "Çocuklarının ihtiyaçlarını karşılamakta güçlük yaşayan, sosyal incelemede uygun bulunan aileler",
    "sehir": "Türkiye / çevrim içi",
    "sonBasvuru": null,
    "link": "https://aile.gov.tr/chgm/uygulamalar/sosyal-ve-ekonomik-destek-hizmeti/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "SED",
      "aile",
      "çocuk",
      "ekonomik destek"
    ],
    "basvuruNotu": "Destek sosyal inceleme ve değerlendirme sonucunda belirlenir; e-Devlet’te ön başvuru yapılabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true
  },
  {
    "id": 144,
    "kaynakTuru": "hizmet",
    "ad": "Özel Kreşlerde Ücretsiz Bakım Kontenjanı",
    "kategori": "ebeveynlik",
    "aciklama": "Bakanlığa ayrılan ücretsiz bakım kontenjanları kapsamında uygun çocuklar özel kreş, gündüz bakımevi veya çocuk kulüplerine yerleştirilebilir.",
    "kimlerBasvurabilir": "Öncelikli gruplardaki çocuklar ve ekonomik gücü yetersiz olduğu değerlendirilen ailelerin çocukları",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr/sss/cocuk-hizmetleri-genel-mudurlugu/ozel-kres-gunduz-bakimevleri-cocuk-klupleri/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "kreş",
      "ücretsiz bakım",
      "gündüz bakımevi",
      "çocuk kulübü"
    ],
    "basvuruNotu": "Aile ve Sosyal Hizmetler İl Müdürlüğüne dilekçeyle başvurulur; sosyal inceleme ve kontenjana bağlıdır.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false
  },
  {
    "id": 145,
    "kaynakTuru": "hizmet",
    "ad": "Yuvamız İstanbul Çocuk Etkinlik Merkezleri",
    "kategori": "ebeveynlik",
    "aciklama": "İstanbul’da çocuklara tam gün hizmet veren merkezlerdir. Ücretsiz ve tam ücretli seçenekler bulunur; kayıt yaş aralığı ve koşulları dönem duyurularında açıklanır.",
    "kimlerBasvurabilir": "İstanbul’da ikamet eden, ilan edilen yaş ve kayıt koşullarını karşılayan çocukların velileri",
    "sehir": "İstanbul / çevrim içi başvuru",
    "sonBasvuru": null,
    "link": "https://yuvamiz.ibb.istanbul/sikca-sorulan-sorular",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "kreş",
      "okul öncesi",
      "çocuk etkinlik merkezi"
    ],
    "basvuruNotu": "Başvuru dönemi, yaş aralığı, ücret ve kontenjanı resmî duyurulardan kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": true
  },
  {
    "id": 146,
    "kaynakTuru": "program",
    "ad": "AÇEV Anne Destek Programı",
    "kategori": "ebeveynlik",
    "aciklama": "Annelerin çocuk gelişimi ve çocuklarıyla iletişim konusunda becerilerini destekleyen grup eğitimidir.",
    "kimlerBasvurabilir": "3–6 yaşında çocuğu olan, sosyoekonomik olarak ihtiyaç sahibi anneler",
    "sehir": "Grup açılan il ve ilçeler",
    "sonBasvuru": null,
    "link": "https://www.acev.org/neler-yapiyoruz/programlarimiz/anne-babalar-icin/anne-destek-programi/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "anne",
      "ebeveynlik",
      "çocuk gelişimi",
      "AÇEV"
    ],
    "basvuruNotu": "Yerel grup, katılım koşulları ve dönem bilgisi için AÇEV ile iletişime geçin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false
  },
  {
    "id": 147,
    "kaynakTuru": "program",
    "ad": "AÇEV Baba Destek Programı",
    "kategori": "ebeveynlik",
    "aciklama": "Babaların çocuk bakımında sorumluluk almasını ve çocuklarıyla ilişkilerini güçlendirmesini destekleyen ücretsiz yüz yüze eğitimdir.",
    "kimlerBasvurabilir": "3–6 veya 7–11 yaşında çocuğu olan babalar",
    "sehir": "Grup açılan il ve ilçeler",
    "sonBasvuru": null,
    "link": "https://ilkisbabalik.acev.org/baba-destek-programi/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "baba",
      "ebeveynlik",
      "bakım",
      "AÇEV"
    ],
    "basvuruNotu": "Gruplar genellikle şubat ve eylülde başlar; yerel grup ve tarihleri AÇEV’den öğrenin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false
  },
  {
    "id": 148,
    "kaynakTuru": "program",
    "ad": "Türkiye'nin Mühendis Kızları (TMK) - Limak Vakfı",
    "kategori": "burslar",
    "aciklama": "Türkiye’nin Mühendis Kızları / Global Engineer Girls, kadın mühendislik öğrencilerine burs ve gelişim desteği sunar.",
    "kimlerBasvurabilir": "İlgili dönemin üniversite, mühendislik bölümü ve sınıf koşullarını sağlayan kadın öğrenciler",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://turkiye.globalengineergirls.com/tr",
    "sonKontrol": null,
    "etiketler": [
      "burs",
      "mühendislik",
      "mentorluk",
      "staj",
      "STEM",
      "Türkiye'nin Mühendis Kızları (TMK) - Limak Vakfı"
    ],
    "basvuruNotu": "Programın burs ve mentorluk kapsamı doğrulandı. Duyurudaki yayın yılı ile başvuru yılları arasındaki çelişki giderilemediğinden güncel dönem koşulları ve açık başvuru durumu doğrulanamadı. Portalın yeni dönem ilanını inceleyebilirsin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web-kismi",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-10-24",
      "not": "Programın burs ve mentorluk kapsamı doğrulandı. Duyurudaki yayın yılı ile başvuru yılları arasındaki çelişki giderilemediğinden güncel dönem koşulları ve açık başvuru durumu doğrulanamadı. Portalın yeni dönem ilanını inceleyebilirsin. 24 Ekim yeniden kontrolünde tam teyit sağlanamadı; belirsiz durum ve boş son kontrol tarihi korundu.",
      "kaynaklar": [
        "https://turkiye.globalengineergirls.com/tr",
        "https://turkiye.globalengineergirls.com/tr/haberler/trkiyenin-mhendis-kzlarnda-yeni-dnem-bavurular-balad"
      ]
    }
  },
  {
    "id": 150,
    "kaynakTuru": "hizmet",
    "ad": "ALO 183 Sosyal Destek Hattı",
    "kategori": "dernekler",
    "aciklama": "Aile ve Sosyal Hizmetler Bakanlığı'nın 7/24 ücretsiz hattı: kadına yönelik şiddet, psikososyal destek ve yönlendirme hizmeti verir.",
    "kimlerBasvurabilir": "Şiddete maruz kalan veya risk altındaki kadınlar ve çocuklar, yakınları",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr/alo-183/alo183pages/alo-183-hizmeti/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "şiddet",
      "7/24",
      "ücretsiz",
      "acil",
      "psikososyal"
    ],
    "basvuruNotu": "Telefon: 183. WhatsApp: 0 501 183 0 183, 7/24. İşaret diliyle görüntülü görüşme ayrı çalışma saatlerine tabidir. Acil tehlikede 112.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "ekKategoriler": [
      "saglik"
    ],
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Ücretsiz yurt içi telefon hizmeti ve WhatsApp hattının 7/24 erişimi doğrulandı; görüntülü görüşmenin saatleri farklıdır.",
      "kaynaklar": [
        "https://www.aile.gov.tr/alo-183/alo183pages/alo-183-hizmeti/"
      ]
    }
  },
  {
    "id": 151,
    "kaynakTuru": "hizmet",
    "ad": "KADES (Kadın Destek Uygulaması)",
    "kategori": "dernekler",
    "aciklama": "Şiddet veya tehdit anında tek dokunuşla polis/jandarmaya ihbar yapılabilen mobil uygulama.",
    "kimlerBasvurabilir": "Şiddet mağduru veya risk altındaki tüm kadınlar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://www.asayis.pol.tr/kadin-destek-uygulamasi-kades",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "şiddet",
      "acil",
      "uygulama",
      "güvenlik"
    ],
    "basvuruNotu": "Uygulama mağazalarından ücretsiz indirilir. Acil durumlarda ayrıca 112 aranabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "EGM’nin resmî uygulama tanıtımı doğrulandı.",
      "kaynaklar": [
        "https://www.asayis.pol.tr/kadin-destek-uygulamasi-kades"
      ]
    }
  },
  {
    "id": 152,
    "kaynakTuru": "program",
    "ad": "Kadın için Teknoloji Projesi (Habitat Derneği - Teknosa)",
    "kategori": "egitimler",
    "aciklama": "Teknosa ve Habitat iş birliğiyle teknoloji okuryazarlığı, kariyer planlama, tasarım ve yapay zekâ araçları eğitimleri sunar.",
    "kimlerBasvurabilir": "18 yaş ve üzeri, teknoloji becerilerini geliştirmek isteyen kadınlar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://habitatdernegi.org/dijital-donusum/kadin-icin-teknoloji/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "dijital okuryazarlık",
      "teknoloji",
      "kariyer",
      "tasarım",
      "yapay zekâ"
    ],
    "basvuruNotu": "Eğitimler dönemsel olarak düzenlenir. Güncel takvim ve kayıt koşullarını Habitat duyurularından kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Resmî sayfada başlangıç 2006, hedef grup 18 yaş ve üzeri; CSV’deki 2007 ve kesin içerik/sertifika iddiaları düzeltildi.",
      "kaynaklar": [
        "https://habitatdernegi.org/dijital-donusum/kadin-icin-teknoloji/"
      ]
    }
  },
  {
    "id": 153,
    "kaynakTuru": "kurum",
    "ad": "Women Techmakers — Technovation",
    "kategori": "egitimler",
    "aciklama": "Teknoloji alanındaki kadınlar için etkinlikler, mesleki gelişim ve mentorluk bağlantıları sunan küresel topluluktur.",
    "kimlerBasvurabilir": "Teknoloji, yazılım ve mühendislikle ilgilenen kadınlar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://www.technovation.org/women-techmakers",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "teknoloji",
      "yazılım",
      "topluluk",
      "mentorluk"
    ],
    "basvuruNotu": "Üyelik bağlantısı resmî sayfada bulunuyor. Elçi (Ambassador) başvuruları ayrı bir süreçtir ve sayfada kapalı olarak belirtiliyor; etkinlik tarihleri yerel topluluklara göre değişir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Google’ın eski adresi Technovation’a yönleniyor. Yalnızca yılda bir etkinlik iddiası kaldırıldı; üyelik ile elçilik başvurusu ayrıldı.",
      "kaynaklar": [
        "https://www.technovation.org/women-techmakers"
      ]
    }
  },
  {
    "id": 155,
    "kaynakTuru": "program",
    "ad": "Technovation Challenge — Girls Track",
    "kategori": "egitimler",
    "aciklama": "8–18 yaş grubunun teknoloji çözümleri geliştirdiği ücretsiz uluslararası yarışma programının Girls Track koludur.",
    "kimlerBasvurabilir": "Girls Track katılım koşullarını sağlayan 8–18 yaş grubundaki katılımcılar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://technovationchallenge.org/get-involved/",
    "sonKontrol": null,
    "etiketler": [
      "kodlama",
      "girişimcilik",
      "kız çocukları",
      "mentorluk",
      "uluslararası",
      "Technovation Challenge — Girls Track"
    ],
    "basvuruNotu": "Resmî sayfada kayıtların Ekim–11 Mart 2027 arasında açık olduğu bilgisi ile öğrenci kaydının kapalı olduğu mesajı birlikte yer alıyor. Bu çelişki nedeniyle güncel açık başvuru doğrulanamadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web-kismi",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-10-24",
      "not": "Resmî sayfada kayıtların Ekim–11 Mart 2027 arasında açık olduğu bilgisi ile öğrenci kaydının kapalı olduğu mesajı birlikte yer alıyor. Bu çelişki nedeniyle güncel açık başvuru doğrulanamadı. 24 Ekim yeniden kontrolünde tam teyit sağlanamadı; belirsiz durum ve boş son kontrol tarihi korundu.",
      "kaynaklar": [
        "https://technovationchallenge.org/get-involved/"
      ]
    }
  },
  {
    "id": 156,
    "kaynakTuru": "hizmet",
    "ad": "Adli Destek ve Mağdur Hizmetleri Müdürlükleri",
    "kategori": "hukuki",
    "aciklama": "Adliyelerde mağdurlara bilgilendirme, yönlendirme ve destek sağlayan birimler.",
    "kimlerBasvurabilir": "Suç mağdurları ve şiddet mağduru kadınlar",
    "sehir": "Türkiye geneli",
    "sonBasvuru": null,
    "link": "https://magdur.adalet.gov.tr/home/haritaliste",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "mağdur hakları",
      "adliye",
      "destek"
    ],
    "basvuruNotu": "Adliyelerde bulunan birime doğrudan başvurulabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Birimler resmî haritada, adliyeye başvuru yolu Bakanlığın mağdur hakları kılavuzunda doğrulandı.",
      "kaynaklar": [
        "https://magdur.adalet.gov.tr/home/haritaliste",
        "https://magdur.adalet.gov.tr/Resimler/SayfaDokuman/21102020125437YETI%CC%87S%CC%A7KI%CC%87NLER%20I%CC%87C%CC%A7I%CC%87N%20MAG%CC%86%20HAKLARI%20KILAVUZU%20bitmis%CC%A7%20hali27.02.2019.pdf"
      ]
    }
  },
  {
    "id": 157,
    "kaynakTuru": "kurum",
    "ad": "Baro Kadın Hakları Merkezleri",
    "kategori": "hukuki",
    "aciklama": "Baroların kadın hakları merkezleri; şiddet, boşanma, nafaka, velayet gibi konularda hukuki bilgi ve destek.",
    "kimlerBasvurabilir": "Hukuki destek arayan kadınlar",
    "sehir": "Türkiye geneli",
    "sonBasvuru": null,
    "link": "https://www.barobirlik.org.tr/Barolar",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "kadın hakları",
      "boşanma",
      "nafaka",
      "avukat"
    ],
    "basvuruNotu": "Bulunduğunuz baroda kadın hakları merkezi/komisyonu olup olmadığını ve danışmanlık koşullarını öğrenin. Avukatla temsil için adli yardım koşulları ayrıca değerlendirilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kadın hakları merkezleri TBB yayınında doğrulandı; her baroda aynı birim ve hizmet kapsamı varsayılmadı.",
      "kaynaklar": [
        "https://www.barobirlik.org.tr/Barolar",
        "https://tbbyayinlari.barobirlik.org.tr/TBBBooks/635.pdf"
      ]
    }
  },
  {
    "id": 158,
    "kaynakTuru": "hizmet",
    "ad": "6284 Sayılı Kanun Kapsamında Koruma ve Önleme Tedbirleri",
    "kategori": "hukuki",
    "aciklama": "Şiddet mağduru veya risk altındaki kadınlar için koruyucu ve önleyici tedbir kararları; başvuru kolluk, savcılık, aile mahkemesi veya ŞÖNİM üzerinden yapılabilir.",
    "kimlerBasvurabilir": "Şiddete maruz kalan veya risk altındaki kadınlar",
    "sehir": "Türkiye geneli",
    "sonBasvuru": null,
    "link": "https://www.aile.gov.tr/ksgm/siddete-maruz-kalindiginda/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "şiddet",
      "koruma kararı",
      "6284",
      "hukuk"
    ],
    "basvuruNotu": "Koruma ve destek başvuruları için resmî rehberdeki kolluk, adli birimler, il müdürlüğü ve ŞÖNİM yollarını inceleyin. Acil tehlikede 112.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Bakanlığın 6284 ve başvuru kurumları hakkındaki resmî rehberiyle eşleştirildi.",
      "kaynaklar": [
        "https://www.aile.gov.tr/ksgm/siddete-maruz-kalindiginda/"
      ]
    }
  },
  {
    "id": 160,
    "kaynakTuru": "program",
    "ad": "Türkiye'nin Mühendis Kızları - Staj ve Mentorluk Ağı",
    "kategori": "kariyer",
    "aciklama": "Türkiye’nin Mühendis Kızları / Global Engineer Girls katılımcılarına yönelik mentorluk ve staj olanaklarını tanıtır.",
    "kimlerBasvurabilir": "TMK programına kabul edilen kadın mühendislik öğrencileri",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://turkiye.globalengineergirls.com/tr",
    "sonKontrol": null,
    "etiketler": [
      "staj",
      "mentorluk",
      "mühendislik",
      "Türkiye'nin Mühendis Kızları - Staj ve Mentorluk Ağı"
    ],
    "basvuruNotu": "Destekler ana program kapsamındadır. Bağımsız açık staj başvurusu ve güncel dönem kabul koşulları doğrulanamadı; program duyurularındaki yıl çelişkisi sürdüğü için teyit kısmi bırakıldı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web-kismi",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-10-24",
      "not": "Destekler ana program kapsamındadır. Bağımsız açık staj başvurusu ve güncel dönem kabul koşulları doğrulanamadı; program duyurularındaki yıl çelişkisi sürdüğü için teyit kısmi bırakıldı. 24 Ekim yeniden kontrolünde tam teyit sağlanamadı; belirsiz durum ve boş son kontrol tarihi korundu.",
      "kaynaklar": [
        "https://turkiye.globalengineergirls.com/tr"
      ]
    }
  },
  {
    "id": 161,
    "kaynakTuru": "program",
    "ad": "KAGİDER Pusula - Girişimcilik ve Kariyer Eğitimleri",
    "kategori": "kariyer",
    "aciklama": "KAGİDER Pusula, kadınlara girişimcilik ve iş yaşamı konularında çevrim içi eğitim içerikleri sunar.",
    "kimlerBasvurabilir": "Kadınlar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://www.kagiderpusula.org/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "eğitim",
      "kariyer",
      "girişimcilik",
      "online",
      "KAGİDER Pusula - Girişimcilik ve Kariyer Eğitimleri"
    ],
    "basvuruNotu": "Portal tarayıcıda açılarak eğitim kataloğu doğrulandı. KAGİDER’in resmî SSS’si ücretsiz kayıt ve eğitim videolarına erişimi açıklıyor. Sertifika ve mentorluk için ayrıca program koşulları bulunabilir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Portal tarayıcıda açılarak eğitim kataloğu doğrulandı. KAGİDER’in resmî SSS’si ücretsiz kayıt ve eğitim videolarına erişimi açıklıyor. Sertifika ve mentorluk için ayrıca program koşulları bulunabilir.",
      "kaynaklar": [
        "https://www.kagiderpusula.org/",
        "https://kagider.org/tr/sss"
      ]
    }
  },
  {
    "id": 162,
    "kaynakTuru": "program",
    "ad": "KA.DER Kadın Liderlik ve Temsil Eğitimleri",
    "kategori": "kariyer",
    "aciklama": "Siyaset, yönetim ve karar alma alanında kariyer hedefleyen kadınlara yönelik eğitim ve destek.",
    "kimlerBasvurabilir": "Liderlik/siyaset hedefleyen kadınlar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://ka-der.org.tr/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "liderlik",
      "siyaset",
      "kariyer"
    ],
    "basvuruNotu": "Programlar dönemsel; eski Siyaset Okulu ilanları güncel başvuru sayılmamalıdır. Yeni çağrıyı derneğin duyurularından kontrol edin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "KA.DER’in eğitim çalışmaları doğrulandı; belirli bir güncel Siyaset Okulu çağrısı doğrulanmadı.",
      "kaynaklar": [
        "https://ka-der.org.tr/"
      ]
    }
  },
  {
    "id": 163,
    "kaynakTuru": "hizmet",
    "ad": "Mor Çatı Sığınak Hizmeti",
    "kategori": "barinma",
    "aciklama": "Şiddete maruz kalan kadınlara bağımsız sığınak ve dayanışma desteği.",
    "kimlerBasvurabilir": "Şiddet mağduru kadınlar",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "link": "https://morcati.org.tr/wp-content/uploads/2022/07/Kadina-Yonelik-Siddetle-Mucadelede-Siginaklar.pdf",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "sığınak",
      "barınma",
      "şiddet"
    ],
    "basvuruNotu": "Önce Mor Çatı dayanışma merkeziyle görüşün. Sığınak yönlendirmesi ihtiyaç ve uygunluğa bağlıdır; adres gizlidir.",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Sığınak için dayanışma merkeziyle görüşme ve uygunluk değerlendirmesi gerektiği doğrulandı.",
      "kaynaklar": [
        "https://morcati.org.tr/wp-content/uploads/2022/07/Kadina-Yonelik-Siddetle-Mucadelede-Siginaklar.pdf"
      ]
    }
  },
  {
    "id": 165,
    "kaynakTuru": "hizmet",
    "ad": "SGDD-ASAM Danışmanlık Hattı",
    "kategori": "barinma",
    "aciklama": "Mültecilere ve sığınmacı kadınlara hukuki, psikososyal ve toplumsal cinsiyete dayalı şiddet konularında destek veren danışmanlık hizmeti.",
    "kimlerBasvurabilir": "Mülteci ve sığınmacı kadınlar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://sgdd.org.tr/iletisim/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "mülteci",
      "hukuki destek",
      "psikososyal",
      "çok dilli"
    ],
    "basvuruNotu": "Danışmanlık: +90 (312) 212 60 12. Ofisler hafta içi 09.00–17.30 hizmet veriyor. Destek kapsamını ve ihtiyaç duyduğunuz dilde hizmeti kurumdan öğrenin.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Danışmanlık telefonu ve ofis saatleri doğrulandı; tüm danışmanlık için kesin dil listesi iddiası kaldırıldı.",
      "kaynaklar": [
        "https://sgdd.org.tr/iletisim/"
      ]
    }
  },
  {
    "id": 166,
    "kaynakTuru": "bilgi",
    "ad": "UNHCR Türkiye Yardım Sayfası",
    "kategori": "barinma",
    "aciklama": "Mültecilere ve sığınmacılara hizmetler, başvuru yolları ve güvenli barınma konusunda bilgilendirme.",
    "kimlerBasvurabilir": "Mülteci ve sığınmacı kadınlar",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "link": "https://help.unhcr.org/turkiye/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "mülteci",
      "barınma",
      "bilgi",
      "UNHCR"
    ],
    "basvuruNotu": "Türkçe, İngilizce, Arapça ve Farsça rehberler bulunur. Bu bir bilgilendirme kaynağıdır; barınma veya nakit desteği tahsisi değildir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Çok dilli hak, yükümlülük ve mevcut hizmetlere yönlendirme içeriği doğrulandı; doğrudan konaklama garantisi değildir.",
      "kaynaklar": [
        "https://help.unhcr.org/turkiye/"
      ]
    }
  },
  {
    "id": 168,
    "kaynakTuru": "program",
    "ad": "AÇEV Anne-Çocuk Eğitim Programı (AÇEP)",
    "kategori": "ebeveynlik",
    "aciklama": "Okul öncesi eğitime katılmamış çocukları ve annelerini destekleyen, ev merkezli erken çocukluk eğitim programıdır.",
    "kimlerBasvurabilir": "5 yaş itibarıyla daha önce okul öncesi eğitim almamış çocuklar ve anneleri",
    "sehir": "Programın uygulandığı il ve ilçeler",
    "sonBasvuru": null,
    "link": "https://www.acev.org/neler-yapiyoruz/programlarimiz/cocuklar-icin/anne-cocuk-egitim-programi/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "ebeveynlik",
      "erken çocukluk",
      "eğitim",
      "anne"
    ],
    "basvuruNotu": "Program modeli doğrulandı; yerel grup ve kayıt dönemini AÇEV’den öğrenin.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "AÇEP’in hedefi tüm ebeveynler değil; okul öncesi eğitime katılmamış 5 yaş çocukları ve anneleridir.",
      "kaynaklar": [
        "https://www.acev.org/neler-yapiyoruz/programlarimiz/cocuklar-icin/anne-cocuk-egitim-programi/"
      ]
    }
  },
  {
    "id": 169,
    "kaynakTuru": "hizmet",
    "ad": "KEDV Kadın ve Çocuk Merkezleri",
    "kategori": "ebeveynlik",
    "aciklama": "Kadınların liderliğinde, dar gelirli kesimlerde çocuk bakımı ve erken eğitim hizmetlerini yaygınlaştıran toplum temelli modeldir.",
    "kimlerBasvurabilir": "Modelin uygulandığı merkezlerin koşullarını sağlayan 2–6 yaş çocukları ve aileleri",
    "sehir": "Merkezlerin bulunduğu il ve ilçeler",
    "sonBasvuru": null,
    "link": "https://www.kedv.org.tr/guclendirme-ve-kooperatiflesme",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "kreş",
      "çocuk bakımı",
      "mahalle"
    ],
    "basvuruNotu": "Yakınınızdaki merkez, yaş grubu, ücret ve kontenjanı KEDV’den öğrenin; her ilde hizmet bulunduğu doğrulanmadı.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "Kadın ve Çocuk Merkezleri modeli ile 2–6 yaş kapsamı doğrulandı; yalnızca İstanbul ile sınırlandıran bilgi kaldırıldı.",
      "kaynaklar": [
        "https://www.kedv.org.tr/guclendirme-ve-kooperatiflesme"
      ]
    }
  },
  {
    "id": 171,
    "kaynakTuru": "program",
    "ad": "MEB Aile Okulu — Anne-Baba Eğitimleri",
    "kategori": "ebeveynlik",
    "aciklama": "Anne-babaların çocukların gelişim ve eğitimine katılımını destekleyen aile ve ebeveyn eğitimleridir.",
    "kimlerBasvurabilir": "Anne-babalar, aile bireyleri",
    "sehir": "Türkiye geneli",
    "sonBasvuru": null,
    "link": "https://aileokulu.meb.gov.tr/aile-okulu-programlari/",
    "sonKontrol": "2026-10-22",
    "etiketler": [
      "ebeveynlik",
      "aile eğitimi",
      "kurs",
      "çocuk gelişimi"
    ],
    "basvuruNotu": "Programları Aile Okulu sayfasından inceleyin. Halk eğitimi kurslarının açılışı ve kayıtları yerel merkeze bağlıdır; e-Yaygın üzerinden başvuru bilgisi alınabilir.",
    "basvuruDurumu": "belirsiz",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-22",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-22",
      "not": "2026 Aile Okulu programları ve HEMBA bağlantıları doğrulandı; yerel kursun açık olduğu varsayılmadı.",
      "kaynaklar": [
        "https://aileokulu.meb.gov.tr/aile-okulu-programlari/",
        "https://hbogm.meb.gov.tr/www/maarif-modeli-ebeveyn-okulu-kurs-programi/icerik/1818"
      ]
    }
  },
  {
    "ad": "Padua International Excellence Scholarship (Padova Üniversitesi)",
    "aciklama": "Padova Üniversitesi’nde İngilizce lisans veya yüksek lisans için yıllık 8.000 € brüt burs ve öğrenim harcı muafiyeti sunar. Lisans için en fazla 3, yüksek lisans için 2 yıl sürer. Bölgesel harç ve damga pulu öğrenciye aittir.",
    "kimlerBasvurabilir": "İtalya dışında ikamet eden, İtalyan vatandaşlığı bulunmayan (çifte vatandaşlık istisnasıyla), yurt dışı diplomalı ve uygun İngilizce programa başvuran uluslararası adaylar. Başka burs almama koşulu bulunur. Kadınlara özel değildir.",
    "link": "https://www.unipd.it/en/padua-international-excellence-scholarship-programme",
    "basvuruDurumu": "belirsiz",
    "basvuruNotu": "Ayrı burs başvurusu gerekmez; uygun program başvuruları akademik başarıya göre değerlendirilir. Yeni çağrının Kasım 2026’da yayımlanacağı duyuruluyor; yeni dönemin son tarihi henüz doğrulanmadı. Programın kabul ve dil koşullarını inceleyin.",
    "sehir": "Padova, İtalya",
    "id": 172,
    "kaynakTuru": "program",
    "kategori": "burslar",
    "sonBasvuru": null,
    "sonKontrol": "2026-10-23",
    "sehirler": [
      "Padova"
    ],
    "etiketler": [
      "burs",
      "yurt dışı",
      "İtalya",
      "lisans",
      "yüksek lisans",
      "uluslararası öğrenci",
      "kısmi burs"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "dosyadaBildirilenSonKontrol": "2026-10-23",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-23",
      "not": "Genel koşullar doğrulandı. 76’ya kadar burs bilgisi mevcut sayfaya aittir; yeni dönem kontenjanı varsayılmadı. Başarı ve devam koşullarına uyulmazsa burs iptali ve geri ödeme söz konusu olabilir. Yeni çağrı henüz yayımlanmadığı için durum belirsiz bırakıldı.",
      "kaynaklar": [
        "https://www.unipd.it/en/padua-international-excellence-scholarship-programme"
      ]
    }
  },
  {
    "id": 176,
    "kaynakTuru": "program",
    "ad": "University of Alberta — More Problem Solving, Python Programming and Video Games",
    "kategori": "egitimler",
    "aciklama": "Python ve oyun geliştirme konularında dört modüllük çevrim içi devam kursu. Üniversite bu kursu ücretsiz olarak tanımlar.",
    "kimlerBasvurabilir": "Python temellerini bilen ve programlama becerilerini ilerletmek isteyenler; kadınlara özel değildir",
    "sehir": "Çevrim içi / Kanada",
    "sonBasvuru": null,
    "link": "https://www.ualberta.ca/en/admissions-programs/online-courses/index.html",
    "sonKontrol": "2026-10-24",
    "etiketler": [
      "University of Alberta",
      "egitimler",
      "Genel / Herkes"
    ],
    "basvuruNotu": "Coursera üzerinden kayıt bağlantısı bulunur. Sertifika veya ek hizmetlerin ücretsiz olduğu doğrulanmadı; kayıt ekranındaki koşulları inceleyin. Üniversitenin diğer kurslarının tümü ücretsiz olarak değerlendirilmedi.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar-2.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-24",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-24",
      "not": "Resmî kaynakta kartın kapsamı ve başvuru bilgisi kontrol edildi. Coursera üzerinden kayıt bağlantısı bulunur. Sertifika veya ek hizmetlerin ücretsiz olduğu doğrulanmadı; kayıt ekranındaki koşulları inceleyin. Üniversitenin diğer kurslarının tümü ücretsiz olarak değerlendirilmedi.",
      "kaynaklar": [
        "https://www.ualberta.ca/en/admissions-programs/online-courses/index.html"
      ]
    }
  },
  {
    "id": 177,
    "kaynakTuru": "program",
    "ad": "Zonta International — Amelia Earhart Fellowship (2027)",
    "kategori": "burslar",
    "aciklama": "Havacılık/uzay mühendisliği ve uzay bilimlerinde doktora yapan kadınlar için 12.000 USD burs; en fazla 30 bursiyer desteklenir.",
    "kimlerBasvurabilir": "Tüm milliyetlerden, tam zamanlı doktora yapan; en az bir doktora yılını tamamlamış veya ilgili alanda yüksek lisans derecesi almış kadınlar",
    "sehir": "Dünya geneli",
    "sonBasvuru": "2026-11-15",
    "link": "https://www.zonta.org/AEFellowship",
    "sonKontrol": "2026-10-24",
    "etiketler": [
      "Zonta International",
      "burslar",
      "Doktora"
    ],
    "basvuruNotu": "2027 başvuruları 15 Kasım 2026’da kapanır. Doktoranın Nisan 2028’den önce bitmemesi gerekir; doktora sonrası araştırma kapsam dışıdır. Önceki bursiyerler aynı bursu yenileyemez; üyelik ve çıkar çatışması koşullarını inceleyin.",
    "basvuruDurumu": "acik",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar-2.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-24",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-24",
      "not": "Resmî kaynakta kartın kapsamı ve başvuru bilgisi kontrol edildi. 2027 başvuruları 15 Kasım 2026’da kapanır. Doktoranın Nisan 2028’den önce bitmemesi gerekir; doktora sonrası araştırma kapsam dışıdır. Önceki bursiyerler aynı bursu yenileyemez; üyelik ve çıkar çatışması koşullarını inceleyin.",
      "kaynaklar": [
        "https://www.zonta.org/AEFellowship"
      ]
    }
  },
  {
    "id": 178,
    "kaynakTuru": "program",
    "ad": "P.E.O. International Peace Scholarship (IPS)",
    "kategori": "burslar",
    "aciklama": "ABD veya Kanada’da öğrenim gören uluslararası kadınlara ihtiyaca göre en fazla 12.500 USD destek. Burs tüm giderleri karşılamaz.",
    "kimlerBasvurabilir": "ABD/Kanada vatandaşı veya daimi oturum sahibi olmayan, ilgili lisansüstü öğrenim ve ikamet koşullarını sağlayan kadınlar",
    "sehir": "ABD / Kanada",
    "sonBasvuru": "2026-12-15",
    "link": "https://www.peointernational.org/educational-support/international-peace-scholarship-fund/eligibility-and-application-process/",
    "sonKontrol": "2026-10-24",
    "etiketler": [
      "P.E.O. Sisterhood",
      "burslar",
      "Yüksek Lisans & Doktora"
    ],
    "basvuruNotu": "15 Eylül–15 Aralık yıllık uygunluk formu dönemidir; bu tarih tam başvurunun son tarihi değildir. İlk başvuruda en az bir tam yıllık ders dönemi kalmalı; ülkeye dönüş beklenir. Yalnız tez, araştırma, staj veya çevrim içi kurslar için verilmez.",
    "basvuruDurumu": "acik",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar-2.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-24",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-24",
      "not": "Resmî kaynakta kartın kapsamı ve başvuru bilgisi kontrol edildi. 15 Eylül–15 Aralık yıllık uygunluk formu dönemidir; bu tarih tam başvurunun son tarihi değildir. İlk başvuruda en az bir tam yıllık ders dönemi kalmalı; ülkeye dönüş beklenir. Yalnız tez, araştırma, staj veya çevrim içi kurslar için verilmez.",
      "kaynaklar": [
        "https://www.peointernational.org/educational-support/international-peace-scholarship-fund/eligibility-and-application-process/"
      ]
    }
  },
  {
    "id": 180,
    "kaynakTuru": "program",
    "ad": "UN Women — I Know Gender 1–2–3",
    "kategori": "egitimler",
    "aciklama": "Toplumsal cinsiyet eşitliği kavramları ve uluslararası çerçeveler üzerine ücretsiz, kendi hızında çevrim içi giriş eğitimi. Yaklaşık 2,5 saat; sertifika seçeneği bulunur.",
    "kimlerBasvurabilir": "BM çalışanları ve toplumsal cinsiyet konularıyla ilgilenen herkes",
    "sehir": "Çevrim içi",
    "sonBasvuru": null,
    "link": "https://www.unsdglearn.org/courses/i-know-gender-1-2-3-gender-concepts-to-get-started-international-frameworks-for-gender-equality-and-promoting-gender-equality-throughout-the-un-system/",
    "sonKontrol": "2026-10-24",
    "etiketler": [
      "UN Women",
      "egitimler",
      "Genel"
    ],
    "basvuruNotu": "BM SDG:Learn kataloğunda ücretsiz ve İngilizce olarak listelenir. Kurs erişimi ve kayıt için resmî eğitim platformuna yönlendirilir. Diğer UN Women kurslarının tümü ücretsiz değildir.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar-2.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-24",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-24",
      "not": "Resmî kaynakta kartın kapsamı ve başvuru bilgisi kontrol edildi. BM SDG:Learn kataloğunda ücretsiz ve İngilizce olarak listelenir. Kurs erişimi ve kayıt için resmî eğitim platformuna yönlendirilir. Diğer UN Women kurslarının tümü ücretsiz değildir.",
      "kaynaklar": [
        "https://www.unsdglearn.org/courses/i-know-gender-1-2-3-gender-concepts-to-get-started-international-frameworks-for-gender-equality-and-promoting-gender-equality-throughout-the-un-system/",
        "https://trainingcentre.unwomen.org/"
      ]
    }
  },
  {
    "id": 181,
    "kaynakTuru": "program",
    "ad": "KOSGEB Girişimci Destek Programı — İş Kurma Desteği",
    "kategori": "girisimcilik",
    "aciklama": "Yeni işletmelere yönelik geri ödemesiz destek bileşeni. Kadın girişimcilerin işletmeleri, koşulları sağladığında performans giderleri desteğinden yararlanabilir.",
    "kimlerBasvurabilir": "KOSGEB’in desteklediği sektörlerdeki yeni işletmeler; güncel işletme beyanı ve diğer program koşulları aranır",
    "sehir": "Türkiye",
    "sonBasvuru": null,
    "link": "https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/1231/girisimci-destek-programi",
    "sonKontrol": "2026-10-24",
    "etiketler": [
      "KOSGEB",
      "girisimcilik"
    ],
    "basvuruNotu": "Genel koşul 0–1 yaş işletmedir. 16 Aralık 2024 ve sonrasında kurulan işletmeler için 31 Aralık 2026’ya kadar yaş şartına ilişkin geçiş istisnası açıklanmıştır. Performans desteği satış ve SGK prim günü şartlarına bağlıdır; İş Geliştirme çağrısından ayrıdır.",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "veriKaynagi": "shEducate_kaynaklar-2.csv",
    "dosyadaBildirilenSonKontrol": "2026-10-24",
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-10-24",
      "not": "Resmî kaynakta kartın kapsamı ve başvuru bilgisi kontrol edildi. Genel koşul 0–1 yaş işletmedir. 16 Aralık 2024 ve sonrasında kurulan işletmeler için 31 Aralık 2026’ya kadar yaş şartına ilişkin geçiş istisnası açıklanmıştır. Performans desteği satış ve SGK prim günü şartlarına bağlıdır; İş Geliştirme çağrısından ayrıdır.",
      "kaynaklar": [
        "https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/1231/girisimci-destek-programi"
      ]
    }
  },
  {
    "id": 182,
    "kaynakTuru": "program",
    "sehir": "Birleşik Krallık — Oxford",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "acik",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "ad": "Oxford Clarendon — Lisansüstü Bursları",
    "kategori": "burslar",
    "aciklama": "Oxford’da yeni bir yüksek lisans veya doktora programına başvuran adaylara akademik başarı temelinde öğrenim ücreti ve yaşam gideri desteği sunar.",
    "kimlerBasvurabilir": "Türkiye dahil tüm ülkelerden, ilgili Oxford yüksek lisans veya doktora programının akademik ve dil koşullarını sağlayan adaylar",
    "link": "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/funding/clarendon/applicants",
    "basvuruNotu": "Ayrı burs formu gerekmez. 2027–2028 giriş dönemi için seçtiğin programın Aralık 2026 veya Ocak 2027 burs değerlendirme tarihine kadar lisansüstü başvurusunu tamamlamalısın. Kesin gün programa göre değiştiğinden ortak son tarih verilmedi. Burs yalnızca kadınlara yönelik değildir; kabul başvurusunun ücret ve muafiyet koşullarını ayrıca inceleyin.",
    "etiketler": [
      "Oxford",
      "Clarendon",
      "yüksek lisans",
      "doktora",
      "yurt dışı burs"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Ayrı burs formu gerekmez. 2027–2028 giriş dönemi için seçtiğin programın Aralık 2026 veya Ocak 2027 burs değerlendirme tarihine kadar lisansüstü başvurusunu tamamlamalısın. Kesin gün programa göre değiştiğinden ortak son tarih verilmedi. Burs yalnızca kadınlara yönelik değildir; kabul başvurusunun ücret ve muafiyet koşullarını ayrıca inceleyin.",
      "kaynaklar": [
        "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/funding/clarendon/applicants",
        "https://www.ox.ac.uk/admissions/graduate/application-guide"
      ]
    }
  },
  {
    "id": 183,
    "kaynakTuru": "bilgi",
    "sehir": "Birleşik Krallık — Cambridge",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "ad": "Cambridge Trust — 2027/28 Burs Arama Rehberi",
    "kategori": "burslar",
    "aciklama": "Cambridge Üniversitesi için lisans, yüksek lisans ve doktora düzeyindeki tam veya kısmi bursları ülke ve öğrenim düzeyine göre inceleyebileceğin resmî rehberdir.",
    "kimlerBasvurabilir": "Cambridge’de öğrenim planlayan, seçilen bursun ülke ve program koşullarını sağlayan adaylar",
    "link": "https://www.cambridgetrust.org/find-a-scholarship/",
    "basvuruNotu": "Bu kayıt burs arama rehberine sürekli erişimi gösterir; listedeki tüm bursların başvurusu açık demek değildir. Türkiye vatandaşlığını ve öğrenim düzeyini seçerek uygun bursları inceleyin. Lisansüstünde kabul başvurusundaki finansman bölümünü doldurmak ve programa özel burs son tarihine yetişmek gerekir; bazı ortak burslar ek başvuru ister.",
    "etiketler": [
      "Cambridge",
      "burs arama",
      "yüksek lisans",
      "doktora",
      "lisans"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Bu kayıt burs arama rehberine sürekli erişimi gösterir; listedeki tüm bursların başvurusu açık demek değildir. Türkiye vatandaşlığını ve öğrenim düzeyini seçerek uygun bursları inceleyin. Lisansüstünde kabul başvurusundaki finansman bölümünü doldurmak ve programa özel burs son tarihine yetişmek gerekir; bazı ortak burslar ek başvuru ister.",
      "kaynaklar": [
        "https://www.cambridgetrust.org/find-a-scholarship/",
        "https://www.cambridgetrust.org/postgraduate-applicants/",
        "https://www.postgraduate.study.cam.ac.uk/apply/application-deadlines"
      ]
    }
  },
  {
    "id": 184,
    "kaynakTuru": "bilgi",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "ad": "freeCodeCamp — Ücretsiz Yazılım Eğitimleri",
    "kategori": "egitimler",
    "aciklama": "Proje ve alıştırmalarla kendi hızında yazılım öğrenebileceğin ücretsiz çevrim içi eğitim ve sertifika platformudur.",
    "kimlerBasvurabilir": "Yazılım öğrenmek isteyen herkes; içeriklerin diline ve seçilen dersin ön bilgilerine uygun katılımcılar",
    "link": "https://www.freecodecamp.org/learn/",
    "basvuruNotu": "Resmî SSS’ye göre eğitimler, projeler ve sertifikalar ücretsizdir. Ortak son başvuru tarihi yoktur. Sertifika için ilgili öğrenme ve proje koşullarını tamamlamak gerekir; eğitim iş garantisi sunmaz.",
    "etiketler": [
      "yazılım",
      "kodlama",
      "ücretsiz",
      "sertifika",
      "İngilizce"
    ],
    "ekKategoriler": [
      "kariyer"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Resmî SSS’ye göre eğitimler, projeler ve sertifikalar ücretsizdir. Ortak son başvuru tarihi yoktur. Sertifika için ilgili öğrenme ve proje koşullarını tamamlamak gerekir; eğitim iş garantisi sunmaz.",
      "kaynaklar": [
        "https://www.freecodecamp.org/learn/",
        "https://www.freecodecamp.org/news/about/"
      ]
    }
  },
  {
    "id": 185,
    "kaynakTuru": "bilgi",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "ad": "ODTÜ Bilgeİş — Çevrim İçi Eğitimler",
    "kategori": "egitimler",
    "aciklama": "Web tasarımı, programlama, dijital pazarlama ve iş hayatı becerileri için ücretsiz çevrim içi dersler sunar.",
    "kimlerBasvurabilir": "Öğrenmek isteyen herkes; çalışanlar, işverenler, girişimciler ve öğrenciler",
    "link": "https://bilgeis.net/mod/page/view.php?id=5250&lang=en",
    "basvuruNotu": "Resmî sayfa portalın herkese açık ve eğitimlerin ücretsiz olduğunu belirtiyor. Derslerin başarı koşullarını sağlayanlara sertifika verilir. Ders seçimi ve kayıt için portalı kullanın; ortak başvuru dönemi bulunmuyor.",
    "etiketler": [
      "ODTÜ",
      "Bilgeİş",
      "dijital pazarlama",
      "mesleki gelişim",
      "ücretsiz"
    ],
    "ekKategoriler": [
      "kariyer",
      "girisimcilik"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Resmî sayfa portalın herkese açık ve eğitimlerin ücretsiz olduğunu belirtiyor. Derslerin başarı koşullarını sağlayanlara sertifika verilir. Ders seçimi ve kayıt için portalı kullanın; ortak başvuru dönemi bulunmuyor.",
      "kaynaklar": [
        "https://bilgeis.net/mod/page/view.php?id=5250&lang=en"
      ]
    }
  },
  {
    "id": 186,
    "kaynakTuru": "hizmet",
    "sehir": "Ankara / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "ad": "Ankara Büyükşehir Belediyesi — Kariyer Platformu",
    "kategori": "kariyer",
    "aciklama": "İş arayanların ücretsiz üyelik ve özgeçmiş oluşturarak iş ilanlarına başvurmasını sağlayan belediye platformudur.",
    "kimlerBasvurabilir": "İş arayanlar; engelli adaylar dahil, ilgili ilanın koşullarını sağlayan kişiler",
    "link": "https://kariyermerkezi.ankara.bel.tr/uyeol",
    "basvuruNotu": "İş Arayan sekmesinden ücretsiz kayıt yapıldıktan sonra özgeçmiş oluşturulur. Her ilanın koşulları ve son tarihi ayrıdır; platforma kayıt işe yerleşme garantisi değildir.",
    "etiketler": [
      "Ankara",
      "iş arama",
      "özgeçmiş",
      "istihdam"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "İş Arayan sekmesinden ücretsiz kayıt yapıldıktan sonra özgeçmiş oluşturulur. Her ilanın koşulları ve son tarihi ayrıdır; platforma kayıt işe yerleşme garantisi değildir.",
      "kaynaklar": [
        "https://kariyermerkezi.ankara.bel.tr/uyeol"
      ]
    }
  },
  {
    "id": 187,
    "kaynakTuru": "hizmet",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": null,
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web-kismi",
    "ad": "Yetenek Kapısı — Üniversite Kariyer Platformu",
    "kategori": "kariyer",
    "aciklama": "Üniversite öğrencileri ve mezunlarına iş, staj, kariyer danışmanlığı ve etkinlik duyurularına erişim sağlar.",
    "kimlerBasvurabilir": "Üniversite öğrencileri ve mezunları; ilan veya etkinliğin kendi koşullarına uygun adaylar",
    "link": "https://yetenekkapisi.gov.tr/",
    "basvuruNotu": "Üniversitenin resmî duyurusuna göre güncel adres yetenekkapisi.gov.tr’dir ve mevcut hesaplar geçerlidir. İş ve stajların tarihleri ayrı ayrı kontrol edilmelidir. Platform bu taramada 502 hatası verdi; hizmet ve yeni adres üniversitenin duyurusundan doğrulandı, giriş işlemi denenmedi.",
    "etiketler": [
      "üniversite",
      "mezun",
      "staj",
      "iş",
      "kariyer danışmanlığı"
    ],
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-11-11",
      "not": "Üniversitenin resmî duyurusuna göre güncel adres yetenekkapisi.gov.tr’dir ve mevcut hesaplar geçerlidir. İş ve stajların tarihleri ayrı ayrı kontrol edilmelidir. Platform bu taramada 502 hatası verdi; hizmet ve yeni adres üniversitenin duyurusundan doğrulandı, giriş işlemi denenmedi.",
      "kaynaklar": [
        "https://yetenekkapisi.gov.tr/",
        "https://www.ufuk.edu.tr/home/universite-genel-duyurular/yetenek-kapisi-platformu-erisim-adresi-guncellendi"
      ]
    }
  },
  {
    "id": 188,
    "kaynakTuru": "bilgi",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "ad": "AÇEV İlk6Yıl — Dijital Ebeveyn Rehberi",
    "kategori": "ebeveynlik",
    "aciklama": "Çocuğun ilk altı yılındaki gelişimini desteklemek için öneriler, oyunlar ve ebeveynlik bilgileri sunan mobil uygulamadır.",
    "kimlerBasvurabilir": "0–6 yaş çocukların ebeveynleri ve bakım verenleri",
    "link": "https://www.acev.org/neler-yapiyoruz/projelerimiz/ilk-6-yil-mobil-uygulama/",
    "basvuruNotu": "AÇEV’in resmî sayfasına göre Android ve iOS için ücretsiz indirilebilir. Başvuru dönemi yoktur; mağaza bağlantıları kurum sayfasındadır. Bu kayıt ebeveynlik içeriğine erişim içindir.",
    "etiketler": [
      "AÇEV",
      "0–6 yaş",
      "çocuk gelişimi",
      "oyun",
      "ebeveynlik"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "AÇEV’in resmî sayfasına göre Android ve iOS için ücretsiz indirilebilir. Başvuru dönemi yoktur; mağaza bağlantıları kurum sayfasındadır. Bu kayıt ebeveynlik içeriğine erişim içindir.",
      "kaynaklar": [
        "https://www.acev.org/neler-yapiyoruz/projelerimiz/ilk-6-yil-mobil-uygulama/"
      ]
    }
  },
  {
    "id": 189,
    "kaynakTuru": "bilgi",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "ad": "AÇEV Okuyan Bir Gelecek — Kitap ve Etkinlikler",
    "kategori": "ebeveynlik",
    "aciklama": "Çocuklarla birlikte okumayı destekleyen seslendirilmiş kitaplar, ebeveyn önerileri ve etkinlikler sunar.",
    "kimlerBasvurabilir": "Özellikle 3–7 yaş çocukların ebeveynleri, bakım verenleri ve eğitimciler",
    "link": "https://okuyanbirgelecek.acev.org/",
    "basvuruNotu": "Kitap seçkisi 3–7 yaş grubuna yöneliktir. İçeriklere çevrim içi erişilir; ortak kayıt veya başvuru dönemi bulunmaz. Çocuğunla birlikte okuyup ilgili etkinlikleri uygulayabilirsin.",
    "etiketler": [
      "AÇEV",
      "kitap",
      "erken çocukluk",
      "okuma",
      "etkinlik"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Kitap seçkisi 3–7 yaş grubuna yöneliktir. İçeriklere çevrim içi erişilir; ortak kayıt veya başvuru dönemi bulunmaz. Çocuğunla birlikte okuyup ilgili etkinlikleri uygulayabilirsin.",
      "kaynaklar": [
        "https://okuyanbirgelecek.acev.org/",
        "https://okuyanbirgelecek.acev.org/proje"
      ]
    }
  },
  {
    "id": 190,
    "kaynakTuru": "hizmet",
    "sehir": "İstanbul",
    "sonBasvuru": null,
    "sonKontrol": null,
    "basvuruDurumu": "surekli",
    "sehirler": [
      "İstanbul"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web-kismi",
    "ad": "İBB Kadın Destek Hattı",
    "kategori": "dernekler",
    "aciklama": "Şiddete maruz bırakılan veya risk altındaki kadınlara sosyal, hukuki ve psikolojik rehberlik ile ilgili hizmetlere yönlendirme sunar.",
    "kimlerBasvurabilir": "İstanbul’da şiddet riski yaşayan veya sosyal, hukuki ve psikolojik rehberliğe ihtiyaç duyan kadınlar",
    "link": "https://sosyalhizmetler.ibb.gov.tr/sayfadetay.aspx?ID=14",
    "basvuruNotu": "Belediyenin resmî hizmet sayfası 444 80 86 hattında 7/24 Türkçe, Kürtçe, Arapça ve İngilizce destek bildiriyor. Hizmet bilgisi arama dizinindeki resmî sayfa içeriğinden incelendi; doğrudan sayfa erişimi zaman aşımına uğradı. Barınma ve diğer destekler ihtiyaç değerlendirmesine bağlıdır.",
    "etiketler": [
      "İBB",
      "kadın destek",
      "danışmanlık",
      "İstanbul"
    ],
    "ekKategoriler": [
      "hukuki",
      "barinma"
    ],
    "dogrulama": {
      "durum": "kismi",
      "tarih": "2026-11-11",
      "not": "Belediyenin resmî hizmet sayfası 444 80 86 hattında 7/24 Türkçe, Kürtçe, Arapça ve İngilizce destek bildiriyor. Hizmet bilgisi arama dizinindeki resmî sayfa içeriğinden incelendi; doğrudan sayfa erişimi zaman aşımına uğradı. Barınma ve diğer destekler ihtiyaç değerlendirmesine bağlıdır.",
      "kaynaklar": [
        "https://sosyalhizmetler.ibb.gov.tr/sayfadetay.aspx?ID=14"
      ]
    }
  },
  {
    "id": 191,
    "kaynakTuru": "hizmet",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "ad": "KAHDEM — Kadınlara Çevrim İçi Hukuki Destek",
    "kategori": "hukuki",
    "aciklama": "Kadına yönelik şiddet ve aile hukuku konularında gönüllü hukukçulara ücretsiz soru iletmeye yönelik danışma alanıdır.",
    "kimlerBasvurabilir": "Kadına yönelik şiddet veya aile hukuku konusunda bilgiye ihtiyaç duyan kadınlar",
    "link": "https://www.kahdem.org.tr/dernek-hakkinda/",
    "basvuruNotu": "Kurumun Soru Sor bağlantısından destek alanına gidilir; hukuki sorular e-postayla yanıtlanmaz. Mesajlar editör onayından sonra yayımlanır. Kimlik açıklamadan ve üyelik olmadan soru sorma olanağı belirtilir; mahkemede temsil veya anında yanıt garantisi verilmez.",
    "etiketler": [
      "KAHDEM",
      "aile hukuku",
      "kadın hakları",
      "hukuki danışma"
    ],
    "ekKategoriler": [
      "dernekler"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Kurumun Soru Sor bağlantısından destek alanına gidilir; hukuki sorular e-postayla yanıtlanmaz. Mesajlar editör onayından sonra yayımlanır. Kimlik açıklamadan ve üyelik olmadan soru sorma olanağı belirtilir; mahkemede temsil veya anında yanıt garantisi verilmez.",
      "kaynaklar": [
        "https://www.kahdem.org.tr/dernek-hakkinda/",
        "https://www.kahdem.org.tr/baglantilar/",
        "https://www.turkhukuksitesi.com/newthread.php?do=newthread&f=78"
      ]
    }
  },
  {
    "id": 192,
    "kaynakTuru": "hizmet",
    "sehir": "Türkiye geneli — yerel merkezler",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "ad": "Sağlıklı Hayat Merkezleri — Ücretsiz Danışmanlık",
    "kategori": "saglik",
    "aciklama": "Beslenme, ruh sağlığı, kadın ve üreme sağlığı ile çocuk ve ergen sağlığı alanlarında koruyucu sağlık danışmanlığı sunar.",
    "kimlerBasvurabilir": "Kadınlar ve aileler dahil tüm vatandaşlar; yerel merkezin hizmet kapsamına göre",
    "link": "https://bafrasm.saglik.gov.tr/TR-379027/saglikli-hayat-merkezi.html",
    "basvuruNotu": "Sağlık Bakanlığının resmî açıklamasına göre hizmetler ücretsizdir; doğrudan merkeze veya aile hekimi yönlendirmesiyle başvurulabilir. Yakınındaki merkezin danışmanlık alanlarını ve randevu koşullarını ayrıca öğrenin.",
    "etiketler": [
      "Sağlıklı Hayat Merkezi",
      "ücretsiz",
      "beslenme",
      "psikolojik danışmanlık",
      "kadın sağlığı"
    ],
    "ekKategoriler": [
      "ebeveynlik"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Sağlık Bakanlığının resmî açıklamasına göre hizmetler ücretsizdir; doğrudan merkeze veya aile hekimi yönlendirmesiyle başvurulabilir. Yakınındaki merkezin danışmanlık alanlarını ve randevu koşullarını ayrıca öğrenin.",
      "kaynaklar": [
        "https://bafrasm.saglik.gov.tr/TR-379027/saglikli-hayat-merkezi.html"
      ]
    }
  },
  {
    "id": 193,
    "kaynakTuru": "hizmet",
    "sehir": "Türkiye geneli / Çevrim içi",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [],
    "ulkeCapinda": true,
    "cevrimici": true,
    "kontrolKaynagi": "web",
    "ad": "KEDV Nahıl — Kadın Üreticilere Ürün ve Pazarlama Desteği",
    "kategori": "girisimcilik",
    "aciklama": "Kadın üreticilerin ve kadın kooperatiflerinin ürün geliştirme, tasarım ve satış kanallarına erişimini destekleyen sosyal girişimdir.",
    "kimlerBasvurabilir": "Ürünlerini geliştirmek ve pazarlamak isteyen kadın üreticiler ve kadın kooperatifleri",
    "link": "https://www.nahil.com.tr/biz-kimiz",
    "basvuruNotu": "Ben de Üreticiyim bölümünde bireysel üretici formu ve başvuru yolu bulunur. İstanbul dışından form ve ürün fotoğrafları ile iletişim kurulabilir. Satışa kabul ürün değerlendirmesine bağlıdır; hibe, kredi veya satış garantisi değildir.",
    "etiketler": [
      "Nahıl",
      "KEDV",
      "kadın üretici",
      "kooperatif",
      "pazarlama",
      "tasarım"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Ben de Üreticiyim bölümünde bireysel üretici formu ve başvuru yolu bulunur. İstanbul dışından form ve ürün fotoğrafları ile iletişim kurulabilir. Satışa kabul ürün değerlendirmesine bağlıdır; hibe, kredi veya satış garantisi değildir.",
      "kaynaklar": [
        "https://www.nahil.com.tr/biz-kimiz"
      ]
    }
  },
  {
    "id": 194,
    "kaynakTuru": "hizmet",
    "sehir": "Ankara",
    "sonBasvuru": null,
    "sonKontrol": "2026-11-11",
    "basvuruDurumu": "surekli",
    "sehirler": [
      "Ankara"
    ],
    "ulkeCapinda": false,
    "cevrimici": false,
    "kontrolKaynagi": "web",
    "ad": "Ankara Kadın Danışma Merkezi — Sosyal Destek ve Yönlendirme",
    "kategori": "barinma",
    "aciklama": "Kadınlara ücretsiz danışmanlık, sosyal destek ve ihtiyaçlarına uygun kurumlara yönlendirme sağlayan belediye hizmetidir.",
    "kimlerBasvurabilir": "Ankara’da danışmanlık ve sosyal desteğe ihtiyaç duyan kadınlar; psikolojik danışmanlık için 18 yaş ve üzeri",
    "link": "https://kadincalismalari.ankara.bel.tr/",
    "basvuruNotu": "Resmî sitede yüz yüze psikolojik danışmanlık, hukuki yönlendirme ve hijyenik ped desteği açıklanıyor. Barınma ihtiyacında uygun kuruma yönlendirme için merkeze başvurulabilir; bu kayıt doğrudan konaklama rezervasyonu veya boş yer garantisi değildir. Görüşme zamanı ve hizmet koşullarını merkezden öğrenin.",
    "etiketler": [
      "Ankara",
      "kadın danışma",
      "sosyal destek",
      "barınma yönlendirmesi"
    ],
    "ekKategoriler": [
      "dernekler",
      "hukuki",
      "saglik"
    ],
    "dogrulama": {
      "durum": "dogrulandi",
      "tarih": "2026-11-11",
      "not": "Resmî sitede yüz yüze psikolojik danışmanlık, hukuki yönlendirme ve hijyenik ped desteği açıklanıyor. Barınma ihtiyacında uygun kuruma yönlendirme için merkeze başvurulabilir; bu kayıt doğrudan konaklama rezervasyonu veya boş yer garantisi değildir. Görüşme zamanı ve hizmet koşullarını merkezden öğrenin.",
      "kaynaklar": [
        "https://kadincalismalari.ankara.bel.tr/",
        "https://www.ankara.bel.tr/hizmetler/kadin-ve-aile-hizmetleri/kadin-danisma-merkezi"
      ]
    }
  }
];
