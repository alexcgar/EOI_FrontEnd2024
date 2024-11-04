let a = [3, 21, 15, 62, 9, 15];
console.log(a.indexOf(15)); // 2
console.log(a.indexOf(68)); // -1
console.log(a.indexOf(15, 3)); // 5
console.log(a.indexOf(21, 3)); // -1

function vecesArray(array, valor) {
    let veces = 0;
    let pos = array.indexOf(valor);
    while(pos != -1) {
        veces++;
        pos = array.indexOf(valor, pos + 1);
    }
    return veces;
}

console.log(vecesArray(a, 15)); // 2
console.log(vecesArray(a, 9)); // 1
console.log(vecesArray(a, 14)); // 0

console.log(a.find((n) => n % 2 == 0)); // 62 (primer número par)
console.log(a.findIndex((n) => n % 2 == 0)); // 3 (índice del 62)
console.log(a.find((n) => n > 100)); // undefined 
console.log(a.findIndex((n) => n > 100)); // -1 
