// We will describe the problem we are to solve; 
// We then describe the parameters we will define
// We then give our return statement 
// We give our examples to be used as tests
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