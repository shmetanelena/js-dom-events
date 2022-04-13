/*
1. Создать десять кнопок с названиями "Кнопка 1", "Кнопка 2", ...
2. При нажатии на каждую кнопку выводим alert "Нажата кнопка #<НОМЕР_КНОПКИ>" (например, "Нажата кнопка #1"). 
3. Функцию-обработчик клика на кнопке сделать стрелочной функцией - const onClick = (event) => {...}
4. Для хранения информации о номере кнопки (используется для вывода) используем аттрибут data-number.
 */
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const textInputEl = document.createElement('p');
textInputEl.textContent = '1)Enter the quantity of buttons, 2) click "Enter" or change focus and 3) click on button';
document.body.append(textInputEl);

const inputEl = document.createElement('input');
inputEl.type = 'text';
inputEl.style.height = '35px';
inputEl.style.width = '70px';
inputEl.style.margin = '10px';
document.body.append(inputEl);

inputEl.addEventListener('change', event => createButtons(event.currentTarget.value));

const createButtons = number => {
    document.querySelectorAll('button').forEach(elem => elem.remove());
    for (let i = 1; i <= number; i += 1) {
        const btnEl = document.createElement('button');
        btnEl.setAttribute('data-number', `${i}`);
        btnEl.textContent = `Кнопка ${i}`;
        btnEl.style.backgroundColor = getRandomHexColor();
        btnEl.style.border = '2px inset gray';
        btnEl.style.margin = '10px';
        document.body.append(btnEl);
        btnEl.addEventListener('click', onClick);
    }
};
const onClick = event => alert(`Нажата кнопка ${event.currentTarget.dataset.number}`);
