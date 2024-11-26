const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3000); // A los 3 segundos termina la promesa
});

promesa.then(() => console.log("La promesa ha terminado"));

console.log("Programa principal");