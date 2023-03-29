/* HW 2: flatten nested-obj / array / number 

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

//Solution 1: teacher explained in the course
//arrows function
const fn = (x) => {
	let res = [];
	if(typeof x === "number"){ //check whther is number
		res.push(x);
	} else if(Array.isArray(x)){ //check whther is array
		x.forEach((item) => { //then get new element and flattern it
			res = res.concat(fn(item));
		})
	} else{ //check whether is object, then get new element and flattern it
		Object.values(x).forEach((item) =>{
			res = res.concat(fn(item));
		})
	}
	return res;
}

console.log(fn(obj));

//Solution 2: 
//arrows function
const fn2 = (x) => {
	let result = [];
	const flattern = (element) => {
		if(typeof element === "number"){ //check whther is number
			result.push(element);
		} else if(Array.isArray(element)){ //check whther is array
			element.forEach(flattern);
		} else{ //check whether is object, then get new element and flattern it
			Object.values(element).forEach(flattern);
		}
	}
	flattern(x); //call the named flattern function to flattern item x
	return result;
}

console.log(fn2(obj));
