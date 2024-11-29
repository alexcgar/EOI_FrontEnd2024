/**
 * A partir del ejercicio 10 implementa la obtención de tareas
 * utilizando async/await en lugar de then
 */

const lista = document.getElementById("tareasList");
const form = document.getElementById("tareasForm");

// Cambia este código para usar async/await
async function obtenerTareas() {
  const resp = await fetch("http://localhost:3000/tasks");
  const datos = await resp.json();
  datos.tasks.forEach(mostrarTarea);
}

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  li.textContent = `${tarea.id} - ${tarea.description} `;
  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", async (e) => {
    const resp = await fetch("http://localhost:3000/tasks/" + tarea.id, {
      method: "DELETE",
    });
    if (resp.ok) {
      li.remove();
    }
  });
  li.append(button);
  lista.append(li);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const tarea = {
    description: form.description.value,
  };
  const resp = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  });
  const json = await resp.json();
  mostrarTarea(json.task);
});

obtenerTareas();
