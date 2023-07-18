/*Leetcode 2725. Interval Cancellation

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn. 
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called.

Example 1:

Input: fn = (x) => x * 2, args = [4], t = 20
Output: 
[
   {"time": 0, "returned": 8},
   {"time": 20, "returned": 8},
   {"time": 40, "returned": 8},
   {"time": 60, "returned": 8},
   {"time": 80, "returned": 8},
   {"time": 100, "returned": 8}
]
Explanation: 
const cancelT = 110
const cancel = cancellable(x => x * 2, [4], 20);
setTimeout(cancel, cancelT);

Every 20ms, fn(4) is called. Until t=110ms, then it is cancelled.
1st fn call is at 0ms. fn(4) returns 8.
2nd fn call is at 20ms. fn(4) returns 8.
3rd fn call is at 40ms. fn(4) returns 8.
4th fn call is at 60ms. fn(4) returns 8.
5th fn call is at 80ms. fn(4) returns 8.
6th fn call is at 100ms. fn(4) returns 8.
Cancelled at 110ms

Example 2:

Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 25
Output: 
[
   {"time": 0, "returned": 10},
   {"time": 25, "returned": 10},
   {"time": 50, "returned": 10},
   {"time": 75, "returned": 10},
   {"time": 100, "returned": 10},
   {"time": 125, "returned": 10}
]
Explanation: 
const cancelT = 140
const cancel = cancellable((x1, x2) => (x1 * x2), [2, 5], 25); 
setTimeout(cancel, cancelT);

Every 25ms, fn(2, 5) is called. Until t=140ms, then it is cancelled.
1st fn call is at 0ms 
2nd fn call is at 25ms 
3rd fn call is at 50ms 
4th fn call is at 75ms 
5th fn call is at 100ms 
6th fn call is at 125ms
Cancelled at 140ms

Example 3:

Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
Output: 
[
   {"time": 0, "returned": 9},
   {"time": 50, "returned": 9},
   {"time": 100, "returned": 9},
   {"time": 150, "returned": 9}
]
Explanation: 
const cancelT = 180
const cancel = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50);
setTimeout(cancel, cancelT);

Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled. 
1st fn call is at 0ms
2nd fn call is at 50ms
3rd fn call is at 100ms
4th fn call is at 150ms
Cancelled at 180ms
 

Constraints:

fn is a function
args is a valid JSON array
1 <= args.length <= 10
20 <= t <= 1000
10 <= cancelT <= 1000
*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

//setInterval: 每间隔一段时间，执行一次fn函数。使用call back()取消监视器
//setTimeout: 延迟一段时间后，执行一次fn函数。使用call back()取消监视器

var cancellable = function(fn, args, t) {
    fn(...args); //setInterval时有间隔的，会等待t秒 开始第一次执行。
    //此题要求0秒执行一次，所以在外面首先执行一次

    let timer = setInterval(() =>{
        fn(...args);
    }, t);

    return () => {  //当函数结束时，使用call back()取消监视器
        clearInterval(timer);
    }
};

/******* Test case: **************************************************/
const result = []

const fn = (x) => x * 2
const args = [4], t = 20, cancelT = 110
const start = performance.now()
const log = (...argsArr) => {
      const diff = Math.floor(performance.now() - start)
      result.push({"time": diff, "returned": fn(...argsArr)})
}


const cancel = cancellable(log, args, t);

setTimeout(() => {
      cancel()
}, cancelT)

setTimeout(() => {
     console.log(result) 
}, cancelT + t + 15)    


Output: 
[
   {"time": 0, "returned": 10},
   {"time": 25, "returned": 10},
   {"time": 50, "returned": 10},
   {"time": 75, "returned": 10},
   {"time": 100, "returned": 10},
   {"time": 125, "returned": 10}
]
