// We are to input an array of numbers and create it into a string phone number format style 
// We expect parameters  in the form of an array of 10 digits, no text no string
// we are returning a phone number split into its country code and the remaining numbers split into 3 and 4 part bits
//  An example test case would be 0111799390 -> '(011) 179-9390' 0071145689 -> '(007) 114-5689'
// We join the nums into one big string and return the first three nums, then the next 3 add our hyphen and add the final substring

function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0,3) + ')' 
        + ' ' + numbers.substring(3, 6)
        + '-'
        + numbers.substring(6);
  }  

  //createPhoneNumber(0111799390);
 // createPhoneNumber(0071145689);