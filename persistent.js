// We define the statement that requires a solution; we take a number input and return a single digit only after having multiplied the positive parameter 
// We then define the parameters we are to define; we are to define a parameter that takes in the input integer
// We then give our return value; we return an integer indicating the number of times it has taken to get a single digit
// We then give our example statements; persistence(42) // --> 1 persistence(38) // --> 2 persistence(4) // --> 2
// We give our pseudocode explanation; we convert to string, we then split into two elements, multiply and if greater than 9, we multiply the two numbers once more until single digit is the result of a product; try different functions for splitting and reducing
// We give our examples to be used as test cases
  // solution 1
  function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 } 
  
// solution 2
function persistence(num) {
    let count = 0;
    while(num.toString().length > 1){
      num = num.toString().split('').reduce((acc,el)=>acc *= el,1)
      count++
    }
    return count
  }

  // Test cases
  console.log(persistence(42)) // --> 1
  console.log(persistence(38)) // --> 2
  console.log(persistence(4)) // -->  0             
  console.lo