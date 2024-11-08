console.log(document.querySelector("#div1 a").title); // Imprime "hello world"
console.log(document.querySelector("#div1 > a")?.title); // ERROR: No hay un hijo inmediato dentro de <div id="div1"> el cual sea un enlace <a>
console.log(document.querySelector("#div1 > p > a").title); // Imprime "hello world"
console.log(document.querySelector(".normalLink[title^='bye']").title); // Imprime "bye world"
console.log(document.querySelector(".normalLink[title^='bye'] + a").title); // Imprime "hello again"

console.log("---- Elementos con clase normalLink -----");
let elems = document.querySelectorAll(".normalLink");
elems.forEach((elem) => console.log(elem.title));// Imprime "hello world" y "bye world"

console.log("---- Elementos title empieza por 'hello' -----");
let elems2 = document.querySelectorAll("a[title^='hello']"); // Atributo title empieza por “hello...”
elems2.forEach((elem) => console.log(elem.title)); // Imprime "hello world" y "hello again"

console.log("----- Elementos después de enlace con título 'hello world' -----");
let elems3 = document.querySelectorAll("a[title='hello world'] ~ a"); // Hermanos de <a title="hello world">
elems3.forEach((elem) => console.log(elem.title)); // Imprime "bye world" y "hello again"

console.log("----- Elementos antes de enlace con título 'hello again' -----");
let elems4 = document.querySelectorAll("a:has(~ a[title='hello again'])"); // Hermanos de <a title="hello world">
elems4.forEach((elem) => console.log(elem.title)); // Imprime "bye world" y "hello again"