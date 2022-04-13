/*
    Функция nextTask() создает новый div, который добавляется в документ и возвращяется как результат выполнения фунции.
    Решение выполняется на этом этом div. 
    div имеет идентификатор в виде 'task-{currentTaskNumber}'.

    Код создания div и выполнения для каждой задачи лучше встваить в отдельные блок {}.
        чтобы можно было использовать одинаковые имена и не было конфликтов имен. 
    Пример:
    {
        const div = nextTask();
        // код выполнения
    }
    {
        const div = nextTask();
        // код выполнения
    }
    ...

    Задачи

1.  Создать select.
    Добавить в него опции из массива users при этом каждом option указать текст - имя пользователя, 
    а атрибут value - email пользователя.
    Опции формируем как HTML-строку, которую присваиваем select.innerHTML.
    При выборе пользователя вывести в консоль: 
        - выбранный индекс, 
        - текущее value элемента select,
        - users[{выбранный индекс}].

2. Создать элементы label, чекбокс.
    При нажатии на чекбокс label принимает текст 'Is checked' или 'Is NOT checked' в зависимости от значения чекбокс.

3. Создать кнопку и чекбокс. Создать функцию-обработчик onButtonClick(), которая выводит alert с текстом 'Message'.
    При нажатии на чекбокс, кнопке добавляется обработчик onButtonClick, если checked, 
    или удаляется, в противном случае

4. Создать select. Добавить в него цвета из массива colors. При этом, текст опции - название цвета (name);
    value - hex-код цвета; фон опции раскрасить в соответствующий цвет.
    При выборе цвета - окрасить фон div-а на котором выполняется задача в выбранный цвет. Используем select.value.

К задаче 14.
5. Создать datalist c идентификатором "color-list" и заполнить его опциями с данными из массива colors.
   В каждой опции: textContent - название цвета (name), value - код цвета (hex).
   Создать текстовый input и связать его с datalist через идентификатор datalist-а.
   Просмотреть конспект "HTML+CSS п.6.11 Элемент <datalist>" .

*/
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

let currentTaskNumber = 0;
const nextTask = () => {
    const num = ++currentTaskNumber;
    document.body.insertAdjacentHTML(
        'beforeend',
        `<div id="task-${num}" class="task"><div><span class="task-title">Task ${num}</span></div></div><hr>`
    );
    return document.querySelector(`#task-${num}`);
};

{
    //=== Task 1 ===
    /*Создать select.
    Добавить в него опции из массива users при этом каждом option указать текст - имя пользователя, 
    а атрибут value - email пользователя.
    Опции формируем как HTML-строку, которую присваиваем select.innerHTML.
    При выборе пользователя вывести в консоль: 
        - выбранный индекс, 
        - текущее value элемента select,
        - users[{выбранный индекс}].
    */
    const div = nextTask();

    const selectorEl = document.createElement('select');
    selectorEl.style.width = '250px';
    selectorEl.style.hight = '15%';
    selectorEl.style.fontSize = '25px';
    selectorEl.style.backgroundColor = getRandomHexColor();

    selectorEl.innerHTML = users.map(user => `<option value="${user.email}">${user.name}</option>`).join('');
    div.append(selectorEl);

    selectorEl.addEventListener('change', event =>
        console.log(
            ` selectedIndex= ${event.currentTarget.selectedIndex}\n Текущее value элемента select (select.value)= ${event.currentTarget.value}\n users[select.selectedIdex]: `,
            users[event.currentTarget.selectedIndex]
        )
    );
}

{
    //=== Task 2 ===
    /*2. Создать элементы label, чекбокс.
    При нажатии на чекбокс label принимает текст 'Is checked' или 'Is NOT checked' в зависимости от значения чекбокс.
    */
    const div = nextTask();

    const labelEl = document.createElement('label');
    labelEl.style.fontSize = '25px';
    labelEl.style.fontWeight = 'bold';
    labelEl.style.color = getRandomHexColor();
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    div.append(labelEl, inputEl);

    const onChange = () => (labelEl.textContent = inputEl.checked ? 'Is checked' : 'Is NOT checked');
    //const onChange2 = () => (labelEl.textContent = `Is ${inputEl.checked ? '' : 'NOT'} checked`);
    inputEl.addEventListener('change', onChange);

    onChange();
}

{
    //=== Task 3 ===
    /* 3. Создать кнопку и чекбокс. Создать функцию-обработчик onButtonClick(), которая выводит alert с текстом 'Message'.
    При нажатии на чекбокс, кнопке добавляется обработчик onButtonClick, если checked, 
    или удаляется, в противном случае 
    */
    const div = nextTask();
    const buttonEl = document.createElement('button');
    const inputEl = document.createElement('input');
    inputEl.type = 'checkbox';
    div.append(buttonEl, inputEl);

    const onButtonClick = () => {
        alert('Messege');
    };

    inputEl.addEventListener('change', event => {
        inputEl.checked
            ? buttonEl.addEventListener('click', onButtonClick)
            : buttonEl.removeEventListener('click', onButtonClick);
    });
}

{
    //=== Task 4 ===
    /*4. Создать select. Добавить в него цвета из массива colors. При этом, текст опции - название цвета (name);
    value - hex-код цвета; фон опции раскрасить в соответствующий цвет.
    При выборе цвета - окрасить фон div-а на котором выполняется задача в выбранный цвет. Используем select.value.
    */

    const div = nextTask();
    const selectEl = document.createElement('select');
    //div.append(selectEl);
    selectEl.innerHTML = colors.map(color => `<option value="${color.hex}">${color.name}</option>`).join('');
    div.append(selectEl);

    selectEl.addEventListener('change', event => {
        div.style.backgroundColor = `${event.currentTarget.value}`;
    });
}

{
    //=== Task 5 ===
    /*5. Создать datalist c идентификатором "color-list" и заполнить его опциями с данными из массива colors.
   В каждой опции: textContent - название цвета (name), value - код цвета (hex).
   Создать текстовый input и связать его с datalist через идентификатор datalist-а.
   Просмотреть конспект "HTML+CSS п.6.11 Элемент <datalist>" .
    */
    const div = nextTask();

    const inputEl = document.createElement('input');

    inputEl.type = 'text';
    inputEl.setAttribute('list', 'color-list');

    const datalistEl = document.createElement('datalist');
    datalistEl.setAttribute('id', 'color-list');

    colors.forEach(color => {
        const optionEl = document.createElement('option');
        optionEl.setAttribute('value', `${color.hex}`);
        optionEl.textContent = color.name;
        datalistEl.append(optionEl);
    });
    inputEl.value = colors[2].hex;
    div.append(inputEl, datalistEl);
}
