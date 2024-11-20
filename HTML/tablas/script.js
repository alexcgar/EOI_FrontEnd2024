document.getElementById('selector-tema').addEventListener('change', function() {
    const tema = this.value;
    
    if (tema == "bootstrap") {
        document.getElementById('enlace-tema').href = `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`;
    }
    else {
        document.getElementById('enlace-tema').href = `https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3/${tema}/bootstrap.min.css`;
    }
});