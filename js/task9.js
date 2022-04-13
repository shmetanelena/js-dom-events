/*
1. Заполнить элемент select списком названий цвета из массива colors.
    Значения будут: White, Silver, Gray, ...
    При выборе цвета (событие 'change') нужно установить цвет фона страницы выбранным цветом.
    
Рекомендации:
    - Для хранения hex-кода цвета можно использовать value элементов option. В это поле можно записать сторку с hex-кодом.
    - Получить value выбранного option можно из value элемента select.
    - Для изменения цвета фона используем element.style.backgroundColor.

2. Сделать так, чтобы при загрузке страницы сразу цвет фона был черный.
    
Рекомендации:
    - Можно сделать функцию setColor(color), которая устанавливает цвет фона в color, где color - строка с hex-кодом цвета. 
    - В обработчике события 'change' делаем вызов этой функции, со значением из value элемента select - setColor(event.currentTarget.value).
    - Делаем вызов функции setColor({hex-код черного цвета}). Это установит нужный цвет при загрузке.
    - Получение hex-код черного цвета:
        Для получения hex-кода черного цвета нужно найти объект с цветом 'Black' в массиве colors.
        Поиск в массиве объектов делается с помощью функции Array.find(callback) по условию - color.name === 'Black'. 
        Найдя требуемый объект получаем из него поле hex, которое и содержит hex-код цвета.
    
    - Дополнительно, можно установить select.value = {hex-код черного цвета}.
        Тогда сам элемент select будет содержать выбранный цвет 'Black'.
        Примечание: Присвоение select.value нужного значения не вызывает автоматически событие 'change' на элементе select.
        Если бы вызывало, то можно было бы написаь select.value = {hex-код}, далее произошло бы событие 'change', 
        вызвался написанный нами обработчик и фон бы имзенился автоматически. Но событие не вызывается (.
*/

const selectEl = document.querySelector('select');

const setColor = color => {
    document.body.style.backgroundColor = color;
};

selectEl.addEventListener('change', event => {
    //let color = event.currentTarget.value;
    //document.body.style.backgroundColor = color;
    setColor(event.currentTarget.value);
});

colors.forEach(color => {
    const optionEll = document.createElement('option');
    optionEll.setAttribute('value', `${color.hex}`);
    optionEll.textContent = `${color.name}`;
    optionEll.style.backgroundColor = color.hex;
    selectEl.append(optionEll);
});
//  )))))) Психанула
//document.body.style.backgroundColor = '#000000';

const defColor = colors.find(color => color.name === 'Black').hex;
selectEl.value = defColor;
setColor(defColor);

/*const setColor = color => {
    document.body.style.backgroundColor = color;
};
selectEl.addEventListener('change', setColor(event.currentTarget.value));

colors.forEach(color => {
    const optionEll = document.createElement('option');
    optionEll.setAttribute('value', `${color.hex}`);
    optionEll.textContent = `${color.name}`;
    selectEl.append(optionEll);
});

setColor(color);
*/
