const _ = require('lodash');

const sum = (...numbers) => numbers.reduce((accum, currentNumber) => accum + currentNumber, 0);

console.log(sum(1, 2, 3, 4, 5, 6, 7));

const arr1 = [1, 2, 4];
const arr2 = [1, 2, 4];

console.log(_.isEqual(arr1, arr2));
