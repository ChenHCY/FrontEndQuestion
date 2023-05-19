/* Leetcode 2676. Throttle
Given a function fn and a time in milliseconds t, return a throttled version of that function.

A throttled function is first called without delay and then, for a time interval of t milliseconds, 
can't be executed but should store the latest function arguments provided to call fn with them after the end of the delay.

For instance, t = 50ms, and the function was called at 30ms, 40ms, and 60ms. The first function call would block calling 
functions for the following t milliseconds. The second function call would save arguments, and the third call arguments 
should overwrite currently stored arguments from the second call because the second and third calls are called before 80ms. 

Once the delay has passed, the throttled function should be called with the latest arguments provided during the delay period, 
and it should also create another delay period of 80ms + t.

Example 1:

Input: t = 100, calls = [{"t":20,"inputs":[1]}]
Output: [{"t":20,"inputs":[1]}]
Explanation: The 1st call is always called without delay

Example 2:

Input: t = 50, calls = [{"t":50,"inputs":[1]},{"t":75,"inputs":[2]}]
Output: [{"t":50,"inputs":[1]},{"t":100,"inputs":[2]}]
Explanation: 
The 1st is called a function with arguments (1) without delay.
The 2nd is called at 75ms, within the delay period because 50ms + 50ms = 100ms, so the next call can be reached at 100ms. Therefore, we save arguments from the 2nd call to use them at the callback of the 1st call.

Example 3:

Input: t = 70, calls = [{"t":50,"inputs":[1]},{"t":75,"inputs":[2]},{"t":90,"inputs":[8]},{"t": 140, "inputs":[5,7]},{"t": 300, "inputs": [9,4]}]
Output: [{"t":50,"inputs":[1]},{"t":120,"inputs":[8]},{"t":190,"inputs":[5,7]},{"t":300,"inputs":[9,4]}]
Explanation: 
The 1st is called a function with arguments (1) without delay.
The 2nd is called at 75ms within the delay period because 50ms + 70ms = 120ms, so it should only save arguments. 
The 3rd is also called within the delay period, and because we need just the latest function arguments, we overwrite previous ones. After the delay period, we do a callback at 120ms with saved arguments. That callback makes another delay period of 120ms + 70ms = 190ms so that the next function can be called at 190ms.
The 4th is called at 140ms in the delay period, so it should be called as a callback at 190ms. That will create another delay period of 190ms + 70ms = 260ms.
The 5th is called at 300ms, but it is after 260ms, so it should be called immediately and should create another delay period of 300ms + 70ms = 370ms.
 

Constraints:

0 <= t <= 1000
1 <= calls.length <= 10
0 <= calls[i].t <= 1000
0 <= calls[i].inputs[i], calls[i].inputs.length <= 10
*/

/* 此题的考点就是 throttle 节流的知识

在 JavaScript 中，throttle 是一种用于控制函数执行频率的技术。它确保函数以最大速率被调用，而不管它被调用的频率如何。

==》意思就是说，Throttle节流一个fn函数，必须要等到设定的fn延迟时间结束，才能再次调用此函数。

在处理可以快速触发的事件（例如滚动事件或调整大小事件）时，Throttle特别有用。通过Throttle function，可以限制它在特定时间间隔内被调用的次数。

在此题的运行原理就是，我们先记录当前时间，然后减去上一次调用fn的时间，

==> 如果这个间隔是大于等于设定的延迟时间，就立马调用fn

==> 如果这个间隔小于设定的延迟时间，则设定一个setTimeout, 用来等待延迟时间的完成后再调用fn
*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    //throttle： 一段时间只能触发一次, 一种用于确保以固定间隔调用函数的技术
    //确保无论触发事件发生的频率如何，函数都以固定的速率被调用。
    //fn：需要被节流的函数。t: 设定的fn需要延迟的时间

    let timeOutId; //timeoutId 跟踪 setTimeout, 还没有到达延迟时间的timeID
    let lastCallTime = 0; //lastExecTime 存储最后一次调用fn的time。
    return function(...args) {
        const currTime = Date.now();
        //remainingTime 是通过从设定的fn延迟间隔中减去经过的时间来计算的
        const remainingTime = t - (currTime - lastCallTime); //也就是需要等待的fn完成的时间

        clearTimeout(timeOutId); //清理掉timeOutId

        if(remainingTime <= 0){ //表示上一次的fn已经完成了延迟时间，可以直接调用fn
            fn.apply(this, args); //调用fn
            lastCallTime = currTime; //更新调用fn的时间为最新时间
        } else { //如果还没有达到fn设定的延迟时间
            //设定一个setTimeout来保留参数，在完成等待后 进行调用
            timeOutId = setTimeout(() => {
                fn.apply(this, args); //在等待剩余的fn延迟时间后，进行调用fn
                lastCallTime = Date.now(); //更新最后一次调用fn的时间 为 最新时间
            }, remainingTime);
        }
    }
};

//Test Case: 
const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log"); // logged at t=100ms.
