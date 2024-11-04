let suma = function(n1, n2) {
    return n1 + n2;
}
let suma2 = suma;

console.log(suma(3, 5));
console.log(suma2(3, 5));

/**
 * Esta función llama a operación pasándole los 2 números y devuelve el resultado
 * @param {number} n1 
 * @param {number} n2 
 * @param {*} operacion función que recibe 2 números y devuelve un resultado
 */
function operar(n1, n2, operacion) {
    return operacion(n1, n2);
}

console.log(operar(4, 6, suma));
console.log(operar(12, 5, function(n1, n2) { return n1 - n2; }));