const producto = {
    nombre: "Mesa",
    precio: 120,
    calculaDescuento(descuento) {
        return this.precio * (100-descuento) / 100;
    }
};

function calculaDescuento(precio, descuento) {
    return precio * (100-descuento) / 100;
}

console.log(producto.calculaDescuento(20));

// Creamos el objeto como Object
const producto2 = new Object(); // Creamos objeto genérico
producto2.nombre = "Mesa";
producto2.precio = 120;
producto2.calculaDescuento = function(descuento) {
    return this.precio * (100-descuento) / 100;
}

console.log(producto2.calculaDescuento(20));

console.log(producto);
console.log(producto2);