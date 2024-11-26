// El then se ejecuta al cerrar la ventana modal
Swal.fire({
    title: 'Ejemplo modal',
    text: '¿Estás aprendiendo promesas?',
    showCloseButton: true,
    showDenyButton: true,
    confirmButtonText: 'Sí'
}).then(result => {
    if(result.isConfirmed) {
        console.log("Perfecto!");
    } else if(result.isDenied) {
        console.log("Pues deberías...");
    } else {
        console.log("No has contestado...");
    }
});

console.log("Hola!!");