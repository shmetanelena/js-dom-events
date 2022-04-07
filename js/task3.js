/*
1. Создать селектор <select> списком городов из массива phone_codes (Kiyv, Odessa, ...) и добавить его в документ (прям в body).
2. При выборе города (событие change) вывести в консоль сообщение: "The selected city is '{имя города}' with phone code '{телефонный код}'"
3. Выполнить пп. 1-2, но города в селекторе разместить в алфавитном порядке
 */
const phone_codes = [
    { city: 'Kiyv', code: '044' },
    { city: 'Odessa', code: '048' },
    { city: 'Lviv', code: '032' },
    { city: 'Kharkiv', code: '057' },
    { city: 'Dnipro', code: '056' }
];
