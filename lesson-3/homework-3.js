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
const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653",
            },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
        },
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990",
            },
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
        },
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342",
            },
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems",
        },
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
            geo: {
                lat: "-71.4197",
                lng: "71.7478",
            },
        },
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        company: {
            name: "Considine-Lockman",
            catchPhrase: "Synchronised bottom-line interface",
            bs: "e-enable innovative applications",
        },
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
                lat: "24.8918",
                lng: "21.8984",
            },
        },
        phone: "210.067.6132",
        website: "elvis.io",
        company: {
            name: "Johns Group",
            catchPhrase: "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers",
        },
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
            street: "Ellsworth Summit",
            suite: "Suite 729",
            city: "Aliyaview",
            zipcode: "45169",
            geo: {
                lat: "-14.3990",
                lng: "-120.7677",
            },
        },
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        company: {
            name: "Abernathy Group",
            catchPhrase: "Implemented secondary concept",
            bs: "e-enable extensible e-tailers",
        },
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
            street: "Dayna Park",
            suite: "Suite 449",
            city: "Bartholomebury",
            zipcode: "76495-3109",
            geo: {
                lat: "24.6463",
                lng: "-168.8889",
            },
        },
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        company: {
            name: "Yost and Sons",
            catchPhrase: "Switchable contextually-based project",
            bs: "aggregate real-time technologies",
        },
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
                lat: "-38.2386",
                lng: "57.2232",
            },
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
        },
    },
];

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

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function zeroPush(array) {
//     const cleanArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== 0) {
//             cleanArr.push(array[i]);
//         }
//     }
//     for (const element of array) {
//         if (element === 0) {
//             cleanArr.push(element)
//         }
//     }
//     return cleanArr;
// }
//
// let push = zeroPush([0,1, 0, 0, 0, 0, 6, 0, 3]);
// console.log(push);


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione           Granger      '

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// function nameNormalize(string) {
//     return string.trim().split('').join('').replaceAll('  ', '');
// }
//
// let nameNormalize1 = nameNormalize(n1);
// let nameNormalize2 = nameNormalize(n2);
// let nameNormalize3 = nameNormalize(n3);
// console.log(nameNormalize1);
// console.log(nameNormalize2);
// console.log(nameNormalize3);
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'