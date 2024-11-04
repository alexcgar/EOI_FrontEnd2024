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

    toString() {
        return `Rectángulo(${this.ancho}, ${this.alto})`;
    }
}

const r1 = new Rectangulo(3, 6);
const r2 = new Rectangulo(8, 12);
const r3 = new Rectangulo(7, 13);

console.log(r1.getArea());
console.log(r2.getArea());
console.log(r3.getArea());

/**
 * A partir de la clase Retangulo, crea un array con varios rectángulos y haz lo siguiente:

- Genera otro array que contenga las áreas de los rectángulos (números) -> map
- Suma las áreas de todos los rectángulos -> reduce
- Comprueba si hay al menos algún rectángulo con un área mayor que 100 -> some
- Ordena los rectángulos por altura -> sort

Después de hacer cada operación, muestra el resultado. Para el último resultado llama al método join(", ") del array para imprimirlo.

Implementa el método toString() en la clase Rectangulo que devuelva el siguiente texto: (ancho, alto)
 */

const rectangulos = [
    new Rectangulo(3, 6),
    new Rectangulo(8, 12),
    new Rectangulo(6, 4.5),
    new Rectangulo(3, 6),
    new Rectangulo(8, 9),
];

const areas = rectangulos.map(r => r.getArea());
console.log(areas);
const suma = areas.reduce((total, a) => total + a, 0);
console.log(suma);
const mayor100 = rectangulos.some(r => r.getArea() > 100);
console.log(`Hay rectángulos con área mayor que 100: ${mayor100}`);
rectangulos.sort((r1,r2) => r1.alto - r2.alto);
console.log(rectangulos.join(", "));
