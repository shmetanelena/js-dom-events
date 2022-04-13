/*
1. Заполнить элемент <select> 'User' именами пользователей (поле name) из массива users
     (должно содержать - Moore Hensley, Sharlene Bush, ...).
    При поиске элементов в документе можно использовать CSS-селеторы типа 'parent > children'.

2. При выборе пользователя нужно заполнить поля:

    -  В поле 'Email' записываем e-mail пользователя (поле email).

    -  В поле 'Balance' записываем баланс пользователя (поле balance).

    -  В поле 'Friends', элемент <select> записываем друзей пользователя из поля friends.

    -  В поле 'Active' устанавливаем галочку, если активный (поле isActive).
       Для изменения checkbox (галочку добавить или убрать) используется свойство  checked элемента,
       которое принимает true/false.

    -  В поле 'Eye color' записываем цвеи глаз  пользователя (поле eyeColor).

    Можно использовать selectedIndex, так как массив users не изменяется.
    
3. При выборе друга (элемент <select> 'Friends') нужно вывести его имя консоль. 
    Используем свойство value.

4. Покрасить значение в поля 'Eye color' в тот цвет, который там указан. 
    Для поиска кода нужного цвета используем массив colors. 
    При писке по названию цвета учитываем регистр и поэтому рекомендуется приводить строки 
    в один регистр, например в верхний с помощью функции toUpperCase() объекта String.

5. Сделать так, чтобы при загрузке страницы сразу отображался пользователь с индексом 0 ("Moore Hensley").
 
*/
const divEl = document.querySelector('#select-user');
const selectorUsersEl = document.querySelector('#select-user > select'); //user selector
const userEmailEl = document.querySelector('#user-email > .value');
const userBalanceEl = document.querySelector('#user-balance > .value');
const selectorFriendsEl = document.querySelector('#user-friends > select'); //friends selector
const userActiveEl = document.querySelector('#user-active > input[type = "checkbox"]');
const userEyeColorEl = document.querySelector('#user-eye-color > .value');
const eyeLeftEl = document.createElement('img');
eyeLeftEl.style.widows = '50px';
eyeLeftEl.style.height = '50px';
eyeLeftEl.setAttribute('src', '');
divEl.append(eyeLeftEl);
const eyeEl = document.createElement('img');
eyeEl.style.widows = '50px';
eyeEl.style.height = '50px';
eyeEl.setAttribute('src', '');
divEl.append(eyeEl);

console.log(selectorUsersEl, userEmailEl, userBalanceEl, selectorFriendsEl, userActiveEl, userEyeColorEl);

const eyeImages = [
    //{ name: 'Blue', src: 'blue-eye.png' },
    { name: 'Brown', src: 'braun-eye.png' },
    { name: 'Green', src: 'greeneye.png' },
];

const setImage = (imgEl, eyeImage) => {
    if (eyeImage) {
        imgEl.classList.remove('unvisible');
        imgEl.setAttribute('src', `/pictures/${eyeImage.src}`);
    } else {
        imgEl.classList.add('unvisible');
    }
};

const setUser = () => {
    //const userName = currentTarget.value;
    const selectorUsersElValue = selectorUsersEl.value;
    const selectorUsersElIndex = selectorUsersEl.selectedIndex;
    const selectorUsersElText = selectorUsersEl.options[selectorUsersElIndex].text;
    const item = users[selectorUsersEl.selectedIndex];
    //const itemFriend = users[selectorFriendsEl.selectedIndex];
    userEmailEl.textContent = item.email;
    userBalanceEl.textContent = item.balance;
    //if (item.isActive ? (userActiveEl.checked = true) : (userActiveEl.checked = false));
    userActiveEl.checked = item.isActive;

    const eyeColor = item.eyeColor.toUpperCase();
    console.log('eyeColor = ', eyeColor);
    const findColor = colors.find(color => color.name.toUpperCase() === eyeColor);
    const hexColor = findColor.hex;
    userEyeColorEl.textContent = item.eyeColor;
    userEyeColorEl.style.color = hexColor;

    const eyeImage = eyeImages.find(img => img.name.toUpperCase() === eyeColor);
    setImage(eyeLeftEl, eyeImage);
    setImage(eyeEl, eyeImage);

    selectorFriendsEl.querySelectorAll('option').forEach(option => option.remove());
    const options = item.friends.map(friend => {
        const optionFriendEl = document.createElement('option');
        optionFriendEl.setAttribute('value', friend);
        optionFriendEl.textContent = friend;
        return optionFriendEl;
    });
    selectorFriendsEl.append(...options);
};
selectorFriendsEl.addEventListener('change', event => console.log(event.currentTarget.value));
selectorUsersEl.addEventListener('change', setUser);

users.forEach(user => {
    const optionUserEl = document.createElement('option');
    optionUserEl.setAttribute('value', user.name);
    optionUserEl.textContent = user.name;
    selectorUsersEl.append(optionUserEl);
});

setUser();
