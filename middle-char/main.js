// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.


function getMiddle(s)
{
return s.slice((s.length-1)/2, s.length/2+1);
}

// here is a variable name which is of type <String> in JavaScript.

// All the operations inside the paranthesis (s.length-1)/2, s.length/2+1) uses the property length which returns the size of a String type (basically counting the number of characters in a word or sentence)

// (s.length-1)/2 ( Puts a marker exactly before the middle character (think about this in indexes so you always start at 0) in Strings even other iterables.
// (s.length/2+1) will return exactly and index which is after the middle character

// The method slice() can be attach to the type String like this String.slice(beginIndex[, endIndex])

// So beginIndex is for => (s.length-1)/2 and endIndex which is an optional parameter but necessary here will be => (s.lenght/2+1) and it is excluded as an upper limit (Kind of [4, 6[ in algebra I think)

// on s which is of <String> type attached to the method slice() with the upper parameters will just strip the value in between the beginIndex and endIndex and return it to you. Ex:( in [4, 6[ The value of the character at index 5 will be returned)