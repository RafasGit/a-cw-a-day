// We will define the problem we are to solve; we are to intake an integer and determine if  it is narcissistic, i.e; the sum of its own digits each raised to the power of the number of digits is equal to the number itself
// We will then declare our parameters; we will initialize a parameter that takes in the input number; no string or empty value is to be expected
// We then declare our return statement; we will return true for narcissisitic numbers and false for non armstrong numbers
// We give our example cases; eg1; narcissisistic(10) // --> false ; narcissistic(153) // --> true ; narcissistic(89) // --> false
// We then give our non-technical explanation to the solution; we will split the integer into array elements; raise each element to the power of the length of the array and comfirm if sum of the resulting values is equal to input value
// we give our code solution 
1 2 3 4 
 function narcissistic(value) {
  // Code me to return true or false
  let arr = value.toString().split('').map(Number)
  let sum = 0;
  
  arr.forEach((x,i) => {
    sum += Math.pow(x,arr.length);
  })
   return sum == value ? true : false
}
//eg 2
function narcissistic(value) {
    // Code me to return true or false
      let sum = 0;
     value.toString().split('').map(Number).forEach((x,i) => {
      sum += Math.pow(x, String(value).length);
    })
     return sum == value ? true : false
  }

// We test out our examples
console.log(narcissistic(10)) // --> false
console.log(narcissistic(153)) // --> true
console.log(narcissistic(89)) // --> false
