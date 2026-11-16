'use strict';
document.querySelectorAll('.family-faq-toggle').forEach(button=>{
 button.addEventListener('click',()=>{const answer=document.getElementById(button.getAttribute('aria-controls'));const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));answer.hidden=open;button.querySelector('svg').style.transform=open?'':'rotate(180deg)';});
});
const slides=[...document.querySelectorAll('.testimonial-slide')];
const dots=[...document.querySelectorAll('[aria-label^="Ver depoimento"]')];let current=0;
function showSlide(index){current=(index+slides.length)%slides.length;slides[0].parentElement.style.transform=`translateX(-${current*100}%)`;slides.forEach((s,i)=>s.setAttribute('aria-hidden',String(i!==current)));dots.forEach((d,i)=>{d.setAttribute('aria-pressed',String(i===current));d.classList.toggle('bg-primary',i===current);d.classList.toggle('w-6',i===current);d.classList.toggle('w-2.5',i!==current);d.classList.toggle('bg-muted-foreground/40',i!==current);});}
document.querySelector('[aria-label="Depoimento anterior"]').onclick=()=>showSlide(current-1);
document.querySelector('[aria-label="Próximo depoimento"]').onclick=()=>showSlide(current+1);
dots.forEach((d,i)=>d.onclick=()=>showSlide(i));showSlide(0);
const dialog=document.getElementById('kit-dialog');
document.getElementById('btn-buy-basic').onclick=()=>dialog.showModal();
document.getElementById('close-kit').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
window._plt=performance.timeOrigin+performance.now();
const playerScript=document.createElement('script');playerScript.async=true;
playerScript.src='https://scripts.converteai.net/20253943-aa2f-4175-9771-3f1b3b1e0f3d/players/6ad7bc4cffd2f7979c4f5ea2/v4/player.js';
playerScript.onerror=()=>{const p=document.createElement('p');p.className='video-error';p.textContent='Não foi possível carregar o vídeo. Confira sua conexão e recarregue a página.';document.querySelector('.family-video').append(p);};
document.head.append(playerScript);
