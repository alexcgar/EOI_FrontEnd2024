document.getElementById("alert").addEventListener("click", () => {
  alert("Soy un alert");
});
document.getElementById("confirm").addEventListener("click", () => {
  const resp = confirm("Te gusta JavaScript?");
  if(resp) {
    alert("Me alegro. Nos vemos luego en TypeScript");
  } else {
    alert("Te has equivocado de lugar");
  }
});
document.getElementById("prompt").addEventListener("click", () => {
  const resp = prompt("Cómo te llamas?");
  if(resp) {
    alert(`Hola ${resp}`);
  }
});

document.getElementById("sweetAlert").addEventListener("click", () => {
    Swal.fire("SweetAlert2 is working!");
});
