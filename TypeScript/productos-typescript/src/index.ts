import { ProductService } from "./classes/product-service";
import { Product } from "./interfaces/product";

const productsTemplate = document.getElementById("productsTemplate") as HTMLTemplateElement;
const tbody = document.querySelector("#productsTable tbody")!;
const form = document.getElementById("formProducto") as HTMLFormElement;
const imgPreview = document.getElementById("imgPreview") as HTMLImageElement;

const productService = new ProductService();

async function obtenerProductos() {
  const products = await productService.getProducts();
  products.forEach(mostrarProducto);
} 

function mostrarProducto(product: Product) {
  const clone = productsTemplate.content.cloneNode(true) as DocumentFragment;
  const tr = clone.firstElementChild!;
  tr.children[0].textContent = String(product.id);
  tr.querySelector("img")!.src = product.imageUrl;
  tr.children[2].textContent = product.description;
  tr.children[3].textContent = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);
  tr.querySelector(".delete")?.addEventListener("click", async () => {
    await productService.deleteProduct(product.id!);
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
    () => (imgPreview.src = fileReader.result as string)
  );
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const product: Product = {
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