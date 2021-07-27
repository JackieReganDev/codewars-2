// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let newArr = []
    let letterArr = s.split('')
    for(let i = 0; i < letterArr.length; i++){
      if(letterArr[i] !== '!'){
        newArr.push(letterArr[i])
      }
    }return newArr.join('')
  }