/* Leetcode 2621 Sleep (Promise)

Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:
1 <= millis <= 1000
*/

/* 此题是考察Promise 处理 异步async function 的知识点：

在 JavaScript 中，promise 是一个对象，表示异步操作的最终完成或失败及其结果值。 
==> 它允许您以更有组织性和可读性的方式处理异步操作，避免回调地狱并使错误处理和操作链接更容易。

运行过程：Promise 是使用 Promise 构造函数创建的，它以call back() 回调函数作为参数。 

call back() 回调函数，通常称为 executor 执行器，有两个参数：resolve解析 和 reject拒绝。 

在  executor 执行器 中，您执行aysnchronous operation 异步操作，完成后调用根据执行器内部的if条件 再适当的函数（resolve 或 reject）

==》从而更改 promise 的状态。
*/

/**
 * @param {number} millis
 */
async function sleep(millis) {
    // Promise 是一个对象，它表示一个可能尚不可用但会在未来某个时间点得到解决的值。
    const promise = new Promise((resolve) => {
      setTimeout(() => { //Promise处理异步操作
          resolve(millis); //解析这个millis
      }, millis);  
    });

    return promise;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
