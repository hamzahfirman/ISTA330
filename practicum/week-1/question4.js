
/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var howManyCommon = function(A, B) {
    
    var count = 0;
    var i;
    var j; 

    for(i = 0; i < A.length; i++){
    for(j = 0; j < B.length; j++){

        if(A.charAt(i) === B.charAt(j)){
            count+=1;
        };
    };
};
    
 return count;
};
