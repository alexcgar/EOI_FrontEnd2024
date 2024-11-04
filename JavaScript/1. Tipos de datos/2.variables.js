'use strict';
/*
    Vamos a crear unas variables
    y ver su tipo
*/
let num = 34;
let cad1 = 'Hola "mundo"'; // Hola 'mundo'
let cad2 = "Hola 'mundo 2'";
let s = `Hola mundo`;
s = true;

console.log(typeof num); // number
console.log(typeof cad1); // string
console.log(typeof s); // boolean

let v1;
console.log(typeof v1); // undefined
console.log(v1); // undefined

v1 = 43;
console.log(typeof v1); // number

// prueba = "Hola"; // Uncaught ReferenceError: prueba is not defined
// console.log(prueba); 

const pi = 3.1416;
// pi = 4.2345; // 2.variables.js:27 Uncaught TypeError: Assignment to constant variable
console.log(pi.toFixed(2)); // 3.14