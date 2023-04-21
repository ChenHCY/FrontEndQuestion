/* Leetcode 67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/*Time: O(1)   Space: O(1） */
var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

/* 思路：

使用 BigInt(`0b${binary number}`) 将里面的二进制数(binary numbers) 转化为 十进制数 (decimal numbers)

Example: ==>  BigInt(`0b${a}`) /  BigInt(`0b${b}`)

然后 使用 (decimal numbers).toString(2) 将一个十进制数 (decimal numbers)转回为二进制数(binary numbers)

Example: ==> (10).toString(2) // > '1010'

*/
