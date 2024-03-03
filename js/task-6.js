
const box = document.querySelector("#boxes");
const btnDestroy = document.querySelector("data-destroy");
const input = document.querySelector(input);

btnCreate .addEventListener("click",createBoxes);
btnDestroy.addEventListener("click",destroyEl )
input.addEventListener("input", createBoxes);
const greate=input.value;
const parsed = parseInt(greate, 10);
if (parsed) {greate>0 = createBoxes};
else {

}

btnCreate.addEventListener(`click`, createBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    // Створення нового div елементу (блоку)

    // Встановлення ширини та висоти блоку залежно від i
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    // Встановлення випадкового кольору фону для блоку за допомогою функції getRandomHexColor()
    box.style.backgroundColor = getRandomHexColor();
    // Додавання створеного блоку до елементу з id "boxes"
    boxes.append(box);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyEl(parsed){
divEl.InnerHtml="";
}


