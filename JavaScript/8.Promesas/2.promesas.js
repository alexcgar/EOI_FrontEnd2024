// Equivalencia función -> promesa
// return -> resolve
// throw -> reject

function sumaAsync(n1, n2) {
  return new Promise((resolve, reject) => {
    if (n1 < 0 || n2 < 0) {
      reject("Los números no pueden ser negativos");
    } else {
      setTimeout(() => resolve(n1 + n2), 3000);
    }
  });
}

sumaAsync(3, 6).then((res) => console.log(`3 + 6 es ${res}`));

sumaAsync(-2, 4)
  .then((res) => console.log(`3 + 6 es ${res}`))
  .catch((e) => console.error(e));

console.log("Programa principal");
