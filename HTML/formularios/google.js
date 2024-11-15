const body = document.body;
const botonTema = document.getElementById("botonTema");
const iconoTema = document.getElementById("iconoTema");

botonTema.addEventListener('click', () => {
    if (body.getAttribute("data-bs-theme") === 'dark') {
        body.setAttribute('data-bs-theme', 'light');
        iconoTema.classList.replace('bi-moon-stars-fill', 'bi-emoji-sunglasses-fill');
    }
    else {
        body.setAttribute('data-bs-theme', 'dark');
        iconoTema.classList.replace('bi-emoji-sunglasses-fill', 'bi-moon-stars-fill');
    }
});