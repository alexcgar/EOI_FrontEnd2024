interface Direccion {
    calle: string;
    numero: number;
    cp: string;
}

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
    telefonos: string[];
}

const p: Persona = {
    nombre: "María",
    edad: 25,
    direccion: {
        numero: 24,
        calle: "Calle ninguna",
        cp: "02344",
    },
    telefonos: ["2142342425", "3452354355"],
};

console.log(p);

function saluda(nombre?: string) {
    // El tipo de 'nombre' será: string | undefined
    if (!nombre) {
        console.log("No sé quién eres");
    } else {
        console.log(`Hola ${nombre}`);
    }
}

saluda("Pepito");
saluda(); // Nombre es opcional

const a = ["perro", "casa", "árbol", "mesa", "coche"];
const palabra = a.find((p) => p.startsWith("z")); // Devuelve string | undefined

if(palabra){
    console.log(palabra.toLocaleUpperCase()); // ERROR: 'palabra' is possibly 'undefined'
}
console.log(palabra?.toLocaleUpperCase()); // Si palabra es undefined, devuelve undefined sin acceder al método

const button = document.getElementById("boton");
button?.addEventListener("click", () => { /* Lo que sea */ });

