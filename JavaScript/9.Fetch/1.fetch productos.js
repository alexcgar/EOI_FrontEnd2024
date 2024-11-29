const SERVER = `https://api.fullstackpro.es/products-example`;

const productsTemplate = document.getElementById("productsTemplate");
const tbody = document.querySelector("#productsTable tbody");
const form = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");

fetch(`${SERVER}/products`)
  .then((resp) => resp.json())
  .then((json) => json.products.forEach(mostrarProducto));

function addProduct(product) {
  fetch(`${SERVER}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((resp) => resp.json())
    .then((json) => mostrarProducto(json.product));
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
  tr.querySelector(".delete").addEventListener("click", () => {
    fetch(`${SERVER}/products/${product.id}`, { method: "DELETE" })
      .then(resp => {
        if(resp.ok) {
          tr.remove();
        }
      });
  });
  tbody.append(tr);
}

form.image.addEventListener("change", () => {
  const file = form.image.files[0];
  if (!file) return;
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener(
    "load",
    () => (imgPreview.src = fileReader.result)
  );
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    description: form.description.value,
    price: +form.price.value,
    imageUrl: imgPreview.src,
  };

  addProduct(product);
  form.reset();
  imgPreview.src = "";
});
