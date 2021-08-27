// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// the plus sign in front of cv forces the value to a number if it's a string
const sumMix = x => x.reduce((acc,cv)=> +cv + acc, 0)