'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

function apartado1(s1, s2) {
    if(typeof s1 !== "string" || typeof s2 !== "string") {
        console.error("Alguno de los parámetros no es de tipo string");
    } else { // Ambos son de tipo string
        console.log(`Cadena con mayor longitud ${s1.length > s2.length ? s1 : s2}`);
    }
}

// let p1 = prompt("Palabra 1:");
// let p2 = prompt("Palabra 2:");
// apartado1(p1, p2);
apartado1("caballo", "perro");
apartado1("Hola que tal", "Yo estoy muy bien");
apartado1("abcde", 25);

/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muéstra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');

function apartado2(veces, num) {
    for(let i = 1; i <= veces; i++) {
        console.log(num);
        num *= 2;
    }
}

apartado2(5, 7);

/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemple: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');

function apartado3(cadena, caracter) {
    cadena = String(cadena);
    caracter = String(caracter);

    if(caracter.length !== 1) {
        console.error(`${caracter} tiene una longitud mayor que 1`);
        return;
    }

    let veces = 0;
    for(let i = 0; i < cadena.length; i++) {
        if(cadena[i] === caracter) {
            veces++;
        }
    }
    console.log(`'${caracter}' aparece ${veces} veces en la cadena ${cadena}`);
} 

apartado3("Mi casa es roja", "a");
apartado3("Mi DNI es 19512935T", 1);

/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   numéros válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no númerico en el precio o impuesto.
 */

console.log('--------------- APARTADO 4 -----------------');

function apartado4(nombre = "Producto genérico", precio = 100, impuesto = 21) {
    nombre = String(nombre);
    
    precio = +precio;
    impuesto = +impuesto;

    if(Number.isNaN(precio) || Number.isNaN(impuesto)) {
        console.error("El precio o el impuesto no son numéricos");
    } else {
        let total = precio * (1 + impuesto / 100);
        console.log(`${nombre} -> ${total.toFixed(2)}€`);
    }
}

apartado4("Arroz", 2.5, 6);
apartado4();
apartado4("Ordenador", 1000);
apartado4("Teclado", "24");

/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');

let apartado5 = (cadena, trozo) => {
    const cadMinus = cadena.toLowerCase();
    const trozoMinus = trozo.toLowerCase();

    const encontrado = cadMinus.includes(trozoMinus);
    if(encontrado) {
        console.log(`La cadena ${cadena} contiene la búsqueda ${trozo}`);
    } else {
        console.log(`${trozo} no aparece en ${cadena}`);
    }
};

apartado5("Santiago de Compostela", "COMPO");
apartado5("Santiago de Compostela", "santi");
apartado5("Santiago de Compostela", "gato");

