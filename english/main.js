// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.


function spEng(sentence){
    for(let i = 0; i < sentence.length; i++){
      if (sentence.toLowerCase().includes("english")){
        return true
      }
    }return false
    }


    const spEng = sentence => /english/i.test(sentence)