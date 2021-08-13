// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.


function findMultiples(integer, limit) {
    let newArr = []
    for(let i = integer; i <= limit; i = i + integer){
      newArr.push(i)
    }return newArr
  }

//   HIGH LEVEL SUMMARY

// To output an array of multiples, where int indicates the multiple factor, and limit indicates how much it will run to.

// let result = [] sets up a variable array placeholder so we can populate it with our loop results.

// for(start, condition, adjust) to create looping iterations, where we start with our 'int', condition to be 'limit', and update/add our i based on our 'int' factor.

// push(i) adds the updated i's into our variable placeholder array.