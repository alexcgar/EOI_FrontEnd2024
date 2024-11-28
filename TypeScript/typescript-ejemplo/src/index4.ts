// https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg

const img = document.querySelector<HTMLImageElement>("#img")!; // Casting a HTMLImageElement y no es null
img.src =
    "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg";

const img2 = document.getElementById("img") as HTMLImageElement;
img2.src =
    "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg";

const input = document.createElement("input");
input.type = "text";
input.value = "Hola";
document.body.append(input);
