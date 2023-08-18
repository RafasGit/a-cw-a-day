// We are to convert dash or underscore delimited wordsinto camel casing.
// We are to declare a parameter that takes in a input string with each word separated by an underscore or dash.
// We return the input string with the dash/underscores removed and the first characters of each word capitalized, if the first character is already capitalized it is returned as such
// test cases; toCamelCase('my-name-is') // 'myNameIs' toCamelCase('We_Are_Alright') // 'WeAreAlright'  toCamelCase('We-made_it') // 'WeMadeIt'