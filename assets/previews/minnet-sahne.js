(()=>{
const q=new URLSearchParams(location.search),position=q.get('konum')||'masthead',style=q.get('sunum')||'ribbon';
const tribute=document.querySelector('.tribute-section');const card=tribute.querySelector('.ataturk-tribute');
tribute.classList.add('preview-tribute',`presentation-${style}`);card.querySelector('img').loading='eager';
const hero=document.querySelector('.hero');const categories=document.querySelector('.category-section');
switch(position){
case 'masthead':document.querySelector('.site-header').before(tribute);break;
case 'nav':document.querySelector('.site-nav').after(tribute);break;
case 'copy':document.querySelector('.hero-copy').append(tribute);break;
case 'hero':document.querySelector('.hero-art').hidden=true;hero.classList.add('preview-hero');hero.append(tribute);break;
case 'hero-after':hero.after(tribute);break;
case 'features':document.querySelector('.feature-strip').after(tribute);break;
case 'categories':categories.before(tribute);break;
case 'needs':document.querySelector('.need-start').before(tribute);break;
case 'side':categories.classList.add('preview-category-side');categories.querySelector('.section-copy').after(tribute);break;
case 'search':document.querySelector('#kaynak-arama').before(tribute);break;
case 'about':document.querySelector('#hakkinda').before(tribute);break;
}
window.addEventListener('message',e=>{if(e.origin!==location.origin)return;if(e.data==='minnet-goster'){tribute.scrollIntoView({block:'center',behavior:'smooth'});tribute.classList.remove('preview-highlight');requestAnimationFrame(()=>tribute.classList.add('preview-highlight'));}if(e.data==='minnet-basa')window.scrollTo({top:0,behavior:'smooth'});});
})();
