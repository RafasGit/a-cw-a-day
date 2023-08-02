 
 // We are to intake a list of numbers and return the average of the input numbers
 // Our expected parameters are is an array of integers with no strings. Empty arrays should return 0
 // We are returning the average of the array of numbers and 0 for empty arrays
 // [5, 4, 3, 2] => 3.5 [2, 4, 3, 1. 5] => 3, [] => 0
 // We accept the input of array of numbers, confirm the array is not empty, if epty return zero, else loop through the array and add each num to a new variable
 // Divide the value of the added numbers by length of input array
  

 const findAverage = array =>{
    let sum = 0
    if(array.length != 0 ){
      array.forEach((num,i) =>{
    sum += array[i]
      })
       let average = sum / array.length
       return average;
      }
    else 
      {
        return 0;
      }
     
      }