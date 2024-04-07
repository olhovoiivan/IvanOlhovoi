//Створити клас AuthException, розширивши клас Error. В методі constructor(code, message) визначити властивість this.message, 
//що дорівнює code: message або code, якщо message не передано як аргумент.

class AuthException extends Error {
  constructor(code, message) {
    super(message); 
    this.code = code;
    this.message = message || code;
  }
  
  toString() {
    return this.message;
  }
}
//Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.
let checkAuth = document.querySelector('.check-auth');
  //if (checkAuth) {
    //checkAuth.addEventListener('click');
  //}

//За допомогою addEventListener, виконайте обробку події click на змінній checkAuth. 
//Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.
//У блоці try { } потрібно перевіряти результат, що повертає функція isAuth(). 
//Якщо результат повернення дорівнює false, за допомогою оператора throw викинути 
//виняток AuthException('FORBIDDEN', 'You don't have access to this page').
let isAuth = (auth) => auth ?? false; 
checkAuth.addEventListener('click', function(){
try {
  if (!isAuth()) {
    throw new AuthException(
      "FORBIDDEN",
      "You don't have access to this page"
    );
    //Якщо результат повернення функції isAuth() дорівнює true, за допомогою метода window.open відкрити сторінку success.html.
  } else {
    window.open("success.html", "_blank");
  }
  //У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку у діалог dialogBoxId, 
//відобразивши його у параграфі з класом ="message".
} catch (e) {
  console.error("Сталася помилка:", e);
  const dialogBox = document.getElementById("dialogBox");
  const messageParagraph = dialogBox.querySelector(".message");
  messageParagraph.textContent = e.toString();
  showDialog(); 
}
});


function showDialog() {
  dialogBox.showModal();
}

function closeDialog() {
  dialogBox.close();
}






