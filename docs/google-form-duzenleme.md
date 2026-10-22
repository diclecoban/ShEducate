# Kaynak önerisi ve hata bildirimi

Mevcut herkese açık form kontrol edildi: yalnızca altı kategori ve dört kaynak önerisi sorusu var. Hata bildirimi akışı yok.

Hazırlanan kod: `tools/google-form-akisi.gs`. Bu kod mevcut soruları ve paylaşım bağlantısını korur; mevcut yanıtları silmez. İlk soruya göre ayrı bölümlere yönlendirir. Öneri bölümünün sonunda doğrudan gönderim yapılır; hata soruları gösterilmez. Hata bölümünde de öneri soruları gösterilmez.

## Mevcut forma uygulama

1. Google Form'u sahibi olduğun hesapla düzenleme görünümünde açabilirsin.
2. Üç nokta menüsünden **Komut dosyası düzenleyicisi / Apps Script** seçeneğini açabilirsin.
3. `tools/google-form-akisi.gs` içeriğini bağlı projeye ekleyip kaydedebilirsin.
4. `sheducateFormunuDuzenle` işlevini seçip çalıştırabilirsin. Google, forma erişim izni isteyebilir.
5. Form önizlemesinde iki seçeneği ayrı ayrı deneyebilirsin. Gerçek yanıt göndermeden, öneri bölümünün hata sorularına geçmediğini ve hata bölümünün öneri sorularını atladığını kontrol edebilirsin.

Kod mevcut dört sorulu form için hazırlanmıştır. Form yapısı değişmişse veya akış zaten eklenmişse işlem yapmadan durur. Herhangi bir eski soruyu veya yanıtı silmez. Çalıştırma sırasında hata olursa tekrar çalıştırmadan önce düzenleme görünümünü kontrol edebilirsin; Google Forms değişiklikleri işlemsel olarak geri alınmaz.

Dokuz kategori: Burslar; Dernekler ve Destek; Ücretsiz Eğitimler; Girişimcilik ve Finansman; Hukuki Destek; Sağlık; Kariyer ve İstihdam; Barınma ve Sosyal Destek; Çocuk Bakımı ve Ebeveynlik. Diğer seçeneği de korunur.

Google Form'a yazma erişimi bu oturumda mevcut olmadığı için bu kod henüz gerçek forma uygulanmadı. Sitedeki mevcut form bağlantısı değiştirilmedi.
