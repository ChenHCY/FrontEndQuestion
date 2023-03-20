/* Leetcode 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var firstS = strs[0];
    
    for(let i = 1; i < strs.length; i++){
        firstS = checkLongestStr(firstS, strs[i]);
    }

    return firstS;
};

var checkLongestStr = function(str1, str2){
    let i = 0;
    let j = 0;

    while(i < str1.length && j < str2.length && str1.charAt(i) == str2.charAt(j)){
        i++;
        j++;
    }

    return str1.substring(0, i);
}
