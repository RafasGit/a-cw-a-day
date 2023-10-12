// We evaluate the problem we are to solve; we are to push all zeros in an array to the end
// We define the parameter we will initialize; we define a parameter that accepts our input of arrays
// We then describe the expected return values; we will return the array with all other elements in place with the zeros pushed to the end
// We create examples to use as tests; eg1, moveZeros([3,4,5,0,5,0,4,0]) // --> [3,4,5,5,4,0,0,0]  eg2, moveZeros([1,0,3,2,false,5,0,4]) // [1,3,2,false,5,4,0,0]  eg3 moveZeros([true,2,0,0,3,4,1]) // --> [true,2,3,4,1,0,0]
// We then describe the code in non-technical terms using pseudo; we intake the array and loop through the array elements and if the element is equal to zero. we place it at the end of the array we are to return
// We then give our solution code
// We then test our examples

console.log(moveZeros([3,4,5,0,5,0,4,0]))
console.log( moveZeros([1,0,3,2,false,5,0,4]))
console.log(moveZeros([true,2,0,0,3,4,1]))