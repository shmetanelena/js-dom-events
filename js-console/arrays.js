const users = require('./users.js');

const test = (etalonFunc, ourFunc, array, callback) => {
    console.log('\nTest: ' + etalonFunc + '\n');
    console.log('Exp', etalonFunc.call(array, callback));
    console.log('Get', ourFunc(array, callback));
};

/**
 *
 * @param {*} array
 * @param {*} callback  - (item, index, array)
 */
const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

const printUserName = user => console.log(user.name);

//test(Array.prototype.forEach, forEach, users, printUserName);

const map = (array, callback) => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(callback(array[i], i, array));
    }
    return res;
};

//const getUserName = user => user.name;
//test(Array.prototype.map, map, users, getUserName);
test(Array.prototype.map, map, users, user => user.name);

/*
Array.prototype.filter;
Array.prototype.find;
Array.prototype.findIndex;
Array.prototype.every;
Array.prototype.some;
Array.prototype.reduce;
*/
