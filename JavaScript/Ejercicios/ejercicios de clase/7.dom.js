/**
 * Imprime el texto de las celdas de la segunda fila de la tabla en consola
 * No modifiques el HTML
 * Para acceder al texto, utiliza la propiedad textContent del elemento
 */
const tabla = document.getElementById("tabla");
const tbody = tabla.firstElementChild;
const fila2 = tbody.children[1];
for (let td of fila2.children) {
  console.log(td.textContent);
}
Array.from(fila2.children).forEach((td) => console.log(td.textContent));

const td1 = fila2.firstElementChild;
console.log(td1.textContent);
const td2 = td1.nextElementSibling;
console.log(td2.textContent);
const td3 = td2.nextElementSibling;
console.log(td3.textContent);

document
  .querySelectorAll("#tabla tr:nth-child(2) td")
  .forEach((td) => console.log(td.textContent));
