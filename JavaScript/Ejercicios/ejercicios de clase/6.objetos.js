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
