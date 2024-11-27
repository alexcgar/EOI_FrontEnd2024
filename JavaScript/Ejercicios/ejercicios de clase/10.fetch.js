/**
 * Haced petición GET con fetch a http://localhost:3000/tasks
 * Recorred las tareas y para cada tarea hay que hacer lo siguiente:
 * Crear un elemento li y meter dentro "id - description" de la tarea
 * Podéis ver lo que devuelve el servidor en la pestaña de red
 * de las herramientas de desarrollo del navegador
 */

const lista = document.getElementById("tareasList");

fetch("http://localhost:3000/tasks")
  .then((r) => r.json())
  .then((datos) => datos.tasks.forEach(mostrarTarea));

function mostrarTarea(tarea) {
    const li = document.createElement("li");
    li.textContent = `${tarea.id} - ${tarea.description}`;
    lista.append(li);
}


