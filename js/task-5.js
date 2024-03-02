const ColorButton = document.getElementById("change-color");
ColorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = color[getRandomHexColor()];
});
let HexColor = "#";
for (let i = 0; i < 6; i++) {
  HexColor += getRandomHexColor();
  return `HexColor${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
