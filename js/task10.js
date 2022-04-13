/*
Есть условное храниелище товаров и функция getProduct(index), которая возвращает объект товара по его индексу.
Объект содержит поля id- иденетификатор, name - название, code - код товара, price - цена, amount - остаток на складе (случайно число).

1. По нажатию кнопки button заполнить элемент select списком товаров.
    Число товаров в списке взять как значение из input.
    В качестве имен используем свойство name товара.

Рекомендации:
    - перед заполнением select нужно его очистить от предыдущих options - находим их все в этом select с помощью 
      querySelectorAll и для каждого выполняем remove();
    - получить нужное число товаров в списке как значение (value) элемента <input>
    - зная число товаров можно сделать цикл от 0 до этого значения и на каждом шаге: получаем товар как результат 
      getProduct(i), создаем option, устанавливаем его название, добавляем созданный option в select;

2. При имзенении значения select нужно вывести информацию о товаре в консоль.

Рекомендации:
    - используем свойство selectedIndex элемента select 
    - зная индекс нужного товара можно получить сам товар из фукнции getProduct(index)
*/

const getProduct = index => {
    return {
        id: index,
        name: `Product #${index}`,
        code: 1000 + index,
        price: (index + 1) / 100,
        amount: Math.floor(Math.random() * 100),
    };
};

const buttonEl = document.querySelector('button');
const selectEl = document.querySelector('select');
const inputEl = document.querySelector('input');

const fillSelect = () => {
    selectEl.querySelectorAll('option').forEach(elem => elem.remove());
    const count = inputEl.value;
    for (let i = 0; i < count; i += 1) {
        const product = getProduct(i);
        const optionEl = document.createElement('option');
        optionEl.textContent = product.name;
        selectEl.append(optionEl);
    }
};

buttonEl.addEventListener('click', fillSelect);

inputEl.addEventListener('change', fillSelect);

selectEl.addEventListener('change', event => {
    const index = event.currentTarget.selectedIndex;
    const product = getProduct(index);
    console.log(product);
});
