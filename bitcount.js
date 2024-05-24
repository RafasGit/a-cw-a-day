// We describe the problem our solution is to solve; we are to create a solution that takes in an integer input and returns number of bits equal to one in binary representation of the number
// we explain our parameters and the inputs they will take in; we define a parameter that takes in a number 
// We then give what we expect to be our return value; we return our count of binary representations that equals one 
// We then give our examples to be used as test cases; countBits(0) // --> 0; countBits(4) // --> 1; countBits(10) // --> 2;
// We give our pseudocode explaining non-technically our solution; we convert each number input into string to get its binary representation, loop through and if its binary representation is equal to one, we add to our variable count. 
// We give our solution code
var countBits = function(n) {
    // Program Me
     let count = 0;
     n.toString(2).split('').forEach((x,i) => {
      console.log(n)
        if(x === '1'){
          count ++;
        }
  })
   return count;
  };
// We then test out out examples
console.log(countBits(0)) // --> 0;
console.log(countBits(4)) // --> 1;
console.log(countBits(9)) // --> 2;
console.log(countBits(8)) // --> 1
console.log(co)