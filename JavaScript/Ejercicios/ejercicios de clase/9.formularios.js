/**
 * Recoge los 2 campos del formulario y añade un elemento a la lista con los 
 * valores de ambos.
 * Ejemplo: Sacar la basura - pendiente
 */

const form = document.getElementById("formTareas");
const lista = document.getElementById("listaTareas");

form.addEventListener("submit", e => {
    e.preventDefault();
    const descripcion = form.descripcion.value;
    const estado = form.estado.value;

    const li = document.createElement("li");
    li.textContent = `${descripcion} (${estado})`;
    lista.append(li);
    form.reset();
});