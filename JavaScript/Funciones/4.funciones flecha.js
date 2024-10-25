let suma = (n1, n2) => n1 + n2;

console.log(suma(4, 7));

/**
 * Esta función llama a operación pasándole los 2 números y devuelve el resultado
 * @param {number} n1 
 * @param {number} n2 
 * @param {*} operacion función que recibe 2 números y devuelve un resultado
 */
function operar(n1, n2, operacion) {
    return operacion(n1, n2);
}

console.log(operar(4, 8, suma));
console.log(operar(4, 8, (n1, n2) => n1 - n2));
console.log(operar(4, 8, (n1, n2) => n1 * n2));
console.log(operar(4, 8, (n1, n2) => n1 / n2));
