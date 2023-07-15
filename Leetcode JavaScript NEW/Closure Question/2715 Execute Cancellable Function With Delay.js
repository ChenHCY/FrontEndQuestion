/* Leetcode 2715. Execute Cancellable Function With Delay
Given a function fn, an array or arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. In that case, fn should never be called.

Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancelTime = 50
const cancel = cancellable((x) => x * 5, [2], 20); // fn(2) called at t=20ms
setTimeout(cancel, cancelTime);

The cancellation was scheduled to occur after a delay of cancelTime (50ms), which happened after the execution of fn(2) at 20ms.

Example 2:

Input: fn = (x) => x**2, args = [2], t = 100
Output: []
Explanation: 
const cancelTime = 50 
const cancel = cancellable((x) => x**2, [2], 100); // fn(2) not called
setTimeout(cancel, cancelTime);

The cancellation was scheduled to occur after a delay of cancelTime (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

Example 3:

Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
Output: [{"time": 30, "returned": 8}]
Explanation:
const cancelTime = 100
const cancel = cancellable((x1, x2) => x1 * x2, [2,4], 30); // fn(2,4) called at t=30ms
setTimeout(cancel, cancelTime);

The cancellation was scheduled to occur after a delay of cancelTime (100ms), which happened after the execution of fn(2,4) at 30ms.
 

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

//Closure(闭包): 闭包会随着函数的创建而被同时创建，当一个函数诞生的时候会把它诞生的那个环境整个记录下来以便函数内调用。所以只要是函数诞生时附近的他的上一级的变量都会被记录。是诞生，不是使用。
//setTimeout(计时器)：全局的 setTimeout() 方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => fn(...args), t); //fn是调用函数，args参数，t延迟的秒数
    return () => { //call back function
        clearTimeout(timer);
    }
};


//Test case:
const result = []
 
const fn = (x) => x * 5
const args = [2], t = 20, cancelT = 50
const start = performance.now() 
const log = (...argsArr) => {
const diff = Math.floor(performance.now() - start);
result.push({"time": diff, "returned": fn(...argsArr))

  
const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelT)
 
setTimeout(() => {
  cancel()
}, cancelT)

setTimeout(() => {
 console.log(result) // [{"time":20,"returned":10}]
}, maxT + 15)
