// Problem state; we will replace each letter with its position in the alphabet and return the output
// Define parameters; We define a parameter to accept the input string, for any text that isn't a letter, we ignore it and dont return it
//Give expected return if any; we return the alphabet positions of the letters
// Give examples/tests;  alphabetPosition('Abcde') --> '1 2 3 4 5'; alphabetPosition('fghij') --> '6 7 8 9 10'; alphabetPosition('klmno') --> '11 12 13 14 15'

// Give pseudo; we accept the input string, declare a new array, in which we trim, convert string to lowercase, split it into new array elements loop through each element 
// Using its charcode, we check if it lies within the ascii of 97 & 122 indicating it's an alphabet and return it's position
// Give solution code
function alphabetPosition(text) {
  
    let newAlpha = []
     text
    .trim() 
    .toLowerCase()
    .split('')
    .forEach(x => {
       const ascii = x.charCodeAt();
      if (ascii >= 97 && ascii <= 122){
        newAlpha.push(ascii - 96);
      };
     });
    return newAlpha.join(' ');
  }

// Use test cases / log on console.
console.log(alphabetPosition('Abcde')) //  '1 2 3 4 5'
console.log(alphabetPosition('fghij')) // '6 7 8 9 10'
console.log(alphabetPosition('klmno')) // '11 12 13 14
     
  
    
 



// <!-- 
//     <!-- Load React. -->
//     <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
//     <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
//     <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
//     production.min.js
//     <!-- Load our React component. -->
//       <script src="like_button.js"></script> -->