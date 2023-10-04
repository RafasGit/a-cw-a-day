// We describe the problem our solution tackles; we return the number in an array of numbers that is unique
// We describe the parameters we will declare
// We then declare our expected return value
// We then give our examples
// We then give our pseudocode
// We give our solution code

function findUniq(arr) {
    // do magic
    let uniq = arr.filter((x,i) => 
        arr.indexOf(x) == arr.lastIndexOf(x))                 
    return Number(uniq);
  }
  
// We conclude by testing our examples
