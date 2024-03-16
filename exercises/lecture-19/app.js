//1. Маємо код
let str1 = 'I\'m a string!'; //ми повинні “екранувати” лапку зворотним слешем \', оскільки інакше це означало б кінець рядка.
let str2 = "I'm a string!";
//Чи мають рядки str1 та str2 однакову довжину. - так
//Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
console.log(str1 == str2); // true
console.log(str1 === str2); // true
//2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';
console.log("Повернути перший символ рядка : '" + string5.charAt(0) + "'");
// 3. повернути символ J рядка str3:
let str3 = "Hello Javascript";
console.log("Повернути символ J рядка str3 : '" + str3.charAt(6) + "'");
// 4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
let letter  = "I am Ivan";
console.log( letter[letter.length - 1] ); // n
console.log( letter.at(-1) );  // n
// 5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка
function lastChar1(letter) {
    return letter[letter.length - 1];
}
console.log(lastChar1(letter));
function lastChar2(letter) {
    return letter.charAt(letter.length - 1);
}
console.log(lastChar2(letter));
function lastChar3(letter) {
    return letter.substring(letter.length - 1);
}
console.log(lastChar3(letter));
// 6. Маємо код
let a = 'When candles are out,';
let b = 'all cats are grey.';
//Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey.
let array = a.concat(" ", b);
console.log(array);
// 7. Маємо код
let fact = "Fifteen is the same as"
let a1 = 5;
let b1 = 10;
//Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, 
//щоб результат виглядав так: Fifteen is the same as 15
//fact = fact + " " + (a1 + b1);
fact += " " + (a1 + b1);
console.log(fact);
// 8. Маємо код
let firstName = "Tom";
let lastName = "Cat";
//Напишіть функцію getFullName, що повертає результат: "Tom Cat"
function getFullName (firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName (firstName, lastName));
// 9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting(getFullName){
    return "Hello, " + getFullName(firstName, lastName) + "!"
}
console.log(greeting (getFullName));
// 10. Використовуючи функцію greeting, створити такий шаблон:
//<div><h1>Hello, Tom Cat!</h1></div>
var divName = greeting(getFullName);
function greeTing(divName) {
    return `<div><h1>${divName}</h1></div>`;
}
console.log(greeTing(divName));
  // 11. Маємо наступний код:
  let string1 = "  The name of our game  ";
  // Потрібно отримати такі результати
  // "The name of our game"
  let result1 = string1.trim();
  console.log(result1);
  // "The name of our game  "
  let result2 = string1.trimEnd();
  console.log(result2);
  // "  The name of our game"
  let result3 = string1.trimStart();
  console.log(result3);

  const phoneNumber = '\t  555-123\n ';
  // Потрібно отримати такі результати
  console.log(phoneNumber.trim()); // => '555-123'
  console.log(phoneNumber.trimStart());// => '555-123 \n'
 
  // 12. Маємо наступний код:
let sentence = 'Always look on the bright side of life';
//  Перевірити, чи містить рядок значення 'look up'
if (sentence.includes("look up")) {
    console.log("Рядок містить 'look up'");
  } else {
    console.log("Рядок не містить 'look up'");
  }
 //  Перевірити, чи містить рядок значення 'look on' 
  if (sentence.includes("look on")) {
    console.log("Рядок містить 'look up'");
  } else {
    console.log("Рядок не містить 'look up'");
  }
  //  Перевірити, чи містить рядок значення 'look on'  починаючи з 8-ї позиції
  let eigchString = "look on";
  let eigchIndex = 7;
  
  let index = sentence.indexOf(eigchString, eigchIndex);
  if (index >= 7) {
    console.log('Рядок містить "look on" починаючи з 8-ї позиції.');
  } else {
    console.log('Рядок не містить "look on" починаючи з 8-ї позиції.');
  }
 
// 13. Маємо наступний код
let sentence1 = 'Always look on the bright side of life';
//  Знайти індекс символу 'l'
let indexl = sentence1.indexOf('l');
console.log("Знайдено індекс символу 'l' в рядку:", indexl);
//  Знайти індекс символу 'l', починаючи з 3-ї позиції
let indexl3 = sentence1.indexOf('l', 3);
console.log("Знайдено індекс символу 'l' починаючи з 3-ї позиції:", indexl3);
//  Знайти індекс символу 'L'
let indexL = sentence1.indexOf('L');
console.log("Знайдено індекс символу 'L':", indexL);
// 14. Маємо наступний код:
let sentence2 = 'Always look on the bright side of life';
//Отримати підрядок 'look on the bright side of life'
let substring = sentence2.substring(7);
console.log(substring);
//Отримати підрядок 'Always'
let substring1 = sentence2.substring(0, 6);
console.log(substring1);
//Отримати підрядок 'look'
let substring2 = sentence2.slice(7, 11);
console.log(substring2); 
//  15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, 
//літери у нижньому регістрі та символи - і _.
//Довжину імені користувача встановити від 8 до 16 знаків.
const userName = /^[a-zA-Z0-9._-]{8,16}$/;
const user = "Olhovoi_Ivan";
if (userName.test(user)) {
  console.log("Ім'я користувача вказано вірно");
} else {
  console.log("Ім'я користувача вказано не вірно");
}
// 16.  Створити регулярний вираз, який призначений для перевірки email на коректність.
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "olhovoiivan@outlook.com";
  if (emailPattern.test(email)) {
  console.log("Електронна пошта вказана вірно");
} else {
  console.log("Електронна пошта вказана не вірно");
}
//  17. Маємо наступний код:
let sentence3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
//Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
function truncateText(sentence3) {
    if (sentence3.length > 50) {
      return sentence3.substring(0, 50) + "...";
    } else {
      return sentence3;
    }
  }
//Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
function truncateText(sentence3) {
    if (sentence3.length > 50) {
      return sentence3.substr(0, 50) + "...";
    } else {
      return sentence3;
    }
  }