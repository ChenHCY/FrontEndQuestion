/* HW 5: Binary Search
Input:
	const array = [1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 8]
	const target = 5
Output: [5, 8]  ==> find the fist occur index and last occur index
*/

const arr = [1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 8]
const target = 5;

let res = [];

const binarySearch = function(array, number){
	let left = 0;
	let right = array.length - 1;

	while(left <= right){ 
		let mid = Math.floor(left + (right - left) / 2);
		if(number > array[mid]){
			left = mid + 1;
		} else{
			right = mid - 1;
		}
	}

	return left;
}

let first = binarySearch(arr, target - 0.5);
let last = binarySearch(arr, target + 0.5);

res[0] = first;
res[1] = last - 1;

console.log(res);
