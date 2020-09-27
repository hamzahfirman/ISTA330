/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    var i;
    var j;
    var allProducts = new Set();
    const result = []
    

    for(i = 0; i < input.length; i++){
        for(j= i + 1; j < input.length ; j++){
            // A product of more than 2 elements
            product(input.slice(i, j + 1),input, allProducts);
            // A product of at most 2 elements
            product([input[i], input[j]],input, allProducts);
        }
    }
    // Moves all non-duplicate elements into an array
    moveSetToArray(allProducts, result);

    return result;
};


var product = (arr, input, result) => {
    var tempProduct = 1;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        tempProduct *= arr[i];
        // Check if the current product not equal to any elements in "Input"
        for(var j = 0; j < input.length; j++){
            if(tempProduct == input[j]){
                break;
            }else{
                count +=1;
            }
        };
        if(count == input.length){
            result.add(tempProduct);
        }
        count =0;
    };
}

var moveSetToArray = (set, arr) => {
    for(var element of set){
      arr.push(element);
    };
  };
