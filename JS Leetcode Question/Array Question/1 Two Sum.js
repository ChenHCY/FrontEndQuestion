/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:
2 <= nums.length <= 10^4
-109 <= nums[i] <= 10^9
-109 <= target <= 10^9
Only one valid answer exists.
*/

// 1. 双指针: Two Pointer
// Time: O(n)  Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a copy of the array with indices
    // int[] helper = Arrays.copyOf(nums, nums.length); 
    // JS 里面通常使用 array.map() 来替代 Arrays.copyOf
    let copyNums = nums.map((num, index) => [num, index]); // 因为是无序的数组，所以要copy 来记住每个数字 index 的 位置

    // Sort the array based on values
    copyNums.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let sum = copyNums[left][0] + copyNums[right][0];

        if(sum === target){
            return [copyNums[left][1], copyNums[right][1]];
        } else if(sum < target){
            left++;
        } else {
            right--;
        }
    }

    return [];
};

// 2. HashMap
// Time: O(n)  Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];
    const map = new Map(); 

    for(let i = 0; i < nums.length; i++){
        let targetNum = target - nums[i]; //second number
        if(map.has(targetNum)){
            return[i, map.get(targetNum)];
        }
        map.set(nums[i], i);
    }
    return [];
};
