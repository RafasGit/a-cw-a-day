// We will define the problem to be solved; we are to accept a string and return it having been split into pairs of characters and for odd numbered characters, return ('_') with the final pair
//We will then define our parameters; we will define a parameter that accepts our string to split 
  
// We then declare our return value; we will return our input string having been split into pairs of characters
 
// We then give our test cases; eg1; solution('myname') // --> ['my', 'na', 'me'] , eg2: solution('gyatt') //--> ['gy', 'at' 't_'] ,eg3: solution('') //--> []
// Explain the solution in terms of pseudocode; we split the string into array elements, met;  point wheat brain diary off cat today mushroom candy venture cricket operacheck if the array has even or odd characters and for even, loop while splitting into pairs and for odd loop until the second last element and add '_' and join the pairs
  // For final pair off odd string we concatenate with ('_'); we then return the resulting array
// Give actual solution code
function solution(str){
    let splt = str.split('')
    let arr = []
    for(let i = 0; i<splt.length; i+=2){
      if(splt[i+1]){
        arr.push(splt[i]+splt[i+1])
      }
      else
        arr.push(splt[i]+'_')
    }
     return arr
    }
    //alt soln; we split the string into new array; map through the array returning the current element and the next; if no next element we return '_'
    
    function solution(str) {
        const arr = str.split('');
      
        return arr
          .map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_'))
          .filter(el => el);
      }
//Testing of our test cases 
 console.log(solution('myname')) // --> ['my', 'na', 'me']
 console.log( solution('gyatt')) //--> ['gy', 'at' 't_']
 console.log(solution('')) //--> []
 console.log(solution("pipelines")) // --> ['pi', 'pe', 'li', ' ]