/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

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