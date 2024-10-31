function saludaNombre(nombre = "Anónimo") {
    if(nombre) {
        console.log(`Hola ${nombre}`);
    } else {
        console.error("El nombre es obligatorio");
    }
}

saludaNombre();
saludaNombre("Pepe")
saludaNombre(null);
saludaNombre("");

function max(n1 = 0, n2 = 0) {
    return n1 > n2 ? n1 : n2;
}

console.log(max(4, 7)); // 7
console.log(max(26, 12)); // 26
console.log(max(6)); // 6 (6,0)
console.log(max()); // 0 (0,0)