let a = new Array();
a[0] = 34;
a[1] = 12;
console.log(a);
console.log(a.length);

let b = [1,2,3,4,5];
console.log(b);

let c = ["hola", "que", "tal"];
console.log(c);

let d = [];
console.log(d);

// let nombres = [];
// for(let i = 0; i < 3; i++) {
//     let nombre = prompt("Dime un nombre: ");
//     nombres[i] = nombre;
// }
// console.log(nombres);

let  ar = [4, 21, 33, 24, 8];

console.log("*********** FOR ************");
for(let i = 0; i < ar.length; i++) { // Imprime 4 21 33 24 8
    console.log(`${i} -> ${ar[i]}`);
}

console.log("*********** FOR IN ************");
// Recorre todos los índices (i es la posición)
for (let i in ar) { // Imprime 4 21 33 24 8
    console.log(`${i} -> ${ar[i]}`);
}

console.log("*********** FOR OF ************");
for(let n of ar) {
    console.log(n);
}

for(let c of "fantasma") {
    console.log(c);
}