function sumaAsync(n1, n2) {
    return new Promise((resolve, reject) => {
      if (n1 < 0 || n2 < 0) {
        reject("Los números no pueden ser negativos");
      } else {
        setTimeout(() => resolve(n1 + n2), 3000);
      }
    });
}

async function ejecutaSuma() {
    const result = await sumaAsync(3,6);
    console.log(`3 + 6 = ${result}`);
}

async function ejecutaSuma2() {
    try{ 
        const result = await sumaAsync(-2,4);
        console.log(`-2 + 4 = ${result}`);
    } catch(e) {
        console.error(e);
    }
}

ejecutaSuma(); // No se bloquea el resto del programa (async)
ejecutaSuma2(); // No se bloquea el resto del programa (async)
console.log("El programa sigue...");
