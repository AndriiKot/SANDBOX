
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b){
    const num = new RegExp(/[0-9]/g);
    const allLetters = new RegExp(/[A-Z,a-z]/g);
    const lowerCases = new RegExp(/[a-z]/g);
    const upCases = new RegExp(/[A-Z]/g);
    if (num.test(a) || num.test(b)) { return 0}
    if (allLetters.test(a) && allLetters.test(b)){
        if (lowerCases.test(a) && lowerCases.test(b)) {
            return 1
        }
        if (upCases.test(a) && upCases.test(b)) {
            return 1
        }
        return 0
    }
    return -1
  }

console.log(sameCase("#","4"))

// Time: 1022ms Passed: 8Failed: 0
// Test Results:
// Solution
// Testing for "C" and "B"
// Testing for "b" and "a"
// Testing for "d" and "d"
// Testing for "A" and "s"
// Testing for "c" and "B"
// Testing for "b" and "Z"
// Testing for "	" and "Z"
// Testing for "H" and ":"
// Completed in 1ms
// You have passed all of the tests! :)