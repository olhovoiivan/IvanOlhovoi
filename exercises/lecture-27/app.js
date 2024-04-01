// Знайти елемент ul у документі та запам'ятати його у змінній ul.
const ul = document.querySelector('ul');

//Знайти елемент input у документі та запам'ятати його у змінній input.
const input = document.getElementById('item');

// За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. 
//  Якщо елемент відсутній, створити його зі значенням [].

let itemsArray = [];
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
 
//Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, 
//що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.

function addTask(text) {
    let li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

//Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.
let texts = [];
texts.forEach((text) => {
  addTask(text);     
});

document.body.appendChild(ul);

//Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, 
//та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. 
//Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.

function add() {
    const inputValue = input.value.trim();
    if (inputValue !== "") {
      itemsArray.push(inputValue);
      localStorage.setItem("items", JSON.stringify(itemsArray));
      addTask(inputValue);
      input.value = "";
    }
  }

// Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.
function del() {
  localStorage.removeItem("items");
  let li = document.querySelectorAll('ul li');
  for (const lis of li){
    lis.remove();
  }
  itemsArray = [];
  ul.innerHTML = "";
}

