const imgsLogo = document.getElementById("img");
const imagemLogo = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;
    console.log(idx)

    if (idx == 2) {

        idx = 0;
    }
    imgsLogo.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrossel, 2000);
// const imgs = document.querySelectorAll("#img img");
// let idx = 0;

// function carrossel() {
//   idx = (idx + 1) % imgs.length; // use o operador de módulo para circular entre as imagens
//   imgs.forEach((img, i) => {
//     img.style.transform = `translateX(${(i - idx) * 100}%)`; // move as imagens individualmente
//   });
// }

// setInterval(carrossel, 1000);