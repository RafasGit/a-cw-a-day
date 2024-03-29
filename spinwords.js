// We input a sentence and if the length of the words is greater than 5 strings, we return the reversed version of the word

//The parameters we input into our function are sentences made up of strings and we do not expect either integers or empty parameters
//We are going to return the input sentences with  their words that have more than five characters reversed and words with less than 5 characters as they were
// We split the sentence into individual array elements, we loop through the array and for elements of length greater/equal to 5 are  split, reversed then joined and store it in a new variable
// We then return the new variable

function spinWords(sentence){
    const sentenceArray = sentence.split(' ');
    let result = '';
    sentenceArray.map((str, i) => {
      if (str.length >= 5){
        sentenceArray[i] = str.split('').reverse().join('');
      } else {
        sentenceArray[i] = str;
      }
    result = sentenceArray.join(' ');
    });
  return result;
  }

  //Alternative optimized solution

 function spinWords(words){
   return words.split(' ').map(function (word) {
     return (word.length > 4) ? word.split('').reverse().join('') : word;
   }).join(' ');
}