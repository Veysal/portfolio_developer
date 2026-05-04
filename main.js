// const projects = [
//   {
//     id: 1,
//     title: 'E-Commerce Platform',
//     description: 'Полнофункциональная платформа для интернет-магазина с корзиной, системой оплаты и админ-панелью.',
//     image: './img/e-commerce.jpg',
//     tags: ['Python', 'Flask', 'SQLAlchemy', 'JWT'],
//     link: 'https://github.com'
//   },
//   {
//     id: 2,
//     title: 'Task Management API',
//     description: 'RESTful API для управления задачами с полной документацией Swagger. Быстрый и масштабируемый backend на FastAPI.',
//     image: './img/task.jpg',
//     tags: ['Python', 'FastAPI', 'Docker', 'Postman'],
//     link: 'https://github.com'
//   },
//   {
//     id: 3,
//     title: 'Blog Platform',
//     description: 'Современная блог-платформа с системой комментариев, категорий и поиска. Построена на Django.',
//     image: './img/blog.jpg',
//     tags: ['Python', 'Django', 'SQLAlchemy', 'Docker'],
//     link: 'https://github.com'
//   },
//   {
//     id: 4,
//     title: 'Portfolio Dashboard',
//     description: 'Интерактивная панель управления для отслеживания портфолио проектов. Акцент на производительность.',
//     image: './img/dashboard.jpg',
//     tags: ['HTML', 'CSS', 'JavaScript', 'Flask'],
//     link: 'https://github.com'
//   },
//   {
//     id: 5,
//     title: 'Real-time Chat',
//     description: 'Чат-приложение с поддержкой real-time сообщений и групповых чатов. Безопасная авторизация через JWT.',
//     image: './img/project-chat.jpg',
//     tags: ['Python', 'FastAPI', 'JWT', 'Docker', 'WebSockets'],
//     link: 'https://github.com'
//   }
// ];



// let num = 35
// console.log(num);
// const num2 = 45
// num2 += 10
// console.log(typeof num);

// Hoisting - всплытие
// console.log(x);
// var x = 7
// console.log(x);


// var y = 8
// var y = 12
// var y
// console.log(y);


// var a = 5
// if (true){
//   var a = 9
// }
// console.log(a);

// let a = 5
// if (true){
//   let a = 9
// }
// console.log(a);

// i++ - инкремент
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }


// let name = alert('Hello')
// let lastname = parseFloat(prompt("Введи ФИО"))
// console.log(typeof lastname);


// const z = 10
// const v = "10"
// console.log(z === v);

// const age = parseInt("22")
// if ( age >= 18){
//   console.log("Можно продавать");
// }else {
//   console.log("Нельзя продавать")
// }
// let total = 250
// if ( total >= 140 && total <= 160){
//   console.log("Слабый результат");
// }else if(total > 160  && total <= 190){
//   console.log("Средний результат");
// }else if(total > 190 && total <= 220){
//   console.log("Хороший результат");
// }else if(total > 220){
//   console.log("Отличный результат");
// }
// else {
//   console.log("Добро пожаловать в армию")
// }


// let age = 12

// const status = age>=18 ? "Соверш" : "Не соверш"
// console.log(status);


// Циклы

// for(let i=0; i <= 15; i++){
//     if(i === 10){
//         break
//     }
//     console.log(i);
// }

// let i = 5
// while (i > 0){
//     console.log(i);
//     i--
// }


// for in, for of, forEach

// const array = ['яблоко', 'банан', 'киви', 'черешня']
// array.push('виноград')
// array.unshift('виноград') //Добавляет элемент в начало массива
// array.shift('виноград') //Удаляет элемент из начало массива
// array.splice(1, 2, 'виноград', 'арбуз')

// console.log(array.pop());

// console.log(array[-1]);
// console.log(array[array.length-1]);
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// for(let element of array){
//     console.log(element);
// }


// Методы массивов
// forEach() - 3 параметра - значение, индекс и сам массив
// map() - 3 параметра - значение, индекс и сам массив
// filter() - 3 параметра - значение, индекс и сам массив
// reduce - 4 параметра - накопитель, значение, индекс и сам массив
// const array = ['яблоко', 'банан', 'киви', 'черешня', 'виноград', 'арбуз']

// array.forEach(function(value){
//     console.log(`Сам элемент - ${value.toLocaleUpperCase()}`);
// })

// console.log(array);

// const newArray = array.map(function(value){
//     return value.toUpperCase()
// })
// console.log(newArray);

// const users = [
//     {id: 1, name: 'Алексей'},
//     {id: 2, name: 'Мария'},
// ]

// const names = users.map(function(user){
//     return user.name
// })
// console.log(names);

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = numbers.filter(function(num){
//     return num > 5
// })
// console.log(newNumbers);

// const users = [
//     {id: 1, name: 'Алексей', age: 25, active: true},
//     {id: 2, name: 'Мария', age: 30, active: false},
//     {id: 3, name: 'Иван', age: 35, active: true},
//     {id: 4, name: 'Анна', age: 28, active: false},
//     {id: 5, name: 'Петр', age: 32, active: true},
//     {id: 6, name: 'Ольга', age: 27, active: false},
//     {id: 7, name: 'Дмитрий', age: 33, active: true},
//     {id: 8, name: 'Екатерина', age: 29, active:false}
// ]
// const newUsers = users.filter(function(user){
//     return user.age >= 30 && user.active
// })
// console.log(newUsers);


// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const sum = numbers.reduce(function(acc, num){
//     return acc + num
// })

// console.log(sum);


// const array = ['яблоко', 'банан', 'киви', 'черешня', 'виноград', 
//     'арбуз', 'яблоко', 'киви']

// const entry = array.reduce(function(acc, word){
//     acc[word] = (acc[word] || 0) + 1
//     return acc
// }, {})

// console.log(entry);

// console.log(sum(15, 25));


// const users = [
//     {id: 1, name: 'Алексей', age: 25, active: true},
//     {id: 2, name: 'Мария', age: 30, active: false},
//     {id: 3, name: 'Иван', age: 35, active: true},
//     {id: 4, name: 'Анна', age: 28, active: false},
//     {id: 5, name: 'Петр', age: 32, active: true},
//     {id: 6, name: 'Ольга', age: 25, active: false},
//     {id: 7, name: 'Дмитрий', age: 33, active: true},
//     {id: 8, name: 'Екатерина', age: 29, active:false}
// ]

// const groupByage = users.reduce(function(acc, person){
//     acc[person.age] = acc[person.age] || []
//     acc[person.age].push(person.name)
//     return acc
// }, {})
// console.log(groupByage);


// function declaration
// function sum(a, b){
//     return a + b
// }


// function expression
// const sum = function(a, b){
//     return a + b
// }

// console.log(sum(10,50))



// Стрелочные функции
// const sum = (a, b) =>{
//     return a + b
// }
// const sum = (a, b) => a + b
// const sum = a => a * a

// console.log(sum(25));

// console.log(this)


// const user = {
//     name: "Alex",
//     regularFunc: function(){
//         // console.log(this.name)
//         setTimeout(function(){
//             console.log(this.name); //undefined
//         }, 1000)
//     },

//     arrowFunc: function(){
//         // console.log(this.name)
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000)
//     }
// }

// user.regularFunc()
// user.arrowFunc()


// (() => {
//     console.log("Современный IIFE"); 
// })()


// const person = {
//     name: 'Alex',
//     age: 25,

//     arrow: function(){
//         console.log(this.name);
//     },
// }

// console.log(person.arrow());


// function fib(n){
//     if (n <= 1) return 1
//     return n * fib(n - 1)
// }

// console.log(fib(5));


// const user = {
//     name: 'Alex',
//     age: 25,
//     isStudent: true,
//     greet: function(){
//         console.log(`Привет, меня зовут ${this.name}`);
//     }
// }

// user['hobby'] = 'Футбол'
// delete user.isStudent

// // console.log(user);


// const person = {
//     name: 'Jonh',
//     age: 25,
//     city: "Moscow"
// }

// for (let i in person){
//     console.log(person[i]);
// }


// Деструктуризация

// const user = {
//     name: 'Alex',
//     address:{
//         city: 'Moscow',
//         zip: 404040
//     }
// }

// const {name, address:{zip}} = user 
// console.log(name, zip);


// const stack = ["HTML", "CSS", "JS", "React"]

// const [,css, js] = stack

// console.log(css, js);

// function getCoordinates(){
//     return [38.6574, 17.6467]
// }

// const [lat, long] = getCoordinates()
// console.log(lat, long);


// const apiResponse = {
//   status: 'success',
//   meta: { requestId: 'req_98765' },
//   data: {
//     user: {
//       id: 1042,
//       profile: {
//         firstName: 'Анна',
//         lastName: 'Смирнова',
//         contacts: {
//           email: 'anna@example.com',
//           phone: null,
//           socials: ['telegram', 'vk']
//         }
//       },
//       settings: {
//         theme: 'dark',
//         notifications: {
//           email: true,
//           push: false
//         }
//       }
//     }
//   }
// };

// const {data:{user:{profile:{firstName='гость', lastName}, settings:{theme='dark'}}}} = apiResponse
// console.log(firstName, lastName, theme);



// REST и Spread ...
// const defaultTags = ['HTML', 'CSS', 'JS']
// const customTags = [...defaultTags,'React', 'Vue']
// console.log(customTags);

// function mult(x,y,z){
//     return x * y * z
// }

// const nums = [1,2,3]
// console.log(mult(...nums));

// const str = "Hello"
// console.log([...str]);


// function logInfo(user, ...tags){
//     console.log(user);
//     console.log(tags);
// }
// logInfo("Андрей", 28, 'разработчик', 'frontend')

// DOM
// const btn = document.getElementById("btn")
// const btn = document.querySelector("#btn")
// console.log(btn);
