const SERVER = `https://api.fullstackpro.es/products-example`;

const productsTemplate = document.getElementById("productsTemplate");
const tbody = document.querySelector("#productsTable tbody");

async function obtenerProductos() {
  const resp = await fetch(`${SERVER}/products`);
  const json = await resp.json();
  json.products.forEach(mostrarProducto);
}

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
