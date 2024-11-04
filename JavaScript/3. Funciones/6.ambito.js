let a = 12; // Variable global

function cambiaValor() {
    a = 29; // Al no declararla con let, accedemos a variable global
}

cambiaValor();
console.log(a); // 29

function cambiaValor2() {
    let a = 500; // Declaro una variable LOCAL (es diferente de la global aunque se llame igual)
    a = 1999; // Sigue siendo la variable local
}

cambiaValor2();
console.log(a);

let nombre = "Juan";
function cambiaNombre(nombre) { // El parámetro es como una variable local
    nombre = "Marcos";
    console.log("Dentro de la función: " + nombre);
}

cambiaNombre(nombre);
console.log("Fuera de la función :" + nombre); // Juan