/*
1.  В элемент <span> выводим значение счетчика counter. 
    Написать функццию updateCounter(value), которая изменяет значение counter на число value
    (то есть, увеличивает, если value положительное число, и уменьшает, если отрицательное), 
    а также выводит значение counter в <span>. 
    Далее в обработчиках следует использовать ее.
2.  Кнопка "+" увеличивает значение counter на 1.
3.  Кнопка "-" уменьшает значение counter на 1.
4.  Нажатие клавиши "Стрелка вверх" увеличивает значение counter на 1.
5.  Нажатие клавиши "Стрелка вниз" уменьшает значение counter на 1.
6.  Нажатие клавиши "Стрелка вверх" + CTRL увеличивает значение counter на 10.
7.  Нажатие клавиши "Стрелка вниз" + CTRL уменьшает значение counter на 10.
*/

let counter = 10;
const divEl = document.querySelector('#size-control');
const spanEl = document.querySelector('#size-control > span');
spanEl.textContent = counter;

const valueEl = document.createElement('input');
valueEl.style.width = '60px';
valueEl.style.fontSize = '25px';
valueEl.textContent = counter;
//divEl.after(valueEl);
const textEl = document.createElement('p');
textEl.textContent = 'Enter a positive or negative namber:';
textEl.style.fontStyle = 'oblique';
textEl.style.fontWeight = 'bold';
valueEl.before(textEl);
valueEl.addEventListener('change', event => updateCounter(event.currentTarget.value));

const decrBtnEl = document.querySelector('button[data-action ="decrease"]');
decrBtnEl.addEventListener('click', event => updateCounter(-1));
const incrBtnEl = document.querySelector('button[data-action="increase"]');
incrBtnEl.addEventListener('click', event => updateCounter(1));
// == можно по значению любого атрибута вытаскивать!!! )))
const test = document.querySelector('a[href="index.html"]');
console.log(test);

document.addEventListener('keydown', event => {
    event.preventDefault();
    if (event.key === 'ArrowUp') {
        updateCounter(event.shiftKey ? 10 : 1);
    } else if (event.key === 'ArrowDown') {
        updateCounter(event.shiftKey ? -10 : -1);
    }
    console.log('key: ', event.key);
    console.log('code: ', event.code);
});

const updateCounter = value => {
    const sum = (spanEl.textContent = counter + Number(value));
    counter = sum;
};
