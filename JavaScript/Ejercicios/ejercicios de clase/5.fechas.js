/**
 * Pregunta al usuario (prompt) su fecha de nacimiento en formato dd/mm/yyyy
 * Puedes transformar esa fecha a array con fecha.split('/') -> [dia, mes, año]
 * Crea una fecha (Date) e indícale qué día de la semana nació.
 * También muestrale cuantos días han pasado hasta hoy (resta en milisegundos y transforma a dias).
 */ 

const nac = prompt("Qué día naciste? (dd/mm/yyyy)");
const trozos = nac.split("/");
const fecha = new Date(trozos.reverse().join("-")); 
const diaSemana = new Intl.DateTimeFormat('es-ES', { weekday: 'long'}).format(fecha);

console.log(`Naciste un ${diaSemana}`);

const fechaMs = fecha.getTime();
const hoyMs = Date.now();
const dias = (hoyMs - fechaMs) / 1000 / 60 / 60 / 24;

console.log(`Han pasado ${Math.floor(dias)} días`);
