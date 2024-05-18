// We are to detect if a sentence is a pangram, it is a pangram if it contains every single letter in the alphabet
// We are to define parameters; we define a parameter to accept a passed on string, numbers and punctuation are to be ignored
//We give the return value; we will return True if sentence contains all letters of the alphabet and returns false if it doesnt contain all alphabets
// We give the examples or test cases eg1; isPangram('my name is jeff') //false eg2; isPangram(the quick brown fox jumps over the lazy dog') //true eg3; isPangram('33;;22') // false
// We will then give our pseudocode; we declare an array of all the alphabet characters, we then compare our input string to check if the index of all characters referenced from our alphabet array are greater than zero
// If so, we confirm the string has all alphabets and return false
// We then give our solution code
 
function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

//We then use our test cases
 
 console.log(isPangram('my name is jeff')) //false
 console.log(isPangram('the quick brown fox jumps over the lazy dog')) // true
 console.log(isPangram('33;;22')) //false
 console.log(isPangram("Amazingly f"))
 // End of interview, one software eng job please
 
