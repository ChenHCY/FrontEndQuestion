/* 2855. Minimum Right Shifts to Sort the Array

You are given a 0-indexed array nums of length n containing distinct positive integers. Return the minimum number of right shifts required to sort nums and -1 if this is not possible.

A right shift is defined as shifting the element at index i to index (i + 1) % n, for all indices.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 2
Explanation: 
After the first right shift, nums = [2,3,4,5,1].
After the second right shift, nums = [1,2,3,4,5].
Now nums is sorted; therefore the answer is 2.

Example 2:

Input: nums = [1,3,5]
Output: 0
Explanation: nums is already sorted therefore, the answer is 0.

Example 3:

Input: nums = [2,1,4]
Output: -1
Explanation: It's impossible to sort the array using right shifts.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
nums contains distinct integers.
*/

function minimumRightShifts(nums: number[]): number {
    let index = 0; //断点的位置
    
    //找到断点的位置
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] > nums[i]){
            index = i;
        } 
    }

    //然后从断点开始检查一圈，这个数组是不是一个严格递增的数组
    for(let i = 1; i < nums.length; i++){
        //因为我们是从断电开始检查一圈，回到断点位置，所以要取模，并且运动nums.length长度
        let prevNum = (index + i - 1) % nums.length;
        let currNum = (index + i) % nums.length;
        //如果不是严格递增的，表示这个数组不可能通过right shifts得到
        if(nums[prevNum] > nums[currNum]){
            return -1;
        }
    }

    //如果是严格递增的，计算需要Right shifts的步数
    return (nums.length - index) % nums.length;
    //因为会出现其数组本身就是严格递增的情况 ==》 不需要做任何改变。所以也要取模
};
