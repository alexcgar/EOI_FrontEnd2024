let nums = [14, 6, 20, 7, 31];
let [n1, n2] = nums; // let n1 = nums[0], n2 = nums[1];
console.log(n1 + n2); // 20

let array = [150, 400, 780, 1500, 200];
let [v1, , v3] = array; // Asigna el primer y tercer elemento
console.log(v3); // Imprime 780

let nombres = ["Paco", "Ana", "Pepe", "Marco", "Rafa"];
let [nombre1, nombre2, ...resto] = nombres;
console.log(nombre1); // Paco
console.log(nombre2); // Ana
console.log(resto); // ['Pepe', 'Marco', 'Rafa']
console.log(nombres); // ["Paco", "Ana", "Pepe", "Marco", "Rafa"]

function imprimirUsuario([id, nombre, email], otraInfo = "Nada") {
    console.log("ID: " + id);
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Otra info: " + otraInfo );
}

let infoUsu = [3, "Pedro", "peter@gmail.com"];
imprimirUsuario(infoUsu, "No es muy listo");