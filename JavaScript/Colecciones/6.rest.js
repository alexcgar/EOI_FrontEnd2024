function suma(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

console.log(suma(4,6,3,1)); // 14
console.log(suma()); // 0
console.log(suma(1,5,12,8,1,6,7,2)); // 42

// La función Math.max utiliza rest
console.log(Math.max(4,6,12,76,34,142,5)); // 142

function imprimirUsuario(nombre, ...lenguajes) {
    console.log(nombre + " sabe " + lenguajes.length + " lenguajes: " + lenguajes.join(" - "));
}

// Imprime "Pedro sabe 3 lenguajes: Java - C# - Python"
imprimirUsuario("Pedro", "Java", "C#", "Python");
// Imprime "María sabe 5 lenguajes: JavaScript - Angular - PHP - HTML - CSS"
imprimirUsuario("María", "JavaScript", "Angular", "PHP", "HTML", "CSS");