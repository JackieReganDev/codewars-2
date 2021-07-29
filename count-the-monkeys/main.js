// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]


function monkeyCount(n) {
let newArr = []
for(let i = 1; i <= n; i++){
  newArr.push(i)
}return newArr
}

//arrow function

const monkeyCount = n => Array.from({length:n}, (_,i)=>i+1)

// Array.from creates a new Array from an iterable object.

// Here the "iterable" is just {length:n} then the created array will have a length of n.
// The second (optional) argument is a map function wich will be called on each item of the new created array: (,i)=>i+1). Here the item () is ignored, but new item is formed with index (i) + 1.