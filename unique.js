// We describe the problem our solution tackles; we return the number in an array of numbers that is unique
// We describe the parameters we will declare; we declare a parameter that will accept an array input of integers with no strings or empty inputs
// We then declare our expected return value; we return the unique number in the input array
// We then give our examples; findUniq([1, 2, 2, 4, 4]) // --> 1, findUniq([3, 3, 5, 6, 6]) // --> 5, findUniq([7, 7, 9, 10, 10]) // --> 9
// We then give our pseudocode; we filter thrugh the array elements to see if there is an item whose index is also the last index the element is found in the array meaning there is no other instance of the element. If so we return that element. 
// We give our solution code

function findUniq(arr) {
    // do magic
    let uniq = arr.filter((x,i) => 
        arr.indexOf(x) == arr.lastIndexOf(x))                 
    return Number(uniq);
  }
  
// We conclude by testing our examples
console.log(findUniq([1, 2, 2, 4, 4])) // --> 1
console.log(findUniq([3, 3, 5, 6, 6])) // --> 5
console.log(findUniq([7, 7, 9, 10, 10])) // --> 9
console.log()