//Маємо рядок fruits:
let fruits = 'apple banana cantaloupe blueberries grapefruit';
// 1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
fruits = fruits.split(" ");
console.log( fruits );
// 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for (let i = 0; i < fruits.length; i++) {
    console.log( fruits[i] );
}
// 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let i = 0;
while (i < fruits.length) { 
    console.log( fruits[i] );
  i++;
}
// 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
let a = 0;
do{
    console.log( fruits[a] );
    a ++;
}
while(a < fruits.length);
// 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
for (let fruit of fruits) {
    console.log( fruit );
}
// 6. Маємо масив Numbs.
const Numbs = [1,2,3,4,5,6,7,8,9,10];
//  Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
for (let i = 0; i <= Numbs.length; i++) {
    if (Numbs[i] % 2 == 0) {
        console.log( Numbs[i] );
    }
  }
// 7.  Маємо масив names:
const names = ['Batman'];
// Додати 'Joker' в кінець масиву names:
names.push('Joker');
console.log( names );
// 8. Маємо масив names:
const names1 = ['Batman'];
// Додати 'Joker' на початок масиву names
names1.unshift('Joker');
console.log( names1 );
// 9. Маємо масив names:
names2 = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names2.unshift('Catwoman');
console.log( names2 );
// 10. Маємо масив names:
names3 = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
 names3 =  ['Catwoman', ...names];
console.log( names3 );
// 11. Маємо масив names
names4 = ['Batman', 'Joker', 'Bane'];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
names4.splice(1, 0, 'Catwoman');
console.log( names4 );
// 12. Маємо масив names
const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
names5.splice(1, 2);
console.log( names5 );
// 13. Маємо масив names:
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
names6.splice(1, 2, 'Alfred', 'Alfred');
console.log( names6 );
// 14. Маємо масив names:
let names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
if (names7.includes('Alfred')){
    names7 === true;
} else {names7.push('Alfred');
}
console.log( names7 );
//  15. Маємо масив names:
const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred'];
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
index = names8.indexOf('Alfred');
if (index !== -1){
    names8.splice(index, 1);
}
console.log( names8 );