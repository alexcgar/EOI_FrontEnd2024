console.log(document.documentElement.lang);
console.log(document.children[0].lang); // Igual que arriba
console.log(document.firstElementChild.lang); // Igual que arriba

const li1 = document.getElementById("li1");
console.log(li1);
const destacados = document.getElementsByClassName("destacado");
console.log(destacados);
const ul = li1.parentElement;
console.log(ul);
console.log(ul.firstElementChild);

console.log(li1.nextElementSibling);