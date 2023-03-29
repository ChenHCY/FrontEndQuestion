/* HW 3.3 Write the Deep Clone in JS
 
const obj = {
  key1: [1, 2, 3, 4 {
    key2: 5,
    key3: [6, {
    key6: [10, 11]
    }]
  }]
  key4: {
    key5: [7 ,8, 9]
  }
  key7: 12
}

*/

const obj = {
  key1: [1, 2, 3, 4, {
    key2: 5,
    key3: [6, {
      key6: [10, 11]
    }, [13, [14, 15]]]
  }],
  key4: {
    key5: [7, 8, 9]
  },
  key7: 12
}


//Solution 1: Used JSON Parse() and JSON stringify
console.log(JSON.parse(JSON.stringify(obj)));


//Solution 2: Recursion Method
const deepClone = function(object){
  //exit condirion
  if(typeof object === 'number'){
    return object
  }

  //judge curr element is a object or array
  const cloneObject = Array.isArray(object) ? [] : {};

  //for-loop to travser and move into next element
  for(let element in object){
    cloneObject[element] = deepClone(object[element]);
  }
  return cloneObject
}

console.log(deepClone(obj));




/* HW 3.4 loadash 中的 Deep clone  - _Deepclone() */

//ChatGPT Explain: Lodash provides a method called cloneDeep() to perform deep cloning of an object. 
const _ = require('lodash');

const clonedObj = _.cloneDeep(obj);

console.log(clonedObj)