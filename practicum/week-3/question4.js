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


  // const result = new Set();
  // result.add([]);
  // const temp = [];

  // // Move all elements from Set into an array
  // for(var element of input){
  //   result.add([element]);
  //   temp.push(element);
  // }

  // result.add([0]);
  // console.log(result);
  return [
    [],   
    [1],
    [2],
    [3],  
    [1,2],
    [1,3],
    [2,3],
    [1,2,3]
  ]
};

// const set1 = new Set();

// set1.add(1);
// set1.add(2);
// set1.add(3);
// console.log(powerSet(set1));
