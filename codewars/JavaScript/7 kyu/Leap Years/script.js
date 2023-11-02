'use strict';

// DESCRIPTION:
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

// DATE TIME

function isLeapYear(year) {
    let isLieapY = false;
    if (1600 <= year && year <= 4000) { 
      if (year % 4 === 0) {
            isLieapY = true
        if (year % 100 === 0) {
            isLieapY = false;
            if (year % 400 === 0){
                isLieapY = true;
            }
        }
      }
    } else {
        return;
    }
    return isLieapY
}

// Time: 844ms Passed: 4Failed: 0
// Test Results:
// Example tests
// Year 2020 is a leap year
// Year 2000 is a leap year
// Year 2015 is not a leap year
// Year 2100 is not a leap year
// You have passed all of the tests! :)


