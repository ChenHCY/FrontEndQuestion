/* Leetcode 322. Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 2^31 - 1
0 <= amount <= 10^4
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //创建Dp，来储存每个数字的amount需要用的最少数量的硬币数量
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for(let i = 1; i <= amount; i++){
        for(let coin of coins){
          //每次如果有可以使用的硬币，则统计需要的数量
          //然后进行更新，是否数量更少
            if(i - coin >= 0){
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    //最后检查这个amount的值是否发生改变，如果没有 表示没有硬币可以组成到这个数
    return dp[amount] === Infinity ? -1 : dp[amount];
};
