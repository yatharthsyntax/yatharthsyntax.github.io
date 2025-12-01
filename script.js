const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('light'));
});

if (localStorage.getItem('theme') === 'true') {
    document.body.classList.add('light');
    toggle.textContent = '☀️';
}
