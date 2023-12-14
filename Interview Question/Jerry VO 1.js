/* Given a binary array nums, return the maximum number of consecutive 1's in the array 
if you can flip at most one 0.

eg.1

nums = [1, 0, 1, 1, 0]
ans: 4*/

const nums = [1, 0, 1, 1, 0];

// silding window:
const fn = (nums) => {
	let n = nums.length;
	let left = 0;
	let maxlen = 0; //the max length

	let zeroCount = 0;

	// 因为只能翻转1一个0, 所以我们保证一个窗口内最多只能存在一个0
	// 然后每次更新长度 ==> 找到最长的长度
	for(let right = 0; right < n; right++){
		if(nums[right] == 0){
			zeroCount++;
		}

		while(zeroCount > 1){
			if(nums[left] == 0){
				zeroCount--;
			}
			left++;
		}

		maxlen = Math.max(maxlen, right - left + 1); //每次更新长度
	}
	return maxlen;
}

console.log(fn(nums));
