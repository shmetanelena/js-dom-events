/*
1.  При нажатии кнопки с идентификатором "button-add-div" в <div> с дентификатором "place"
    добавляем <div> размером 100 х 100 пикселей со случайным цветом. Для получения цвета
    используем стрелочную фунцию getRandomHexColor.
2.  При клике на созданный <div> он удаляется. 
3.  Добавить кнопку "Clear All", при нажатии на которую будут удаляться все элементы
 */

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const buttonEl = document.querySelector('#button-add-div');
const place = document.querySelector('#place');
const onDivElClick = event => {
    event.currentTarget.remove();
};

const onButtonClick = event => {
    const divEl = document.createElement('div');
    divEl.style.width = '100px';
    divEl.style.height = '100px';
    let color = getRandomHexColor();
    // #RRGGBB - 00..FF
    while (color.length < 7) {
        console.log(`Bad color ${color}. Was appended symbol '0'`);
        color += '0';
    }

    divEl.style.backgroundColor = color;
    divEl.style.border = '2px dashed tomato';

    divEl.style.margin = '10px';
    console.log(divEl);
    place.append(divEl);
    divEl.addEventListener('click', onDivElClick);
};

buttonEl.addEventListener('click', onButtonClick);

const btnClearEl = document.createElement('button');
btnClearEl.textContent = 'Clear All';
buttonEl.after(btnClearEl);

const onClearAll = event => {
    place.querySelectorAll('div').forEach(elem => elem.remove());
    console.log('allDivEl');
};

btnClearEl.addEventListener('click', onClearAll);
