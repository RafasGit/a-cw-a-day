// We are to sort a given string in ascending order with each number in each word the determining factor for sorting
//We describe the parameters that we will define; we will define a parameter that will take in the input string

//We declare our expected return values; we are to return the input string having been sorted with the word with the smallest integer leading
// We also give our examples/ test cases; order('th3e boy2 is6 goin1g to0o mak5e i8t') // --> 'to0o goin1g boy2 th3e mak5e i6s i8t', order('w2e ha3ve to4') //--> 'w2e ha3ve to4', order('kee4p push5ing br3o') // --> 'kee4p push5ing br3o'
// We will then give our pseudocode to walkthrough our solution; 
    // We split the string into array elements, create a new array, use nested for loops to see if the element indexed has a number property, if so we push it into our new array
// We then give our solution code written in js
function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
          co
        }
      }
    }
    return sortedArray.join(' ');
  }
  
// We then give our example test cases;
 
// 1st test case;
console.log(order('th3e boy2 is6 goin1g to0o mak5e i8t')) // --> 'to0o goin1g boy2 th3e mak5e i6s i8t'
// 2nd test case;
//console.log(order('w2e ha3ve to4')) // 'w2e ha3ve to4'
// 3rd test case;
//console.log(order('kee4p push5ing br3o')) // 'kee4p push5ing br3o'
