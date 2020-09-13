/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/


var minimalReduction = function(n) {
    let count = 0;
    let current = n;
    // Perform operations on 'n' 
    while(current != 0){
         // Operation #1
        if((current / 4) % 1 === 0){
            count+= 1;
            current = current / 4;
        // Operation #2
        } else if((current / 3) % 1 === 0){
            count+= 1;
            current = current / 3;
        }else{
        // Operation #3
        current -= 1;
        count += 1;
    } }
    return count;
};
