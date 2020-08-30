
/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    

    var strALen = A.length;
    var count = 0;
    var i;

    for(i = 0; i < B.length + 1; i++){
        if (strALen === 0){
            return count;
        };
        if(B.substring(i, i+1) == A.substring(i, i+1)){
	        console.log(A.substring(i, i+1));
            count+=1;
            strALen --;
        }
    }
    return count;
};
 

