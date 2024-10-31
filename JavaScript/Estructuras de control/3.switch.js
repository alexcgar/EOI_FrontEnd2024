const resp = prompt("¿Estás aprendientdo JavaScript?");
// if(resp === "sí") {
//     alert("Me alegro");
// } else if(resp === "no") {
//     alert("Tienes que esforzarte más");
// } else {
//     alert("No te he entendido");
// }

switch(resp) {
    case "sí":
    case "SÍ":
    case "si":
    case "SI":
    case "Si":
    case "Sí":
        alert("Me alegro");
        break;
    case "no":
        alert("Tienes que esforzarte más");
        break;
    default:
        alert("No te he entendido");
}       