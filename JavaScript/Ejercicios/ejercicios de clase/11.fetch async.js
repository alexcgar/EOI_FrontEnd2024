/**
 * A partir del ejercicio 10 implementa la obtención de tareas
 * utilizando async/await en lugar de then
 */

const lista = document.getElementById("tareasList");

// Cambia este código para usar async/await
// fetch("http://localhost:3000/tasks")
//   .then((r) => r.json())
//   .then((datos) => datos.tasks.forEach(mostrarTarea));

function mostrarTarea(tarea) {
    const li = document.createElement("li");
    li.textContent = `${tarea.id} - ${tarea.description}`;
    lista.append(li);
}


