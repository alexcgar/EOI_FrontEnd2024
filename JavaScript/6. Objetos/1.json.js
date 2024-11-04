  // Notación JSON
const persona = {
  nombre: "Pepe",
  edad: 24,
  telefonos: ["9253943952", "6903459395"],
  direccion: {
    cp: "05234",
    calle: "Calle Perdida",
    num: 25,
    ciudad: "Barcelona"
  },
};

console.log(persona); // {nombre: 'Pepe', edad: 24}
console.log(typeof persona); // object
console.log(persona.edad); // 24
persona.edad = 60;

// Usando un array en lugar de un objeto
const perArray = [
  "Pepe",
  24,
  ["9253943952", "6903459395"],
  ["05234", "Calle Perdida", 25, "Barcelona"],
];

console.log(perArray[3][3]); // Barcelona
console.log(persona.direccion.ciudad); // Barcelona

// Usando un Map en lugar de un objeto
const perMap = new Map();
perMap.set("nombre", "Pepe");
perMap.set("edad", 24);
perMap.set("telefonos", ["9253943952", "6903459395"]);
const dirMap = new Map();
dirMap.set("cp", "05234");
dirMap.set("calle", "Calle Perdida");
dirMap.set("num", 25);
dirMap.set("ciudad", "Barcelona");
perMap.set("direccion", dirMap);

console.log(perMap.get("direccion").get("cuidad"));