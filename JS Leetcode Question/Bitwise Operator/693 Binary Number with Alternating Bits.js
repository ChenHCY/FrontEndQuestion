/*
693. Binary Number with Alternating Bits

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

 

Example 1:

Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101

Example 2:

Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.

Example 3:

Input: n = 11
Output: false
Explanation: The binary representation of 11 is: 1011.
 

Constraints:
1 <= n <= 2^31 - 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
// 1. >> 1 右移动1位 === 除以 2 （得到temp)
// 2. temp + n 再把n 加回去： 只有有 1，结果位就是 1
// &  temp & temp + 1: 位运算，只要有0， 结果位就是 0 ==》 必须两个数的当前位都是1 才显示1
var hasAlternatingBits = function(n) {
    let temp = n >> 1;
    temp += n;
    return (temp & (temp + 1)) === 0;
};
