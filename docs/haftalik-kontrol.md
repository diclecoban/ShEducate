# Pazar kontrol düzeni

GitHub Actions iş akışı her pazar Türkiye saatiyle 10.15 için planlanmıştır. GitHub çalıştırmayı geciktirebilir; kesin saat garantisi değildir. Bilgisayarın açık olması gerekmez.

## Etkinleştirme

`.github/workflows/haftalik-kontrol.yml` ve `tools/haftalik-kontrol.mjs`, güncel `data.js` ile birlikte deponun varsayılan dalına yayınlanınca takvim devreye girer. Şu an yerelde hazırlanmıştır; canlıda etkinleştirilmiş değildir. Depoda Actions açık olmalıdır. Ek API anahtarı, ücretli servis veya hesap gerekmez. Genel depolarda 60 gün depo etkinliği olmazsa zamanlanmış iş akışları devre dışı kalabilir; Actions sekmesinden yeniden etkinleştirilebilir.

## Haftalık işleyiş

1. GitHub deposundaki Actions → Pazar kaynak kontrolü bölümünden son çalıştırmayı açabilirsin. İstersen Run workflow ile elle de başlatabilirsin.
2. Çalıştırmanın Summary bölümünde kontrol listesi; Artifacts bölümünde Markdown ve JSON raporları bulunur. Raporlar 90 gün saklanır. Otomatik e-posta veya yeni GitHub issue gönderilmez.
3. Açık başvuruları, 14 gün içinde kapanacakları, tarihi geçtiği hâlde açık görünenleri ve bağlantı sorunlarını önceliklendirebilirsin. Belirsiz, hiç kontrol edilmemiş veya en az 30 gündür kontrol edilmemiş kayıtlar da listelenir.
4. Resmî sayfayı gerçekten inceledikten sonra `data.js` içindeki başvuru durumu, son başvuru tarihi, son kontrol tarihi ve doğrulama notunu güncelleyebilirsin. Yeni bilgiyi siteye yayınlamak ayrıca gerekir.
5. Google Forms yanıtlarını ayrıca inceleyebilirsin; otomasyonun form yanıtlarına erişimi yoktur.

HTTP 200 başvurunun açık olduğunu göstermez. 403/429 gibi yanıtlar otomatik tarama engeli olabilir. Ağ sorunları kaydı silmez, başvuru durumunu değiştirmez ve resmî kontrol tarihini yenilemez. Bu araç yalnızca takip raporu üretir; haftalık insan kontrolünün yapıldığını iddia etmez.

Yerelde: `node tools/haftalik-kontrol.mjs`. Ağ kullanmadan listeyi denemek için: `node tools/haftalik-kontrol.mjs --no-network`.

Takvim davranışı: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule
