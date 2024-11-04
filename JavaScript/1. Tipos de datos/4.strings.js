let nombre = "Antonio";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); // Antonio Pérez

console.log(`Datos de la persona:
    Nombre: ${nombreCompleto}
FIN`);

console.log("Datos de la persona:\n    Nombre: " + nombreCompleto + "\nFIN");

// Métodos del tipo string
let frase = "Ayer vi un pájaro negro y blanco";
console.log(frase.charAt(1)); // y
console.log(frase.indexOf("negro")); // 18
console.log(frase.indexOf("rojo")); // -1
console.log(frase.replace("negro", "rojo")); // Ayer vi un pájaro rojo y blanco
console.log(frase.replaceAll("o", "u")); // Ayer vi un pájaru negru y blancu

console.log(frase.slice(11, 17)); // pájaro
console.log(frase.slice(11)); // pájaro negro y blanco
console.log(frase.slice(-6)); // blanco

// Transforma la cadena a minúsculas
console.log(frase.toLocaleLowerCase()); 

// Transforma la cadena a mayúsculas
console.log(frase.toLocaleUpperCase()); 

let email = "   email@email.com   ";
email = email.trim();
console.log(email); // "email@email.com"