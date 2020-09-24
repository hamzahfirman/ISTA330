/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var arr = [];
    var i;
    
    for(i = 1; i <= n; i++){
        var tempArr = [];
        if(i <= 9){
            tempArr.push(i);
            arr.push(tempArr);
        }else{
            let firstDigit = Math.floor(i / 10);
            let secondDigit = i % 10;
            let sumForIndex = (firstDigit + secondDigit) - 1;
            if (arr[sumForIndex] == undefined) {
                tempArr.push(i);
                arr.push(tempArr);
            }else{
                arr[sumForIndex].push(i);
            }
        }
    }

    var maxCount = findAndCountMax(arr);
    return maxCount;
};

var findAndCountMax = function(arr){
    var maxArrCount = 0;
    var count = 0;
    var i;

    for(i = 0; i < arr.length; i++){
        if (arr[i].length > maxArrCount){
            maxArrCount = arr[i].length;
            count = 1;
        } else if( arr[i].length == maxArrCount){
            count +=1;
        }
    }
    return count;
};


