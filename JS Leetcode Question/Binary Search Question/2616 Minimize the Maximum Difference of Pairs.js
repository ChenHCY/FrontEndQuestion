/*Leetcode 2616. Minimize the Maximum Difference of Pairs

You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such 
that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.

Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|, where |x| represents the absolute value of x.

Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.

Example 1:

Input: nums = [10,1,2,7,1,3], p = 2
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5. 
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.

Example 2:

Input: nums = [4,2,1,2], p = 1
Output: 0
Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.
 

Constraints:

1 <= nums.length <= 10^5
0 <= nums[i] <= 10^9
0 <= p <= (nums.length)/2
*/

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
   //首先给nums array 进行排序，按照升序
    nums.sort((a, b) => a - b);
    let n =  nums.length;

    //left right区域决定的差值，不是index位置
    let left = 0;
    let right = nums[n - 1] - nums[0];

    while(left < right){
        let mid = Math.floor(left + (right - left) / 2);
        //console.log(mid);
        let pair = 0;
        //统计有多少对的差值是小于当前mid值的
        for(let i = 0; i < n - 1; i++){
            if(nums[i + 1] - nums[i] <= mid){
                pair += 1;
                i++;
            }
        }

        //如果有p对以上的数 的差值是小于mid的，则移动right指针，缩小区间和mid值
        if(pair >= p){
            right = mid;
        } else{ //如果没有p对，则移动左指针 增大mid值
            left = mid + 1;
        }
    }

    return left; //最后输出left 指针的值
};
