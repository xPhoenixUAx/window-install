const images = [
  "img/hero/1.jpg",
  "img/hero/2.jpg",
  "img/hero/3.jpg",
  "img/hero/4.jpg",
];

let index = 0;
const bg = document.getElementById("bg");

bg.style.backgroundImage = `url('${images[index]}')`;

setInterval(() => {
  index = (index + 1) % images.length;
  bg.style.backgroundImage = `url('${images[index]}')`;
}, 10000);
