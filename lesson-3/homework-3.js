// 1) створити функцію яка приймає масив та виводить його
// const array = [1, 4, true, 'ivan', 'js', 5];
// function out(array) {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement);
//     }
// }
// out(array);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// const cleanArr = [];
// function randomNum(array, qty) {
//     for (let i = 0; i < qty; i++) {
//         const arrayElement = Math.floor(Math.random() * 1000);
//         array.push(arrayElement)
//     }
//     out(array);
// }
// randomNum(cleanArr, 100);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function max(a, b, c) {
//     if (a >= b && a >= c) {
//         console.log(a);
//         return;
//     }
//     if (b >= a && b >= c) {
//         console.log(b);
//         return;
//     }
//     console.log(c);
// }
//
// max(1500, 1000, 990)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function min(a, b, c) {
//     if (a <= b && a <= c) {
//         console.log(a);
//         return;
//     }
//     if (b <= a && b <= c) {
//         console.log(b);
//         return;
//     }
//     console.log(c);
// }
// min(1500, 2001, 10000)

// 5) створити функцію яка повертає найбільше число з масиву
// function arrayMax(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
// let max = arrayMax([2, 3, 4, 5, 6, 8, 0, 102, 23, 14431, 2312]);


// 6) створити функцію яка повертає найменьше число з масиву
// function arrayMin(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
// let min = arrayMin([2, 3, 4, 5, 6, 8, -50, 102, 23, 14431, 2312]);
// console.log(min);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumator(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         sum += arrayElement;
//     }
//     return sum
// }
// let number = sumator([2,3,4,3,2,1]);
// console.log(number);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arrayAverage(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         sum += arrayElement;
//     }
//     return sum / array.length
// }
// let average = arrayAverage([5,2,3,4,1,55]);
// console.log(average);
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
const users = [{
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}, {
    name: 'Yurii',
    wife: true,
    job: false,
    car: 'Audi',
}]

// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function returnKeys(array) {
//     let keys = [];
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         let userKeys = Object.keys(arrayElement);
//         for (let j = 0; j < userKeys.length; j++) {
//             const userKey = userKeys[j];
//             keys.push(userKey);
//         }
//     }
//     return keys;
// }
// let returnKeys1 = returnKeys(users);
// console.log(returnKeys1);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function returnValues(array) {
//     let values = [];
//     for (let i = 0; i < array.length; i++) {
//         const obj = array[i];
//         let objValues = Object.values(obj);
//         for (let j = 0; j < objValues.length; j++) {
//             const objValue = objValues[j];
//             values.push(objValue);
//         }
//     }
//     return values
// }
//
// let values = returnValues(users);
// console.log(values);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function arraySummator(arrayOne, arrayTwo) {
//     const result = [];
//     for (let i = 0; i < arrayOne.length; i++) {
//         const arrayOneEl = arrayOne[i];
//         for (let j = 0; j < arrayTwo.length; j++) {
//             const arrayTwoEl = arrayTwo[j];
//             if (i === j) {
//                 result.push(arrayOneEl + arrayTwoEl);
//             }
//         }
//     }
//     return result
// }
// let summator = arraySummator([1, 2, 3, 4], [2, 4, 53, 4, 5]);
// console.log(summator);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         const argument = arguments[i];
//         if (min > argument) min = argument;
//         if (max < argument) max = argument;
//     }
//     console.log(min);
//     return max;
// }
// let minMax1 = minMax(2,34,5,3,2,4,5,5,1,223,43);
// console.log(minMax1);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// function objectReturn(array, toggle) {
//     let objArr = [];
//     if (toggle === 'keys') {
//         for (let i = 0; i < array.length; i++) {
//             const obj = array[i];
//             let keys = Object.keys(obj);
//             for (let j = 0; j < keys.length; j++) {
//                 const key = keys[j];
//                 objArr.push(key);
//             }
//         }
//         return objArr;
//     }
//     if (toggle === 'values') {
//         for (let i = 0; i < array.length; i++) {
//             const obj = array[i];
//             let values = Object.values(obj);
//             for (let j = 0; j < values.length; j++) {
//                 const value = values[j];
//                 objArr.push(value);
//             }
//         }
//         return objArr;
//     }
// }
// let keys = objectReturn(users, 'keys');
// let values = objectReturn(users, 'values');
// console.log(keys);
// console.log(values);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function replaceElement(array, i) {
//     let temp = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = temp;
//     return array;
// }
//
// let replaceElement1 = replaceElement([9, 8, 0, 4], 1);
// console.log(replaceElement1);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function f(array) {
//     for (let i = 0; i < array.length; i++) {
//         const num = array[i];
//         if (num === 0) {
//             let numbers = array.slice(i, i + 1);
//             array.splice(i, 1);
//             array.push(...numbers);
//         }
//     }
//     return array;
// }

// function zeroPush(array) {
// //     const cleanArr = [];
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] !== 0) {
// //             cleanArr.push(array[i]);
// //         }
// //     }
// //     for (const element of array) {
// //         if (element === 0) {
// //             cleanArr.push(element)
// //         }
// //     }
// //     return cleanArr;
// // }
// //
// // let push = zeroPush([0,1, 0, 0, 0, 0, 6, 0, 3]);
// // console.log(push);


// - Дано список імен
let n1 = '    Harry        Potter      '
let n2 = '    Ron           Whisley      '
let n3 = '    Hermione       Granger      '

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// function normalizeName(str) {
//     str = str.trim()
//     while (str.includes('  ')) {
//         console.log(str);
//         str = str.replace('  ', ' ')
//     }
//     return str;
// }
//




