/*
1.  Заполнить таблицу данными из массива users: первая колонка - чекбокс, остальные - из полей name, email, balance.
    Тело таблицы формируем как строку HTML, которую присвоим tbody через innerHTML. 
    Для нахождения элемента tbody используем селектор потомка (смотри "HTML+CSS Модуль 2 - Занятие 3 - Селекторы и цвет").
   Шаблон строки для элемента td с чекбоксом: 
        <td><input type="checkbox" id="${index}" data-index="${index}"><label for="${index}"></label></td>
    
2. Чекбокс в заголовке таблицы должен работать следующим образом:
    При событии изменения значения ('change'):
        - если галочка установлена, то нужно установить галочки всем чекбоксам в колонке;
        - если галочка снята, то нужно галочки с всех чекбоксов в колонке.
 
    Для нахождения элемента checkbox в заголовке таблицы используем селектор ребенка. Обрати внимание, что путь к нужному 
    нам элементу состоит из нескольких частей.

3. Чекбоксы в первой колонке (кроме того, что в заголовке) должны работать следующим образом:
    При событии изменения значения ('change') нужно вывести в консоль сообщение 
    вида: 'User {имя пользователя} {checked/uncheked}'.

    Чтобы найти все чекбоксы мы используем селектор атрибута.

    Чтобы вывести имя пользователя, его нужно найти в массиве users. Для того, чтобы найти нужный обьект, можно, например,
    сохранить его индекс в data-атрибуте чекбокса. Например, добавить атрибут data-index, который содержит индекс объкета в масссиве 
    и затем использовать его.
    
    
4.  Решим вместе. 
    При нажатии чекбоксов постоянно пересчитываем общий баланс, который считается как сумма балансов всех выбранных пользователей.
    Результат записывается в label с class="value".

    
    
*/

const tbodyEl = document.querySelector('.striped > tbody');
const checkboxAllEl = document.querySelector('.tooltip > input');
const labelEl = document.querySelector('label.value');

tbodyEl.innerHTML = users
    .map(
        (user, index) =>
            `<tr>
        <td><input type="checkbox" id="${index}" data-index="${index}"><label for="${index}"></label></td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.balance}</td>
    </tr>
    `
    )
    .join('');

const checkboxes = tbodyEl.querySelectorAll('input[type="checkbox"]');

checkboxAllEl.addEventListener('change', () => {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = checkboxAllEl.checked;
    }
});

const checkboxClicked = e =>
    console.log(
        `User ${users[e.currentTarget.dataset.index].name} ${e.currentTarget.checked ? 'checked' : 'unchecked'}`
    );
checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkboxClicked));

const recalcBalance = () => {
    const value = users
        .filter((user, index) => checkboxes[index].checked)
        .reduce((prevValue, user) => prevValue + user.balance, 0);
    labelEl.textContent = value;
};
checkboxes.forEach(checkbox => checkbox.addEventListener('change', recalcBalance));
checkboxAllEl.addEventListener('change', recalcBalance);
