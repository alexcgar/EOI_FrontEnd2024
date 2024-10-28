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



