/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    var row = M.length;
    var col = M[0].length;
    var transposedM = [];
    var index = 0;

    var i;
    var j;

    for(i = 0; i < col; i++){
        var temp = [];

        for(j = 0; j < row; j++){
            temp.push(M[j][index]);     
        }
        transposedM.push(temp);
        index++;
    }
    return transposedM;
};