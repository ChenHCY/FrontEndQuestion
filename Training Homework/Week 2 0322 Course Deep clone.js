/*03/22  Course Deep clone */
const obj = {
  "value1": "1",
  "value2": {
    "value3": "3"
  }
}

//Solution 1: Used JSON Parse() and JSON stringify
let cloneObject = JSON.parse(JSON.stringify(obj));
console.log(cloneObject)

//Solution 2: recursion method
const deepClone = function(object){
  //exit condition
  if(typeof object !== 'object'){ //obj == null || typeof obj != 'object'
    return object
  }

  const cloneObject2 = {};

  for(let element in object){
    cloneObject2[element] = deepClone(object[element]);
  }

  return cloneObject2;
}

console.log(deepClone(obj));