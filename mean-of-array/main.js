// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  let sum = marks.reduce((a,c)=> a+c, 0)
  return Math.floor(sum / marks.length)
  }


  // arrow function

const getAverage = marks =>Math.floor((marks.reduce((a,c)=>a+c, 0)) / marks.length)