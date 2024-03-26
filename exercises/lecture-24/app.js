// 1. Маємо масив кольорів
// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];
// Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item».
// Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль. 
function iter(item) {
  console.log(item);
}
// Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору.
colors.forEach((iter) => console.log(iter));

// 2. Маємо масив кольорів
// Масив кольорів складається з 3 елементів. 
const colors1 = ['blue', 'green', 'white'];
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". 
// Функція повинна видавати повідомлення на консоль за допомогою шаблонних літералів. Повідомлення має містити 
// значення «item» і значення «index» - ${item} has index ${index}. Використовуючи forEach() та функцію iterate, 
// вивести в консоль значення кожного кольору. Перепишіть функцію iterate, використовуючи масив colors1, 
// таким чином, щоб на консоль видавалось повідомлення 'The last iteration!', 
// коли функція виконує останню ітерацію для елементів colors.

function iterate(item, index) {
  console.log(`${item} has index ${index}`);
  if (index === colors1.length - 1) {
    console.log("The last iteration!");
  }
}
colors1.forEach(iterate);

// 3. Маємо масив letters
const letters = ['a', 'b', 'c'];
// Визначити функцію зворотного виклику під назвою "iterate1", яка приймає параметр під назвою "letter". 
// Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об'єкту «window». 
// Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об'єкту «window».
function iterate1(letter) {
  console.log(this === window);
}
letters.forEach(iterate1, window);

// 4. Маємо масив під назвою Numbers.
const Numbers = [22, 3, 4, 10];
// Встановити, чи всі числа масиву парні методом forEach()
let allEven = true;
Numbers.forEach((number) => {
  if (number % 2 !== 0) {
    allEven = false;
  }
});
if (allEven) {
  console.log("Усі числа у масиві є парними!");
} else {
  console.log("Масив містить непарні числа!");
}
// 5. Маємо масив під назвою numbers.
const numbers = [22, 3, 4, 10];
// Встановити, чи всі числа масиву парні методом every()

const allEvens = numbers.every((number) => number % 2 === 0);
if (allEvens) {
  console.log("Усі числа у масиві є парними!");
} else {
  console.log("Масив містить непарні числа!");
}

// 6. Маємо масив під назвою fruits
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
// Використовуючи метод findIndex, знайти індекс першого елемента в масиві, який задовольняє умову fruit === "blueberries".

let index = fruits.findIndex((fruit) => fruit === "blueberries");
if (index !== -1) {
  console.log("Індекс першого елемента 'blueberries':", index);
} 
// 7. Маємо масив під назвою arr
const arr = [7, 33, 47, 99, 2, 103, 79];
// Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє умову елемент > 10.

const found = arr.find(element => element > 10);
if (found !== undefined) {
  console.log("Перший елемент, більший за 10:", found);
} else {
  console.log("Жоден елемент не задовольняє умову.");
}

// 8. Маємо масив під назвою array
const array = [1, 2, 3, 4, 5];
// Використовуючи метод some, перевірте, чи існує принаймні один елемент у масиві array, що є парним.

const even = array.some((element) => element % 2 === 0);
if (even) {
  console.log("У масиві є принаймні одне парне число.");
} else {
  console.log("У масиві немає парних чисел.");
}

// 9. Маємо масив під назвою numbers
const numbers1 = [1, 30, 4, 21, 100000];
// Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.
const sorted = numbers1.sort((a, b) => a - b);
console.log(sorted); 