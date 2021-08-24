// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.

// for loop
function sumArray(array) {
    if(array === null){
      return 0
    }
    let sortedArr = array.sort((a,b)=> a-b)
   let newArr = sortedArr.slice(1, -1)
   
     let count = 0
     for(let i = 0; i < newArr.length; i++){
       count = count + newArr[i]
     }return count
  }

  //reduce method syntax same as above for loop
  function sumArray(array) {
    if(array === null){
      return 0
    }
    let sortedArr = array.sort((a,b)=> a-b)
    return sortedArr.slice(1, -1).reduce((a,c) => a+c, 0)
  
  }