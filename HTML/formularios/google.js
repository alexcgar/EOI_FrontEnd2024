document.getElementById("botonTema").addEventListener('click', () => {
    const body = document.body;

    if (body.getAttribute("data-bs-theme") === 'dark') {
        body.setAttribute('data-bs-theme', 'light');
    }
    else {
        body.setAttribute('data-bs-theme', 'dark');
    }
});