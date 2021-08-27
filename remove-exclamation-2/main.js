// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// regex
function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
    }


    // for loop
    function removeExclamationMarks(str) {
        let arr = str.split('') //convert string to array
        let newArr = [] //create new array for all non-! characters
        //cycle through each array element
        for (let i = 0; i < arr.length; i++) {
          //compare each item to '!'
          if (arr[i] !== '!') {
            newArr.push(arr[i])
          }
        }
        return newArr.join('')
      }