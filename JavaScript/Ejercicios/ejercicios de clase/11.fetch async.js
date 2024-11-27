/**
 * A partir del ejercicio 10 implementa la obtención de tareas
 * utilizando async/await en lugar de then
 */

const lista = document.getElementById("tareasList");

// Cambia este código para usar async/await
async function obtenerTareas() {
  const resp = await fetch("http://localhost:3000/tasks");
  const datos = await resp.json();
  datos.tasks.forEach(mostrarTarea);
}

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  li.textContent = `${tarea.id} - ${tarea.description}`;
  lista.append(li);
}

obtenerTareas();
