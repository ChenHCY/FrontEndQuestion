/*Leetcode 239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of 
the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 10^5
-104 <= nums[i] <= 10^4
1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    let res = [];
    let pq = []; //单调的队列 按照是严格单调递减 来储存 nums中数字 对应的index

    //查找第一个k size的滑动窗口中 最大的数值
    for(let i = 0; i < k; i++){
        //所以当遍历到一个新数时，对于之前的数值 从右往左 进行比较，
        while(pq.length > 0 && nums[i] >= nums[pq[pq.length - 1]]){
            pq.pop(); //pop(): 从右边删除，shift(): 从左边删除
        }
        pq.push(i); //把当前遍历到的数值 index标存入 单调队列，保持单调递减
    }

    res.push(nums[pq[0]]);
    for(let j = k; j < n; j++){
        //所以当遍历到一个新数时，对于之前的数值 从右往左 进行比较，
        while(pq.length > 0 && nums[j] >= nums[pq[pq.length - 1]]){
            pq.pop(); //pop(): 从右边删除，shift(): 从左边删除
        }
        pq.push(j); //把当前遍历到的数值 index标存入 单调队列，保持单调递减

        //然后判断，从左往右（大往小）判断，前面的数字是否还存在滑动窗口中
        while(pq[0] <= j - k){
            pq.shift(); //shift(): 从左边删除
        }

        //因为pq是单调递减的，所以pq[0]就是当前滑动窗口中最大值
        res.push(nums[pq[0]]);
    }

    return res;
};
