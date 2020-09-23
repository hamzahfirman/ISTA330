/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       var maxSum= 0;
       var i = 0;
       // console.log(input);
       var sort = sortFunc(input);
       console.log(sort);
       for(i = 0; i < sort.length; i += 2){
              maxSum += sort[i];
       };

       return maxSum;
};

var sortFunc = function(arr){
       var sorted = [];
       var i = 0;
       var min; 
       var originLength =  arr.length;
       while(i < originLength){
              var minVal = findMin(arr);

              sorted.push(minVal[0]);
              if(minVal[1]== 0){
                     arr.shift();
              }else{
               arr.splice(minVal[1], minVal[1]);
              }

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
