// El then se ejecuta al cerrar la ventana modal
async function showModal() {
  const result = await Swal.fire({
    title: 'Ejemplo modal',
    text: '¿Cómo te llamas?',
    input: 'text',
    showCancelButton: true,
  });

  if(result.isConfirmed) {
    console.log(`Hola ${result.value}`);
  }
}

showModal();
console.log("Hola!!");