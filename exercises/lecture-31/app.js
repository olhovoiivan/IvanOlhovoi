
/*1. Створити власне сховище db.json, користуючись інструкцією How to на сервері https://my-json-server.typicode.com/
2. Маємо код, що будує стрічку публікацій та поміщає отриманий результат всередину елемента з id="blog".*/

const url = "https://my-json-server.typicode.com/olhovoiivan/DZ-31-JSON/posts";
const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>`;
const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
     xhr.onerror = () => {
      reject('Something went wrong!');
    };   
  });
  return promise;
};

/*3. Продовжити ланцюжок промісив, використовуючи метод then, де потрібно звернутись до сервера 
https://jsonplaceholder.typicode.com/users і для кожного userId отримати ім'я user, 
після чого помістити це ім'я всередину елемента з класом "author".*/

console.log(xhrPromise("GET", url));

xhrPromise("GET", url)
.then(response => {
    const posts = JSON.parse(response)
		let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
    
})

.then( () => {
  const users  = document.querySelectorAll('.author');
  users.forEach(user => {
    xhrPromise("GET", `https://my-json-server.typicode.com/olhovoiivan/DZ-31-JSON/users/${user.dataset.id}`)
    .then(response => {
      let userName = JSON.parse(response)
      console.log(userName.name)
      user.textContent = userName.name
    })
  })

});


