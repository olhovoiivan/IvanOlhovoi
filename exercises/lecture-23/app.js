const alert = document.querySelector('.alert');
// 1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. 
//Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert 
//та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".
let button = document.querySelector('.btn-primary');
button.onclick = function () {
  let alertElements = document.querySelectorAll('.alert');
  if (alertElements.length > 0) {
    alertElements.forEach((alertElement) => {
    alertElement.classList.add('alert-primary');
    alertElement.textContent = 'A simple primary alert—check it out!';
    });
  } else{
    console.error('Error');
  }
}
// 2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". 
//Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert 
//та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"
let button1 = document.querySelector('.btn-secondary');
button1.addEventListener("click", function () {
  let alertElements = document.querySelectorAll('.alert');
  if (alertElements.length > 0) {
    alertElements.forEach((alertElement) => {
    alertElement.classList.add('alert-primary');
    alertElement.textContent = 'A simple secondary alert—check it out!';
    });
  } else {
    console.error('Error');
  }
})

// 3. Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". 
//Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert 
//та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"
let button2 = document.querySelector('.btn-success');
button2.addEventListener("mouseover", function(){
    let alertElements = document.querySelectorAll('.alert');
    if(alertElements.length > 0){
        alertElements.forEach((alertElements) =>{
        alertElements.classList.add('alert-success');
        alertElements.textContent = 'A simple success alert—check it out!';
        });
    }else {
        console.error('Error');
      }
})

//Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, 
//що видаляє CSS-клас alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
button2.addEventListener("mouseout", function(){
    let alertElements = document.querySelectorAll('.alert');
        alertElements.forEach((alertElements) =>{
        alertElements.classList.remove('alert-success');
        alertElements.textContent = ' ';
        });
    })

// 4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". 
// Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert 
// та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!" 
//Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, 
//що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
let button3 = document.querySelector('.btn-danger');
button3.addEventListener("focus", function(){
    let alertElements = document.querySelectorAll('.alert');
        alertElements.forEach((alertElements) =>{
        alertElements.classList.add('alert-danger');
        alertElements.textContent = 'A simple danger alert—check it out!';
    });
})
button3.addEventListener("focusout", function(){
    let alertElements = document.querySelectorAll('.alert');
        alertElements.forEach((alertElements) =>{
        alertElements.classList.remove('alert-danger');
        alertElements.textContent = ' ';
        });
    })
// 5. Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, 
//що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle().
// Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. 
//Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, 
// якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light
let button4 = document.querySelector('.btn-dark');
let button5 = document.querySelector('.btn-light');
function toggleMode() {
    document.body.classList.toggle("dark-mode");
    let darkMode = document.body.classList.contains("dark-mode");
    if (darkMode) {
      button4.style.display = "none";
      button5.style.display = "block";
    } else {
      button4.style.display = "block";
      button5.style.display = "none";
    }
  } 
  let button4s = document.querySelectorAll(".btn-dark");
  let button5s = document.querySelectorAll(".btn-light");
  button4s.forEach((button) => {
    button.addEventListener("click", toggleMode);
  });
  button5s.forEach((button) => {
    button.addEventListener("click", toggleMode);
  })
// 6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". 
//Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". 
//Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). 
//Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та 
//змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";
let button6 = document.querySelector('.btn-info');
button6.addEventListener("keypress", function(event){
    if(event.key ==="Enter"){
        event.preventDefault();
        let alertElement = document.querySelector('.alert');
        alertElement.classList.add('alert-info');
        alertElement.textContent = 'A simple info alert—check it out!';
        }})

// 7. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, 
//вивести на консоль вміст кожного елемента з класом .card-title
let button7 = document.querySelectorAll('.card');
for (let i = 0; i < button7.length; i++) {
    let cardTitle = button7[i].querySelector(".card-title");
    console.log(cardTitle.textContent);
  }
// 8. Знайти на сторінці всі селектори .card. Використовуючи цикл for, 
//знайти для кожного елемента .card кнопку з класом .add-to-cart, 
//додати для кожної кнопки обробник події click, що викликає функцію, 
//яка виводить на консоль вміст кожного елемента з класом .card-title
for (let i = 0; i < button7.length; i++) {
    let addToCartButton = button7[i].querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", function () {
      let cardTitle = button7[i].querySelector(".card-title");
      console.log(cardTitle.textContent);
    });
  }