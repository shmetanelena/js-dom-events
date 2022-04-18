let serial = 1;
/*users = users.map((user, index) => {
    return {
        id: index + 1,
        name: user.name,
        email: user.email,
    };
});*/
//<td id="user-${user.id}-active">${user.isActive ? 'Yes' : 'No'}</td>
users = users.map(user => {
    return { id: serial++, ...user };
});

const createUserTr = user => `
    <tr id="user-${user.id}">
        <td>${user.id}</td>
        <td id="user-${user.id}-name">${user.name}</td>
        <td id="user-${user.id}-balance">${user.balance} $</td>
        <td id="user-${user.id}-active"><i class="material-icons">${user.isActive ? 'done' : 'clear'}</i></td>
        <td>
            <button data-id="${user.id}" data-action="edit" class="btn-flat"><i class="material-icons">edit</i></button>
            <button data-id="${
                user.id
            }" data-action="delete" class="btn-flat"><i class="material-icons">delete</i></button>
        </td>
    </tr>
`;

const tbody = document.querySelector('tbody');
tbody.innerHTML = users.map(createUserTr).join('');

const deleteClick = event => {
    const id = Number(event.currentTarget.dataset.id);
    const pos = users.findIndex(user => user.id === id);
    if (pos !== -1) {
        users.slice(pos, 1);
        document.querySelector(`tr#user-${id}`).remove();
    }
};

let currentUser = null;

const userFormModal = M.Modal.init(document.querySelector('#user-form-modal'), {
    /*onOpenStart: function () {
        console.log('Modal: open start');
    },
    onOpenEnd: function () {
        console.log('Modal: open end');
    },
    onCloseStart: function () {
        console.log('Modal: close start');
    },*/

    onCloseEnd: function () {
        //console.log('Modal: close end');
        const { name, balance, is_active } = userForm.elements;
        if (currentUser) {
            if (currentUser.name !== name.value) {
                currentUser.name = name.value;
                document.querySelector(`#user-${currentUser.id}-name`).textContent = currentUser.name;
            }
            if (currentUser.balance !== balance.value) {
                currentUser.balance = balance.value;
                document.querySelector(`#user-${currentUser.id}-balance`).textContent = currentUser.balance;
            }
            if (currentUser.isActive !== is_active.checked) {
                currentUser.isActive = is_active.checked;
                document.querySelector(`#user-${currentUser.id}-active`).textContent = currentUser.isActive;
            }
        } else {
            const user = { id: serial++, name: name.value, balance: balance.value, isActive: is_active.checked };
            users.push(user);
            tbody.insertAdjacentHTML('beforeend', createUserTr(user));
            document.querySelectorAll(`button[data-id="${user.id}"]`).forEach(button => {
                switch (button.dataset.action) {
                    case 'edit': {
                        button.addEventListener('click', editClick);
                        break;
                    }
                    case 'delete': {
                        button.addEventListener('click', deleteClick);
                        break;
                    }
                }
            });
        }
    },
});
const userForm = document.querySelector('#user-form');

const editClick = event => {
    const id = Number(event.currentTarget.dataset.id);
    const user = users.find(user => user.id === id);
    //console.log(user);
    const { name, balance, is_active } = userForm.elements;
    name.value = user.name;
    balance.value = user.balance;
    is_active.checked = user.isActive;
    currentUser = user;
    userFormModal.open();
};

document.querySelectorAll('button[data-action="edit"]').forEach(button => button.addEventListener('click', editClick));
document
    .querySelectorAll('button[data-action="delete"]')
    .forEach(button => button.addEventListener('click', deleteClick));

document.querySelector('#user-add').addEventListener('click', event => {
    const { name, balance, is_active } = userForm.elements;
    name.value = '';
    balance.value = 1000;
    is_active.checked = false;
    currentUser = null;
    userFormModal.open();
});
