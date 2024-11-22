let input = document.getElementById("prueba");
console.log(input.attributes);
console.log(input.attributes.type); // Objeto Attr (https://developer.mozilla.org/es/docs/Web/API/Attr)
console.log(input.attributes[0]);

console.log(input.attributes.type.value); // text
console.log(input.type); // text
// input.type = "number"; // Modificar el valor del atributo type

let enlace = document.getElementById("enlace");
enlace.href = "https://amazon.es";
enlace.textContent = "Ir a Amazon";

let lista = document.getElementById("lista");
lista.children[0].classList.add("verde");
Array.from(lista.children).forEach((li) => {
  li.addEventListener("click", () => li.classList.toggle("verde"));
});

let lista2 = document.getElementById("lista2");
lista2.firstElementChild.style.color = "white";
lista2.firstElementChild.style.backgroundColor = "red";
Array.from(lista2.children).forEach((li) => {
  li.addEventListener("click", () => {
    const bgColor = li.style.backgroundColor;
    if(bgColor === "red") {
        li.style.backgroundColor = "transparent";
        li.style.color = "black";
    } else {
        li.style.backgroundColor = "red";
        li.style.color = "white";
    }
  });
});
