// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sorted = args.sort((a,b)=> a-b)
      return sorted[0]
      
    }
  }


//   Math.min method with ... spread operator. Spread opeartor will copy the values from whatever you're spreading. 
// It's called destructuring assignment.
// Math.min function expect distinct variables, not an array. So the destructuring assignment helps to extract data from arrays or objects into distinct variables!

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  } 