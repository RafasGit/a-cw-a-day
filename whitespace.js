// We are tasked with accepting an input and remove the white space between strings or sentences
// We are expecting the parameters in string or number format with spacing between them
//We return the strings without any spacing between individual string items
// example test cases would be ghd djsks ajs -> ghddjsksajs

// We split the input strings with a given criteria into array elements, we then join the array elements into a single string with whitespace removed  

function noSpace(x){
    return x.split(' ').join('')
    }

    