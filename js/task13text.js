const formEl = document.querySelector('#user-form');
const colorEl = document.querySelector('select#user-eye-color');
colorEl.innerHTML = colors.map(color => `<option value="${color.name.toLowerCase()}">${color.name}</option>`).join('');
colorEl.addEventListener('change', event => console.log(event.currentTarget.value));

const { email, is_active, balance, friends, gender, eye_color } = formEl.elements;
//console.log(email, is_active, balance, friends, gender, eye_color);

const selectEl = document.querySelector('select#users');
selectEl.insertAdjacentHTML(
    'beforeend',
    users.map((user, index) => `<option value="${index}">${user.name}</option>`).join('')
);
selectEl.addEventListener('change', event => {
    const user = users[event.currentTarget.value];
    console.log(user);
    email.value = user.email;
    balance.value = user.balance;
    is_active.checked = user.isActive;
    gender.checked = user.gender === 'male';
    friends.innerHTML = user.friends.map(friend => `<option>${friend}</option>`).join('');
    eye_color.value = user.eyeColor;
});

formEl.addEventListener('submit', event => {
    event.preventDefault();
    let user = users[selectEl.value];
    let changed = false;
    if (user.email != email.value) {
        user.email = email.value;
        changed = true;
    }
    if (user.balance != balance.value) {
        user.balance = balance.value;
        changed = true;
    }
    if (user.isActive !== is_active.checked) {
        user.isActive = is_active.checked;
        changed = true;
    }
    const newGender = gender.checked ? 'male' : 'female';
    if (user.gender != newGender) {
        user.gender = newGender;
        changed = true;
    }
    if (user.eyeColor != eye_color.value) {
        user.eyeColor = eye_color.value;
        changed = true;
    }
    if (changed) {
        console.log('User was changed', user);
    }
});
