/*
-  Найти элемент <span> c CSS-классом "message", который будет использоваться для вывода текущего значения <input>. 
-  Значение (число) выводится в текстовый контент этого <span>. 
-  Для вывода напишем функцию стрелочную функцию setSpan().
-  Значение выводится как при загрузке страницы, так и при любом изменении текущего значения <input> (событие 'change').
*/

const spanEl = document.querySelector('.message');
const rangeEl = document.querySelector('#size-control > input');

const setSpan = () => {
    spanEl.textContent = `${rangeEl.value}`;
};

rangeEl.addEventListener('change', setSpan);
setSpan();
