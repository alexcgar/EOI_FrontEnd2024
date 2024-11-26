const SERVER = `https://api.fullstackpro.es/products-example`;

const productsTemplate = document.getElementById("productsTemplate");
const tbody = document.querySelector("#productsTable tbody");

fetch(`${SERVER}/products`)
  .then((resp) => resp.json())
  .then((json) => json.products.forEach(mostrarProducto));

function mostrarProducto(product) {
  const clone = productsTemplate.content.cloneNode(true);
  const tr = clone.firstElementChild;
  tr.children[0].textContent = product.id;
  tr.querySelector("img").src = product.imageUrl;
  tr.children[2].textContent = product.description;
  tr.children[3].textContent = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);
  tbody.append(tr);
}
