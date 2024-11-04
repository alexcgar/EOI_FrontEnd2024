const map = new Map();
map.set("María", 24);
map.set("Martín", 27);
map.set("Lucía", 16);
map.set("Isabel", 54);

console.log(map.get("Lucía")); // 16
console.log(map.size); // 4
console.log(map.has("Isabel")); // true
console.log(map.has("Paco")); // false

map.set("Martín", 90); // Modificar edad de Martín
console.log(map);

map.delete("Lucía");
console.log(map);

// for(let entry of map) {
//     console.log(`${entry[0]} -> ${entry[1]}`);
// }

for(let [nombre, edad] of map) {
    console.log(`${nombre} -> ${edad}`);
}

for(let nombre of map.keys()) {
    console.log(`${nombre} -> ${map.get(nombre)}`);
}

map.forEach((edad, nombre) => console.log(`${nombre} -> ${edad}`));
