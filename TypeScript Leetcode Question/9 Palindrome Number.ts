/* 9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:
-2^31 <= x <= 2^31 - 1
*/

function isPalindrome(x: number): boolean {
    //首先 负数 或者以0结尾的数都无法组成回文
    if(x < 0 || (x != 0 && x % 10 == 0)){
        return false;
    }

    //使用res从后往前组成一个新数，然后检查和x是否相等
    let x2 = x;
    let res = 0;

    while(x2){
        res = res * 10 + (x2 % 10);
        x2 = Math.floor(x2 / 10);
    }
    
    return res === x;
};
