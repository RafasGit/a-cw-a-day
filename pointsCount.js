// We accept the input of the results of our games and return the number of points has scored.
// We initialize our function with string parameters in the format 'x;y' with x being our teams score and y our opponents score
// We return the number of points our team scores depending on the number of wins, losses and draws
// Examples; ['3:2', '2:2', '2:3'] => 4, ['2:2', '3;1', '3:0'] => 7, ['1:1', '2:3', '3:4'] => 1
// We declare our points variable, split the results using ':' as our criteria, we set our conditional to check if our result is greater than the opponents and award our team 3 points
// If opponents score is greater we add add 0 points to our variable, and if scores are similar, we add 1 point to our tally
// We then return the total of our points
function points(games) {
    let points = 0;
   
    for(let i = 0; i < games.length; i++){
        let scores = games[i].split(":")
   
      if(scores[0] > scores[1]){
          points += 3;
    }
       else if(scores[0] === scores[1]){
         points += 1;
         }
       else{
         points === points
       }
    }
     return points;
    }
  
  points(['3:2', '2:2', '2:3']) // 4
  points(['2:2', '3;1', '3:0']) // 7
  points(['1:1', '2:3', '3:4']) // 1