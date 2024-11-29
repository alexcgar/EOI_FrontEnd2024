// El then se ejecuta al cerrar la ventana modal
Swal.fire({
    title: 'Ejemplo modal',
    text: '¿Cómo te llamas?',
    input: 'text',
    showCancelButton: true,
}).then(result => {
    if(result.isConfirmed) {
        console.log(`Hola ${result.value}`);
    }
});

console.log("Hola!!");