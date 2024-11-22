function clickInput(event) {
    // this hace referencia al propio elemento que recibe el evento
    this.value = "Un evento " + event.type + " ha sido detectado en #" + this.id;
}

const input = document.getElementById("input1");
input.addEventListener("click", clickInput);

const div = document.getElementById("div1");
div.addEventListener("mouseenter", (e) => div.classList.add("red"));
div.addEventListener("mouseleave", (e) => div.classList.remove("red"));
div.addEventListener("mousemove", (e) => {
    div.textContent = e.offsetX + ", " + e.offsetY;
});

const link = document.getElementById("link1");
link.addEventListener("click", e => {
    e.preventDefault();
    console.log(e);
    console.log("Has hecho click en el enlace");
    window.open(link.href, "Google", "resizable,scrollbars,status");
});
