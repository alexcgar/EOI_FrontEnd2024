class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona = new Persona("Pedro", 25);
console.log(persona);
persona.saluda();
const persona2 = new Persona("Ana", 42);
persona2.saluda();