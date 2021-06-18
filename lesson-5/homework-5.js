// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// const mainHeader = document.getElementById('main_header');
// mainHeader.style.color = "#042021";

// b) робить шириниу елементу ul 400px
// const ul = document.querySelector('ul');
// ul.style.width = '400px';
// ul.style.display = 'flex';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const linkList = document.getElementsByClassName('linkList');
// for (let linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.querySelector('.listElement2');
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for (const liElement of li) {
//     liElement.style.backgroundColor = 'grey';
//     liElement.classList.add('anchor');
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.querySelectorAll('a');
// for (const aElement of a) {
//     aElement.classList.add('anchor');
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     if (aElement.innerText === 'link3') {
//         aElement.style.fontSize = '40px';
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const aElement of a) {
//     aElement.classList.add(`element_${ aElement.innerText }`);
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()]
// const background = prompt('Type background');
// const subHeader = document.querySelectorAll(`.sub-header`);
// subHeader.forEach((el) => {
//     el.style.backgroundColor = background;
// })
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// subHeader.forEach((el) => {
//     if (el.innerText === 'content 2 segment') {
//         el.style.backgroundColor = background;
//     }
// })

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const text = prompt('type text');
// const content_1 = document.querySelector('.content_1');
// content_1.innerText = text;

// l) отримати елементи p та змінити їм padding на 20px
// const p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// const text2 = document.getElementsByClassName(`text2`);
// for (const text2Element of text2) {
//     text2Element.style.color = "yellow";
// }


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".

let myForm = document.forms.myForm;
const id = myForm.id;
const itemName = myForm.itemName;
const qty = myForm.qty;
const price = myForm.price;
const photo = myForm.photo;
let articlesArray = [];
const articleLocalStorage = JSON.parse(localStorage.getItem('article-array'));
console.log(articleLocalStorage);
myForm.sendButton.onclick = (ev) => {
    ev.preventDefault();
    if (articlesArray.length === 0) {
        articlesArray = articleLocalStorage;
        if (!articleLocalStorage) {
            articlesArray = [];
        }
    }

    const article = {
        'id': id.value,
        'articleName': itemName.value,
        'qty': qty.value,
        'price': price.value,
        'photo': photo.value,
    }
    if (!itemName.value) {
        return;
    }
    articlesArray.push(article);
    let jsonArticles = JSON.stringify(articlesArray);
    localStorage.setItem('article-array', jsonArticles);
};


// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//
// 3. Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)


// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//
//
//     ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
