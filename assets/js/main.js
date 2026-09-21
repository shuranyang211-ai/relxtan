
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu'); const mobile=document.querySelector('.mobile');
  if(btn&&mobile) btn.addEventListener('click',()=>mobile.classList.toggle('open'));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const previewButtons=document.querySelectorAll('[data-preview-url]');
  const frame=document.querySelector('#toolPreview');
  const urlLabel=document.querySelector('#toolPreviewUrl');
  previewButtons.forEach(b=>b.addEventListener('click',(e)=>{
    if(!frame) return;
    e.preventDefault(); frame.src=b.dataset.previewUrl; if(urlLabel) urlLabel.textContent=b.dataset.previewUrl;
    frame.scrollIntoView({behavior:'smooth',block:'center'});
  }));
});
