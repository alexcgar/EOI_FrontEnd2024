let frutas = [
  "pera",
  "limón",
  "manzana",
  "zanahoria",
  "plátano",
  "albaricoque",
];

// Parecido al bucle for..of
frutas.forEach((fruta) => console.log(fruta));
frutas.forEach((fruta, i) => console.log(`${i} -> ${fruta}`));

let a = [3, 21, 15, 61, 9, 54];
console.log(a.every((num) => num < 100)); // Comprueba si cada número es menor a 100. Imprime true
console.log(a.every((num) => num % 2 == 0)); // Comprueba si cada número es par. Imprime false

console.log(a.some((num) => num % 2 == 0)); // Comprueba si algún elemento del array es par. Imprime true

console.log(frutas.every((fruta) => fruta.includes("a"))); // false (limón no contiene "a")
console.log(frutas.some((fruta) => fruta.includes("a"))); // true

console.log(frutas.map((fruta) => fruta.toUpperCase())); // ['PERA', 'LIMÓN', 'MANZANA', 'ZANAHORIA', 'PLÁTANO', 'ALBARICOQUE']
console.log(a.map((n) => n * 2)); // [6, 42, 30, 122, 18, 108]

console.log(frutas.filter(fruta => fruta.includes("e"))); // ['pera', 'albaricoque']
console.log(a.filter(n => n % 2 == 0)); // [54]

console.log(a.reduce((total, n) => total + n, 0)); // 163
console.log(a.reduce((max, n) => max > n ? max : n)); // 61