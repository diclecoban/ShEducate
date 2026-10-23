const options = [
 ['01','Sade başlangıç · önerim','Kategori her zaman görünür; diğer seçimler “Diğer filtreler” altında açılır.','accordion'],
 ['02','Tek satır araç çubuğu','Kategori ve konum önde; tür ve durum ayrı bir açılır alanda.','toolbar'],
 ['03','Yandan açılan filtreler','Üstte arama ve kategori şeridi. Ayrıntılar “Filtrele” ile açılan panelde.','drawer'],
 ['04','Sol filtre sütunu','Masaüstünde filtreler solda, sonuçlar sağda. Telefonda açılabilir filtreler.','sidebar'],
 ['05','Hızlı seçim düğmeleri','“Başvurusu açık” ve “Kaydettiklerim” tek dokunuşla; ayrıntılar isteğe bağlı.','quick'],
 ['06','Sekmelerle adım adım','Kategori, konum ve diğer seçenekler ayrı sekmelerde. Aynı anda tek grup görünür.','tabs'],
 ['07','Mevcut tasarım','Karşılaştırmak için tüm filtrelerin birlikte göründüğü mevcut düzen.','original']
];
let index=Math.max(0,options.findIndex(x=>x[0]===new URLSearchParams(location.search).get('secenek')));
const frame=document.querySelector('#preview');
const nav=document.querySelector('#options');
options.forEach((o,i)=>{const b=document.createElement('button');b.innerHTML=`<span>${o[0]}</span><strong>${o[1]}</strong>`;b.onclick=()=>select(i);nav.append(b);});
function select(i){index=(i+options.length)%options.length;const o=options[index];nav.querySelectorAll('button').forEach((b,j)=>{b.setAttribute('aria-current',j===index?'true':'false');});document.querySelector('#selection-name').textContent=`${o[0]} · ${o[1]}`;document.querySelector('#selection-note').textContent=o[2];document.querySelector('#counter').textContent=`${index+1} / ${options.length}`;const url=`/filtre-sahne.html?tasarim=${o[3]}`;frame.src=url;document.querySelector('#standalone').href=url;history.replaceState(null,'',`?secenek=${o[0]}`);}
document.querySelector('#previous').onclick=()=>select(index-1);document.querySelector('#next').onclick=()=>select(index+1);
for(const device of ['desktop','mobile'])document.querySelector('#'+device).onclick=()=>{document.querySelector('#viewport').classList.toggle('is-mobile',device==='mobile');for(const d of ['desktop','mobile'])document.querySelector('#'+d).setAttribute('aria-pressed',String(d===device));};
document.querySelector('#jump').onclick=()=>frame.contentWindow.postMessage('filtre-goster',location.origin);document.querySelector('#top').onclick=()=>frame.contentWindow.postMessage('filtre-basa',location.origin);
select(index);
