// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let answer = 0
    for(let i = 1; i <= num; i++){
      answer = answer + i
    }
    return answer
  }

  //arrow function 
//   The proof is also quite elegant. Consider the series:

// 1 + 2 + 3 + ... + n-2 + n-1 + n
// That's the series we want to find the sum of. Now, reverse it and put it on top of itself.

// 1 +  2  +  3  + ... + n-2 + n-1 + n
// n + n-1 + n-2 + ... +  3  +  2  + 1
// You will notice that if you add each element with the element below it, each pair equals n+1. Now, you have n of those, so the sum of those two lines above must me n * (n + 1). If you only want the sum of one of the lines, that's n * (n + 1) / 2.

  const summation = n => n * (n + 1) / 2;
