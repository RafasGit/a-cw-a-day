// We are to write a function that converts characters in a string into new string either '(' if converted string appears once or ')' if string appears twice
// We declare a single parameter that will take in input string, no integer or empty string inputs are expected, case should be ignored
// We return the string '(' for characters that appear once and ')' for characters that are repeated
//  Test cases; duplicateEncode('tommmy') --> '(())(', duplicateEncode('Musa') --> '((((' duplicateEncode('exceed') --> ')(())('
// We accept the input string, split the string into individual array elements, map through the array, confirming if initial positioning of an element is similar to the equal position