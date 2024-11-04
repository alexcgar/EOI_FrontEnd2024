function saluda() {
    console.log("Hola mundo");
}

saluda();

function saludaNombre(nombre) {
    console.log(`Hola ${nombre}`);
}

saludaNombre("Pepe");
saludaNombre("Marta");
saludaNombre();
// saludaNombre(prompt("Cómo te llamas?"));

function suma(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

suma(4, 12); // 4 + 12 = 16
suma("Ho", "la"); // Ho + la = Hola