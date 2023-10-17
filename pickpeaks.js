// We define the problem to solve; we are to find the maxima(peaks) of numbers in the array and as well indicate position of the peaks 
// We then define the parameters we are to use; we will define an array to accept our array of integers, an object with the property of peaks to accept our peak values and the property of pos to indicate the position of our peaks. We also set run and peak as false booleans for our loop
// We then declare the expected return value; we will return the values that are peaks and the positions in which the elements are found
// We then give our example tests eg; pickPeaks([1,1,1,1]) // --> {pos:[],peaks:[]} eg2; pickPeaks([1,2,2,3,2]) // --> {pos:[3], peaks:[3]} eg3; p
// We give our pseudocode; we will accept our array of inputs, then declare our object that we will return, then loop through our input array to check if any sequence of three numbers, the middle element is greater than or equal to the next and previous element and if greater than is declared a peak 
// We give our solution code
// We test out our examples
