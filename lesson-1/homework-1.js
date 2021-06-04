// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let hello = 'hello';
// let owu = 'owu';
// let ua = 'ua';
// let one = 1;
// let ten = 10;
// let minus999 = -999;
// let oneTwoThree = 123;
// const pi = 3.14;
// const e = 2.7;
// const sixteenth = 16;
// let truth = true;
// let untruth = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello);
// alert(hello);
// document.write(hello);
// console.log(owu);
// alert(owu);
// document.write(owu);
// console.log(ua);
// alert(ua);
// document.write(ua);
// console.log(one);
// alert(one);
// document.write(one);
// console.log(ten);
// alert(ten);
// document.write(ten);
// console.log(minus999);
// alert(minus999);
// document.write(minus999);
// console.log(oneTwoThree);
// alert(oneTwoThree);
// document.write(oneTwoThree);
// console.log(pi);
// alert(pi);
// document.write(pi);
// console.log(e);
// alert(e);
// document.write(e);
// console.log(sixteenth);
// alert(sixteenth);
// document.write(sixteenth);
// console.log(truth);
// alert(truth);
// document.write(truth);
// document.write(untruth);
// console.log(untruth);
//

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// let firstName = 'Pushak';
// let middleName = ' Pavlo';
// let lastName = ' Ivanovich';
// let pib = firstName + middleName + lastName;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// const age = prompt(`type your age`);
// const middleName = prompt(`type your middle name`);
// const lastName = prompt(`type your last name`);

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// const congratulations = `Congratulations ${ middleName } ${ lastName }. Your age is ${ age }`;
// console.log(congratulation);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let a = +prompt(`type first number`);
// let b = +prompt(`type second number`);
// let c = +prompt(`type third number`);
// console.log(a);
// console.log(b);
// console.log(c);

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let a = parseInt(prompt(`type first number`));
// let b = parseInt(prompt(`type second number`));
// let c = parseInt(prompt(`type third number`));
// let d = parseInt(prompt(`type fourth number`));
// console.log(a + b + c + d);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// let a = parseFloat(prompt(`type first number`));
// let b = parseFloat(prompt(`type second number`));
// let c = parseFloat(prompt(`type third number`));
//  Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// const result = a + b + c;
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let a = Math.round(+prompt(`type first number`));
// let b = Math.round(+prompt(`type second number`));
// let c = Math.round(+prompt(`type third number`));
// let res = a + b + c;
// console.log(res);

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25
// let a = +prompt(`type base`);
// let b =+prompt(`type exponent`);
// console.log(Math.pow(a, b));

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
//     5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 < 10 -> false
// 10 !== 10 -> false
// 10 !== 10 -> false
// 123 != '123' -> false
// 123 == '123' -> true


// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// const trafficLight = prompt('traffic light color');
//
// switch (trafficLight) {
//     case "green":
//         alert(`Go`);
//         break;
//     case "yellow":
//         alert(`Wait`);
//         break;
//     case "red":
//         alert(`Stop`);
//         break;
//     default:
//         alert("Do what you want");
// }


// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// const trafficLight = prompt('traffic light color');
// const isRoadClear = confirm('Road is clear?');
// switch (trafficLight) {
//     case 'green':
//         isRoadClear ? alert(`wait until the violators pass`) : alert('go');
//         break;
//     case 'yellow':
//         isRoadClear ? alert(`wait`) : alert(`wait anything`);
//         break;
//     case 'red':
//         isRoadClear ? alert(`stop and wait`) : alert(`stop anything`);
//         break;
//     default:
//         alert(`do what you want`);
// }