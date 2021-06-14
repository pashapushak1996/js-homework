// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:

// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
//
// function index(arr, findEl) {
//     let minimal = 0;
//     let maximal = 0;
//     let minIndex = arr.findIndex((el) => {
//         if (el === findEl) {
//             return el;
//         }
//     });
//     console.log(minIndex);
//     let maxIndex = arr.lastIndexOf(findEl)
//     console.log(maxIndex);
//
//
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element === findEl) {
//             maximal = i;
//         }
//     }
//     ;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const element = arr[i];
//         if (element === findEl) {
//             minimal = i;
//         }
//     }
//     console.log(minimal);
//     console.log(maximal);
// }
//
// index(Arr, 4);

// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

//
// function orderTour(hour) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hour < 8) {
//                 resolve(`Друже ще ${ hour }, такшо може встигнеш на роботу`);
//             }
//             reject(`Все колега вже ${ hour }, тебе вже напевно звільнили`);
//         }, 2000)
//     })
// }
//
// const breakfast = (eggs) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eggs > 1) {
//                 resolve(`Оо ти ще маєш ${ eggs } яєць, такшо йди поїж`);
//             }
//             reject(`Йоой та вже яєць нема йди купи, і будеш їсти`);
//         }, 1500);
//     });
// }
//
// const washFace = (water) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (water) {
//                 resolve('Йди мий личко,і швидко на роботу');
//             }
//             reject(`Води нема всьо капец`);
//         }, 2500);
//     });
// }
//
// const running = (hope) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hope) {
//                 resolve(`Я сьогодні бігаю, такшо буду довше жити`);
//             }
//             reject(`Йоой та вженема сили бігати, краще віддихну`);
//         }, 1700);
//     });
// }
//
// orderTour(5)
//     .then(value => {
//         console.log(value);
//         return breakfast(2);
//     })
//     .then(breakfast => {
//         console.log(breakfast);
//         return washFace(true);
//     })
//     .then(washFace => {
//         console.log(washFace);
//         return running(true);
//     })
//     .then(running => console.log(running));

const numbers = [-256, 1, 2, 3, 5, 6, 7, -2555, 78, 8, 665, -57];
//
// let reduce = numbers.reduce((acc, value) => {
//     if (acc > value) {
//         acc = value;
//     }
//     return acc;
// });
// console.log(reduce);

// Отримати масив лише унікальних значень за допомогою reduce
//     [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]

// let arr = [1, 9, 0, 1, 5, 9, 1, 6];
//
// let reduce = arr.reduce((acc, value) => {
//     let find = acc.find(el => el === value);
//     if (find !== value) {
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(reduce);

let array = `21764919475861001`
    .split('')
    .map(el => +el);
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
function f(array, findEl) {
    let fqs = 0;
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        if (arrayElement === findEl) {
            fqs++;
        }
        if ((arrayElement && array[i + 1]) === 0) {
            break;
        }
    }
    return fqs;
}

let number = f(array, 1);


// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5";

function text(num) {
    let array = [];
    let number = num.toString().split('').reverse();
    for (let i = number.length - 1; i >= 0; i--) {
        let numberElement = number[i];
        numberElement += `0`.repeat(i);
        array.push(numberElement);
    }
    return array.join('+');
}

let strings = text(3254343243245);
console.log(strings);


// Розпорядок дня


// function myDay(hour, cb) {
//     if (hour < 8) {
//         cb(null, 'Друже вставай на роботу');
//         return;
//     }
//     cb('Ну то капец ти проспав', null);
// }
//
// function goToShower(water, cb) {
//     setTimeout(() => {
//         if (water) {
//             cb(null, 'вода');
//             return;
//         }
//         cb(`Нема води це капец`, null);
//     }, 2000);
// }
//
//
// myDay(5, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     goToShower(true, (err, data) => {
//         if (err) {
//             console.log(`Ну в нас сьгодні ${ err }`);
//             return;
//         }
//         console.log(`Ну є нарешті ${ data }, йди помийся`);
//     });
// });


//Розпорядок дня на Promise;

function orderTour(hour) {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (hour < 8) {
            resolve(`Швидше вставай то вже не шутки`);
        }
        reject(`Ну всьо друже ти спізнився`);
    }, 2500));
}

//
function goToShower(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (water) {
                resolve(`Йди помийся вода є`);
            }
            reject(`Нема води то капец`);
        }, 2000);
    });
}


orderTour(5)
    .then(value => {
        console.log(value);
        return goToShower(false);
    })
    .then(value => console.log(value))
    .catch(reason => console.error(reason));

/// Async await;

// async function myDays() {
//     const sss = await orderTour(4);
//     console.log(sss);
//     const ggg = await goToShower(true);
//     console.log(ggg);
// }

// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.
//
//     Example:
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]
//
//     [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]


//
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
//     [1,2,3,4,5,2,4,1,3] -> 5

const arrays = [1, 2, 3, 4, 5, 2, 4, 1, 3];


// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
//
// function anagramm(stringOne, stringTwo) {
//     const stringOneArr = stringOne.toLowerCase().split('').sort();
//     const stringTwoArr = stringTwo.toLowerCase().split('').sort();
//     if (stringOneArr.length !== stringTwoArr.length) {
//         return false;
//     }
//     for (let i = 0; i < stringOneArr.length; i++) {
//         if (stringOneArr[i] === stringTwoArr[i]) {
//             return true;
//         }
//     }
// }
// let b = anagramm(`ANAGRAM`, `MGANRAA`);


// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

function palindrome(string) {
    const str = string.split('').reverse().join('');
    if (string === str) {
        return 'YES';
    }
    return 'NO';
}

let s = palindrome(`ababa`);
console.log(s);


// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

// const str = "Hello World".split('');
//
// function printLetters(str, iterationIndex) {
//     if (iterationIndex >= str.length - 1) {
//         return;
//     }
//     setTimeout(() => {
//         console.log(str[iterationIndex]);
//         printLetters(str, ++iterationIndex);
//     }, Math.random() * 4000);
// }
//
// printLetters(str, 0);

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
let sum = 0;

// function summator2000(num, iterationIndex) {
//     let strings1 = num.toString().split('');
//     if (iterationIndex >= strings1.length) {
//         return;
//     }
//     sum += +strings1[iterationIndex];
//     summator2000(num, ++iterationIndex);
// }
//
// summator2000(1111, 0);
//
// console.log(sum);



