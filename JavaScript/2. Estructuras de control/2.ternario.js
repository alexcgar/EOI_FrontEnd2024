const socio = true;
const cuota = socio ? 50 : 100;
// Lo de arriba equivale a esto
// let cuota;
// if(socio) {
//     cuota = 50;
// } else {
//     cuota = 100;
// }
console.log(`Vas a pagar ${cuota}€`); // Vas a pagar 50€

let edad = 24;
console.log(`Eres mayor de edad: ${edad < 18 ? "No" : "Si"}`);