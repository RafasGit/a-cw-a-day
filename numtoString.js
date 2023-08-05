// We accept the input of an integer and return it converted into a string
// We take in the parameters of integer datatype, no strings, no empty parameters
// We return an output of the input numbers converted into string format
//  Test cases 333 -> '333', 1212 -> '1212' 454 -> '454'
// We accept the integer input and use native javascript toString() method converting it to string format

 function numberToString(num) {
  return num.toString()
}

numberToString(333) //-> '333'
numberToString(1212) //-> '1212'
