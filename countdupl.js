// Create a function that returns a function that returns the number of alphabetic characters and or numeric digits that have been repeated irregardless of case sensitivity
// we declare parameter to take in input text of string datatype
// We return the count of repeated string numbers or alphabets
// Test cases duplicateCount("abcde"), 0); duplicateCount("aabbcde"), 2); (duplicateCount("abbcde"), 1);
// We accept our input, split it into individual array elements, use filter array method to check if first position of an element is equal to first one else it is repeated and return filtered array length