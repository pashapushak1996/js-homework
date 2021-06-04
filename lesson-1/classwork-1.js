// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// let str = `Hello`;
// let num = 123;
// let flag = true;
// let txt = "true";

// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87

// let a1 = 2;
// let a2 = 8;
// let a3 = 11;
// let a4 = 10;
// let a5 = 3;
// 11 * 8 + 2
// 11 * 3 * 2
// 8 / 2 * 3
// 8 * 3 + 10

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,-> 2
//     3 % 5, -> 3
//     5 + '3', -> '53'
//     '5' - 3, -> 2
//     75 + 'кг' -> NaN

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// let s = height * width;

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
// let v = 3.14 * Math.pow((dC / 2), 2) * heightC;
// console.log(v);

//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = "Hello world";
// alert(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let firstName = "Pushak";
// let name = "Pavlo";
// let lastName = "Ivanovich";
// let age = 25;
// let hobbies = ['Music', 'Reading', 'Workout', 'Programming'];
// alert(`My name is ${ name }\n,my first name is ${ firstName },\n my lastname is ${ lastName } and I am ${ age }\n, i have a different hobbies, i love music,and keep on ${ hobbies[3] }`);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
// parseInt("435")
// parseInt("Вася")
//
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
//
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// const name = prompt('type you name');
// const firstName = prompt('type your firstname');
// const age = prompt('age');
//
// alert(`// Доброго вечера ${ name } ${ firstName }, мои поздравления что вам ${ age }`)

