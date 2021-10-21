// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// The Maximum Gap after sorting the array is 23 , The difference between |-4- (-27) | = 23 .

// Note : Regardless the sign of negativity .

function maxGap (numbers){
    let sortedArr = numbers.sort((a, b) => b-a)
    let max = 0
    for( let i = 0; i < numbers.length; i++){
      if(sortedArr[i] - sortedArr[i+1] > max){
        max = sortedArr[i] - sortedArr[i + 1]
      }
    }return max
  }