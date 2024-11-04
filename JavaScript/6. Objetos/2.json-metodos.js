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