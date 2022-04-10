/*
По данным из массива colors создать и добавить в документ набор кнопок с названиями 'White', 'Silver', ...
При клике на кнопку фон страницы окрашиваем в соответствующий цвет.
Цвет кнопки - согласно названию (белый, серый и т.д.)

Испольуем свойства element.style.backgroundColor.
Для хранения hex-кода цвета можно использовать атрибуты типа "data-...". 
Напомню, для доступа к тамким атрибутам в элементе используем поле поле element.dataset.


*/
const onClick = event => {
    const btnColor = event.currentTarget.dataset.color;
    document.body.style.backgroundColor = btnColor;
};
colors.forEach(color => {
    const btnEl = document.createElement('button');
    btnEl.textContent = `${color.name}`;
    btnEl.style.background = `${color.hex}`;
    btnEl.style.margin = '10px';
    btnEl.setAttribute('data-color', `${color.hex}`);
    document.body.append(btnEl);
    btnEl.addEventListener('click', onClick);
});
