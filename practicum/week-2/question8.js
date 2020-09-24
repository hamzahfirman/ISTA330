/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var maxFreq = -1;
    var i;
    var flag = false;
    var count = 0;
    var dInt = 0;

    for(i = 0; i < input.length - 1; i++){
        if(input[i] == input[i + 1] && flag == false){
            count += 1;
            flag = true;
        }
        if(input[i] != input[i + 1]){
            flag = false;
            if(count >  maxFreq){
                maxFreq = count;
                dInt = input[i];
                count = 0;
            }
        }else{
            count +=1;
        }
    }
    return dInt;
};

console.log(d_integer([3,5,3,9,6,45,86,9]));