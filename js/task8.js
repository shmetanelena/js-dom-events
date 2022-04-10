/*
1. Заполнить элемент <select> 'User' именами пользователей (поле name) из массива users
     (должно содержать - Moore Hensley, Sharlene Bush, ...).
    При поиске элементов в документе можно использовать CSS-селеторы типа 'parent > children'.

2. При выборе пользователя нужно заполнить поля:

    -  В поле 'Email' записываем e-mail пользователя (поле email).

    -  В поле 'Balance' записываем баланс пользователя (поле balance).

    -  В поле 'Friends', элемент <select> записываем друзей пользователя из поля friends.

    -  В поле 'Active' устанавливаем галочку, если активный (поле isActive).
       Для изменения checkbox (галочку добавить или убрать) используется свойство  checked элемента,
       которое принимает true/false.

    -  В поле 'Eye color' записываем цвеи глаз  пользователя (поле eyeColor).

    Можно использовать selectedIndex, так как массив users не изменяется.
    
3. При выборе друга (элемент <select> 'Friends') нужно вывести его имя консоль. 
    Используем свойство value.

4. Покрасить значение в поля 'Eye color' в тот цвет, который там указан. 
    Для поиска кода нужного цвета используем массив colors. 
    При писке по названию цвета учитываем регистр и поэтому рекомендуется приводить строки 
    в один регистр, например в верхний с помощью функции toUpperCase() объекта String.

5. Сделать так, чтобы при загрузке страницы сразу отображался пользователь с индексом 0 ("Moore Hensley").
 
*/

const selectorEl = document.querySelector('#select-user > select');
const userEmailEl = document.querySelector('#user-email > .value');
const userBalanceEl = document.querySelector('#user-balance > .value');
const userFriendsEl = document.querySelector('#user-friends > select');
const userActiveEl = document.querySelector('#user-active > input[type = "checkbox"]');
const userEyeColorEl = document.querySelector('#user-eye-color > .value');

console.log(selectorEl, userEmailEl, userBalanceEl, userFriendsEl, userActiveEl, userEyeColorEl);

users.forEach((user, index) => {
    const optionEl = document.createElement('option');
    optionEl.setAttribute('value', user.index);
    optionEl.textContent = user.name;
    selectorEl.append(optionEl);
});
