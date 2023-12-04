/* Leetcode 1160. Find Words That Can Be Formed by Characters

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Constraints:
1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.
*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let res = 0;
    const map = new Map();

    //首先把chars中所有的字符都放入hash表中
    for(let c of chars){
        map.set(c, (map.has(c) ? map.get(c) + 1 : 1)); //统计每个字符出现的数量
    }

    //遍历每个单词，然后和chars进行比较，是否能找到所有字母
    for(let str of words){
        let charsMap = new Map();
        for(let s of str){
            charsMap.set(s, (charsMap.has(s) ? charsMap.get(s) + 1 : 1)); //统计每个字符出现的数量
        }

        let isGood = true;
        for(let word of str){ //比较使用字符的次数是否一样
            if(charsMap.get(word) > map.get(word) || map.get(word) === undefined){
                isGood = false;
                break; 
            }
        }

        if(isGood){
            res += str.length;
        }
    }

    return res;
};
