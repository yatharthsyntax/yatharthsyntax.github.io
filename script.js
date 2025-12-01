const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', ()=>{
  const isLight = document.body.classList.toggle('light');
  themeBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

if(localStorage.getItem('theme') === 'light'){
  document.body.classList.add('light');
  themeBtn.textContent = '☀️';
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = a.getAttribute('href');
    if(target.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(target);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

window.addEventListener('load', ()=>{
  setTimeout(()=>{document.querySelectorAll('.skill-bar div').forEach(div=>{
    const p = div.parentElement.previousElementSibling.querySelector('.percent');
    if(p) div.style.width = p.textContent.trim();
  })},120);
});
