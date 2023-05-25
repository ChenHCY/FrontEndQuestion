/* Leetcode 213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. 

All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. 

Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:

Input: nums = [1,2,3]
Output: 3
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0){
        return 0;
    }

    if(nums.length === 1){
        return nums[0];
    }

    let res = 0;
    let n = nums.length;
  
    //所有的房子都排成一个圆圈。这意味着第一所房子是最后一所房子的邻居
    //同时相邻的房屋都连接了安全系统， 不能偷相邻的房屋
    //所以分成两种情况，一种是包括第一栋房子，另一种是只包括最后一栋
    let nums1 = nums.slice(0, n - 1);
    let nums2 = nums.slice(1, n);

    //比较这两种情况，找到能偷到的最大金额
    res = Math.max(countMoney(nums1), countMoney(nums2));
    return res;
};

const countMoney = (nums) => {
    let len = nums.length;
    //使用DP记忆化搜索，来储存在每间房index，能偷到的最大金额
    const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];

    //遍历每一栋房子，因为不能偷相邻的房屋，所以要比较隔开的房子
    for(let i = 2; i <= len; i++){
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
    }

    return dp[len]; //最后返回，在最后一栋房子时，能偷到的最大金额
}
