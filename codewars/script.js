// Панграма - це речення, яке принаймні один раз містить кожну окрему букву алфавіту. Наприклад, речення "Швидка коричнева лисиця перестрибує ледачого собаку" - це панграма, оскільки воно хоча б раз використовує літери A-Z (регістр не має значення).
// Враховуючи рядок, визначте, є це панграмою чи ні. Поверніть True, якщо це так, False, якщо ні. Ігнорувати цифри та розділові знаки.

//First solution
// function isPangram(string){
//     let count = 0;
//     let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     const str = string.toLowerCase().split('').sort();
//     for (const letter of arr_en) {
//         if (str.includes(letter)) {
//             count++;
//         }
//     }
//     return count === 26 ? true : false;
// }
// const boolean = isPangram("The quick brown fox jumps over the lazy dog.");
// console.log(boolean);

//Second solution
// function isPangram(string) {
//     const str = string.toLowerCase().split('');
//     const strings = "abcdefghijklmnopqrstuvwxyz".split('');
//     const number = strings
//         .reduce((acc, value) => {
//         const find = str.find((el) => el === value);
//         if (find) {
//             return acc = acc + 1;
//         }
//     }, 0);
//     return number === 26 ? true : false;
// }
// const boolean = isPangram("The quick bron fox jumpws over the lazy dog.");
// console.log(boolean);


//Ребенок играет с мячом на n-м этаже высокого дома. Высота этого этажа, ч , известно.
//
// Он бросает мяч в окно. Мяч отскакивает (например) на две трети своей высоты (отскок 0,66).
//
// Его мать смотрит в окно на 1,5 метра от земли.
//
// Сколько раз мать увидит, как мяч проходит перед ее окном (в том числе когда он падает и подпрыгивает?)
//
// Для правильного эксперимента должны быть выполнены три условия:
// Параметр поплавка "h" в метрах должен быть больше 0.
// Параметр с плавающей запятой "bounce" должен быть больше 0 и меньше 1.
// Параметр с плавающей запятой "окно" должен быть меньше h.
// Если все три вышеуказанных условия выполнены, верните положительное целое число, в противном случае верните -1.
//
// Примечание:
// Мяч можно увидеть только в том случае, если высота отбивающегося мяча строго больше, чем параметр окна.
//
// Примеры:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
//
// - h = 3, bounce = 1, window = 1.5, result is -1
//
// (Condition 2) not fulfilled).
//
// function bouncingBall(h, bounce, window) {
//     if (bounce > 0 && bounce < 1 && h > window && h > 0) {
//         return Math.floor(h / (window / bounce))
//     } else {
//         return -1
//     }
// }
//
// const bouncingBall1 = bouncingBall(30, 0.66, 1.5);
// console.log(bouncingBall1);

//Кол-во человек в автобусе
// По городу ходит автобус, который забирает и высаживает несколько человек на каждой автобусной остановке.
//
// Вам предоставляется список (или массив) целочисленных массивов (или кортежей). В каждом целочисленном массиве есть два элемента, которые представляют количество людей, садящихся в автобус (первый элемент), и количество людей, выходящих из автобуса (второй элемент) на автобусной остановке.
//
// Ваша задача - вернуть количество людей, которые все еще находятся в автобусе после последней автобусной остановки (после последнего массива). Несмотря на то, что это последняя остановка автобуса, автобус не пуст и некоторые люди все еще находятся в автобусе, и они, вероятно, там спят: D
//
// Взгляните на тестовые примеры.
//
// Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда> = 0. Таким образом, возвращаемое целое число не может быть отрицательным.
//
// Второе значение в первом целочисленном массиве равно 0, поскольку на первой автобусной остановке автобус пуст.
// function peopleBus(busStops) {
//     let reduce = 0;
//     for (let i = 0; i < busStops.length; i++) {
//         const busStop = busStops[i];
//         if (Array.isArray(busStop)) {
//             const sss = busStop.reduce((acc, curr) => {
//                 return acc - curr
//             });
//             reduce += sss;
//         }
//     }
//     return reduce
// }
//
// const peopleBus1 = peopleBus([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]);
// console.log(peopleBus1);

//Учитывая массив (arr) в качестве аргумента, завершите функцию, countSmileysкоторая должна вернуть общее количество улыбающихся лиц.
//
// Правила улыбающегося лица:
//
// Каждый смайлик должен содержать допустимую пару глаз. Глаза можно пометить как :или;
// У смайлика может быть нос, но это не обязательно. Допустимые символы для носа: -или~
// У каждого улыбающегося лица должен быть улыбающийся рот, который должен быть отмечен значком )илиD
// Использование дополнительных символов не допускается, кроме упомянутых.
//
// Примеры действительных смайлов: :) :D ;-D :~)
// Недействительные смайлы: ;( :> :} :]
//
// Пример
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Примечание
// В случае пустого массива возвратите 0. Вы не будете проверены с недопустимым вводом (ввод всегда будет массивом). Порядок элементов лица (глаза, нос, рот) всегда будет одинаковым.
// function countSmileys(arr) {
//     let count = 0;
//     if (arr.length === 0) {
//         return 0;
//     }
//     arr.forEach((el) => {
//
//             if (el.includes(':') || el.includes(';')) {
//                 if (el.includes(')') || el.includes('D')) {
//                     if (el.length <= 2) {
//                         count++;
//                         return;
//                     }
//                     if (el.length <= 3) {
//                         if (el.includes('-') || el.includes('~')) {
//                             count++;
//                         }
//                     }
//                 }
//             }
//         }
//     )
//     return count;
// }
//
// const arr = ":~D,:-),:D,;),;>,:o),;(";
// const strings = arr.split(',');
//
// const countSmileys1 = countSmileys(strings);
// console.log(countSmileys1);

// Ваша мета в цій каті - реалізувати функцію різниці, яка віднімає один список з іншого і повертає результат.
//
//     Він повинен видалити всі значення зі списку a, які присутні в списку b, зберігаючи їх порядок.
//
// arrayDiff ([1,2], [1]) == [2]
// Якщо значення присутнє в b, усі його входження повинні бути видалені з іншого:
//
//     arrayDiff ([1,2,2,2,3], [2]) == [1,3]

// function arrayDiff(a, b) {
//     for (const bElement of b) {
//         return a.filter((el) => el !== bElement)
//     }
// }
//
// const arrayDiff1 = arrayDiff([3, 4], [3]);
// console.log(arrayDiff1);

// Ласкаво просимо.
//     У цій каті ви зобов’язані, отримавши рядок, замінити кожну букву її позицією в алфавіті.
//
//     Якщо щось у тексті не є листом, ігноруйте його та не повертайте.
//
// "a" = 1, "b" = 2 тощо.
//
//     Приклад
// alphabetPosition ("The sunset sets at twelve o' clock.")
// function alphabetPosition(text) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     const str = text
//         .toLowerCase()
//         .split('');
//     let arr = [];
//     str.forEach(item => {
//         const number = alphabet.findIndex((el) => el === item);
//         if (number !== -1) {
//             arr.push(number + 1);
//         }
//     })
//     return arr.join(' ');
// }
//
// const s = alphabetPosition("The narwhal bacons at midnight.");
// console.log(s);

//Напишіть номер у розгорнутій формі
// Вам дадуть номер, і вам потрібно буде повернути його як рядок у розгорнутій формі. Наприклад:
//
// розширена форма (12); // Повинно повернути '10 + 2 '
// розширена форма (42); // Повинно повернути '40 + 2 '
// розширена форма (70304); // Повинно повернути '70000 + 300 + 4'
// ПРИМІТКА: Усі числа будуть цілими числами, більшими за 0.

//My solution
// function expandedForm(num) {
//     let array = [];
//     let number = num.toString().split('').reverse();
//     for (let i = number.length - 1; i >= 0; i--) {
//         let numberElement = number[i];
//         if (numberElement === '0') {
//             continue;
//         }
//         numberElement += `0`.repeat(i);
//         array.push(numberElement);
//     }
//     return array.join(' + ');
// }

//Second solution
// function expandedForm(num) {
//     return String(num)
//         .split("")
//         .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
//         .filter((num) => Number(num) != 0)
//         .join(" + ")
// }

// let strings = expandedForm(32504343243245);
// console.log(strings);


// const str = "the-stealth-warrior";
//
// function toCamelCase(str, iterationIndex) {
//     if (iterationIndex > str.length - 1) {
//         return;
//     }
//     let array = [];
//     if (str.includes(`-`)) {
//         let strWihs = str.split('-');
//         for (let i = 0; i < strWihs.length; i++) {
//             const strWih = strWihs[i];
//             const split = strWih.split('');
//             split[0] = split[0].toUpperCase();
//             const s = split.join('');
//             array.push(s);
//         }
//         return array.join('');
//     }
// }
//
// const s = toCamelCase(str);
// console.log(s);


// Напишіть функцію, яка, отримавши URL-адресу як рядок, аналізує лише ім’я домену та повертає його як рядок. Наприклад:
// domainName ("http://github.com/carbonfive/raygun") == "github"
// domainName ("http://www.zombie-bites.com") == "zombie-bites"
// domainName ("https://www.cnet.com") == "cnet"


// Зробити такий вивід
// data = ["Andrew","Robert","Lee","02-September-1981","M"]
// Test.assertEquals(driver(data), "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")
// });
function driver(data) {
    // Code here
}

// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.
//
//     Например:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


let uniqueInOrder = (iterable) => {
    if (typeof iterable === 'string') {
        const strArray = iterable.split('');
        const reduce = strArray.reduce((acc, curr) => {
            let find = acc.find((el) => el === curr);
            if (find !== curr) {
                acc.push(curr);
            }
            return acc;
        }, []);
        console.log(reduce);
    }
}


uniqueInOrder('AAAABBBCCDAABBB');