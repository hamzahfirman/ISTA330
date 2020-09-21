/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var obj = {};
    var max = shuffleIndices[0];

    for(let index = 0; index < shuffleIndices.length; index++){
        obj[shuffleIndices[index]] = input[index];
        if(max < shuffleIndices[index]){
            max = shuffleIndices[index];
        }
    }
    //  Rearrange the string 
    var result = "";
    for(let index = 0; index <= max; index++){
        result += obj[index];
    };

    return result;
};
