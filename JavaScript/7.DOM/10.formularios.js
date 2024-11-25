const form = document.getElementById("formProducto");
const tbody = document.querySelector("#tablaProductos tbody");

function addProducto(producto) {
  const tr = document.createElement("tr");
  const tdNombre = document.createElement("td");
  const tdDesc = document.createElement("td");
  const tdPrecio = document.createElement("td");

  tdNombre.textContent = producto.nombre;
  tdDesc.textContent = producto.descripcion;
  tdPrecio.textContent = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(producto.precio);
  tr.append(tdNombre, tdDesc, tdPrecio);
  tbody.append(tr); // Añadimos al DOM
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const producto = {
    nombre: form.nombre.value,
    descripcion: form.descripcion.value,
    precio: form.precio.value,
  };

  addProducto(producto);
  form.reset();
});
