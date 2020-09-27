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
  tempObj[[]] = "Present";
  

  const tempArr = [];
  const result = [];

  // Move all elements from Set into an array
  moveSetToArray(input, tempArr)

      for(var i = 0; i < tempArr.length; i++){
        if(tempObj[tempArr[i]] != "Present"){
          tempObj[tempArr[i]] = "Present";
        }
        for(var j = i +1; j < tempArr.length; j++){

          if(tempObj[[tempArr[i], tempArr[j]]] != "Present"){
            tempObj[[tempArr[i], tempArr[j]]] = "Present";
          }
          // 
          if(tempObj[tempArr.slice(i,j)]!= "Present"){
            tempObj[tempArr.slice(i,j)] = "Present"
          }
          
  

  }
    }
  // All elements in the set
  tempObj[tempArr] = "Present";
  // console.log(tempObj);
  moveObjToArray(tempObj, result)
  return result;
}

var moveSetToArray = (set, arr) => {
  for(var element of set){
    arr.push(element);
  };
};

var moveObjToArray = (set, arr) => {
  for(const element in set){
    arr.push([element]);
  };
};


// const set1 = new Set();
// set1.add(1);
// set1.add(2);
// set1.add(3);
// // // set1.add(4);
// // console.log(powerSet(set1));
