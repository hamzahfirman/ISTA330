
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
