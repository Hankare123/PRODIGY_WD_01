// JavaScript (in script.js file)
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        nav.style.backgroundColor = '#555';
    }
});

nav.addEventListener('mouseout', () => {
    nav.style.backgroundColor = '#333';
});