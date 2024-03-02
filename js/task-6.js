const Controls = document.querySelector("#controls");
const Boxes = document.querySelector("#boxes");

let rendomColor = getRandomHexColor();
let boxWidth = parseInt(getComputedStyle(Controls).width);
let boxHight = parseInt(getComputedStyle(Controls).height);

function increaseFunc() {
  boxWidth += 10;
  boxHight += 10;
  Controls.style.width = `${boxWidth}`;
  Controls.style.height = `${boxHight}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
