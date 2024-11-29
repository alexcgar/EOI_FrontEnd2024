import { TareasService } from "./clases/tareas-service.js";

const lista = document.getElementById("tareasList");
const form = document.getElementById("tareasForm");

const tareasService = new TareasService();

// Cambia este código para usar async/await
async function obtenerTareas() {
  const tareas = await tareasService.getTareas();
  tareas.forEach(mostrarTarea);
}

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  li.textContent = `${tarea.id} - ${tarea.description} `;
  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", async (e) => {
    await tareasService.deleteTarea(tarea.id);
    li.remove();
  });
  li.append(button);
  lista.append(li);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const tarea = {
    description: form.description.value,
  };
  const tInsertada = await tareasService.insertTarea(tarea);
  mostrarTarea(tInsertada);
});

obtenerTareas();
