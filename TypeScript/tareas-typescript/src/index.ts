import { TareasService } from "./classes/tareas-service";
import { Task } from "./interfaces/task";

const lista = document.getElementById("tareasList") as HTMLUListElement;
const form = document.getElementById("tareasForm") as HTMLFormElement;

const tareasService = new TareasService();

// Cambia este código para usar async/await
async function obtenerTareas() {
  const tareas = await tareasService.getTareas();
  tareas.forEach(mostrarTarea);
}

function mostrarTarea(tarea: Task) {
  const li = document.createElement("li");
  li.textContent = `${tarea.id} - ${tarea.description} `;
  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", async () => {
    await tareasService.deleteTarea(tarea.id!);
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
