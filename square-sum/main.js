// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return numbers.reduce((a,c)=> a+ (c*c), 0)
  }

//arrow function with Math.pow

const squareSum = numbers => numbers.reduce((a,c)=> a + Math.pow(c, 2), 0)