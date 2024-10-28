/**
 * Crea 2 arrays con 4 nombres cada uno.
Al segundo array concatenale los nombres de las posiciones 1 y 2 del primer array al 
final del mismo y muestra el resultado por pantalla. 
No se pueden poner los nombres en el código nada más que para crear los arrays.
 */

let a1 = ["Pepe", "Juan", "Marcos", "Ana"];
let a2 = ["Alfonso", "Tania", "Marcelo", "Pedro"];

let a3 = a2.concat(a1.slice(1,3));
console.log(a3);

/**
 * Ordena un array de strings por longitud
 * ej: ["cebolla", "aro", "mono", "conejo"] -> ["aro", "mono", "conejo", "cebolla"]
 */
let palabras = ["cebolla", "aro", "mono", "conejo"];
palabras.sort((p1, p2) => p1.length - p2.length);
console.log(palabras); // ["aro", "mono", "conejo", "cebolla"]

/**
 * A partir de un array de palabras, genera un string que contenga 
 * la primera letra de cada palabra
 */

