/*Leetcode  34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non-decreasing array.
-10^9 <= target <= 10^9
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1 , -1];
  
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

    let first = binarySearch(nums, target - 0.5);
    let last = binarySearch(nums, target + 0.5);

		if(first - last == 0){
			return res;
		}

    res[0] = first;
    res[1] = last - 1;

    return res;
};
