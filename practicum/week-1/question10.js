/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {

     var diff = 0;
     var str = "" + n;
     var min = str[0];
     var max = str[0];

     for(var i = 0; i < str; i++){
         if(min > str[i]){
             min = str[i];
         };
         if(max < str[i]){
             max = str[i];
         }
     }
     return max - min;
};
