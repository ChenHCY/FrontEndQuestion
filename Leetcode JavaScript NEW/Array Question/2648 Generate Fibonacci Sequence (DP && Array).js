/*Leetcode 2648. Generate Fibonacci Sequence
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted
 

Constraints:

0 <= callCount <= 50
*/

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;

    //0 <= callCount <= 50
    for(let i = 2; i < 51; i++){
        dp[i] = dp[i - 1] + dp[i - 2]; //DP生成fibonacci sequence
    }

    while(dp.length >= 0){
        yield dp.shift(); //从inde 0开始，每次输出dp[]开头第一个number element
    }
};

//Test Case
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
 
