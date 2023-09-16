// We define the problem statement; we accept an aray of keyed in compass directions and confirm if the directions return us to our starting pointand after 10 minutes
// We define our parameters; we define parameters that will take in the input directions given by the walking app; we will not receive an empty input at any point
// We define our return value; we will return true if directions given return walker to starting point and after 10 minutes else we return false
// We give our example statements eg1; isValidWalk(['n'.'n'.'s'.'e']) // --> false eg2; isValidWalk(['n', 's', 'w', 'e']) // --> true eg3... isValidWalk(['e']) //--> false
// We give our pseudocode; we check if distance covered forward(North) is cancelled out by distance going backwards(south) and if distance going left(west) is canceled out by distance going right(east), steps taken should amount to ten
// We give our solution code
function isValidWalk(walk) {
    //insert brilliant code here
    let north = 0
    let south = 0
    let east = 0
    let west = 0
    walk.forEach((x,i) => {
      if(x == 'n'){
      north += 1;
    }          
    else if(x == 's'){
      south += 1;
    } 
      else if(x == 'e'){
        east += 1;
      }
    else if(x == 'w'){
      west += 1;
    }
  })
    let count = north + south + east + west
   if(north == south && east == west && count == 10){
     return true;
   } 
    else{
     return false;
   }
     
  }
  //alt 2;
  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }
  
// We test out our examples;

 console.log(isValidWalk(['n','n','s','e']))  // --> false
 console.log(isValidWalk(['n', 's', 'w', 'e'])) // --> true
 console.log(isValidWalk(['e'])) // --> false
