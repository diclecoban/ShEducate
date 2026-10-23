(()=>{
const variant=new URLSearchParams(location.search).get('tasarim')||'accordion';
const section=document.querySelector('#kaynak-arama'),controls=section.querySelector('.controls'),search=section.querySelector('.search-box');
section.classList.add('filter-preview',`filter-${variant}`);
const category=document.querySelector('#kategori-filtreleri');const type=document.querySelector('#kaynak-turu').closest('label'),status=document.querySelector('#basvuru-durumu').closest('label'),city=document.querySelector('#sehir-filtre').closest('label');
const saved=document.querySelector('#kaydedilenler-filtre').closest('label'),expired=document.querySelector('#suresi-gecenleri-goster').closest('label'),help=document.querySelector('#kaynak-turu-aciklama');
const categoryButtons=[...category.querySelectorAll('button')];
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;}
function categorySelect(){const label=el('label','compact-category','Kategori');const select=el('select');select.id='preview-category';label.htmlFor=select.id;categoryButtons.forEach(b=>{const o=new Option(b.textContent,b.dataset.category);select.add(o);});select.onchange=()=>category.querySelector(`[data-category="${select.value}"]`).click();label.append(select);category.hidden=true;return label;}
function advanced(nodes,title='Diğer filtreler'){const d=el('details','filter-extra'),s=el('summary','',title);const content=el('div','filter-extra-content');content.append(...nodes);d.append(s,content);return d;}
const extraNodes=[type,status,saved,expired,help];
if(variant!=='original'){
 const heading=el('div','filter-heading');heading.innerHTML='<div><p class="eyebrow">Kaynakları keşfet</p><h2>Aradığını kolayca bul.</h2></div>';
 search.before(heading);
 const summary=el('div','active-filter-summary');summary.innerHTML='<div class="filter-chips" aria-label="Seçili filtreler"></div><button type="button" class="clear-all">Seçimleri temizle</button>';
 controls.after(summary);
 summary.querySelector('.clear-all').onclick=()=>document.querySelector('#filtreleri-sifirla').click();
 const chips=summary.querySelector('.filter-chips');
 const fieldNames=['kaynak-turu','basvuru-durumu','sehir-filtre'];
 function refresh(){chips.replaceChildren();const current=category.querySelector('[aria-pressed="true"]');const custom=document.querySelector('#preview-category');if(custom)custom.value=current.dataset.category;
 function chip(text,remove){const b=el('button','filter-chip',text+' ×');b.type='button';b.setAttribute('aria-label',text+' filtresini kaldır');b.onclick=()=>{remove();refresh();};chips.append(b);}
 if(current.dataset.category!=='hepsi')chip(current.textContent,()=>categoryButtons[0].click());
 fieldNames.forEach(id=>{const s=document.getElementById(id);if(s.value!=='hepsi')chip(s.selectedOptions[0].textContent,()=>{s.value='hepsi';s.dispatchEvent(new Event('change',{bubbles:true}));});});
 for(const id of ['kaydedilenler-filtre','suresi-gecenleri-goster']){const c=document.getElementById(id);if(c.checked)chip(id.startsWith('kaydedilenler')?'Kaydettiklerim':'Kapalı başvurular dahil',()=>{c.checked=false;c.dispatchEvent(new Event('change',{bubbles:true}));});}
 summary.hidden=chips.childElementCount===0;
 document.querySelectorAll('[data-quick]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.quick==='open'?document.querySelector('#basvuru-durumu').value==='acik':document.querySelector('#kaydedilenler-filtre').checked)));
 }
 ['change','input','click'].forEach(event=>document.addEventListener(event,()=>requestAnimationFrame(refresh)));refresh();
}
if(variant==='accordion'){
 const select=categorySelect();controls.replaceChildren(category,select,advanced([city,...extraNodes]));
}else if(variant==='toolbar'){
 const select=categorySelect(),row=el('div','compact-toolbar');row.append(select,city);controls.replaceChildren(category,row,advanced(extraNodes,'Tür, durum ve diğer seçimler'));
}else if(variant==='drawer'){
 const bar=el('div','drawer-toolbar'),open=el('button','filter-open','Filtrele');open.type='button';open.setAttribute('aria-haspopup','dialog');bar.append(category,open);controls.replaceChildren(bar);
 const dialog=el('dialog','filter-drawer');dialog.setAttribute('aria-labelledby','filter-drawer-title');dialog.innerHTML='<div class="drawer-head"><h2 id="filter-drawer-title">Filtreler</h2><button type="button" class="drawer-close" aria-label="Filtreleri kapat">×</button></div><p>Seçtikçe sonuçlar güncellenir.</p>';
 const content=el('div','filter-extra-content');content.append(city,...extraNodes);const done=el('button','filter-done','Sonuçları göster');done.type='button';dialog.append(content,done);document.body.append(dialog);open.onclick=()=>dialog.showModal();done.onclick=()=>dialog.close();dialog.querySelector('.drawer-close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
}else if(variant==='sidebar'){
 const select=categorySelect(),side=advanced([select,city,...extraNodes],'Filtreleri düzenle');side.open=innerWidth>=900;controls.replaceChildren(category,side);
}else if(variant==='quick'){
 const row=el('div','quick-row');for(const [key,text]of [['open','Başvurusu açık'],['saved','Kaydettiklerim']]){const b=el('button','quick-choice',text);b.type='button';b.dataset.quick=key;b.setAttribute('aria-pressed','false');b.onclick=()=>{if(key==='open'){const s=document.querySelector('#basvuru-durumu');s.value=s.value==='acik'?'hepsi':'acik';s.dispatchEvent(new Event('change',{bubbles:true}));}else{document.querySelector('#kaydedilenler-filtre').click();}};row.append(b);}controls.replaceChildren(category,row,advanced([city,...extraNodes]));
}else if(variant==='tabs'){
 const tablist=el('div','filter-tab-list');tablist.setAttribute('role','tablist');tablist.setAttribute('aria-label','Filtre grupları');
 const panels=[el('div','filter-tab-panel'),el('div','filter-tab-panel'),el('div','filter-tab-panel')];panels[0].append(category);panels[1].append(city);panels[2].append(...extraNodes);
 ['Kategori','Konum','Diğer filtreler'].forEach((text,i)=>{const b=el('button','filter-tab',text);b.type='button';b.id='tab-'+i;b.setAttribute('role','tab');b.setAttribute('aria-controls','panel-'+i);panels[i].id='panel-'+i;panels[i].setAttribute('role','tabpanel');panels[i].setAttribute('aria-labelledby',b.id);
 function activate(){[...tablist.children].forEach((t,j)=>{t.setAttribute('aria-selected',String(i===j));t.tabIndex=i===j?0:-1;panels[j].hidden=i!==j;});}b.onclick=activate;b.onkeydown=e=>{const direction=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(direction){e.preventDefault();const next=tablist.children[(i+direction+3)%3];next.click();next.focus();}};tablist.append(b);});controls.replaceChildren(tablist,...panels);tablist.firstChild.click();
}
// Existing input nodes keep their original listeners when moved into the new layout.
window.addEventListener('message',e=>{if(e.origin!==location.origin)return;if(e.data==='filtre-goster')section.scrollIntoView({block:'start',behavior:'smooth'});if(e.data==='filtre-basa')scrollTo({top:0,behavior:'smooth'});});
requestAnimationFrame(()=>section.scrollIntoView({block:'start'}));
})();
