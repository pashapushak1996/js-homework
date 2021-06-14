// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
// class Computer {
//     constructor(model, memory, power) {
//         this.model = model;
//         this.memory = memory;
//         this.power = power;
//     }
//
//     on() {
//         console.log(`${ this.model } turns on`)
//     }
// }
//
// const asus = new Computer('Asus', 4, 860);
//
// class Laptop extends Computer {
//     constructor(model, memory, power, inches) {
//         super(model, memory, power);
//         this.inches = inches;
//         this.battery = this.power / (this.inches * memory);
//     }
// }
//
// class Ultrabook extends Laptop {
//     constructor(model, memory, power, inches, weight) {
//         super(model, memory, power, inches);
//         this.weight = weight;
//     }
//
//     on() {
//         if (this.weight >= 2 || this.battery <= 4) {
//             console.error(`${ this.model } broke`);
//             return;
//         }
//         super.on();
//     }
// }
//
// const macbook = new Ultrabook(`Macbook-Pro`, 2, 400, 25, 1.5);
//
// class PC extends Computer {
//     constructor(model, memory, power) {
//         super(model, memory, power);
//         this.fps = power / memory;
//     }
//
//     playGame(game) {
//         console.log(`I play ${ game } with ${ this.fps } FPS`)
//     }
//
//     updatePc(value) {
//         if (value < 0) {
//             return;
//         }
//         if (value < this.power / 100 * 10) {
//             this.power += value;
//             console.log(`New PC power is ${ this.power }`);
//         }
//     }
//
//     updateMemory(value) {
//         if (value < 0) {
//             return;
//         }
//         if (value > this.power) {
//
//         }
//     }
// }
//
// class GamePC extends PC {
//     constructor(model, memory, power) {
//         super(model, memory, power);
//         this.fps *= 2;
//     }
//
//     playGame(game) {
//         this.power -= this.power / 100 * 10;
//         if (this.power < 500 || this.memory < 8) {
//             console.error(`This ${ this.model } is old`);
//             return;
//         }
//         super.playGame(game);
//     }
// }
// const alienware = new GamePC(`Alienware`, 10, 660);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, power) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.power = power;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${ this.maxSpeed }/km на годину`);
//     };
//     this.info = function () {
//         console.log(`Model: ${ this.model }\n Producer: ${ this.producer }\n Year: ${ this.year }\n MaxSpeed: ${ this.maxSpeed }\n Power: ${ this.power }`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed
//     }
//     this.changeYear = function (year) {
//         this.year = year;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const mercedes = new Car('SLS', 'Mercedes', 2012, 260, 2.5);
// mercedes.addDriver({name: 'Ivan', age: 24});

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(model, producer, year, maxSpeed, power) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.power = power;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${ this.maxSpeed } на годину`)
//     }
//
//     info() {
//         console.log(`Model: ${ this.model }\n Producer: ${ this.producer }\n Year: ${ this.year }\n MaxSpeed: ${ this.maxSpeed }\n Power: ${ this.power }`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// const bmw = new Car('M6', 'BMW', 2005, 290, 4.0);
// bmw.addDriver({name: "Jora", age: 25})
// bmw.info();


// let users = [
//     {name: "Yura", age: 18},
//     {name: "Ostap", age: 35},
//     {name: "Artem", age: 12},
//     {name: "Yosup", age: 36},
//     {name: "Ivan", age: 9}];


// const array = [2, 3, 88, 123, 45, 21, 2345, -20];
// let number = array.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr;
//     }
//     return acc;
// });

// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(1, `Ivan`, `Pushak`, `pashklp@gmail.com`, `380982724493`);
const user2 = new User(2, `John`, `Seleznoiv`, `john@gmail.com`, `380982231141`);
const user3 = new User(3, `Max`, `Yuras`, `yurii@gmail.com`, `380573321123`);
const user4 = new User(4, `Yura`, `Hedler`, `alenwar@gmail.com`, `380983445323`);
const user5 = new User(5, `Stepan`, `ivaneyko`, `johndick@gmail.com`, `380982567676`);
const user6 = new User(6, `Alyosa`, `Rustaniv`, `astampoo@gmail.com`, `380945647445`);
const user7 = new User(7, `Ira`, `Alexaniv`, `lacoste@gmail.com`, `380982745757`);
const user8 = new User(8, `Andrii`, `Olegisha`, `users@gmail.com`, `380982456474`);
const users = [user1, user2, user3, user4, user5, user6, user7, user8];

class Client {
    constructor(id, name, surname, phone, order) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.order = order;
    }
}

const client1 = new Client(1, `Ivan`, `Pushak`, `pashklp@gmail.com`, `35`);
const client2 = new Client(2, `John`, `Seleznoiv`, `john@gmail.com`, `32`);
const client3 = new Client(3, `Max`, `Yuras`, `yurii@gmail.com`, `64`);
const client4 = new Client(4, `Yura`, `Hedler`, `alenwar@gmail.com`, `25`);
const client5 = new Client(5, `Stepan`, `ivaneyko`, `johndick@gmail.com`, `63`);
const client6 = new Client(6, `Alyosa`, `Rustaniv`, `astampoo@gmail.com`, `146`);
const client7 = new Client(7, `Ira`, `Alexaniv`, `lacoste@gmail.com`, `346`);
const client8 = new Client(8, `Andrii`, `Olegisha`, `users@gmail.com`, `432`);
const clients = [client1, client2, client3, client4, client5, client6, client7, client8];

//
// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

const usersWithEvenId = users.filter(item => {
    if (!(item.id % 2)) {
        return item;
    }
});
console.log(usersWithEvenId);

// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню

