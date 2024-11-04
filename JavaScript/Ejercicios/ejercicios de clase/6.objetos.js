/**
 * Crea un objeto que represente un rectángulo. Este objeto tendrá las propiedades ancho y alto.
 * Crea también un método dentro que se llame getArea y que devuelva el área del rectángulo
 */

const rectangulo = {
    ancho: 4,
    alto: 7,
    getArea() {
        return this.alto * this.ancho;
    }
}

console.log(rectangulo.getArea());

/**
 * Crea la clase Rectangulo que tendrá las propiedades ancho y alto, y 
 * un método que se llame getArea y que devuelva el área del rectángulo
 * Crea varios rectángulos a partir de la clase y muestra el área de cada 
 * uno de ellos
 */

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    getArea() {
        return this.alto * this.ancho;
    }
}

const r1 = new Rectangulo(3, 6);
const r2 = new Rectangulo(8, 12);
const r3 = new Rectangulo(7, 13);

console.log(r1.getArea());
console.log(r2.getArea());
console.log(r3.getArea());