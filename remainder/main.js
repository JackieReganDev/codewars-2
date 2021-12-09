// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your languag

const remainder = (a, b) => a === b && a === 0 ? NaN : a > b ? a % b : b % a

function remainder(a, b){
    if(a === b && b === 0){
      return NaN
    }else if(b > a){
      return b % a
    }else if (a > b){
      return a % b
    }
   }