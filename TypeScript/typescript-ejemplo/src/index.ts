// TIPADO IMPLÍCITO
let num = 100; // num es de tipo number
num = 45;
// num = "Hola"; // Type 'string' is not assignable to type 'number'

console.log(num);

const numeros = [1,2,3,4]; // numeros es tipo number[] (array de números)
numeros[0] = 23;
// numeros[1] = "hola"; // Type 'string' is not assignable to type 'number'
// numeros[2] = true; // Type 'boolean' is not assignable to type 'number'

console.log(numeros);

// TIPADO EXPLÍCITO
let nombre: string;
nombre = "Juan";
nombre = "Pepe";
// nombre = 54; // Type 'number' is not assignable to type 'string'
console.log(nombre);

// TIPADO EXPLÍCITO ARRAYS
const palabras: string[] = [];
palabras.push("caracol")
palabras.push("tomate")
// palabras.push(123); // Type 'number' is not assignable to type 'string'
console.log(palabras);

// TIPADO DE FUNCIONES
function saluda(nombre: string) {
    console.log(`HOLA ${nombre.toUpperCase()}`);
}

saluda("Juan");

function divide(n1: number, n2: number): number {
    if(n2 !== 0) {
        return n1 / n2;
    }
    throw new Error("No podemos dividir entre 0");
}

const result = divide(4, 3);
console.log(result.toFixed(2));

type Rol = "admin" | "usuario" | "invitado";
let rol: Rol;
rol = "admin";
rol = "invitado";
// rol = "nadie"; // Type '"nadie"' is not assignable to type 'Rol'
console.log(rol);

const coordenadas: [number, number] = [43.24, -0.25]; // Tipo tupla
console.log(coordenadas);

// ******* TIPADO DE OBJETOS (Clase) *************

class Persona {
    nombre: string;
    edad: number;
    #rol: Rol;

    constructor(nombre: string, edad: number, rol: Rol) {
        this.nombre = nombre;
        this.edad = edad;
        this.#rol = rol;
    }

    get rol() {
        return this.#rol;
    }
}

function saludaPersona(p: Persona) {
    console.log(`Hola ${p.nombre}`);
}

const p = new Persona("Pepe", 24, "admin");
saludaPersona(p);
Object.entries(p).forEach(([k,v]) => console.log(`${k} => ${v}`)); // Recorremos las propiedades del objeto


// ******* TIPADO DE OBJETOS (JSON) *************

interface Producto {
    id: number;
    nombre: string; 
    precio: number;
};

const producto: Producto = {
    id: 23,
    nombre: "Escoba",
    precio: 100
};

console.log(producto);

function calculaTotal(p: Producto, unidades: number) {
    return p.precio * unidades;
}
console.log(calculaTotal(producto, 12));