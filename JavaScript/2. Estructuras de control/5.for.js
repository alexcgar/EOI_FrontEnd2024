for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// let i = 1;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

for(let i = 6; i > 0; i--) {
    console.log(i);
}

let nombres = ["Pepe", "Juan", "Paco", "Ana", "Marta"];
let buscar = "Paco";
let pos = -1;
for(let i = 0; i < nombres.length; i++) {
    if(nombres[i] === buscar) {
        pos = i;
        break;
    }    
}
if(pos >= 0) {
    console.log(`Nombre encontrado en la posición ${pos}`);
} else {
    console.log("Nombre no encontrado");
}
