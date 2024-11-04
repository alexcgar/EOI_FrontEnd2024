class Rectangulo {
    #ancho; // Privado
    #alto; // Privado

    constructor(ancho, alto) {
        this.#ancho = ancho;
        this.#alto = alto;
    }

    get ancho() {
        return this.#ancho;
    }

    set ancho(ancho) {
        if(typeof ancho === "number" && ancho > 0) {
            this.#ancho = ancho;
        }
    }

    getArea() {
        return this.#alto * this.#ancho;
    }

    toString() {
        return `Rectángulo(${this.#ancho}, ${this.#alto})`;
    }
}

const rect = new Rectangulo(4,7);
console.log(rect.getArea());
console.log(rect.toString());
rect.ancho = 24; // Llamada implícita a set ancho
console.log(rect.ancho); // Llamada implícita a get ancho

