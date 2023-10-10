/* 2009. Minimum Number of Operations to Make Array Continuous

You are given an integer array nums. In one operation, you can replace any element in nums with any integer.

nums is considered continuous if both of the following conditions are fulfilled:

      · All elements in nums are unique.
      · The difference between the maximum element and the minimum element in nums equals nums.length - 1.

For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3, 5, 6] is not continuous.

Return the minimum number of operations to make nums continuous.

Example 1:

Input: nums = [4,2,5,3]
Output: 0
Explanation: nums is already continuous.

Example 2:

Input: nums = [1,2,3,5,6]
Output: 1
Explanation: One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.

Example 3:

Input: nums = [1,10,100,1000]
Output: 3
Explanation: One possible solution is to:
- Change the second element to 2.
- Change the third element to 3.
- Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous.
 

Constraints:

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    let set = new Set(nums);
    let newArr = Array.from(set).sort((a, b) => a - b);
    
    let newArrL = newArr.length;
    let maxSave = 0;
    let left = 0;
    let right = 0;
   
    //The difference between the maximum element and the minimum element in nums equals nums.length - 1.
    //最大值和最小值的差不能超过n-1
    while(right < newArrL){
        //因为是有序数组，所以right作为滑动窗口的最大值，left作为滑动窗口的最小值
        //我们只需要判断是否差小于n-1，大于 就继续移动右指针 扩大滑动窗口
        //如果大于，则移动左指针 缩小滑动窗口
        while(newArr[right] - newArr[left] > n - 1){
            left++;
        }
        maxSave = Math.max(maxSave, right - left + 1);
        right++; 
    }
    
    return n - maxSave;
};
