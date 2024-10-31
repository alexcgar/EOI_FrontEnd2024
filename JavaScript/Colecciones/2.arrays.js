let palabras = ["gato", "perro", "loro"];
// for(let i = palabras.length - 1; i >= 0; i--) {
//     palabras[i + 1] = palabras[i];
// }
// palabras[0] = "iguana";

palabras.unshift("iguana");
console.log(palabras); // ['iguana', 'gato', 'perro', 'loro']
palabras.push("caballo", "zorro");
console.log(palabras); // ['iguana', 'gato', 'perro', 'loro', 'caballo', 'zorro']
palabras.shift();
console.log(palabras); // ['gato', 'perro', 'loro', 'caballo', 'zorro']
palabras.pop();
console.log(palabras); // ['gato', 'perro', 'loro', 'caballo']

console.log(palabras.join());
console.log(palabras.join(" - "));

let palabra = "tenedor";
let palArray = Array.from(palabra);
console.log(palArray); // ['t', 'e', 'n', 'e', 'd', 'o', 'r']
palArray.push("e", "s");
console.log(palArray.join("")); 

let  a = ["a", "b", "c"];
let  b = ["d", "e", "f"];
let  c = a.concat(b, "g", "h");
console.log(c); // Imprime ["a", "b", "c", "d", "e", "f", "g", "h"]

let nums = [10, 20, 30, 40, 50, 60];
let nums2 = nums.slice(2, 5);
console.log(nums2); // [30, 40, 50]