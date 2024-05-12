// We define our problem to solve; we are given two arrays and we are two return the values not repeated in both arrays
// We define our parameters to accept inputs; we will define two parameters to accept two array elements

// We then give our expected return value ; we will return the array elements unique to each array

// We then define our examples to be tested; eg1; arrayDiff([1,2], [1]) // [2], eg2; arrayDiff([3,4], [3,4]) // [], eg3; arrayDiff([1,2], [3,4])// [1,2] [3,4]
// We will define our problem solution using our pseudocode; we filter through the first array to see if any indexed element is contained in the second array

// We give our solution code 

 function arrayDiff(a, b) {
        // Filter entire a array, only keep the value if b does not contain that value
        return a.filter(val => !b.includes(val));
    }
// We then test our examples
   console.log(arrayDiff([1,2], [1])) //2
   console.log(arrayDiff([3,4], [3,4])) //..
   console.log(arrayDiff([1,2], [3,4])) //1 2 3 4
   console.log(arrayDiff([1,2], []))