const users = require('./users.js');

const test = (etalonFunc, ourFunc, array, callback) => {
    console.log('\nTest: ' + etalonFunc + '\n');
    console.log('Exp', etalonFunc.call(array, callback));
    console.log('Got', ourFunc(array, callback));
};

/**
 *
 * @param {*} array
 * @param {*} callback  - (elem, index, array)
 */
const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

const printUserName = user => console.log(user.name);
test(Array.prototype.forEach, forEach, users, printUserName);

const map = (array, callback) => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(callback(array[i], i, array));
    }
    return res;
};

const getUserName = user => user.name;
test(Array.prototype.map, map, users, getUserName);
//test(Array.prototype.map, map, users, user => user.name);

const filter = (array, callback) => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            res.push(array[i]);
        }
    }
    return res;
};

const isUserFemale = (user, index, array) => {
    return user.gender === 'female';
};

test(Array.prototype.filter, filter, users, isUserFemale);

const find = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
};

test(Array.prototype.find, find, users, isUserFemale);

const findIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
};

test(Array.prototype.findIndex, findIndex, users, isUserFemale);
test(Array.prototype.findIndex, findIndex, users, user => user.eyeColor === 'green');
test(Array.prototype.findIndex, findIndex, users, user => user.gender === 'trans');

const every = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
};

const some = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
};

const reduce = (array, callback, initialValue) => {
    let previousValue = initialValue;
    for (let i = 0; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
        //previousValue += 10000;
    }
    return previousValue;
};

const addUserBalance = (previousValue, user, index, array) => {
    return previousValue + user.balance;
};
console.log('Expected balance=' + users.reduce(addUserBalance, 0));
console.log('Our balance=' + reduce(users, addUserBalance, 0));
