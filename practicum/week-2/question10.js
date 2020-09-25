/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
   var sortedArr = sortFunc(input);
   var i;
   var j;
   var minDiff = Math.abs(sortedArr[1] - sortedArr[0]);
   var resultOfAllPairs = [];

   for(i = 0; i < sortedArr.length; i++){
       for(j = i + 1; j < sortedArr.length; j++){
           
           if(sortedArr[i] < sortedArr[j]){
                var diff = Math.abs(sortedArr[j] - sortedArr[i]);
                if(minDiff > diff){
                    minDiff = diff;
                    resultOfAllPairs = [];
                    resultOfAllPairs.push([[sortedArr[i], sortedArr[j]]]);
                }else if(minDiff == diff){
                    resultOfAllPairs.push([[sortedArr[i], sortedArr[j]]]);
                }
           }
           }
       }
       return resultOfAllPairs;
    }
var sortFunc = function(arr){
    var sorted = [];
    var i = 0;
    var originLength =  arr.length;
    while(i < originLength){
           var minVal = findMin(arr);
           sorted.push(minVal[0]);
           arr.splice(minVal[1], 1);
           i++;
        
    }
    return sorted;
}
var findMin = function(input){

    var min = input[0];
    var index = 0;
    if (input.length == 1){
           return [min, index];
    }
    for(var i = 1; i < input.length; i++){
          if(input[i] < min){
                 min = input[i];
                 index= i;
          } 
    }
    
    return [min, index];
}