const classes = ['first', 'second', 'third', 'fourth'];
// 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. 
//Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
const allLevel = document.querySelectorAll("h1");
console.log(typeof allLevel);
console.log(allLevel.length);
for ( i = 0; i < allLevel.length; i++) {
  console.log(allLevel[i]);
}
//console.log(document.querySelectorAll("h1")); 
// 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"
const paragraph1 = document.querySelector("#p1");
paragraph1.style.backgroundColor = "gold";

// 3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
const paragraph2 = document.querySelector("#p2");
paragraph2.style.backgroundColor = "gold";
paragraph2.style.color = "blue";
paragraph2.style.fontSize = "2rem";
// або
paragraph2.style.cssText = 'background-color:gold; color: red; font-size: 2rem;';
// 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third
const paragraph3 = document.querySelector("#p3");
paragraph3.classList.add("third");
// 5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border
const paragraph4 = document.querySelector("#p4");
paragraph4.classList.add("fourth", "border");
// 6. Знайти всі елементи з класом container. Використовуючи цикл for,
// вивести на консоль перший елемент для кожного зі знайдених елементів.
let containers = document.querySelectorAll(".container");
for ( i = 0; i < containers.length; i++) {
  let firstElement = containers[i].firstElementChild;
  console.log(firstElement);
}
// 7. Знайти всі елементи з класом container. Використовуючи цикл for, 
// вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.
for ( i = 0; i < containers.length; i++) {
    let firstElementContent = containers[i].firstElementChild.textContent;
    console.log(firstElementContent);
  }
// 8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. 
// Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином
// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class

let headers = document.querySelectorAll(".container header > h1");
console.log(headers);
let firstTag = headers.firstElementChild;
for (let header of headers)
  for(let header = 0; header < headers.length; header++){
    let newTag;
    switch (header) {
        case 1:
            newTag = 'h2';
            break;
        case 2:
            newTag = 'h3';
            break;
        case 3:
            newTag = 'h4';
            break;
        default:
           newTag = 'h1';
    }
    let newHeader = document.createElement(newTag);
    newHeader.textContent = headers[header].textContent;
    newHeader.id = headers[header].id;
    newHeader.className = headers[header].className; 
    console.log(newTag);
    console.log(newHeader);
    newHeader.innerHTML = headers[header].innerHTML;
    newHeader.id = headers[header].id;
    newHeader.classList.add(`class-${i + 1}`);

   headers[header].parentNode.replaceChild(newHeader, headers[header]);
}

