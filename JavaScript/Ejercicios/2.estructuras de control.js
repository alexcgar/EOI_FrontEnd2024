/**
 * Comprueba la edad del usuario:
 * - Si es menor de 18 dile que es menor de edad
 * - Si tiene 18 o más pero menos de 67 dile que puede trabajar
 * - Si tiene 67 o más dile que se jubile
 */
const edad = +prompt("Dime tu edad");

if(edad < 18) {
    console.log("Eres menor de edad");
} else if(edad < 67) {
    console.log("Puedes trabajar");
} else {
    console.log("Te puedes jubilar");
}

