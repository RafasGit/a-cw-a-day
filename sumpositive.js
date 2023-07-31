// We accept an input of an array of numbers and return the sum of only positive numbers
// Our parameters may inlcude an empty array or an array of numbers without negative numbers
// We return the sum of only the positive numbers 
// Example test cases; [1, 2, -3, -6, 9] => 12 [3, -4, 6, -7, 9, 10] => 28  [5, -4, 9, -10, 8] => 22
// We filter the array for nums greater or equal to 0 and then reduce the new array and return the sum of this numbers
function positiveSum(arr) {
    return arr.filter(num => num >= 0).reduce((a,b) => a+b, 0)
  }