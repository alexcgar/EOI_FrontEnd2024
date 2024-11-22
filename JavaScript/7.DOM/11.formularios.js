const form = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");
const tbody = document.querySelector("#tablaPersonas tbody");

function addPersona(persona) {
    const tr = document.createElement("tr");
    const tdAvatar = document.createElement("td");
    const tdNombre = document.createElement("td");
    const tdAficiones = document.createElement("td");

    const img = document.createElement("img");
    img.src = persona.avatar;
    tdAvatar.append(img);
    tdNombre.textContent = persona.nombre;
    tdAficiones.textContent = persona.hobbies.join(", ")

    tr.append(tdAvatar, tdNombre, tdAficiones);
    tbody.append(tr);
}

// Ejemplo accediendo directamente a los valores de los campos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const persona = {
    nombre: form.nombre.value,
    hobbies: Array.from(form.hobbies)
      .filter((i) => i.checked)
      .map((i) => i.value),
    avatar: imgPreview.src
  };
  addPersona(persona);
  form.reset();
  imgPreview.src = "";
});

form.avatar.addEventListener("change", e => {
    const file = form.avatar.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", e => {
        imgPreview.src = fileReader.result;
    });
});

// Forma 2
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const persona = {
//       nombre: formData.get("nombre"),
//       hobbies: formData.getAll("hobbies"), // Valores múltiples
//       avatar: imgPreview.src
//     };
//     addPersona(persona);
//     form.reset();
//     imgPreview.src = "";
//   });