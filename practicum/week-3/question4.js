/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  const tempSet = new Set();
  tempSet.add([]);

  const tempArr = [];
  const result = [];

  // Move all elements from Set into an array
  moveSetToArray(input, tempArr)
  

  for(var i = 0; i < tempArr.length; i++){
    tempSet.add([tempArr[i]]);
    for(var j = i +1; j < tempArr.length; j++){
      tempSet.add([tempArr[i], tempArr[j]]);
    }
  }

  // All elements in the set
  tempSet.add(tempArr);
  // Moves all subsets into an Array
  moveSetToArray(tempSet, result)

  return result;
};

var moveSetToArray = (set, arr) => {
  for(var element of set){
    arr.push(element);
  };
};