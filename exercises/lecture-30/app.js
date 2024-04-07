const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;
/* У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, 
поки користувач заповнює поля форми. Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName 
та перевіряє чи вони не пусті. Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. 
Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!*/

function async() {
const h1 = document.getElementById("#waiting");
const form = document.getElementById("#demoForm");
const firstInput = form.elements["firstName"];
const lastInput = form.elements["lastName"];

function timeout() {
    return new Promise(resolve => setTimeout(resolve, 10000));
}
const firstName = firstInput.value.trim();
const lastName = lastInput.value.trim(); 

if (!firstName && !lastName) {
    h1.textContent = "I'm miss You";
  } else {
    h1.textContent = `Hello ${firstName}+''+${lastName}!`;
  }
};

/*Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, 
використовуючи методи open() і send().
Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, 
за допомогою JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій 
та поміщає отриманий результат всередину елемента з id="demo".*/

let div = document.querySelector('#demo')
let xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
xhr.send()
xhr.onload = () =>{
    let posts = JSON.parse(xhr.responseText);
    posts.forEach(item => {
        div.insertAdjacentHTML('afterbegin', template(item));
    })
}