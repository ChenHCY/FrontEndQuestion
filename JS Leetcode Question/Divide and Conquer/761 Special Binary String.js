/* 761. Special Binary String

Special binary strings are binary strings with the following two properties:

The number of 0's is equal to the number of 1's.
Every prefix of the binary string has at least as many 1's as 0's.
You are given a special binary string s.

A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.

Return the lexicographically largest resulting string possible after applying the mentioned operations on the string.

 

Example 1:

Input: s = "11011000"
Output: "11100100"
Explanation: The strings "10" [occuring at s[1]] and "1100" [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.
Example 2:

Input: s = "10"
Output: "10"
 

Constraints:

1 <= s.length <= 50
s[i] is either '0' or '1'.
s is a special binary string.
*/

/* Time complexity:
O(n^2) due to string concatenation and recursion.
-- At each level, we traverse the string: O(n)
-- We sort the substrings: O(k log k), where k is number of substrings at that level
-- Recursion depth: O(n) 
*/

/* Space complexity:
O(n^2)
-- Recursion stack: O(n) depth ==> 递归来
-- Each recursive call creates new substrings
-- String concatenation creates new strings at each level
*/ 

/**
 * @param {string} s
 * @return {string}
 */
 // 递归 + 分治
 // special binary string： 1. 0 和 1 数量相同 / 2. 任意前缀中，1 的数量 ≥ 0 
 // 任意位置：count(1) >= count(0) ==》 最终：count(1) == count(0)
 // 所以一定是 1 开头 0 结尾
var makeLargestSpecial = function(s) {
    if(!s || s.length === 0){
        return "";
    }

    let count = 0; // 记录 0 和 1 的数量，来找到 special binary string
    let i = 0; 
    const res = []; // final result

    for(let j = 0; j < s.length; j++){
        count += s[j] === '1' ? 1 : -1; // 如果是1 coun+1, 如果是0 count-1

        // if count == 0, find the special binary string
        if(count === 0){
            // 把最外层的 （开始1 和 结尾0） 取出来, 中间的部分： i + 1 =》 j 
            // 递归中间的部分，把大的值尽量往前面放
            const inner = makeLargestSpecial(s.substring(i + 1, j));
            res.push("1" + inner + "0");
            i = j + 1; // 检查下一个的部分，因为必须是 1 开头，所以直接移动到下一个区间
        }
    }

    res.sort((a, b) => b.localeCompare(a)); // 要降序的，因为要把value 大的放在前面 最好才能得到最大值

    return res.join(""); // join() ==> change array to string, 不能用tostring, tostring 带有 ","
};
