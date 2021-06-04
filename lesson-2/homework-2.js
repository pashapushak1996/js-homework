// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// const numbers = [1, 4, 6, 2, 8, 5];
// const strings = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// const different = [true, 2, false, 'error', 'Yura'];
// console.log(numbers);
// console.log(strings);
// console.log(different);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const array = [];
// array[0] = true;
// array[2] = 'Yurii';
// array[1022] = 'Ihor';
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині.
// for (let i = 21; i < 32; i++) {
//     document.write(`<div>Hello i am ${ i }</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//let i = 0;
// while (i < 21) {
//     document.write(`<div> Hello ${ i }</div>`);
//     i++;
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i++) {
//     if (!(i % 2)) {
//         console.log(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(i);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hour = 0;
// let minute = 0;
// let second = 0;
// for (let i = 0; i < 23; i++) {
//     hour++;
//     for (let j = 0; j < 59; j++) {
//         minute++;
//         for (let k = 0; k < 59; k++) {
//             second++;
//             console.log(`${ hour }:${ minute }:${ second }`);
//         }
//         if (hour === 2 && minute <= 20) {
//             break;
//         }
//         second = 0;
//     }
//     if (hour === 2) {
//         break;
//     }
//     minute = 0;
// }

// let sec = 0;
// let hvylyna = 0;
// const COUNT = 59;
// let hour = 0;
// for (let u = 0; u <= 23 && hour !== 2 && hvylyna !== 20; u++){
//     hour=u;
//
//     for (let u = 0; u <= COUNT; u++){
//         hvylyna=u;
//         console.log(`${hour} : ${hvylyna}: ${sec}`);
//         if (hour === 2 && hvylyna === 20){
//             console.log(`test end`);
//             console.log(`${hour} : ${hvylyna} : ${sec}`);
//             break;
//         }
//         for (let u = 0; u <= COUNT; u++){
//             sec=u;
//             console.log(`${hour} : ${hvylyna} : ${sec}`);
//         }
//         sec=0;
//     }
//     hvylyna=0;
// }
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let [i, v] of numbers.entries()) {
//     if (!(v % 3)) {
//         numbers[i] = 'okten';
//     }
// }
// // console.log(numbers);

// 8. вивести масив в зворотньому порядку.
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
let emptyArray = [100, 250, 50, 168, 120, 345, 188];
//     - заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//     if (!(i % 2)) {
//     emptyArray.push(i)
//     }
// }
// - заповнити його 50 непарними числами за допомоги цикл.

// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         emptyArray.push(i)
//     }
// }
// console.log(emptyArray);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//
// for (let i = 0; i < 20; i++) {
//     const element = Math.floor(Math.random() * 1000);
//     emptyArray.push(element)
// }
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     const element = Math.floor(Math.random() * (732 - 8) + 8);
//     emptyArray.push(element)
// }
// console.log(emptyArray);
// console.log(emptyArray);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < emptyArray.length; i += 3) {
//     if (!(emptyArray[i] % 2)) {
//         console.log(emptyArray[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let i = 0; i < emptyArray.length; i++) {
//     if (emptyArray[i + 1] % 2 === 0) {
//         console.log(emptyArray[i])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let check = 0;
// for (let i = 0; i < emptyArray.length; i++) {
//     const emptyArrayElement = emptyArray[i];
//     check += emptyArrayElement;
// }
// console.log(check / emptyArray.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// const clearArray = [3, 4, 3, 5, 4, 5, 2, 4, 5, 64, 23, 12];
// const newClearArr = [];
// for (let i = 0; i < clearArray.length; i++) {
//     newClearArr.push(clearArray[i] * 5);
// }
// console.log(newClearArr);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// console.log(citiesWithId);
// console.log(usersWithId);
// const usersWithCity = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     const user = usersWithId[i];
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const city = citiesWithId[j];
//         if (city.user_id === user.id) {
//             usersWithCity.push({...user, adress: {...city}})
//         }
//     }
// }

// for (const userWithCity of usersWithCity) {
//     for (const userWithCityKey in userWithCity) {
//         if (typeof userWithCity[userWithCityKey] === 'object') {
//             delete userWithCity[userWithCityKey].user_id;
//             for (const city in userWithCity[userWithCityKey]) {
//                 city === 'city' ?
//                     document.write(`<div style="margin-bottom: 20px"> <h1>${ city }: ${ userWithCity[userWithCityKey][city] }</h1><hr> </div>`) :
//                     document.write(`<div> <h1>${ city }: ${ userWithCity[userWithCityKey][city] }</h1> </div>`)
//             }
//         } else {
//             document.write(`<h1>${ userWithCityKey }: ${ userWithCity[userWithCityKey] }</h1>`)
//         }
//     }
// }
//

// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hour = 0;
// let min = 0;
// let sec = 0;
//
// for (let h = 0; h < 23; h++) {
//     hour++;
//     for (let m = 0; m < 59; m++) {
//         if (min === 20) {
//             break;
//         }
//         min++;
//         for (let s = 0; s < 59; s++) {
//             console.log(`${ hour }:${ min }:${ sec }`)
//             if (min === 20) {
//                 break;
//             }
//             sec++;
//         }
//         sec = 0;
//     }
//     if (hour === 2) {
//         break;
//     }
//     min = 0;
// }

// const user = {
//     name: 'Yurii', age: 25, job: {
//         title: 'Trainee',
//         payment: 99999
//     },
//     wife: true
// };
// const key = prompt('type key');
// if (user[key] === undefined) {
//     let value = prompt('type value');
//     user[key] = value;
// }
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let wrd = '';
const letters = ['a', 'b', 'c'];
for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    wrd += letter;
};

