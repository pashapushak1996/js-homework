// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// Пример:
Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function index(arr, findEl) {
//First solution

    let minIndex = arr.findIndex((el) => {
        if (el === findEl) {
            return el;
        }
    });

    let maxIndex = arr.lastIndexOf(findEl)
    let some = arr.some((el) => el === findEl);
    if (!some) {
        return -1;
    }
    console.log(minIndex);
    console.log(maxIndex);

//Second solution

    let minimal = 0;
    let maximal = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === findEl) {
            maximal = i;
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        if (element === findEl) {
            minimal = i;
        }
    }
    console.log(minimal);
    console.log(maximal);
}

let number = index(Arr, 12);

// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

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

// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
// let array = `21764919475861001`
//     .split('')
//     .map(el => +el);
// 2176491947586100 -> 3

// function f(array, findEl) {
//     let fqs = 0;
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         if (arrayElement === findEl) {
//             fqs++;
//         }
//         if ((arrayElement && array[i + 1]) === 0) {
//             break;
//         }
//     }
//     return fqs;
// }
// let number = f(array, 1);


// Cоздать функцию которая принимает число и возвращает  текст как в примере:

//     3275  —>  "3000 + 200 + 70 +5";
// function text(num) {
//     let array = [];
//     let number = num.toString().split('').reverse();
//     for (let i = number.length - 1; i >= 0; i--) {
//         let numberElement = number[i];
//         numberElement += `0`.repeat(i);
//         array.push(numberElement);
//     }
//     return array.join('+');
// }
// let strings = text(3254343243245);
// console.log(strings);

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



const arr = [1, 2, 10, 3, 4, 2, 4, 1, 3];

function findOdd(arr = []) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        // console.log(arr[i]);
        for (let j = 0; j < arr.length; j++) {
            // console.log(arr[j]);
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            console.log(count);
            return arr[i];
        }
    }
}

let even = findOdd(arr);


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
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1
// function palindrome(string) {
//     const str = string.split('').reverse().join('');
//     if (string === str) {
//         return 'YES';
//     }
//     return 'NO';
// }
//
// let s = palindrome(`ababa`);
// console.log(s);


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
//
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


function summator2000(num) {
    return num ? Math.floor(num % 10) + summator2000(num / 10) : 0;
}


let number1 = summator2000(11);


console.log(number1);


// function findIndex(arr = [], element = '') {
//     let minIndx = 0;
//     let maxIndx = 0;
//     let newArr = [];
//
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             newArr.push(i);
//         }
//     }
//     console.log(newArr);
//
//     if (newArr.length > 0) {
//         console.log(`MinIndex: ${ newArr[0] }`);
//         console.log(`MaxIndex: ${ newArr[newArr.length - 1] }`);
//     } else {
//         console.log(-1);
//     }
// }
//
//
// let numArr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 10];
// findIndex(numArr, 7);


// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

function comparator(strOne, strTwo) {
    if (strOne.length !== strTwo.length) {
        return "NO";
    }
    if (strOne.toLowerCase().split('').sort().join() === strTwo.toLowerCase().split('').sort().join()) {
        return "YES"
    }
}

let s = comparator(`ANAGRAM`, `MGANRAA`);
console.log(s);
