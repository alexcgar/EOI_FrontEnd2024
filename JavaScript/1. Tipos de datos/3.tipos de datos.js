let n1 = "18";
let n2 = "38";

console.log(n1 + n2); // 1838
console.log(Number(n1) + Number(n2)); // 56
console.log(+n1 + +n2); // 56

console.log(+true); // 1
console.log(+false); // 0

let cad = "hola";
let cadNum = Number(cad);
console.log(cadNum); // NaN
console.log(cadNum * 2); // NaN
console.log(Number.isNaN(cadNum)); // true

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-567)); // true
console.log(!!45); // true
console.log(!!""); // false
console.log(!!"Hola"); // true
