// We describe the problem we are to solve; we are to find the parity outlier that is either odd in an array of even numbers or even amongst an array of odd numbers
// We then define the parameters we would like to assign our variable input; we define a parameter that takes in an input of an array of numbers
// We give our expected return value; we return the integer that is even amongst odd numbers or the odd number amongst even integers
// We give our examples to be used as test cases eg1; eg2; eg3; findOutlier(2, 4, 5, 8, 12) // --> 5  findOutlier(3, 4, 7, 9, 11) // --> 4 findOutlier(1, 0, 2, 4) // --> 1
// We describe our solution in pseudocode; giving non technical procedure of solving
// We give our actual solution code
// We give our test cases 
// 
function parity(n){
   // let out = []
    const out = n.filter((x,i) => x % 2 !== 0)  
      return out.length > n ? n : out     
}
console.log(findOutlier(2, 4, 5, 8, 12)) // 5
console.log(findOutlier(3, 4, 7, 9, 11)) // 4
console.log(findOutlier(1, 0, 2, 4)) // 1
console.log