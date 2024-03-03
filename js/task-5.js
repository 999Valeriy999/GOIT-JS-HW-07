const ColorButton = document.querySelector(".change-color");
ColorButton.addEventListener("click", (getRandomHexColor) => {});
let HexColor = getRandomHexColor();
document.body.style.backgroundColor = HexColor;
document.span.textContent = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
