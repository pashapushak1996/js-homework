// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// const taskOne = document.getElementById(`text`);
// const btn = document.getElementById(`btn`);
// btn.onclick = () => {
//     taskOne.classList.toggle('hidden');
// };

//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const btnHidden = document.getElementById(`btn-hidden`);
// btnHidden.onclick = () => {
//     btnHidden.classList.toggle(`hidden`);
// };

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let myForm = document.forms.myForm;
// myForm.onsubmit = (ev) => {
//     let age = myForm.age.value;
//     ev.preventDefault();
//     if (+age < 18) {
//         console.log(`You are young`);
//         return;
//     }
//     console.log(`Welcome`);
//
// };

// - Створіть меню, яке розгортається/згортається при клику
// let menuButton = document.getElementById(`menu-btn`);
// let menuList = document.getElementById(`menu-list`);
// menuButton.onclick = () => {
//     menuList.classList.toggle(`hidden`);
// };

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// const comments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}];
//
//
// for (const comment of comments) {
//     const mainDiv = document.createElement(`div`);
//     const title = document.createElement(`h2`);
//     const body = document.createElement(`p`);
//     const btn = document.createElement(`button`);
//     title.innerText = comment.title;
//     body.innerText = comment.body;
//     btn.innerText = `hide`;
//     btn.onclick = () => {
//         body.classList.toggle(`hidden`);
//     };
//     mainDiv.appendChild(title);
//     mainDiv.appendChild(body);
//     mainDiv.appendChild(btn);
//     document.body.appendChild(mainDiv);
// }

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const formOne = document.forms.formOne;
// const formTwo = document.forms.formTwo;
// const readButton = document.getElementById(`read`);
// readButton.onclick = () => {
//     console.log(formOne.firstName.value);
//     console.log(formTwo.age.value);
// };

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// const tableCreator = (row, column, element) => {
//     let table = document.createElement(`table`);
//     for (let i = 0; i < row; i++) {
//         const rowElement = document.createElement(`tr`);
//         for (let j = 0; j < column; j++) {
//             let cellElement = document.createElement(`td`);
//             cellElement.style.border = `2px solid green`;
//             cellElement.innerText = `${ j + 1 }`;
//             rowElement.appendChild(cellElement);
//         }
//         table.appendChild(rowElement);
//
//     }
//     element.appendChild(table);
// };
// tableCreator(10, 10, document.body);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
// const sources = [
//     'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvIHtrBcj0oM78YkR4ZzK9nR7q0UjiQss5g&usqp=CAU',
//     'https://media.steelseriescdn.com/thumbs/blog/posts/official-steelseries-wallpapers/a744cb435c7e423e92cebbee466dcb4e.jpg.1920x1080_q100_crop-scale_optimize_upscale.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51NqbdDrbOL.png'];
// let i = 0;
// let img = document.getElementById(`img`);
//
// let leftButton = document.getElementById(`left`);
// let rightButton = document.getElementById(`right`);
//
// img.src = sources[i];
//
// leftButton.onclick = () => {
//     if (i <= 0) {
//         return;
//     }
//     if (i < sources.length && i >= 0) {
//         --i;
//     }
//     img.src = sources[i];
//     console.log(i);
// };
//
//
// rightButton.onclick = () => {
//     if (i === sources.length - 1) {
//         img.src = sources[sources.length - 1];
//         return;
//     }
//     if (i < sources.length) {
//         i++;
//     }
//     img.src = sources[i];
//     console.log(i);
// };

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const array = ['Idiot', 'Tormoz', `Debil`, `NeHuman`];
//
// const input = document.getElementById(`input`);
// const button = document.querySelector(`#button`);
//
// button.onclick = () => {
//     array.forEach((el) => {
//         if (el === input.value) {
//             alert("Nu zachem");
//         }
//     })
// };


// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// const array = ['Idiot', 'Tormoz', `Debil`, `NeHuman`];
// const input = document.getElementById(`input`);
// const button = document.querySelector(`#button`);
//
// button.onclick = () => {
//     array.forEach((el) => {
//         input.value.split(' ').forEach((word) => {
//             if (el === word) {
//                 alert(`Nu navisho`);
//             }
//         })
//     })
// };


// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
// const main = document.getElementById('main');
// const createUserDiv = (user) => {
//     const isMarried = user.isMarried ? `Yes` : `No`;
//     const name = document.createElement(`h1`);
//     const age = document.createElement(`h2`);
//     const isMarriedElement = document.createElement(`p`);
//     const address = document.createElement('div');
//     const hr = document.createElement(`hr`);
//     name.innerText = `Name: ${ user.name }`;
//     age.innerText = `Age: ${ user.age }`;
//     isMarriedElement.innerText = `Married: ${ isMarried }`;
//     for (const addressKey in user.address) {
//         const city = document.createElement(`h2`);
//         city.innerText = `${ addressKey }:${ user.address[addressKey] }`;
//         address.appendChild(city);
//     }
//     main.id = 'main';
//
//     main.appendChild(name);
//     main.appendChild(age);
//     main.appendChild(name);
//     main.appendChild(isMarriedElement);
//     main.appendChild(address);
//     main.appendChild(hr);
// };
//
// let elementsByTagName = document.getElementsByTagName('input');
//
// const status = elementsByTagName[0];
// const age = elementsByTagName[1];
// const city = elementsByTagName[2];
// console.log(status);
//
// status.onchange = () => {
//     if (status.checked) {
//         const filter = usersWithAddress.filter(user => user.isMarried === false);
//         filter.forEach(user => createUserDiv(user));
//         main.style.display = 'block';
//     } else {
//         console.log('checked');
//         main.style.display = 'none';
//     }
//
// }
// age.onchange = () => {
//     if (age.checked) {
//         const filter = usersWithAddress.filter(user => user.age >= 29);
//         filter.forEach(user => createUserDiv(user));
//         main.style.display = 'block';
//     } else {
//         main.style.display = 'none';
//     }
//
// };
// city.onchange = () => {
//     if (city.checked) {
//         const filter = usersWithAddress.filter(user => user.address.city === `Kyiv`);
//         filter.forEach(user => createUserDiv(user));
//         main.style.display = 'block';
//     } else {
//         main.style.display = 'none';
//     }
// };

