// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)

function maxProduct(numbers, size){
    const revSortedArr = numbers.sort((a, b) => b - a)
    const slicedArr = revSortedArr.slice(0, size)
    return slicedArr.reduce((acc, cv)=> acc * cv, 1)
  }


  function maxProduct(numbers, size){
    return numbers.sort((a,b)=>b-a).slice(0, size).reduce((a,b)=>a*b,1)
    }