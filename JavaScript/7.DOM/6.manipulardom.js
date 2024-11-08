const ul = document.getElementById("lista");
const li = document.createElement("li");
li.textContent = "Nuevo tercer elemento";

const li3 = ul.children[2];
li3.before(li);