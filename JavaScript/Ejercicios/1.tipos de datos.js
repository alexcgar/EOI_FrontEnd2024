/**
 * Asigna la frase "Hola, soy Juan" a una variable
A partir de esta variable crea otra que contenga la palabra Hola en mayúsculas 
extraida de la variable anterior. Imprímela por consola.
 */

let frase = "Hola, soy Juan";
let trozo = frase.slice(0, 4); // Hola
trozo = trozo.toUpperCase(); // HOLA
console.log(trozo);

