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


  const tempObj = {};
  tempObj[[]] = [];
  

  const tempArr = [];
  const result = [];

  // Move all elements from Set into an array
  moveSetToArray(input, tempArr)

    // console.log(tempArr)
      for(var i = 0; i < tempArr.length; i++){
        if(tempObj[tempArr[i]] == undefined){
          tempObj[tempArr[i]] = [tempArr[i]];
        }
        for(var j = i +1; j < tempArr.length; j++){

          if(tempObj[[tempArr[i], tempArr[j]]] == undefined){
            tempObj[[tempArr[i], tempArr[j]]] = [tempArr[i], tempArr[j]];
          }

          if(tempObj[tempArr.slice(i,j + 1)] == undefined ){
            tempObj[tempArr.slice(i,j + 1)] = tempArr.slice(i,j + 1)
  
          }
  
  }
    }
  // All elements in the set
  tempObj[tempArr] = tempArr;
  // console.log(tempObj);
  moveObjToArray(tempObj, result)
  return result;
}

var moveSetToArray = (set, arr) => {
  for(var element of set){
    arr.push(element);
  };
};

var moveObjToArray = (obj, arr) => {
  for(const element in obj){
    arr.push(obj[element]);
  };
};


// const set1 = new Set();
// set1.add(1);
// set1.add(2);
// set1.add(3);
// set1.add(4);
// console.log(powerSet(set1));
