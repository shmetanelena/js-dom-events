/*
1. Создать селектор <select> списком городов из массива phone_codes (Kiyv, Odessa, ...) и добавить его в документ (прям в body).
2. При выборе города (событие change) вывести в консоль сообщение: "The selected city is '{имя города}' with phone code '{телефонный код}'"
3. Выполнить пп. 1-2, но города в селекторе разместить в алфавитном порядке
 */
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const phone_codes = [
    { city: 'Kiyv', code: '044' },
    { city: 'Odessa', code: '048' },
    { city: 'Lviv', code: '032' },
    { city: 'Kharkiv', code: '057' },
    { city: 'Dnipro', code: '056' },
];
const pEl = document.querySelector('#back');
const onSelectClick = event => {
    const select = event.currentTarget;

    // console.log(`selectedIndex=${select.selectedIndex}`);
    // console.log('options=', select.options);
    //const option = select.options[select.selectedIndex];
    //console.log(option.text, option.value);
    //   console.log(`${event.currentTarget.options.value}`);

    // select.value -  выбранное значение
    // select.selectedIndex - индексы выбранного значения в массиве options
    //способ 1
    const item = phone_codes[select.selectedIndex];
    console.log(`The selected city is '${item.city}' with phone code '${item.code}'`);
    //способ 2
    const option = select.options[select.selectedIndex];
    console.log(`The selected city is '${option.text}' with phone code '${select.value}'`);

    console.log(option);
    console.log(option.getAttribute('value'), option.value, option.textContent);
    console.log(option.dataset.index);
};

const selectEl = document.createElement('select');
selectEl.style.width = '15%';
selectEl.style.hight = '15%';
selectEl.style.fontSize = '25px';

selectEl.style.backgroundColor = getRandomHexColor();
selectEl.addEventListener('change', onSelectClick);

phone_codes.forEach((name, index) => {
    const optionEl = document.createElement('option');
    optionEl.setAttribute('value', name.code);
    optionEl.textContent = name.city;
    optionEl.style.backgroundColor = getRandomHexColor();
    optionEl.setAttribute('data-index', index);
    selectEl.append(optionEl);
});
//console.log(selectEl);

document.body.append(selectEl);

const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
];

const divEl = document.createElement('div');
divEl.style.width = '100px';
divEl.style.height = '100px';
divEl.style.margin = '10px';

const selectColorEl = document.createElement('select');
selectColorEl.style.width = '15%';
selectColorEl.style.hight = '15%';
selectColorEl.style.fontSize = '25px';
//selectColorEl.style.backgroundColor = getRandomHexColor();
selectColorEl.addEventListener('change', event => {
    const color = event.currentTarget.value;
    divEl.style.backgroundColor = color;
});

colors.forEach(color => {
    const optionEl = document.createElement('option');
    optionEl.setAttribute('value', color.hex);
    optionEl.textContent = color.name;
    selectColorEl.append(optionEl);
});
document.body.append(divEl, selectColorEl);
