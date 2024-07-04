// We are required to accept a string of space separated numbers, no alphabet and return the largest and smallest value
// We are going to pass on a string of numbers as our parameters, no text, negative numbers can be included
// We are going to return the highest and lowest number inside one string from the string of numbers passed 
// For an input of '5 4 6 2 -1' we return '5 -1'
// We initialize our function with our parameter we then split the string elements into individual array elements.
//This allows us to use native array math.max and math.min  along with array destructuring to template string our largest and smallest number

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

 highAndLow('5 4 6 2 -1')  // 5 -1
 highAndLow('5 7 6 2 0')  //  7 0
 highAndLow('9 4 3 2 -1') //  9 -1
 highAndLo