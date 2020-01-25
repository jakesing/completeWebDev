//question 1
testArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// test output: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392, 591]

let cleanTheRoom = (array) =>{
  let sortedArray = array.sort((a,b) => a-b);
  let uniqueValues = [];

  for (i in sortedArray){
      i = parseInt(i);
      if (sortedArray[i] != sortedArray[i+1]){
        uniqueValues.push(sortedArray[i])
      }
  }

  //construct the object with numbers
  const whichType = uniqueValues.reduce((o, key) => Object.assign(o, {[key]: 0}), {});
  for (i of sortedArray){
    whichType[i] ++;
  }

  //construct result
  let resultArray = [];
  for (i of Object.keys(whichType)) {
    let val = i;
    let amt = whichType[i];

    if (amt > 1){
      let tempArray =[];  
      for (iter in [...Array(amt).keys()]){
        tempArray.push(val);
      }
      resultArray.push(tempArray);
    }
    else {
      resultArray.push(val);
    }
  }
  return resultArray;
}




let a = cleanTheRoom(testArray);
console.log(a);
