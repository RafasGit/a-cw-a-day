// We take in a string and return the reversed output
// We accept the parameter of a string without any number, our string should also not be empty
// Our expected return should be the string reversed
// test cases; 'world' => 'dlrow',  'dog' => 'god'  'code' => 'edoc'
// We take in the string input, we split it into array elements, allowing us to use the native array method reverse and finally join the elements into our reversed string and return the result

const solution = str => str.split('').reverse().join('');