/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var result= 0;
    let numOfElements = input.length;

    if(numOfElements % 2 === 0){
        let num1 = input[(numOfElements / 2) -1];
        let num2 = input[num1 +1];
        result = (num1 + num2) / 2;
    }else {
        
        result = input[Math.floor(numOfElements / 2)]
    }
    return result
};
