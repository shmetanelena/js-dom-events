/*
1.  Элемент select#users заполнить списком имен пользователей из массива users.
    Список опций формируем в виде HTML-строки, которую присваиваем свойству innerHTML элемента select.
    Названия опций - имя пользоватяля (user.name).
    Для определения выбранного пользователя можно использовать свойство value элемента select.
    В соответствующих атрибутах элементов option указываем индекс объекта пользователя в массиве users.

2.  Элемент select#user-eye-color заполнить значениями цвета из массива colors.
    Список опций формируем в виде HTML-строки, которую присваиваем свойству innerHTML элемента select.
    Для определения выбранного цвета можно использовать свойство value элемента select. 
    В соответствующих атрибутах элементов option указываем название цвета в нижнем регистре 
    (то есть, так как он указан в объектах пользователя - "blue", "green", ...), а навзание option - color.name.
    
3.  При выборе пользователя заполнить поля формы email, is_active, balance, friends, gender, eye_color
    значениями соответствующих полей объекта пользователя.
    Поля email, balance устанавливаем через свойство value.
    Поле eye_color также устанавливаем через свойство value, если оно заполнено согласно рекомендациям п.2.
    Поля is_active, gender устанавливаем через свойство checked.
    Список опций для поля friends формируем в виде HTML-строки, которую присваиваем свойству innerHTML элемента.

4.  При нажатии кнопки Update (событие 'submit' формы) нужно обновить данные текущего пользователя.
    При этом, изменяем поля пользователя, только если они отличаются, то есть были изменены через элементы формы.
    То есть, сравниваем значение элемента email формы (value) со значением поля email объекта пользователя,
    и, если они не равны, то перезаписываем значение поля email объекта пользователя значением элемента email формы.
    не забыть в обработчике 'submit' формы отменить действие по умолчанию с помощью event.preventDefault().
*/

const formEl = document.querySelector('#user-form');
const { email, is_active, balance, friends, gender, eye_color } = formEl.elements;
eye_color.innerHTML = colors
    .map(color => `<option value="${color.name.toLowerCase()}">${color.name}</option>`)
    .join('');

const selectEl = document.querySelector('select#users');
selectEl.insertAdjacentHTML(
    'beforeend',
    users.map((user, index) => `<option value="${index}">${user.name}</option>`).join('')
);
selectEl.addEventListener('change', event => {
    const user = users[event.currentTarget.value];
    email.value = user.email;
    balance.value = user.balance;
    is_active.checked = user.isActive;
    gender.checked = user.gender == 'male';
    const html = user.friends.map(friend => `<option>${friend}</option>`).join('');
    friends.innerHTML = html;
    eye_color.value = user.eyeColor;
});

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const user = users[selectEl.value];
    user.email = email.value;
    user.balance = balance.value;
    user.isActive = is_active.checked;
    user.gender = gender.checked ? 'male' : 'female';
    user.eyeColor = eye_color.value;
});
