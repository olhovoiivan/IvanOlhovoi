// 1. Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js

const url = "https://my-json-server.typicode.com/olhovoiivan/DZ-31-JSON/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

/*const xhrPromise = (method, url) => {
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
    xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
    .then(response => {
      let userName = JSON.parse(response)
      console.log(userName.name)
      user.textContent = userName.name
    })
  })

});*/
const fetchPromise = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
};
fetchPromise(url).then((posts) => {
  let result = "";
  posts.forEach((item) => {
    result += template(item);
  });
  document.getElementById('blog').innerHTML = result;
  const users = document.querySelectorAll('.author');
  users.forEach((user) => {
    fetchPromise(`https://my-json-server.typicode.com/olhovoiivan/DZ-31-JSON/userss/${user.dataset.id}`).then((userData) => {
      user.textContent = userData.name;
    });
  });
});