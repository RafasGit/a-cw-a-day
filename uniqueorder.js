// We define the problem statement to be solved; we are to create a function that removes immediate duplicates from a string or series of integers and returns a non duplicate version
// We then define the parameters 
// We then indicate our return value
// We then give examples to be used as test cases
// We then give our non-technical explanation as pseudocode; last element = to value being compared
// We then give our solution code
// We test out our examples
var uniqueInOrder = function (iterable) {
    var arr = [];
    
    for(var i = 0; i < iterable.length;i++ ){
    //check if there is a repeating letter
    
    if(iterable[i] !== iterable[i+1]){
     //push the remaining value to arr 
    arr.push(iterable[i]);
    
             }
    
         }
    return arr;
    }