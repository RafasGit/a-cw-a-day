// We are going to define the problem we are to solve
// We define the parameters we are to create to accept inputs
// We also state what our function will return
// We then give example scenarios of using the solution; eg1(), eg2(), eg3()
// We then define solution in non-technical terms in pseudocode format
// We provide the solution code
// We test out our examples 

function findOdd(intarray){

 intarray.filter((int, i) => {
   if(int % 2 !== 0) {
    return;
 }
 else {
    return false;
 }

}
 )
}

console.log(findOdd([8, 9, 13, 19 ])) //  9, 13, 19
console.log(findOdd([7, 6, 11, 15])) // 7, 11, 15
console.log(findOdd([2, 7, 19, 21])) // 7 19