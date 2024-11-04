let value = 1;

while (value <= 5) { // prints 1 2 3 4 5
    console.log(value++);
}

console.log("Programa terminado");

let resp = prompt("Te gusta JavaScript?");
while(resp !== "si" && resp !== "sí") {
    resp = prompt("No me lo creo. Te gusta?");
}
alert("Por fín has respondido correctamente")