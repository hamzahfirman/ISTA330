/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var resultSum =0;
    var pre1 = 0;
    var pre2 = 1;
    
    for(var i = 0; i < n - 1; i++){
        resultSum = pre1 + pre2;
        pre1 = pre2;
        pre2 = resultSum;
    }

    return resultSum;
};