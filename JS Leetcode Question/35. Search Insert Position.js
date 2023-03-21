/* Leetcode 35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. 

If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2

Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums contains distinct values sorted in ascending order.
-10^4 <= target <= 10^4
*/

//force method
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Time: O(n)  Space: O(1)
var searchInsert = function(nums, target) {
    let res = 0;
    let n = nums.length;

    if(nums[n - 1] < target){
        return n;
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            res = i;
            break;
        }
    }

    return res;
};

//Binary Search
//Time: O(logn)  Space: O(1)
//重点： JavaScrip中会自动转换数据类型，所以 3 / 2 = 1.5, 不能自动取整
//所以要使用Math.floor() 来帮助取整
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;

    while(left < right){
        //JavaScrip中会自动转换数据类型，所以 3 / 2 = 1.5, 不能自动取整
        let mid = Math.floor(left + (right - left) / 2); //所以要使用Math.floor() 来帮助取整
        
        if(nums[mid] == target){
            return mid;
        } else if(nums[mid] > target){
            right = mid;
        } else{
            left = mid + 1;
        }
    }

    return left;
};
