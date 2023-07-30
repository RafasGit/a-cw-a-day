// We are to receive a string input and return the number of vowels in the string. Vowels will include a, e, i , o, u
// We take in a parameter of an input string with only lower case letters and/or spaces and no numbers
// We are returning the number of vowels in the input string
//An input of the string 'achieve' will return 4, 'Mastery' -> 2, 'celebrate' -> 4
// We take the input string, split it into array elements, create different vowel array, filter original array into new array including alphabet similar to vowel array
function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    let arr = str.split('')
      return arr.filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }