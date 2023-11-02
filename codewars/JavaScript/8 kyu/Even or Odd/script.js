'use strict'; 

// DESCRIPTION:
// Create a function that takes an integer as 
// an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  return(number % 2 == 0 ? "Even" : "Odd")
}

// Time: 808ms Passed: 45Failed: 0
// Test Results:
// Fixed tests
// 2 is even
// 7 is odd
// -42 is even
// -7 is odd
// 0 is even
// Completed in 1ms
// Random tests
// Should return "Odd" for -745
// Should return "Odd" for 407
// Should return "Even" for -898
// Should return "Odd" for -241
// Should return "Even" for 460
// Should return "Odd" for -149
// Should return "Odd" for 161
// Should return "Even" for 964
// Should return "Even" for 180
// Should return "Even" for -296
// Should return "Even" for -756
// Should return "Even" for 12
// Should return "Odd" for -501
// Should return "Even" for -688
// Should return "Even" for -684
// Should return "Even" for 158
// Should return "Even" for -942
// Should return "Odd" for -899
// Should return "Odd" for -401
// Should return "Even" for 542
// Should return "Even" for 914
// Should return "Odd" for 321
// Should return "Even" for 230
// Should return "Even" for 686
// Completed in 1ms
// You have passed all of the tests! :)