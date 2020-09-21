/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/


var runningSum = function(input) {
    let sum = 0;
    var i;
   for(i = 0; i< input.length; i++){
       sum += input[i];
       input[i] =  sum;
   };
    return input;
};

// Practicum #2 
var largestNumberIsAtleastTwice = function(input){
    var maxNum = findMax(input);
    var i;

    for(i= 0;i < input.length; i++){
        if(input[i] != maxNum){
            if(Math.floor(maxNum / input[i]) < 2){
                return false;
            }
        }
    }return true;
}

var findMax = function(arr){
    var max = arr[0];   
    var i;

    for(i = 0; i< arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(largestNumberIsAtleastTwice([3,2,26,50]))