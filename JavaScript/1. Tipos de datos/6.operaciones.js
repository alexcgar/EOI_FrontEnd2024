let n = "24";
console.log(`${n} + 1 es ${n+1}`); // 24 + 1 es 241
console.log(`${n} + 1 es ${++n}`); // 24 + 1 es 25 (++ fuerza la conversión a número)

let a = 1;
let b = 5;
// ++a -> a = a + 1 
console.log(a++); // Imprime 1 e incrementa a = 2
console.log(++a); // Incrementa a = 3, e imprime 3
console.log(++a + ++b); // Incrementa a = 4 y b = 6. Suma (4+6), e imprime 10
console.log(a-- + --b); // Decrementa b = 5. Suma (4+5). Imprime 9. Decrementa a = 3

console.log(true == 1); // true (son equivalentes)
console.log(true === 1); // false
console.log("6" == 6); // true (son equivalentes)
console.log("6" === 6); // false
console.log(3 != "3"); // false
console.log(3 !== "3"); // true

console.log(6 >= 6); // true
console.log(6 > 6); // false
console.log("adios" < "bye"); // true (orden albafetico)

console.log(!true); // Prints false
console.log(!(5 < 3)); // Prints true (!false)

console.log(4 < 5 && 4 < 2); // Prints false (both conditions need to be true)
console.log(4 < 5 || 4 < 2); // Prints true (only one condition has to be true)

let nombre = "Pepito";
if(!nombre.includes("a")) {
    console.log("El nombre no contiene la letra a");
}