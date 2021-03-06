// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
    if( num < 0){
      return num
    }else {
      return -num
    }
  }


  //arrow function 

  const makeNegative = num => (num < 0) ? num : -num

//   Math.abs method
function makeNegative(num) {
    return -Math.abs(num);
  }