// We are to create a function that tells our cyclist the number of litres they need to drink for given number of hours given that he consumes 0.5 litres per hour
// We create the parameter 'time' which will take in the number of hours our cyclist will be actively cycling in integer format, no strings will be passed and empty arguments .
// We are going to return the total number of litres our cyclist will need rounded to the smallest value
// A few test cases include; time = 3; --> 1, time = 2.2; --> 1, time = 0; --> 0
// We accept the given input, multiply the value by 0.5 and use math method floor which rounds our product to the smallest value and return the result

function litres(time) {
    return Math.floor(0.5 * time);
  }
  
  console.log(litres(3)) // 1
  console.log(litres(2.2)) // 1
  console.log(litres(0)) // 0 
  con