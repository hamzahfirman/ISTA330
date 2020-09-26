/*
There are n soldiers standing in a line. 
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers 
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with ratings (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. 
(soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the 
         conditions: (2,3,4)
*/

var howManyTeams = function(input) {
   var count= 0;
   var i;
   var j;

   // Odd Length
   if(input.length % 2 == 0){
           var loopLength = (input.length / 2) + 1;

   }else{ // Even Length
        var loopLength = Math.ceil(input.length / 2);

   }

   for(i = 0; i < loopLength; i++){
           for(j = i + 1; j <= loopLength; j++){
                var currArray = []
                currArray.push(input[i]);
                currArray.push(input[j]);
                currArray.push(input[j+1]);
        
                // VALIDATION PROCESS
                if(isSortedOrNot(currArray, input.length) == true){
                  count +=1;
                }
           }
   }
   return count;
};

var isSortedOrNot = function(arr, arrLength) {

        if((arr[0] >= 0 )&& (arr[0] < arr[1]) && (arr[1] < arr[2]) && (arr[2] < arrLength)){
                return true;
        }
        return false;
}
