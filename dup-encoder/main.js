
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
    const letterArr = word.toLowerCase().split('')
    return letterArr.map((element, ind, arr ) => arr.indexOf(element) === arr.lastIndexOf(element) ? '(' : ')').join('') 
    }




    function duplicateEncode(word){
        return word
          .toLowerCase()
          .split('')
          .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
          })
          .join('');
      }

//       Explanation:

// .toLowerCase() -- Makes all the string lower case
// .split('') -- makes an array with each char of the string

// .map( function (a, i, w) {
// return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
// })
// -- the map function takes every element and applies that function where:
// a - Current value(each element of the array at a time)
// i - The array index of the current element
// w - The array object the current element belongs to
// So taking the w(which is the array), w.indexOf(a) takes the element(a) and checks the index. The lastIndexOf(a) check's the last index of an element ex: if there are more duplicate elements in an array, this will give the last of them.
// So basically if the first index of an element is the same with the last then we know it's unique and we will replace it with '('. If not, it's not unique because the first index it's not equal with the last index( we know there are more elements then) so we replace with ')'.
// the way it's written the if statement it's the "conditional (ternary) operator": ex: return condition ? true : false; =>>> return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
// .join(''); - this simply joins the array in a string back.