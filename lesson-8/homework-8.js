// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea = document.getElementById(`textarea`);
// textarea.oninput = ({currentTarget: {value}}) => {
//     localStorage.setItem('textarea', value);
// };
// textarea.innerText = localStorage.getItem('textarea');


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
const form = document.forms.form;
const firstName = form.firstName;
const age = form.age;
const lookingForAJob = form.looking;
const textarea = form.textarea;
const radio = form.radio;


firstName.oninput = ({currentTarget: {value}}) => {
    localStorage.setItem('firstName', value);
};

firstName.value = localStorage.getItem('firstName');

age.oninput = ({currentTarget: {value}}) => {
    localStorage.setItem('age', value);
};

age.value = localStorage.getItem('age');

lookingForAJob.onchange = ({srcElement: {checked}}) => {
    localStorage.setItem('lookingForAJob', checked);

};

lookingForAJob.checked = JSON.parse(localStorage.getItem('lookingForAJob'));


textarea.oninput = ({target: {value}}) => {
    localStorage.setItem('textarea', value);
};

textarea.innerText = localStorage.getItem('textarea');

let radioElementMale = radio[0];
let radioElementFemale = radio[1];


radioElementMale.oninput = ({target: {checked}}) => {
    localStorage.setItem('male', checked);
};


radioElementFemale.oninput = ({target: {checked}}) => {
    localStorage.setItem('female', checked);
};

radioElementFemale.checked = JSON.parse(localStorage.getItem('female'));
radioElementMale.checked = JSON.parse(localStorage.getItem('male'));


//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
