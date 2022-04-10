/*
1.  Сделать функцию updateColor, которая устанавливает цвет фона элемента <div> с классом "box"
    (далее - элемент Box) cо значениями из элементов <input> с идентификаторами "red", "green", "blue". 
    Используем вспомогательную функцию toHex, с помощью которой можно преобразовать 
    числа диапазона 0..255 в строки '00'..'FF'.

2.  Выполнить вызов функции updateColor, чтобы установить цвет элемента Box сразу при загрузке страницы.

3.  При изменении значения любого из <input> (событие 'change') меняем цвет элемента Box.
*/

const toHex = s => ('0' + Number(s).toString(16)).slice(-2).toUpperCase();
const boxEl = document.querySelector('.box');

const rangeRedEl = document.querySelector('#red');
const spanRedEl = document.createElement('span');
spanRedEl.style.color = `red`;
spanRedEl.style.fontWeight = 'bold';
rangeRedEl.after(spanRedEl);

const rangeGreenEl = document.querySelector('#green');
const spanGreenEl = document.createElement('span');
spanGreenEl.style.color = `green`;
spanGreenEl.style.fontWeight = 'bold';
rangeGreenEl.after(spanGreenEl);

const rangeBluedEl = document.querySelector('#blue');
const spanBlueEl = document.createElement('span');
spanBlueEl.style.color = `blue`;
spanBlueEl.style.fontWeight = 'bold';
rangeBluedEl.after(spanBlueEl);

const boxColorText = document.createElement('p');
boxEl.before(boxColorText);

const updateColor = () => {
    //RED
    const redHex = toHex(rangeRedEl.value);
    spanRedEl.textContent = `Value: ${rangeRedEl.value} HexValue: ${redHex}`;
    //GREEN
    const greenHex = toHex(rangeGreenEl.value);
    spanGreenEl.textContent = `Value: ${rangeGreenEl.value} HexValue: ${greenHex}`;
    //BLUE
    const blueHex = toHex(rangeBluedEl.value);
    spanBlueEl.textContent = `Value: ${rangeBluedEl.value} HexValue: ${blueHex}`;

    const boxColor = (boxEl.style.backgroundColor = `#${redHex}${greenHex}${blueHex}`);
    boxColorText.textContent = `Final color: ${boxColor}`;
    boxColorText.style.color = `${boxColor}`;
    boxColorText.style.fontWeight = 'bold';
};

rangeRedEl.addEventListener('change', updateColor);
rangeGreenEl.addEventListener('change', updateColor);
rangeBluedEl.addEventListener('change', updateColor);
updateColor();
