// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


function correct(string)
{
	let correctStr = ''
  for(let i = 0; i < string.length; i++){
    if(string[i] === "5"){
      correctStr += "S"
    }else if(string[i] === "0"){
      correctStr += "O"
    }else if(string[i] === "1"){
      correctStr += "I"
    }else{
      correctStr += string[i]
    }
  }return correctStr
}

// not best practice as it loops through the string three times but putting here for the regex syntax

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')