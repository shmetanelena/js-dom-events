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
//=== 6 ===
/*
    Свойству innerHTML корневого div данной задачи присвоить HTML-строку: 
    '<div><input type="checkbox"><label>Select all</label></div><div><input type="checkbox"><input type="checkbox"><input type="checkbox"></div>'
    Найти чекбокс с меткой "Select all" и 3 остальных безымянных чекбокса (для их поиска можно использовать querySelectorAll).
    Написать обработчик события "change" для чекбокса "Select all" чтобы, если он checked, все безымянные также установились, 
    а иначе - все сбросились.

    =====
    Сорри, есть поправки к задачам 14.6, 14.7.
    Было указано, что следует указанную в задаче HTML-строку присвоить div.innerHTML. 
    На самом деле, лучше вставить строку за последним дочерним элементом div-а. 
    Для этого мы используем, div.insertAdjacentHTML('beforeend', ...).

    Для поиска вставленных div-в и input-ов в них работаем со свойствами lastElementChild, 
    previousElementSibling, firstElementChild и querySelectorAll при необходимости.
    ===
 */
{
    const div = nextTask();
    div.insertAdjacentHTML(
        'beforeend',
        '<div><input type="checkbox"><label>Select all</label></div><div><input type="checkbox"><input type="checkbox"><input type="checkbox"></div>'
    );

    const checkSelectAll = div.firstElementChild.nextElementSibling.firstElementChild;
    const checks = div.lastElementChild.children;
    checkSelectAll.addEventListener('change', () => {
        for (let i = 0; i < checks.length; i++) {
            checks[i].checked = checkSelectAll.checked;
        }
    });
}
//=== 7 ===
/*
Свойству innerHTML корневого div данной задачи присвоить HTML-строку: 
    '<div><input type="checkbox" disabled><label>Select all</label></div><div></div>'
    Создать массив checkboxes. Создать и добавить в массив 3 чекбокса (используем цикл for).
    Добавить элементы массива checkboxes в вл второй вложенный div (используем append(...checkboxes)).
    Создать функцию setSelectAll(), которая:
        - устанавливает чекбокс 'Select all' (делает его checked=true), 
        если установлены все чексбоксы массива checkboxes (то есть, у них всех checked равен true) 
        - сбрасывает чекбокс 'Select all' (checked=false), если хоть один из чексбоксов не установлен 
    Для проверки используем функцию массива every.

    Установить для всех чексбоксы массива checkboxes функцию setSelectAll как обрабочик события 'change'.
    */
{
    const div = nextTask();
    div.insertAdjacentHTML(
        'beforeend',
        '<div><input type="checkbox" disabled><label>Select all</label></div><div></div>'
    );

    let checkboxes = [];
    for (let i = 0; i < 3; i++) {
        const inputEl = document.createElement('input'); //<input type="checkbox" disabled>
        inputEl.type = 'checkbox';
        checkboxes.push(inputEl);
    }
    const divLast = div.lastElementChild;
    divLast.append(...checkboxes);

    const checkEll = divLast.previousElementSibling.firstElementChild;
    const setSelectAll = () => (checkEll.checked = checkboxes.every(checkbox => checkbox.checked));
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', setSelectAll));
}

//=== 8 ===
/*
Задача 8.
    Создать элемент input с type = 'number', с текущим значением (value) равным 1.
    Добавить обработчик на событие 'input', который добавляет в div N кнопок, где N - текущее значении input-а.
    Каждая кнопка имеет название - порядковый номер. То есть, если в input указано 3, то создается 3 кнопки с названиями
    "1", "2", "3".
    При нажатии на кнопку - выводим в консоль ее название.
 */
{
    const div = nextTask();
    const inputEl = document.createElement('input');
    inputEl.type = 'number';
    inputEl.setAttribute('value', '1');
    // inputEl.setAttribute('min', '1');
    // inputEl.setAttribute('max', '100');
    // inputEl.setAttribute('step', '5');

    div.append(inputEl);

    inputEl.addEventListener('change', createButtons(inputEl.currentTarget.value));

    const createButtons = number => {
        document.querySelectorAll('button').forEach(elem => elem.remove());
        for (let i = 1; i <= number; i++) {
            const btnEl = document.createElement('button');
            btnEl.textContent = `Button number ${i}`;
            btnEl.append(inputEl);
            btnEl.addEventListener('click', onClick);
        }
    };
    const onClick = event => console.log(`${event.currentTarget.textContent}`);
}

//=== 9 ===
/*
Задача 9.
    Создать элемент select и заполнить его значениями из массива users.
    Для каждой опции устанавливаем: текст - имя пользователя, атрибут value - email пользователя.
    1. При выборе пользователя в select найти соответствующий объект и вывести его в консоль.
    2. Установить значение value элемента select равным "careybarr@nurali.com".

 */
{
    const div = nextTask();
}
//=== 10 ===
/*
Задача 10.
    Создать массив buttons на основе массива users. Используем функцию map.
    У каждой кнопки установить:
        - название - фамилия пользователя, то есть у "Moore Hensley" будет "Hensley"; используем функцию для разделитель split();
        - id - строка task-${currentTaskNumber}-user-${index}, где index - индекс в массиве users;
    При нажатии на кнопку выводим alert с сообщением:
        User: <полное имя пользователя (name)>
        Friends: <спискок друзей в виде одной строки, при этом разделитель между именами друзей - строка "; ">
    Добавить элементы массива в div - div.append(...buttons).

    Пример использования split:
    В результате:
        const [first, second, third, fourth] = 'one_two_three_four'.split('_');
    имеем first="one" second="two" third="three" fourth="four"

 */
{
    const div = nextTask();
}
