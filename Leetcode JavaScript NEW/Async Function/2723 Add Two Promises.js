/* Leetcode 2723. Add Two Promises
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 

Constraints:

promise1 and promise2 are promises that resolve with a number
*/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// 接受两个 Promisepromise1和promise2，作为参数。然后使用 Promise.all([promise1, promise2])创建一个新的承诺，
// ==》当 promise1和promise2 都解决时，该承诺才会解决。
var addTwoPromises = async function(promise1, promise2) {
    return await Promise.all([promise1, promise2]).then(([a, b]) => a + b);
};
//await 是用来暂停async function的运行， await只能在async函数内使用，表示这个函数始终返回一个Promise的结果

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
