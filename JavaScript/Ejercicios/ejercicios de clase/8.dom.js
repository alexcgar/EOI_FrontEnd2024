/** Cuando el usuario pase el ratón encima de la imagen, 
 * esta cambiará a img/img2.webp. Al sacar el ratón, 
 * volverá a la imagen anterior
 */

const imagen = document.getElementById("imagen");
imagen.addEventListener("mouseenter", e => imagen.src = "img/img2.webp");
imagen.addEventListener("mouseleave", e => imagen.src = "img/img1.webp");

/**
 * Cuando el usuario haga click al botón, cambia la clase
 * btn-danger (rojo), por btn-success (verde). Cuando vuelva 
 * a hacer click otra vez, vuelve al estado original
 */

const boton = document.getElementById("boton");
boton.addEventListener("click", e => {
    boton.classList.toggle("btn-danger");
    boton.classList.toggle("btn-success");
});