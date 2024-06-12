// We define the problem statement to be solved; we are to create a function that removes immediate duplicates from a string or series of integers and returns a non duplicate version
// We then define the parameters; we will defne a parameter that takes in our string or integer input  
// We then indicate our return value; we return a string or integers without any immediate repeat characters
// We then give examples to be used as test cases; eg1 uniqueInOrder('aacde') // --> ['a', 'c', 'd', 'e'] eg2; uniqueInOrder([1,2,2,3]) -// --> [1,2,3] eg3; uniqueInOrder('AAAbbbccDDAA') // --> ['A', 'b', 'c', 'D', 'A']
// We then give our non-technical explanation as pseudocode; we declare a new empty array in which we will push new elements upon being compared to the element next to it from our initial string and when found to not be similar.
// We then give our solution code

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

    // We test out our examples
    console.log(uniqueInOrder('aacde'))  // --> ['a', 'c', 'd', 'e']
    console.log(uniqueInOrder[1,2,2,3]) // --> [1,2,3]  uniqueInOrder('AAAbbbccDDAA')
    console.log(uniqueInOrder('AAAbbbccDDAA')) // --> ['A', 'b', 'c', 'D', 'A']
    console.log(uniqueIn)