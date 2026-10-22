/** Mevcut Google Form'un bağlı Apps Script projesinde çalıştırılır. */
function sheducateFormunuDuzenle() {
  const form = FormApp.getActiveForm();
  if (!form) throw new Error('Bu kodu mevcut formun bağlı Apps Script projesinden çalıştırabilirsin.');
  const items = form.getItems();
  if (items.some(item => item.getTitle() === 'Ne yapmak istersin?')) {
    throw new Error('İki akışlı yapı zaten mevcut. Tekrar eklenmedi.');
  }
  const kategori = items.find(item => item.getTitle().trim() === 'Kategori');
  const ad = items.find(item => item.getTitle().trim() === 'Kaynak Adı');
  if (!kategori || kategori.getType() !== FormApp.ItemType.MULTIPLE_CHOICE || items.length !== 4) {
    throw new Error('Form yapısı beklenenden farklı. Hiçbir değişiklik yapılmadı.');
  }
  form.setTitle('Sheducate | Kaynak Önerisi ve Hata Bildirimi');
  form.setDescription('Rehberi birlikte geliştirebiliriz. Önce ne yapmak istediğini seçebilirsin. Lütfen kimlik belgesi veya hassas kişisel bilgi paylaşmamaya özen göster.');
  kategori.asMultipleChoiceItem().setChoiceValues([
    'Burslar', 'Dernekler ve Destek', 'Ücretsiz Eğitimler',
    'Girişimcilik ve Finansman', 'Hukuki Destek', 'Sağlık',
    'Kariyer ve İstihdam', 'Barınma ve Sosyal Destek', 'Çocuk Bakımı ve Ebeveynlik'
  ]).showOtherOption(true);
  if (ad) ad.asTextItem().setRequired(true);
  const secim = form.addMultipleChoiceItem().setTitle('Ne yapmak istersin?').setRequired(true);
  form.moveItem(secim.getIndex(), 0);
  const oneri = form.addPageBreakItem().setTitle('Kaynak önermek istiyorum')
    .setHelpText('Önerdiğin kaynağı tanımamıza yardımcı olacak bilgileri paylaşabilirsin.');
  form.moveItem(oneri.getIndex(), 1);
  const hata = form.addPageBreakItem().setTitle('Hata bildirmek istiyorum')
    .setHelpText('Fark ettiğin hatayı aşağıda paylaşabilirsin.');
  // Bu ayar, önceki (kaynak önerisi) bölümünün sonunda formu gönderir.
  hata.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  form.addTextItem().setTitle('Hangi kaynak veya sayfa hakkında bildirim yapmak istersin?').setRequired(true);
  form.addTextItem().setTitle('İlgili sayfanın veya kaynağın bağlantısı (isteğe bağlı)');
  form.addMultipleChoiceItem().setTitle('Ne tür bir hata fark ettin?').setChoiceValues([
    'Başvuru tarihi veya durumu', 'Çalışmayan / yanlış bağlantı',
    'Eksik veya yanlış bilgi', 'Yanlış kategori', 'Sitenin kullanımıyla ilgili teknik sorun'
  ]).showOtherOption(true).setRequired(true);
  form.addParagraphTextItem().setTitle('Hatayı açıklayabilir misin?')
    .setHelpText('Ne gördüğünü ve varsa doğru olduğunu düşündüğün bilgiyi paylaşabilirsin.').setRequired(true);
  form.addTextItem().setTitle('Düzeltmeyi doğrulayabileceğimiz resmî bağlantı (isteğe bağlı)');
  secim.setChoices([
    secim.createChoice('Kaynak önermek istiyorum', oneri),
    secim.createChoice('Hata bildirmek istiyorum', hata)
  ]);
  form.setConfirmationMessage('Katkın için teşekkürler! Paylaştığın bilgileri inceleyeceğiz.');
  Logger.log('Form güncellendi. Mevcut paylaşım bağlantısı: ' + form.getPublishedUrl());
}
