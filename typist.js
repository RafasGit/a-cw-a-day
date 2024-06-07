// We describe the problem our solution is to solve; we are to count the number of times an individual clicks on his keyboard
// We then describe the parameters we will define and the input it takes in; we define a parameter to take in the input string
// We describe our expected return value; we return an integer which is the number of times the keyboard is touched
// We then give our examples typist('fdg') // --> 3; typist('Ghe') // --> 5; typist('G') // --> 3
// We descirbe our code solution using non-technical terms; we accept the string input, loop through the string characters, check if the character is upper or lower case, the count is updated by 2 else count is updated by one
// We give the actual code solution
function typist(s){
    let res = s.length
    let caps = false
    for (let i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) < 97 && caps === false) {
        res++
        caps = true
      }
      else if (s.charCodeAt(i) > 96 && caps === true) {
      res++
      caps = false
      }
    }
    return res
  }
// We test out our examples using test cases

console.log(typist("fdg")) // --> 3
console.log(typist("Ghe")) // --> 5
console.log(typist("Bub")) // --> 5
console.lo