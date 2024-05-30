// We describe our problem statement to be solved; we are to create a code that takes in camel case text and returns it in kebab case
// We then describe our parameter to accept inputs; we initialize a parameter to accept a string in camel case
// We describe our return value that is to be expected; we return the string in kebab format
// We give our examples to test the solution eg1, kebabize('NGOMBE') // --> 'n-g-o-m-b-e' eg2, kebabize('makeMoney') // --> 'make-money' eg3 kebabize('doTheThing') // --> 'do-the-thing'
// We then give our pseudocode to breakdown our solution in simple terms; we split the string into individual elements, we then filter to find the characters that are not equal to uppercase and join the text, we then loop and checki if uppercase add '-' and the string converted to lowercase else only add the string
// We give our solution code
function kebabize(str) {
  const tmpStr = str.split("").filter(e => e.toLowerCase() !== e.toUpperCase()).join("")
  alert(tmpStr)
  let res = tmpStr[0].toLowerCase();
  for(let i = 1; i < tmpStr.length; i++){
    if(tmpStr[i].toUpperCase() == tmpStr[i]){
      res = res + "-" + tmpStr[i].toLowerCase()
    } else {
      res += tmpStr[i]
    }
  }
  alert(res);
}
// We test out our test cases
  console.log(kebabize('nGOMBE'))
  console.log(kebabize('makeMoney'))
  console.log(kebabize('doTheThing'))
  console.lo