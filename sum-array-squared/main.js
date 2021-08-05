// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// reduce method
function squareSum(numbers){
  return numbers.reduce((a,c)=> a+c**2, 0)
}

// arrow function with reduce method

const squareSum = n => n.reduce((a,c)=>a+c**2,0)

// for loop
function squareSum(n){
    let sum = 0
    for(let i = 0; i < n.length; i++){
      sum = sum + n[i]**2
    }return sum
  }