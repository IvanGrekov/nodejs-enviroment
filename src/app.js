'use strict';

import _ from 'lodash';

const sum = (...numbers) => {
    return numbers.reduce((accum, currentNumber) => {
        return accum + currentNumber;
    }, 0);
};

console.log(sum(1, 2, 3, 4, 5, 6, 7));

const value = 6;

// Should be an error
if (value === 5) {
    console.log('huray');
}

const arr1 = [1, 2, 4];
const arr2 = [1, 2, 4];

console.log(_.isEqual(arr1, arr2));
