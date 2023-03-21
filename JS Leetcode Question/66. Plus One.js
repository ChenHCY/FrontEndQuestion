/* Leetcode 66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 

The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;

    for(let i = n - 1; i >= 0; i--){
        //let temp = digits[i];
        if(digits[i] < 9){
            digits[i] = digits[i] + 1;
            return digits
        }
        digits[i] = 0; //if the digit value is 9, 9 + 1 = 10; ==> so change the value to 0
    }

    //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    //如果跑完还需要进位，则使用unshif（）方法 在前面放置一个0. ==》for example: [9, 9, 9] + 1 = [1, 0, 0, 0]
    digits.unshift(1);  // unshift()方法将一个或多个元素添加到数组的开头并返回数组的新长度。
    return digits;
};
