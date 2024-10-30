'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina los elementos del tercero al quinto (incluido)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por "==>"
 */

console.log('--------------- APARTADO 1 -----------------');

let n = ["a", "b", "c", "d"];
n.push("e","f");
n.unshift("A","B");
console.log(n);
n.splice(2, 3);
console.log(n);
n.splice(-1, 0, "0", "1");
console.log(n);

/**
 * Apartado 2
 * Crea una función que tome una cadena como entrada y compruebe si es un palíndromo (es igual cuando se invierte).
 * Haz esto sin usar bucles (puedes usar Array.from para convertir una cadena en un array).
 * Comprueba que el tipo del parámetro es "string" y que la longitud es al menos 1 o muestra un error.
 * Ejemplo: esPalindromo("abeceba") -> true
 */

console.log('--------------- APARTADO 2 -----------------');

function esPalindromo(cadena) {
    const cadena2 = Array.from(cadena).reverse().join("");
    return cadena === cadena2;
}

console.log(esPalindromo("abeceba"));
console.log(esPalindromo("patata"));
console.log(esPalindromo("seres"));

/**
 * Apartado 3
 * Crea una función que reciba un array y sume los primeros tres números del array.
 * Utiliza desestructuración de arrays en los parámetros para obtener esos tres números.
 * Si alguno de esos números no está presente en el array, se asignará un valor predeterminado de 0.
 * Devuelve el resultado de sumar esos tres números.
 */

console.log('--------------- APARTADO 3 -----------------');


/**
 * Apartado 4
 * Crea una función que tome un número indeterminado de cadenas como argumentos,
 * las agrupa en un array (usa rest) y devuelve un nuevo array que contiene la longitud de cada cadena.
 * No uses bucles.
 * Ejemplo: stringLenghts("potato", "milk", "car", "table") -> [6, 4, 3, 5]
 */

console.log('--------------- APARTADO 4 -----------------');

function stringLenghts(...cadenas) {
    return cadenas.map(c => c.length);
}

console.log(stringLenghts("potato", "milk", "car", "table"));

/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 5 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos']
];
