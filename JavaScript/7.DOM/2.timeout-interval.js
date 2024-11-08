setTimeout(() => console.log("Hola timeout"), 4000);
console.log("La aplicación sigue");

let n = 1;
const intervalID = setInterval(() => {
    console.log(n++);
    if(n > 10) {
        clearInterval(intervalID);
    }
}, 1000);
