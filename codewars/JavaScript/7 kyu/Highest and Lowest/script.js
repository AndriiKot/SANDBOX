'use script';

// DESCRIPTION:
// In this little assignment you are given a
// string of space separated numbers, and have
// to return the highest and lowest number.

// Examples

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    const array = numbers.split(' ');
    const len = array.length;
    const newArrayInt = Array(len);

    for(let i = 0; i < len; i++) {
        newArrayInt[i] = Number(array[i]);
    }

    const max = newArrayInt.reduce((a, b) => Math.max(a, b));
    const min = newArrayInt.reduce((a, b) => Math.min(a, b));

    return `${max} ${min}`;
}

// Time: 803ms Passed: 10Failed: 0
// Test Results:
// Fixed tests
// Testing basic input
// Testing common string sort mistake
// Testing positive and negative
// Testing positive and positive
// Testing negative and negative
// Testing positive, negative and zero
// Testing positive, positive and zero
// Testing negative, negative and zero
// Testing single
// Random tests
// Testing for 100 random tests
// Completed in 3ms
// You have passed all of the tests! :)
