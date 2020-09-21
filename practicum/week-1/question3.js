/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    
    var count = 0;
    var i;
    var j;
    // Continous check, no checking the preceding 
    var secondStart = 1;

    for(i = 0; i < input.length; i++){
    for(j = secondStart; j < input.length; j++){

        if(input[i] < input[j]){
    
            count+=1;
        };
    };
    secondStart+=1;
};
    
 return count;
};


var PascalTriangle = function(n) {
    var arr = [];

    var i;
    var j;
    var currArr = [];
    for(i =0; i < n; i++){
        var temp = [];
        for(j=0; j < i+1 ; j++){
            if(j == 0 || j == i){
                temp[j] = 1;
            }else {
                
            }
        }currArr = temp; arr.push(temp);
    }
    return arr;
};

console.log(PascalTriangle(7));
