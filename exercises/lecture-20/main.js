//1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. 
//Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль
let person = {
    name : "Ivan",
    age :  42,
}
console.log("Name:", person.name);
console.log("Age:", person.age);
// 2. Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. 
// Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
let person1 = {
name : {
    firstName: "Ivan",
    lastName: "Olhovoi",
    },
    age :  42,
}
console.log("Name:", person1.name.firstName, person1.name.lastName);
console.log("Age:", person1.age);
// 3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
let person2 = {
    name : {
        firstName: "Ivan",
        lastName: "Olhovoi",
        },
        age :  42,
        bio: function () {
            console.log("Name:", this.name.firstName, this.name.lastName);
            console.log("Age:", this.age);
        },
    }
    person2.bio();
   // 4.  Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
   let person3 = {
    name : {
        firstName: "Ivan",
        lastName: "Olhovoi",
        },
        age :  42,
        introduceSelf: function () {
            console.log("Hi! I'm" , this.name.firstName);
        },
    }
    person3.introduceSelf();
    // 5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає 
    // новий об'єкт з властивістю name та методом introduceSelf. 
    // Створити за допомогою createPerson 2 екземпляри об'єкта.
    function createPerson(name) {
     return {
     name: name,
     introduceSelf: function () {
     console.log("Hi! I'm", this.name);
     },
    };
    }
    let copy1 = createPerson("Vasil");
    let copy2 = createPerson("Petro");
    copy1.introduceSelf();
    copy2.introduceSelf();
    // 6. Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт 
    //  з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
    function person5(name) {
    this.name = name;
    this.introduceSelf = function () {
    console.log("Hi! I'm", this.name);
      };
    }
    let mary = new person5("Mary");
    mary.introduceSelf();
    let tom = new person5("Tom");
    tom.introduceSelf();
    //  визначити, чи містить об'єкт mary властивість під назвою prop.
    let hasprop = "prop" in mary;
    console.log(hasprop);   // false

    // 7. Брудний мартіні – ідеальний коктейль для любителів оливкового. 
    //Його можна приготувати на горілці чи джині за таким рецептом.
    //ingredients:
    // 6 fluid ounces gin
    //  1 dash dry vermouth
    //  1 fluid ounce brine from olive jar
    // 4 stuffed green olives
    //fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів). 
    //Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.

    // 7.1   Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() 
    //При виклику методу excuse_my_french(), на консоль виводиться:
    //ingrédients:  
    //170.4786 ml de gin
    //1 trait de vermouth sec (0.0351951ml) 
    //28.4131 ml de saumure du pot d'olive
    //4 olives vertes farcies
  
      DirtyMartini = {
        gin: "6 fluid ounces gin",
        vermouth: "1 dash dry vermouth",
        brine: "1 fluid ounce brine from olive jar",
        olives: "4 stuffed green olives",
      }
      
      this.excuse_my_french = function () {
        console.log("ingrédients:");
        for (let key in this.DirtyMartini) {
        if (key === "gin") {
        console.log("170.4786 ml de " + key);
        } 
        else if (key === "vermouth") {
        console.log("1 trait de vermouth sec (0.0351951ml)");
        } 
        else if (key === "brine") {
        console.log("28.4131 ml de saumure du pot d'olive");
        } 
        else {
        console.log("4 olives vertes farcies");
        }
      }
    }
     // 7.2  При виклику методу english_please(), на консоль виводиться:
    //ingredients:
    //6 fluid ounces gin
    //1 dash dry vermouth (0.0351951ml) 
    //1 fluid ounce brine from olive jar
    //4 stuffed green olives

    this.english_please = function () {
      console.log("ingredients:");
      for (let key in this.DirtyMartini) {
      if (key === "vermouth") {
      console.log(this.DirtyMartini[key] + " (0.0351951ml)");
      } 
      else {
      console.log(this.DirtyMartini[key]);
      }
      }
    }
    excuse_my_french();
    english_please();
    
     

   