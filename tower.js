// We are going to define our problem to solve; we are to create a tower out of '*' strings with the tower increasing in size every row for the number of rows dictated by input integer
// We will then define the parameters we are to declare; we are to define a parameter that will accept the input integer for required number of tower rows
// We then give the return value that we are to expect; we are to return the tower of asterisks in string format
// We will then give our examples to be used as test cases; eg1; towerBuilder(1) // ["*"] eg2; towerBuilder(2) // ["*","***"] eg3; towerBuilder(4) //["*","***","*****","*******"] 
// We then give our pseudocode explaining how we will solve the issue using non-technical terms
  //We will use a nested for loop with the outer loop creating the rows and the inner loop determining the number of columns
// We give our solution code; a depicion of Pas
function towerBuilder(floors){
    let space,star, tower = [];
    for(i = 1; i <= floors; i++){
      space = " ".repeat(floors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower;
  }
// We then test our examples

console.log(towerBuilder(1)) // ["*"]

console.log(towerBuilder(2))  // ["*","***"]

console.log(towerBuilder(4))  //["*","***","*****","*******"] 


