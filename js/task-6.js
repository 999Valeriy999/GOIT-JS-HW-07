const createBtn = document.querySelector("data-create"); // константа для кнопки create
const box = document.querySelector("#boxes"); //константа для діва щоб створювало квадратик
const btnDestroy = document.querySelector("data-destroy"); // константа для кнопки destroy
createBtn.addEventListener("click", createBoxes); // слухач на кнопку create
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    // Створення нового div елементу (блоку)
    const box = document.createElement("div");
    // Встановлення ширини та висоти блоку залежно від i
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    // Встановлення випадкового кольору фону для блоку за допомогою функції getRandomHexColor()
    box.style.backgroundColor = getRandomHexColor();
    // Додавання створеного блоку до елементу з id "boxes"
    document.body.append(box);
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  } /*функція зміни кольору*/
  function createBoxes(event) {
    event.preventDefault(); //функція щоб не перезавантажувалась сторінка
  }
  const greate = input.value; // константа для інпута
  const parsed = parseInt(greate, 10); // константа щоб перетворити значення інпута на число
  // перевірка інпута на коректне число
  if (parsed > 0) {
    createBoxes(parsed);
  }
}
btnDestroy.addEventListener("click", destroyBox); //слухач на кнопку destroy
// функція для видалення
function destroyBox() {
  const btnDestroy = (divEl.innerHTML = " "); // видалення квадратиків
}
