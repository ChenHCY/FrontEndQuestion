/* 15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time complexity: O(n^2)
// Space complexity: O(1)
var threeSum = function(nums) {
    let res = [];

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++){
        //remove duplicate num
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }

        let targetNum = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            let sum = nums[left] + nums[right];
            if(sum === targetNum){
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // remove duplicate number of left and right pointer
                while(left < right && nums[left] === nums[left - 1]){
                    left++;
                }

                while(left < right && nums[right] === nums[right + 1]){
                    right--;
                }
            } else if(sum < targetNum){
                left++;
            } else {
                right--;
            }
        }
    }


    return res;
};

// 子function
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 2; i++){
        //remove duplicate num
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }

        let targetNum = 0 - nums[i];
        let resultArray = findTwoSum(nums, i + 1, targetNum);

        for(let arr of resultArray){
            arr.push(nums[i]);
            res.push(arr);
        }
    }
    return res;
};

const findTwoSum = (nums, start, target) => {
    let twoNumsArray = [];
    let left = start;
    let right = nums.length - 1;

    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === target){
            twoNumsArray.push([nums[left], nums[right]]);
            left++;
            right--;

            // remove duplicate number of left and right pointer
            while(left < right && nums[left] === nums[left - 1]){
                left++;
            }

            while(left < right && nums[right] === nums[right + 1]){
                right--;
            }
        } else if(sum < target){
            left++;
        } else {
            right--;
        }
    }

    return twoNumsArray;
}
