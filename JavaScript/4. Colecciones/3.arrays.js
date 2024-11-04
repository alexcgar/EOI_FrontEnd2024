let  a = ["a", "b", "c", "d", "e", "f"];
// Borramos c y d
a.splice(2, 2); // Borramos elementos 2 y 3
console.log(a); // ['a', 'b', 'e', 'f']
// Inserta las letras "x", "y", "z" entre la e y la f
a.splice(3, 0, "x", "y", "z");
console.log(a); // ['a', 'b', 'e', 'x', 'y', 'z', 'f']
// Sustituye la letra 'b' por 'B'
a.splice(1, 1, "B");
console.log(a); // ['a', 'B', 'e', 'x', 'y', 'z', 'f']

a.reverse();
console.log(a);

let frutas = ["pera", "limón", "manzana", "zanahoria", "plátano", "albaricoque"];
frutas.sort();
console.log(frutas); // ['albaricoque', 'limón', 'manzana', 'pera', 'plátano', 'zanahoria']

let nums = [6, 12, 98, 251, 7, 100];
nums.sort();
console.log(nums); // [100, 12, 251, 6, 7, 98]. Por defecto ordena alfabéticamente
/**
 * Función de comparación. Devuelve: 
 * - Núm negativo si el primer elemento es menor
 * - Núm positivo si el primero elemento es mayor
 * - 0 si son iguales
 */ 

nums.sort((n1, n2) => n1 - n2);
console.log(nums); // [6, 7, 12, 98, 100, 251]

let nums2 = [1,2,3,4,5,6];
nums2[2] = 50;
console.log(nums2); // [1, 2, 50, 4, 5, 6]


