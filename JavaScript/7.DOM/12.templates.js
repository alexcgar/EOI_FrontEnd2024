const form = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");
const tbody = document.querySelector("#tablaPersonas tbody");
const template = document.getElementById("userTemplate");

function addPersona(persona) {
  const clone = template.content.cloneNode(true);

  clone.querySelector("img").src = persona.avatar;
  const tr = clone.firstElementChild;
  tr.children[1].textContent = persona.nombre;
  tr.children[2].textContent = persona.hobbies.join(", ");

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
    avatar: imgPreview.src,
  };
  addPersona(persona);
  form.reset();
  imgPreview.src = "";
});

form.avatar.addEventListener("change", (e) => {
  const file = form.avatar.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener("load", (e) => {
    imgPreview.src = fileReader.result;
  });
});
