class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Usuario extends Persona {
    constructor(nombre, edad, email, password) {
        super(nombre, edad);
        this.email = email;
        this.password = password;
    }

    // Método saluda sobrescrito
    saluda() {
        super.saluda();
        console.log(`Email: ${this.email}, password: ${this.password.replace(/./g, '*')}`);
    }

    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}, password: ${this.password.replace(/./g, '*')}`
    }
}

const usuario = new Usuario("Pepito", 23, "usuario@email.com", "1234");
console.log(usuario);
usuario.saluda();
console.log("Usuario -> " + usuario); // Llama implícitamente a toString para concatenar.