/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {

 if(n == 1){
   return [[1]];
 }else if (n == 2){
   return [[1], [1,1]];
 }else {
   var result = [];
   result.push([1]);
   result.push([1,1]);
   
   var j = 0;
   var resultIndex = 1;

   while(j <= n - 2){
     var temp = [1,];
     var i;

     for(i = 0; i < result[resultIndex].length - 1; i++){
        temp.push(result[resultIndex][i] + result[resultIndex][i+1]);
     }
     temp.push(1);
     result.push(temp);
     resultIndex++;
     j++;
   }

 }
 return result;
};

