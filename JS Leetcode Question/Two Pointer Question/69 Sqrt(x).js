/* Leetcode 69. Sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
Example 1:

Input: x = 4

Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:

Input: x = 8

Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 2^31 - 1
*/
/**
 * @param {number} x
 * @return {number}
 */
/*Time: O(logn)   Space: O(1） */
var mySqrt = function(x) {
    let left = 0;
    let right = x;

    if(right * right == 1){
        return right;
    }

    while(left < right - 1){
        let mid = Math.floor(left + (right - left) / 2);
        let temp = mid * mid;

        if(temp == x){
            return mid;
        } else if (temp > x){
            right = mid;
        } else{
            left = mid;
        }
    }

    return left;
};
