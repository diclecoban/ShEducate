# Yayın öncesi kontrol — 24 Ekim 2026

## Uygulanan değişiklikler

- Kullanım turu otomatik açılmaz; ana bölümdeki “Nasıl kullanılır?” düğmesiyle açılır. Yerleşik dialog yapısı, Tab/Shift+Tab döngüsü, Escape ile kapatma ve açan düğmeye odak dönüşü eklendi. Kapatınca sayfa başına zorunlu kaydırma kaldırıldı.
- Artık kullanılmayan “Bir daha gösterme” seçeneği kaldırıldı; gizlilik metni güncellendi.
- SSS’deki haftalık insan kontrolü vaadi, planlanan otomatik bağlantı taraması ile elle içerik doğrulamasının farkını açıklayacak şekilde değiştirildi. GitHub Actions çalıştırma geçmişi bu kontrolde incelenmedi.
- Anma kartındaki küçük başlığın kontrastı düzeltildi; değişen dosyaların önbellek sürümleri yenilendi.
- AÖL birinci dönem kaydı veride kapalı olarak güncellendi. Arayüz zaten geçmiş son tarihi kapalı gösteriyordu; veri alanındaki tutarsızlık giderildi.

## Tarayıcı ve erişilebilirlik kontrolleri

Yerel HTTP sunucusu üzerinden Playwright ve kurulu Google Chrome kullanıldı. iPhone 13 ve Pixel 7 cihaz profilleri, 1440×1000 masaüstü ve 320×700 dar ekran denendi. Bunlar emülasyon testleridir; gerçek iOS Safari/Android cihaz testi yapılmadı.

- İlk açılışta turun kapalı olması; elle açma, üç adımı tamamlama, Escape, Tab/Shift+Tab ve odak dönüşü geçti.
- Arama, kategori seçimi, kapalı başvuru filtresi, filtre sıfırlama, boş sonuç, kaydetme/kaldırma ve yeniden yüklemede kayıtların korunması geçti.
- İleri/geri sayfalama, mobil menü ve gizlilik penceresi geçti. Denenen ekranlarda yatay taşma bulunmadı.
- Üç ana ekran profilinde JavaScript çalışma hatası görülmedi. Axe WCAG 2 A/AA ve 2.1 AA taramasında son durumda sayfa üzerinde ihlal bulunmadı; 320px tur görünümünde de ihlal bulunmadı. Bu otomatik tarama tam erişilebilirlik sertifikası değildir.
- Canlı ana sayfa ve Google Forms formu Chrome’da HTTP 200 ile açıldı. Formun ilk adımındaki iki seçenek oturum açmadan görüntülendi. Form gönderilmedi; yanıtların teslimi ve sonraki tüm dalları test edilmedi.
- JavaScript sözdizimi, benzersiz 181 ID, geçmiş tarihli açık kayıt bulunmaması, kısmi teyitlerde sonKontrol=null kalması ve git diff --check kontrolleri geçti.

## Öncelikli resmî kaynak kontrolü

İlk sayfanın dokuz fırsatı ve diğer açık kayıtlar kontrol edildi. Tam rehberin yeniden doğrulanması yapılmadı. Önceki doğrulama notlarının kapsamı korunur; kontrol tarihi bütün uygunluk ayrıntılarının yeniden denetlendiği anlamına gelmez.

- 8 — [VGM Yükseköğrenim Bursu](https://www.vgm.gov.tr/sayfalar/burs-basvurulari): acik; son tarih 2026-10-31.
- 12 — [TÜBİTAK 2205 Lisans Burs Programı (BİDEB)](https://tubitak.gov.tr/tr/burslar/lisans-onlisans/burs-programlari/2205-lisans-burs-programi): acik; son tarih 2026-10-27.
- 69 — [Açık Öğretim Lisesi (AÖL)](https://aol.meb.gov.tr/www/onemli-duyuru/icerik/492/tr): kapali; son tarih 2026-10-23.
- 73 — [Kadın Girişimci Akademisi — Kayseri 2026](https://www.garantibbva.com.tr/kurumsal-iletisim/kadin-girisimci-akademisi-kayseri-egitimleri-basliyor): acik; son tarih 2026-11-02.
- 78 — [EY Girişimci Kadın Liderler Programı — 2027 Dönemi](https://www.ey.com/tr_tr/newsroom/2026/9/ey-girisimci-kadin-liderler-programi-2026-basvurulari-acildi): acik; son tarih 2026-11-15.
- 79 — [KOSGEB Girişimci Destek Programı — İş Geliştirme Desteği](https://www.kosgeb.gov.tr/site/tr/genel/detay/9499/girisimci-destek-programi-yenilendi-girisimcilere-yeni-destek-modeli): acik; son tarih 2026-10-31.
- 86 — [Türkiye'nin Kadın Girişimcisi Yarışması](https://www.garantibbva.com.tr/kurumsal-iletisim/turkiyenin-kadin-girisimci-yarismasinda-yirminci-yil-heyecani): acik; son tarih 2026-11-15.
- 173 — [Melbourne Üniversitesi İnsan Hakları Bursu (2027)](https://scholarships.unimelb.edu.au/awards/human-rights-scholarship): acik; son tarih 2026-10-31.
- 175 — [Honjo International Scholarship Foundation — Yabancı Öğrenci Bursu](https://www.hisf.or.jp/en/scholarship/foreigner/): acik; son tarih 2026-10-31.
- 177 — [Zonta International — Amelia Earhart Fellowship (2027)](https://www.zonta.org/AEFellowship): acik; son tarih 2026-11-15.
- 178 — [P.E.O. International Peace Scholarship (IPS)](https://www.peointernational.org/educational-support/international-peace-scholarship-fund/eligibility-and-application-process/): acik; son tarih 2026-12-15.

## Kısmi teyitlerin yeniden kontrolü

11 kısmi kaydın resmî bağlantılarına yeniden erişim denendi. Tam teyit sağlanamadığından bu kayıtlar açık veya tamamen doğrulanmış olarak değiştirilmedi; sonKontrol boş tutuldu, kontrol denemesi tarihi güncellendi.

- Kızılay ve Uçan Süpürge: zaman aşımı.
- Generation Google: okunabilir içerik alınamadı.
- Women Techmakers: Technovation topluluk sayfasına yönleniyor; Scholars burs çağrısı kanıtı bulunmadı.
- İŞKUR Girişimcilik: SSS mevcut, bu adla güncel kurs çağrısı teyit edilemedi.
- Teknogirişim Sermaye Desteği: sunucu istek reddi.
- Mevzuat Bilgi Sistemi: zaman aşımı; güncel konsolide metin okunamadı.
- TMK burs ve staj/mentorluk: genel sayfa okunuyor; güncel başvuru çağrısı ve bağımsız staj başvurusu kesinleştirilemedi.
- Technovation: aynı sayfada kayıt dönemi ile “öğrenci kaydı kapalı” mesajı birlikte bulunuyor.
- İş’te Anne: arşiv PDF erişiminde 502 hatası; yeni çağrı teyit edilemedi.

64 kayıt belirsiz başvuru durumunu koruyor. Bunların hepsi bozuk bağlantı değildir; genel kurum sayfaları ve dönemsel programlar da bulunur. Tüm belirsiz kaynaklar bu çalışmada yeniden denetlenmedi.

## Yayın ve kalan gerçek kullanım kontrolü

Değişiklikler yerelde; commit/push yapılmadı. Gerçek iPhone/Safari ve Android cihazlarda kısa bir kullanım turu ile formun kaynak önerisi/hata bildirimi dallarının ve yanıt tesliminin site sahibi tarafından doğrulanması gerekir. Haftalık otomasyonun canlıda çalıştığı ayrıca Actions geçmişinden kontrol edilebilir.
