 // We are to write a function that converts characters in a string into new string; either '(' if converted string appears once or ')' if string appears twice
// We declare a single parameter that will take in input string, no integer or empty string inputs are expected, case should be ignored
// We return the string '(' for characters that appear once and ')' for characters that are repeated
//  Test cases; duplicateEncode('tommmy') --> '(())(', duplicateEncode('Musa') --> '(((('; duplicateEncode('exceed') --> ')(())('
// We accept the input string, split the string into individual array elements, map through the array, with a conditional confirming if initial positioning of an element is similar to the equal position
// If element is in the same position, it is not duplicated thus we return '(' else we return ')' for each instance of the repeated character. We then join the returned array elements into a single string.

function duplicateEncode(word){
    
  return word.toLowerCase()
  .split('')
  .map((x, i, a) => {
   return a.indexOf(x) == a.lastIndexOf(x) ? '(' : ')'
  })
  .join('')
}

console.log(duplicateEncode('tommmy')) // --> '(())('
console.log(duplicateEncode('Musa'))  // --> '(((('
console.log(duplicateEncode('exceed')) // --> ')(())('
console.log(duplicate('typesafe')) // --> '((
 
console.log(duplicate('typesaf'))
 