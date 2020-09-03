
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        var max = cookies[0];
        for(let index = 1; index < cookies.length;index++){
            if(max < cookies[index]){
                max = cookies[index];
            };
        };

        var currVal = cookies[0];
        // Look for cookies are less than the Max
        for(let index = 0; index < cookies.length;index++){
            var diff; 
            if(cookies[index] < max){
                diff = max - cookies[index];
                cookies[index] += diff;
                extraCookies -= diff;
                ;
            };
        };
        
        if(extraCookies == 0){
            return true;
        }
        return false;

 };
