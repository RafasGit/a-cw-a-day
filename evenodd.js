// We are to create a function to determine if input number is even or odd
// We declare parameters of integer datatype, of either negative or positive format.
// Our returns are either string type, 'Even' or 'Odd'
// evenOrOdd(5) => Odd, evenOrOdd(6) => Even,  evenOrOdd(-1) => Odd
// We accept the number, we declare a function with a conditional to check if input is divisible by 0 to return 'Even', else return 'False'

 const evenOrOdd = num => num % 2 === 0 ? 'Even' : 'Odd'

 evenOrOdd(5) // 'Odd'
 evenOrOdd(6) // 'Even'
 evenOrOdd(-1) // 'Odd'