// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//parameters for filter can take in 1,2,3, or 4 values. Usually working with the element, index, 3rd parameter would be the array. Filter returns a new array of only things that pass the test after our arrow function. Filters out everything that doesn't pass the test inside our callback.

function evenNumbers(array, number) {
    let evenArr = array.filter(item => item % 2 === 0)
    return evenArr.slice(-number)
  }