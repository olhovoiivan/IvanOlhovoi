// 1. Маємо масив list
const list = ['html', 'css', 'javascript', 'react.js'];
// Використовуючи метод createElement, створити невпорядкований список 
// на основі масиву list та вставити його на сторінку.
let ul = document.createElement('ul');
for(let i=0; i < list.length; i++){
    let li = document.createElement('li');
    li.textContent = list[i];
    ul.appendChild(li);
};
document.body.appendChild(ul);

// 2.Маємо масив listWithHref
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, 
//де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:
// <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
// Додайте створений список на сторінку.
let ol = document.createElement('ol');
function linkEl(text, url){
    let link = document.createElement('a');  
    link.textContent = text;
    link.href = url;
    return link;
}
listWithHref.forEach((element) => {
    let li = document.createElement('li');
    for(let i=0; i < listWithHref.length; i++){
    let key = Object.keys(element)[i];
    let value = Object.values(element)[i];
    let link = linkEl(key, value);
    li.appendChild(link);
    ol.appendChild(li);
  }});
  document.body.appendChild(ol);
  
// 3. Маємо масив students
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
//Використовуючи метод createElement, створити таблицю на основі масиву students. 
//Заголовки стовпчиків таблиці - firstName, lastName, degree. 
//Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; 
// Додайте таблицю на сторінку.

let table = document.createElement('table');
let td = document.createElement("thead");
let trHead = document.createElement("tr");
let headers = ["firstName", "lastName", "degree"];
headers.forEach((headerText) => {
  let th = document.createElement("th");
  th.textContent = headerText;
  th.style.backgroundColor = "blue";
  th.style.color = "azure";
  trHead.appendChild(th);
});
td.appendChild(trHead);
table.appendChild(td);
let tb = document.createElement("tbody");
students.forEach((student) => {
  let tr = document.createElement("tr");
  headers.forEach((header) => {
    let td = document.createElement("td");
    td.textContent = student[header];
    tr.appendChild(td);
  });
  tb.appendChild(tr);
});
table.appendChild(tb);
document.body.appendChild(table);


