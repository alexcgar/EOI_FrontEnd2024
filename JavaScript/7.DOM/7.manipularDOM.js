const lista = document.getElementById("lista");
const textInput = document.getElementById("texto");
const posInput = document.getElementById("posicion");
const principio = document.getElementById("principio");
const final = document.getElementById("final");
const antes = document.getElementById("antes");
const despues = document.getElementById("despues");
const borrar = document.getElementById("borrar");
const susituir = document.getElementById("susituir");
const vaciar = document.getElementById("vaciar");

function crearLi() {
    const li = document.createElement("li");
    li.textContent = textInput.value;
    return li;
}

principio.addEventListener("click", () => {
    lista.prepend(crearLi());
});

final.addEventListener("click", () => {
    lista.append(crearLi());
});

antes.addEventListener("click", () => {
    const pos = posInput.value;
    const liSelected = lista.children[pos];
    liSelected.before(crearLi());
});

despues.addEventListener("click", () => {
    const pos = posInput.value;
    const liSelected = lista.children[pos];
    liSelected.after(crearLi());
});

borrar.addEventListener("click", () => {
    const pos = posInput.value;
    const liSelected = lista.children[pos];
    liSelected.remove();
});

sustituir.addEventListener("click", () => {
    const pos = posInput.value;
    const liSelected = lista.children[pos];
    liSelected.replaceWith(crearLi());
});

vaciar.addEventListener("click", () => {
    lista.replaceChildren();
});
