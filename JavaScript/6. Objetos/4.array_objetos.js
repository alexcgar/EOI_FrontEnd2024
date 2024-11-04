class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  toString() {
    return `${this.nombre}: ${this.precio}€`;
  }
}

const productos = [
  new Producto("Silla", 45),
  new Producto("Mesa", 90),
  new Producto("Armario", 230),
  new Producto("Estantería", 132),
  new Producto("Lámpara", 31),
];

console.log(productos.join(", "));
productos.sort((p1, p2) => p1.precio - p2.precio);
console.log(productos.join(", "));
productos.sort((p1, p2) => p1.nombre.localeCompare(p2.nombre));
console.log(productos.join(", "));

// Productos precio < 100
const prodMenor100 = productos.filter(p => p.precio < 100);
console.log("Precio menor a 100: " + prodMenor100.join(", "));



