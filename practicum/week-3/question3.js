/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    var count = 0;
    var i;
    var flag = false;
    for(i = 0; i < input.length; i++){
        if(input[i] == 0 && flag == false){
            count+=1;
            flag = true;
        }else if (flag == true){
            count++;
        }
        if (input[i] == 1 && flag == true && count < k) {
            return false;
        }else if(input[i] == 1 && flag == true){
            flag = false;
            count = 0;
        }
    }
    return true;
};
