const mb=document.querySelector('.menu-btn'),ul=document.querySelector('nav ul');
mb&&mb.addEventListener('click',()=>{const o=ul.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>{const a=document.getElementById(b.getAttribute('aria-controls')),o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);a.classList.toggle('open',!o)}));
const t=document.getElementById('top');if(t){addEventListener('scroll',()=>t.classList.toggle('show',scrollY>500),{passive:true});t.addEventListener('click',()=>scrollTo({top:0}))}
const sel='main section:not(.hero) h2,main section:not(.hero) .lead,.card,.steps li,.facts,.chips li,.faq h3,.stage,.gal,.logocard,.cta .actions,.showcase .split>div:last-child>*';
document.querySelectorAll(sel).forEach(el=>{if(el.closest('.hero'))return;el.classList.add('reveal');const sib=[...el.parentNode.children].filter(c=>c.matches(sel));el.style.setProperty('--d',Math.min(sib.indexOf(el),5)*.07+'s')});
const io='IntersectionObserver' in window?new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
document.querySelectorAll('.thumbs button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.thumbs button').forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');const g=document.getElementById('gal'),m=document.getElementById('main-img');m.src=b.dataset.src;m.alt=b.dataset.alt;g.classList.toggle('dark',b.dataset.dark==='1')}));
