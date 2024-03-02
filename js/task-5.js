const ColorButton = document.querySelector("change-color");
ColorButton.addEventListener("click", () => {});
let HexColor = getRandomHexColor();
document.body.style.backgroundColor = HexColor;
document.span.texContent = getRandomHexColor;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
