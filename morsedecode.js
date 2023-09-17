// We define the problem statement's requirement to be solved; we take in morse code and return the deciphered string 
// We discuss our parameters to be defined and the inputs to be accepted; we accept a parameter to accept the morsecode input. the input is not to be an empty string and will include unnecesary spacing between the morse symbols.  
// We then define our return values; we will return the deciphered morse code in string format
// We give our examples to be used; eg1, decodeMorse(' .... . -.-- ') //--> 'HEY' eg2, decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE' eg3
// We then give our pseudocode to be used as a non-technical breakdown of our solution; We call our morsecode function in which we will loop through each code to decipher each letter. We then define a function to split the input into words and pass the words into our third function, which split the words into individual letters then loop through individual letters into the morsecode function
// We then give our solution code; 

decodeMorse = function(morseCode){
    function decodeMorseLetter(letter) {
      return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
  }
// We give our test case examples
 console.log(decodeMorse(' .... . -.-- ')) // --> 'HEY'
 console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))  // --> 'HEY JUDE'.