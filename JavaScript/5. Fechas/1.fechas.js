const hoy = new Date();
console.log(hoy);

// mes va de 0(enero) a 11(diciembre)
const date1 = new Date(2024, 5, 17, 12, 30, 50);
console.log(date1);
let date2 = new Date("2024-06-17");
console.log(date2); 

console.log(Date.now()); // 1730314956945
console.log(Date.now()/1000/60/60/24/365); // 54.86

// Fecha de anteayer
const anteayer = new Date(Date.now() - (2*24*60*60*1000));
console.log(anteayer);

console.log(hoy.getDate());
console.log(hoy.getMonth()); // Va de 0 a 11
console.log(hoy.getDay()); // Va de 0 (domingo) a 6 (sábado)

hoy.setDate(14); 
console.log(hoy); // 14 del mes actual
hoy.setDate(-1); // Penúltimo día del mes anterior (0 sería el último)
console.log(hoy);
hoy.setDate(-365);// Primer día del mes del año anterior
console.log(hoy); 