/*Leetcode 2839. Check if Strings Can be Made Equal With Operations I

You are given two strings s1 and s2, both of length 4, consisting of lowercase English letters.

You can apply the following operation on any of the two strings any number of times:

    · Choose any two indices i and j such that j - i = 2, then swap the two characters at those indices in the string.

Return true if you can make the strings s1 and s2 equal, and false otherwise.

Example 1:

Input: s1 = "abcd", s2 = "cdab"
Output: true
Explanation: We can do the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = "cbad".
- Choose the indices i = 1, j = 3. The resulting string is s1 = "cdab" = s2.

Example 2:

Input: s1 = "abcd", s2 = "dacb"
Output: false
Explanation: It is not possible to make the two strings equal.
 

Constraints:

s1.length == s2.length == 4
s1 and s2 consist only of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    //Array.from() == string.charArray() JS把String字符串改写成char[] array的方式
    //let ch = Array.from(s1);
  
    let ch = [...s1]; // JS把String字符串改写成char[] array的方式
    
    if(s1 === s2){
        return true;
    }

    //因为 string s1 和 s2 的长度都是4个字母
    //然后交换条件的 i j ==> j - i = 2 ==> 中间距离为 2, 所以只需要检查 index 0 和 1
    for(let i = 0; i < 2; i++){
        if(ch[i] === s2.charAt(i + 2)){
            let temp = ch[i];
            ch[i] = ch[i + 2];
            ch[i + 2] = temp;
        }

        //ch.join('') 将字母array ch 转换为 String字符串。
        if(ch.join('') === s2){
            return true;
        }
    }

    return false;
};
