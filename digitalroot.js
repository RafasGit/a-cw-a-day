// We are to provide our problem to solve; we are to find the recursive sum of all digits in a number
// We provide our parameters to accept inputs; we will declare a parameter that will accept our integer to be summed
// We then define our return statement we will return a single digit that is the end point of our recursive summation 
// We provide our examples to be used as test cases; digitalRoot(256)  // --> 4 digitalRoot(304) // --> 7 digitalRoot(40) // --> 
// We give our solution in form of non-technical jargon; function checks to see if input number is lesser than 10, if lesser we return the input element else we split the number into individual array elements; then reduce the array elements
// We then give our solution code
function digitalRoot(n) {
    if (n < 10) return n;
    return digitalRoot(
      n.toString().split('').reduce((acc, d) => {
        return acc + +d;
      },0));
  }
  //alt 2 dsa
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
// We test out our example test cases;
console.log(digitalRoot(256))//13
console.log(digitalRoot(304))/
console.log(digitalRoot(40))
console.log(digitalRoot(456))