// We are to take in a single string and integer and return the input string for the number of times matching the input integer
// Our expected parameters are a string input and number
// We are expected to return the input string for the number of times the integer demands
// An example input would be 3, h -> 'hhh', 2, jon -> 'jonjonjon'
//We will declare our variable to store the repeated string, we then run a loop equal to iterations given by input number, for each time adding the string

function repeatStr (n, s) {
    let conc = ''
    for(let i=0; i<n; i++){
         conc +=`${s}`;
    }
    return conc;
  }

 repeatStr(3, 'h');
 repeatStr(2, 'jon')  