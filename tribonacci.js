// We will describe the problem we are to solve; we are to formulate a tribonacci sequence
// We then describe the parameters we will define; we declare a parameter to accept the array of the first three numbers as well as the number to which the sequence should be created
// We then give our return statement; we will return the sequence formulated
// We give our examples to be used as tests tribonacci([[1,1,1] , 10]) // --> [1,1,1,3,5,9,17,31,57,105] tribonacci([[0,1,1], 10]) // --> [0,1,1,2,4,7,13,24,44,81], tribonacci[[3,2,1], 0] // --> []
// We give our pseudocode solution; we first take in the array of values and the required length of the triboonacci sequence, we then check if the required sequence is 0, in which case we return 0 or if required sequence is 1, we return 1, we then loop through and add last three sequence values to create our new value. We then return the sequence.
// We give our solution code 
function tribonacci(signature,n){
    //your code here
    let val = 0;
    
    if (n === 0) {
      return [];
    } 
    else if (n === 1) {
      return [1]
      }
    
  for(i = 0; i < n; i++){
    
    if(signature.length < n){
   val = signature[signature.length - 1] +  signature[signature.length - 2] + signature[signature.length - 3] ;
    signature.push(val)
      }
    else {
           return signature;
        }  
    }          
  }
// We test out our examples

console.log(tribonacci([[1,1,1], 10])) // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([[0,1,1], 10])) // [0,1,1,2,4,7,13,24,44,81,149]
console.log(tribonacci([[3,,], 0])) //  []
console.log(tribonacci([[4,7,13], 5])) // [4,7,13,24,44]
