const options = [
 ['01','İlk karşılaşma','Menünün üzerinde, fotoğraflı yatay bir karşılama.','masthead','ribbon'],
 ['02','Menünün hemen altında','Gezinme ile ana başlık arasında sade bir saygı bandı.','nav','ribbon'],
 ['03','Ana mesajın yanında','Ana başlığın açıklamasının altında, küçük bir anma kartı.','copy','compact'],
 ['04','Açılışın ana görseli','Kadın illüstrasyonunun yerinde büyük fotoğraf ve anma metni.','hero','portrait'],
 ['05','Açılışın devamı','Ana tanıtımın hemen ardından, fotoğraflı geniş bir bölüm.','hero-after','wide'],
 ['06','Özelliklerden sonra','Kategorilere geçmeden önce ortalanmış, bağımsız bir anma alanı.','features','centered'],
 ['07','İhtiyaç seçiminin öncesi','Kategorilerden hemen önce güçlü, iki sütunlu bir kart.','categories','wide'],
 ['08','İhtiyaç alanında bir bant','“Bugün neye ihtiyacın var?” başlığı ile seçeneklerin arasında.','needs','ribbon'],
 ['09','Kategori alanının yanında','Masaüstünde ihtiyaç seçenekleriyle yan yana; telefonda üstte.','side','portrait'],
 ['10','Kaynaklara geçiş','Kategori alanından sonra, arama kutusundan önce ince bir kart.','search','ribbon'],
 ['11','Belirgin bir fotoğraf alanı','Aramanın önünde, büyük fotoğrafın altında ortalanmış metin.','search','panorama'],
 ['12','Hakkında bölümünden önce','Rehberin amacıyla ilişkilenen, bağımsız bir anma bölümü.','about','wide'],
 ['13','Mevcut konumla karşılaştır','Hakkında bölümünden sonra bulunan mevcut yerleşim.','original','original'],
 ['14','En üstte sade bir ithaf','Fotoğraf kullanmadan, menüden önce metin odaklı bir bant.','masthead','text-only']
];
let index=Math.max(0,options.findIndex(x=>x[0]===new URLSearchParams(location.search).get('secenek')));
const frame=document.querySelector('#preview');
const nav=document.querySelector('#options');
options.forEach((o,i)=>{const b=document.createElement('button');b.innerHTML=`<span>${o[0]}</span><strong>${o[1]}</strong>`;b.onclick=()=>select(i);nav.append(b);});
function select(i){index=(i+options.length)%options.length;const o=options[index];nav.querySelectorAll('button').forEach((b,j)=>{b.setAttribute('aria-current',j===index?'true':'false');});document.querySelector('#selection-name').textContent=`${o[0]} · ${o[1]}`;document.querySelector('#selection-note').textContent=o[2];document.querySelector('#counter').textContent=`${index+1} / ${options.length}`;const url=`/minnet-sahne.html?konum=${o[3]}&sunum=${o[4]}`;frame.src=url;document.querySelector('#standalone').href=url;history.replaceState(null,'',`?secenek=${o[0]}`);}
document.querySelector('#previous').onclick=()=>select(index-1);document.querySelector('#next').onclick=()=>select(index+1);
for(const device of ['desktop','mobile'])document.querySelector('#'+device).onclick=()=>{document.querySelector('#viewport').classList.toggle('is-mobile',device==='mobile');for(const d of ['desktop','mobile'])document.querySelector('#'+d).setAttribute('aria-pressed',String(d===device));};
document.querySelector('#jump').onclick=()=>frame.contentWindow.postMessage('minnet-goster',location.origin);document.querySelector('#top').onclick=()=>frame.contentWindow.postMessage('minnet-basa',location.origin);
select(index);
