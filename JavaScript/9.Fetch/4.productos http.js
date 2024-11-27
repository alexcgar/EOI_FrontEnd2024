import { ProductService } from "./clases/product-service.js";

const SERVER = `https://api.fullstackpro.es/products-example`;

const productsTemplate = document.getElementById("productsTemplate");
const tbody = document.querySelector("#productsTable tbody");
const form = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");

const productService = new ProductService();

async function obtenerProductos() {
  const products = await productService.getProducts();
  products.forEach(mostrarProducto);
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
  tr.querySelector(".delete").addEventListener("click", async () => {
    await productService.deleteProduct(product.id);
    tr.remove();
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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const product = {
    description: form.description.value,
    price: +form.price.value,
    imageUrl: imgPreview.src,
  };

  const pInsertado = await productService.insertProduct(product);
  mostrarProducto(pInsertado);
  form.reset();
  imgPreview.src = "";
});

obtenerProductos();