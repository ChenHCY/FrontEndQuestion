/*
HW3.1 Flatten array
flatten array: [1, 2, [3, 4, [5, 6, [7],8]], 9]
expecting res = [1,2,3,4,5,6,7,8,9]
*/

const arr = [1, 2, [3, 4, [5, 6, [7],8]], 9];

const flattenArray = (inputArr) => {
	let res = [];
	//get the all element from arr[], than travser to check 
	inputArr.forEach((item) => { 
		if(typeof item === "number"){ //check whether the element is number 
			res.push(item); //exit condition
		} else{ //check whether the element is array
			res = res.concat(flattenArray(item)); //recursion Method call itself to move next element
			//concat used fro merge the original arrays to create a new array
		}
	});
	return res
};

console.log(flattenArray(arr));