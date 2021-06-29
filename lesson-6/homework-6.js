// 1) Створити масив з 20 чисел та:
const numbers = [2, 5, -10, 250, 99, 83, 485, 122, 343, 293, 11, 12, 14, 15, 67, 48, 53, 204, 957, 473, 235, 1243];

//     a) відсортувати його від меншого до більшого.
let sortAsc = numbers.sort((a, b) => {
    return a - b;
});

//     b) відсортувати його від більшого до меншого.
const sortDesc = numbers.sort((a, b) => b - a);

//     c) Відфілтрувати числа які є кратними 3.
const filterMultipleThree = numbers.filter(el => !(el % 3));

// d) Відфілтрувати числа які є більшими за 10.
const filterMultipleTen = numbers.filter(num => num > 10);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numbers.forEach(el => console.log(el));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
let map = numbers.map(el => el * 3);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
let reduce = numbers.reduce((acc, curr) => {
    return acc + curr;
});


const strings = ['Ivad', 'Vlad', 'John', 'Max', 'Olena', 'Yurii', 'Rostik', 'Oleh', 'Alina', 'Leon', 'Jameson', 'Itachi', 'Naruto'];
// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
let stringsAsc = strings.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    return -1;
});
// b) Відсортувати в зворотньому порядку
const stringsDesc = strings.sort((a, b) => {
    if (b > a) {
        return 1;
    }
    return -1;
})
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let filterFour = strings.filter(el => el.length > 4);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
const addWord = strings.map(el => `Sam says ${ el }`);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
const usersAsc = users.sort((a, b) => {
    return a.age - b.age;
});

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
const usersWordLength = usersAsc.sort((a, b) => {
    return a.name.length - b.name.length;
});

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
const usersWithId = users.map((el) => {
    let id = Math.floor(Math.random() * 1000);
    return {...el, id};
});

// d) відсортувати його за індентифікатором
usersWithId.sort((a, b) => {
    return a.id - b.id;
});

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let marriedUsers = usersWithId.reduce((acc, curr) => {
    if (curr.isMarried) {
        acc.push(curr);
    }
    return acc;
}, []);

//Classwork

const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
const volumeTree = cars.filter(el => el.volume > 3);

// - двигун = 2л
const volumeTwo = cars.filter(el => el.volume > 2);

// - виробник мерс
const producerMercedes = cars.filter(el => el.producer === 'mercedes');

// - двигун більше 3х літрів + виробник мерседес
const volumeMercedes = cars.filter((el) => el.volume >= 3 && el.producer === 'mercedes');

// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//
//
// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
//
// -- Відсортувати їх по ID
usersWithAddress.sort((a, b) => {
    return a.id - b.id
});

// -- Відсортувати їх по ID в зворотньому порядку
// usersWithAddress.sort((a, b) => {
//     return b.id - a.id
// });

// -- Відсортувати по віку
// usersWithAddress.sort((a, b) => {
//     return a.age - b.age
// });

// -- Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((a, b) => {
//     return b.age - a.age
// });

// -- Відсорутвати по імені
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     return -1;
// });

// -- Відсорутвати по назві вулиці
// usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     return -1;
// })

// -- Залишити лише тих, в кого парні номери будинків.
// let homeNumbers = usersWithAddress.filter((el) => !(el.address.number % 2));

// -- Порахувати загальний вік всіх людей. (reduce)
// const agesSum = usersWithAddress.reduce((acc, curr) => {
//     return acc + curr.age;
// }, 0);
// console.log(agesSum);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let usersWithChild = usersWithAddress.reduce((acc, curr) => {
//     if (curr.age >= 30) {
//         const index = usersWithAddress.findIndex(el => el === curr);
//         const userWithChild = {...curr, child: {name: curr.name, age: curr.age / 3}};
//         acc.push(userWithChild);
//         usersWithAddress.splice(index, 1);
//     }
//     return acc;
// }, []);


// -- наисать функцию калькулятора с 2мя числами и колбеком

