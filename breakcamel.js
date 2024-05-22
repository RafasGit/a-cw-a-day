// We are to come up with a solution that splits a string with camel casing using space between the words
// We will define the parameters that will take in our input; our parameter accepts a string , empty string and with no integers accepted 
// We will then explain our expected return output; we will return a string with the camel cased words spaced 
// We give our examples to act us our test cases; eg solution('guickBrown') //--> guickBriwn;  solution('brownBoy')//--> brown Boy; solution(richBoy) // --> rich Boy

// We will then explain our solution without code; our pseudocode; we split the string into array elements, loop through to check if any character is capitalzized (toUpperCase is either true or false); if true we add a space to a new string then add the character
// We give our solution 
function solution(string) {
    let cameld = '';
  for(letter of string){
    if(letter == letter.toUpperCase()){
      cameld +=' '
      cameld += letter
    }
    else
      cameld += letter;
  }
  return cameld;
}


// We test out our edge cases
console.log(solution('guickBrown')) // --> guick Brown
console.log(solution('brownBoy')) //--> brown Boy
console.log(solution('richBoy')) // --> rich Boy
console.log(solution('ty'))