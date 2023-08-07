// We are to input an array of numbers and return the smallest number 
// We accept the parameter of an array of integers and the array should only contain integers and shouldnt be an empty array
// We return the smallest integer in our array
// Test cases [1, 32, 43, 4] => 1, [2, 4, 5, 6] => 2, [4, 6, 7, 45] => 4
// We initialize our function and using our array if numbers parameter, we sort our array in ascending order and return the first element of our array

class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a,b)=> a - b)
      return args[0];
    }
  }
 
 SmallestIntegerFinder([1, 32, 43, 4]) // 1
 SmallestIntegerFinder([2, 4, 5, 6]) // 2
 SmallestIntegerFinder([]) 