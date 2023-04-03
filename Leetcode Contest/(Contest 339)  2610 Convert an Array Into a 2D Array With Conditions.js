/*Leetcode (Contest 339)  2610 Convert an Array Into a 2D Array With Conditions

You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

      The 2D array should contain only the elements of the array nums.
      Each row in the 2D array contains distinct integers.
      The number of rows in the 2D array should be minimal.
      
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.

Example 1:

Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.

Example 2:

Input: nums = [1,2,3,4]
Output: [[4,3,2,1]]
Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.
 
Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= nums.length
*/

/*

思路：使用hashmap来统计每个数字的出现数量，剩下的不同数字尽量每行都放 1 个，直到所有数字放完

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let res = [];
    const map = new Map();

    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    while(map.size){
        let list = [];
        
        for(const key of map.keys()){
            if(map.get(key) > 0){
                list.push(key);
                map.set(key, map.get(key) - 1);
            }

            if(map.get(key) === 0){
                map.delete(key);
            }
        }

        res.push([...list]); //这里要使用argument和...来合并当前和之前所有数组
    }

    return res;

};
