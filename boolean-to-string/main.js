// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool === true){
    return "Yes"
  }else{
    return "No"
  }
}

//arrow function and ternary
const boolToWord = bool => bool === true ? "Yes" : "No"