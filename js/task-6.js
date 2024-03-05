const createBtn = document.querySelector("[data-create]"); // константа для кнопки create
const boxContainer = document.querySelector("#boxes"); // константа для div, в якому будуть створюватися блоки
const destroyBtn = document.querySelector("[data-destroy]"); // константа для кнопки destroy
const input = document.querySelector("input");
input.addEventListener("input", inputValue);
function inputValue() {
  const inputValue = input.value; // дістаємо значення з інпута
  const parsedValue = parseInt(inputValue, 10); // константа для перетворення значення інпута на число
  // перевірка інпута на коректне число
  if (!isNaN(parsedValue) && parsedValue > 0) {
    createBtn.disabled = false; // Розблокувати кнопку "Create", якщо введено коректне число
  } else {
    createBtn.disabled = true; // Заблокувати кнопку "Create", якщо введено некоректне число
  }
  input.value = "";
}
createBtn.addEventListener("click", onCreateButton);
function onCreateButton() {
  boxContainer.innerHTML = "";
  const inputValue = input.value;
  const parsedValue = parseInt(inputValue, 10); // константа для перетворення значення інпута на число
  // перевірка інпута на коректне число
  if (!isNaN(parsedValue) && parsedValue > 0) {
    createBoxes(parsedValue);
  }
}
function createBoxes(amount) {
  // Очистити попередні блоки перед створенням нових
  boxContainer.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    // Створення нового div елементу (блоку)
    const box = document.createElement("div");
    // Встановлення ширини та висоти блоку залежно від i
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    // Встановлення випадкового кольору фону для блоку за допомогою функції getRandomHexColor()
    box.style.backgroundColor = getRandomHexColor();
    // Додавання створеного блоку до контейнера
    boxContainer.append(box);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  // Очищення вмісту контейнера, що призведе до видалення всіх створених блоків
  boxContainer.innerHTML = "";
}
