/*
1.  Текстовое поле 'Button text'.
    Задает название кнопки.
    При изменении содержимого (событие 'input') название кнопки меняется.

2.  Сheckbox 'Alert with button text'.
    Если галочка стоит, то при нажатии кнопки выводится alert с названием кнопки.

3.  Сheckbox 'Print button text to console'.
    Если галочка стоит, то при нажатии кнопки - название кнопки выводится в консоль.

4.  Сheckbox 'Disable button'.
    Если галочка стоит, то при кнопка становится неактивной.
    Используется свойство элемента disabled (true/false).

5.  Сheckbox 'Visible button'.
    Если галочка стоит, то при кнопка становится невидимой.
    Для того, чтобы спрятать элемент используем CSS-класс 'unvisible'.


Рекомндации:
    - При изменении состояния checkbox (галочку добавили или убрали) происходит событие 'change'. 
    Текущее состояние можно узнать по свойству checked элемента (true/false).
    
    - Помним, что добавление/удаление обработчиков событий делаем с помощью addEventListener/removeEventListener.

    - Для поиска элемента, вложенного в другой элемент, можно использовать селектор ребенка ('parent > child'). 
    Также при необходмости можно использовать селектор вида 'элемент[атрибут]'.
    Можно перечитать статью 'Селекторы' Модуля 2.

*/
const btnEl = document.querySelector('#button');

const inputEl = document.querySelector('#button-text > input');

inputEl.addEventListener('input', event => {
    btnEl.textContent = event.currentTarget.value;
});

const textToAlert = event => alert(event.currentTarget.textContent);
const textToConsole = event => console.log(event.currentTarget.textContent);

const checkboxBtnEl = document.querySelector('#checkbox-button-alert > input');

const setBtnEventListener = (checkbox, onBtnClick) => {
    if (checkbox.checked) {
        btnEl.addEventListener('click', onBtnClick);
    } else {
        btnEl.removeEventListener('click', onBtnClick);
    }
};

checkboxBtnEl.addEventListener('change', event => setBtnEventListener(event.currentTarget, textToAlert));

const checkboxConsolEl = document.querySelector('#listeners > div[data-type="checkbox-button-console"] > input');
checkboxConsolEl.addEventListener('change', event => setBtnEventListener(event.currentTarget, textToConsole));

const checkActiveBtnEl = document.querySelector('#checkbox-button-enable');
checkActiveBtnEl.addEventListener('change', event => (btnEl.disabled = event.currentTarget.checked));

const checkVisibleBtnEl = document.querySelector('#checkbox-button-visible');
checkVisibleBtnEl.addEventListener('change', event => {
    /*if (event.currentTarget.checked) {
        btnEl.classList.add('unvisible');
    } else {
        btnEl.classList.remove('unvisible');
    }*/
    btnEl.classList.toggle('unvisible');
});
