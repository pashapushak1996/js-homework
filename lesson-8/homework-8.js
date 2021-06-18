// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea = document.getElementById(`textarea`);
// textarea.oninput = ({currentTarget: {value}}) => {
//     localStorage.setItem('textarea', value);
// };
// textarea.innerText = localStorage.getItem('textarea');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// const form = document.forms.form;
// const firstName = form.firstName;
// const age = form.age;
// const lookingForAJob = form.looking;
// const textarea = form.textarea;
// const radio = form.radio;
//
//
// firstName.oninput = ({currentTarget: {value}}) => {
//     localStorage.setItem('firstName', value);
// };
//
// firstName.value = localStorage.getItem('firstName');
//
// age.oninput = ({currentTarget: {value}}) => {
//     localStorage.setItem('age', value);
// };
//
// age.value = localStorage.getItem('age');
//
// lookingForAJob.onchange = ({srcElement: {checked}}) => {
//     localStorage.setItem('lookingForAJob', checked);
//
// };
//
// lookingForAJob.checked = JSON.parse(localStorage.getItem('lookingForAJob'));
//
//
// textarea.oninput = ({target: {value}}) => {
//     localStorage.setItem('textarea', value);
// };
//
// textarea.innerText = localStorage.getItem('textarea');
//
// let radioElementMale = radio[0];
// let radioElementFemale = radio[1];
//
//
// radioElementMale.oninput = ({target: {checked}}) => {
//     localStorage.setItem('male', checked);
// };
//
//
// radioElementFemale.oninput = ({target: {checked}}) => {
//     localStorage.setItem('female', checked);
// };

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// const textArea = document.getElementById(`textarea`);
// const saveButton = document.getElementById('button');
// const left = document.getElementById('btn-left');
// const right = document.getElementById('btn-right');
// const history = document.getElementById('history');
// let textHistory = [];
//
// let i = 0;
//
// left.onclick = () => {
//     textHistory = JSON.parse(localStorage.getItem('history'));
//     --i;
//     if (i < textHistory.length && i >= 0) {
//         history.innerText = `checkpoint ${ i + 1 }:${ textHistory[i] }`;
//     }
// };
//
// right.onclick = () => {
//     ++i;
//     textHistory = JSON.parse(localStorage.getItem('history'))
//     if (i < textHistory.length) {
//         history.innerText = `checkpoint ${ i + 1 }:${ textHistory[i] }`;
//     }
// };
//
// let textAreaValue = '';
//
//
// if (textHistory.length === 0) {
//     textHistory = JSON.parse(localStorage.getItem('history'));
//     if (!(JSON.parse(localStorage.getItem('history')))) {
//         textHistory = [];
//     }
// }
//
//
// textArea.oninput = ({currentTarget: {value}}) => {
//     textAreaValue = value;
// };
// if (textHistory.length) {
//     left.style.display = 'block';
//     right.style.display = 'block';
// }
//
//
// saveButton.onclick = () => {
//     left.style.display = 'block';
//     right.style.display = 'block';
//     if (textAreaValue) {
//         textHistory.push(textAreaValue);
//         localStorage.setItem('history', JSON.stringify(textHistory));
//     }
// };

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

//Bad solution
// const createUser = document.forms.createUser;
// const createBtn = createUser.createBtn;
// const viewBtn = createUser.viewBtn;
// const divUsers = document.querySelector(`#users`);
// const editUser = document.forms.editUser;
//
//
// let users = [];
// if (users.length === 0) {
//     users = JSON.parse(localStorage.getItem('users'));
//     if (!(JSON.parse(localStorage.getItem('users')))) {
//         users = [];
//     }
// }
// let user = {};
//
//
// for (let i = 0; i < createUser.length; i++) {
//     const input = createUser[i];
//     input.onchange = ({target: {name, value}}) => {
//         user[name] = value;
//     };
// }
//
//
// createBtn.onclick = (ev) => {
//     if (Object.keys(user).length !== 0) {
//         users.push(user);
//         localStorage.setItem('users', JSON.stringify(users));
//     }
// };
// viewBtn.onclick = (ev) => {
//     ev.preventDefault();
//     createUser.style.display = `none`;
// };
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     let element = document.createElement(`h2`);
//     element.innerText = user.firstName;
//     let deleteButton = document.createElement(`button`);
//     deleteButton.onclick = (ev) => {
//         users.splice(i, 1);
//         localStorage.setItem('users', JSON.stringify(users));
//         location.reload();
//     };
//
//     let editButton = document.createElement(`button`);
//     editButton.onclick = (ev) => {
//         editUser.style.display = `block`;
//         let sliceElement = users.slice(i, i + 1)[0];
//         for (const sliceElementKey in sliceElement) {
//             for (let j = 0; j < editUser.length; j++) {
//                 const input = editUser[j];
//                 if (input.name === sliceElementKey) {
//                     input.value = sliceElement[sliceElementKey];
//                 }
//             }
//         }
//     };
//
//     deleteButton.innerText = `delete`;
//     editButton.innerText = `edit`;
//
//     divUsers.appendChild(element);
//     divUsers.appendChild(deleteButton);
//     divUsers.appendChild(editButton);
// }

//Good solution
const ARRAY_USERS = `ARRAY_USERS`;

let formOne = document.forms.createUser;
let createButton = formOne.createBtn;
let usersDiv = document.querySelector(`#users`);
let tempUser = {};

createButton.onclick = (ev) => {
    let person = {...tempUser};
    for (const formElement of createUser) {
        if (formElement.type !== 'submit') {
            person[formElement.name] = formElement.value;
        }
    }
    if (!person.id) {
        person.id = Date.now();
    }
    saveToLocalStorage(person);
};


//Save to localStorage

function saveToLocalStorage(user) {
    if (localStorage.getItem(ARRAY_USERS)) {
        let users = JSON.parse(localStorage.getItem(ARRAY_USERS));
        let find = users.find((el) => el.id === user.id);
        if (find) {
            const filter = users.filter((value) => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
        } else {
            users.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(users));
        }
    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]));
    }
}

//Create user div

function createUserDiv() {
    let users = JSON.parse(localStorage.getItem(ARRAY_USERS));

    users.forEach(el => {
        let main = document.createElement(`div`);
        for (const userKey in el) {
            let element = document.createElement(`h3`);
            element.innerText = `${ userKey } : ${ el[userKey] }`;
            main.appendChild(element);
        }


        main.style.border = `2px solid black`;
        main.style.width = `200px`;
        main.style.padding = `10px`;


        let deleteButton = document.createElement(`button`);
        deleteButton.innerText = `delete`;
        deleteButton.onclick = () => {
            deleteUser(el.id);
        };

        let editUserButton = document.createElement(`button`);
        editUserButton.innerText = `Edit User`;
        editUserButton.onclick = () => {
            createButton.innerText = `Edit`;
            editUser(el.id)
        };

        main.appendChild(editUserButton);
        main.appendChild(deleteButton);
        usersDiv.appendChild(main);
    })
}

function deleteUser(userId) {
    const filteredUser = JSON.parse(localStorage.getItem(ARRAY_USERS))
        .filter(user => user.id !== userId);
    localStorage.setItem(ARRAY_USERS, JSON.stringify(filteredUser));
    location.reload();
}

function editUser(userId) {
    const user = JSON.parse(localStorage.getItem(ARRAY_USERS)).find(user => user.id === userId);
    for (const formOneElement of formOne) {
        if (formOneElement.type !== `submit`) {
            for (const userKey in user) {
                if (formOneElement.name === userKey) {
                    formOneElement.value = user[userKey];
                }
            }
        }
    }
    tempUser = user;
}

createUserDiv();

