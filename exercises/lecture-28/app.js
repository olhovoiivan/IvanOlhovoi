/*Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.

Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.

Виконати базову перевірку:*/

const form = document.querySelector('form');
const errorMessages = document.getElementById('errorMessages');

//Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = form.elements.username.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    //ім’я користувача не може бути пустим,
    if (username === "") {
        displayErrorMessage("Потрібно ввести ім'я користувача.");
    return
    }
    //електронна адреса має бути у правильному форматі,
    if (email === "") {
        displayErrorMessage("Будь ласка, введіть дійсну адресу електронної пошти.");
    } else if (!isValidEmail(email)) {
        displayErrorMessage("Електронна адреса недійсна.");
    return;    
    }
    //пароль має містити принаймні 8 символів,
    //пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
    if (password === "") {
        displayErrorMessage("Необхідно ввести пароль.");
    } else if (password.length < 8) {
        displayErrorMessage("Пароль має містити принаймні 8 символів.");
    } else if (!isValidPassword(password)) {
        displayErrorMessage("Пароль повинен містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.");
    return
    }
    if (error.innerHTML === "") {
        form.submit();
    } // Якщо перевірка пройдена, надішліть форму
    });

    function displayErrorMessage(mes) {
      const p = document.createElement("p");
      p.textContent = mes;
      errorMessages.appendChild(p);
    }
  
    function isValidEmail(email) {
      return email.includes("@");
    }
  
    function isValidPassword(password) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
    