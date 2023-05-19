/* Leetcode 2636 Promise Pool (Promise Task)
Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. 

It should return a promise that resolves when all the input functions resolve.

Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of 
as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute 
functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should also resolve.

For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes two functions. 
When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.

You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.

Example 1:

Input: 
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 2
Output: [[300,400,500],500]
Explanation:
Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively.
They resolve at 300ms, 400ms, and 500ms respectively. The returned promise resolves at 500ms.
At t=0, the first 2 functions are executed. The pool size limit of 2 is reached.
At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2.
At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1.
At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.

Example 2:

Input:
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 5
Output: [[300,400,200],400]
Explanation:
The three input promises resolve at 300ms, 400ms, and 200ms respectively.
The returned promise resolves at 400ms.
At t=0, all 3 functions are executed. The pool limit of 5 is never met.
At t=200, the 3rd function resolves. Pool size is 2.
At t=300, the 1st function resolved. Pool size is 1.
At t=400, the 2nd function resolves. Pool size is 0, so the returned promise also resolves.

Example 3:

Input:
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 1
Output: [[300,700,900],900]
Explanation:
The three input promises resolve at 300ms, 700ms, and 900ms respectively.
The returned promise resolves at 900ms.
At t=0, the 1st function is executed. Pool size is 1.
At t=300, the 1st function resolves and the 2nd function is executed. Pool size is 1.
At t=700, the 2nd function resolves and the 3rd function is executed. Pool size is 1.
At t=900, the 3rd function resolves. Pool size is 0 so the returned promise resolves.
 

Constraints:
0 <= functions.length <= 10
1 <= n <= 10
*/

/* 此题的思路是考察 aysnc function 异步函数, await 暂停异步函数， 和 Promise的执行

==》Pool limit 的要点在于 最大并发执行量的控制 和 执行结果的收集返回

1. Promise.race()方法来控制最大并发量，并使用 Set 数据结构存储正在执行的任务队列 
  ==》只要当中的任何一个任务完成，就会输出结算值
2. Promise.allSettled() 方法来等待执行完所有任务队列之后, 返回输出所有执行结果
  ==》必须所有任务都完成后，才会输出结算值
==》需要考虑reject的情况，但此题设定的是所有task()都会被成功执行

执行流程：
1. 遍历 执行 functions中的所有task, 把每个task()加入到执行队列中
2. 然后当task任务执行时，使用 .then()方法保存执行的结果，并且在完成后，把当前的task移除队列
3. 然后如果任务队列中的正在执行的task数量大于了Pool limit的限制，使用await暂停 async funtion，直到有一个Promise task()完成输出
*/

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    //Promise.race 方法来控制最大并发量，并使用 Set 数据结构存储正在执行的任务队列
    //Promise.allSettled 方法来等待执行完所有任务队列之后返回所有执行结果
    //await的作用就是在 async function中来暂停异步函数，避免Promise有过多的call back
    //Assume all functions never reject. 此题设定不存在reject的情况

    //使用Set来存储正在执行的任务队列
    let TaskQueue = new Set();
    let resolvedTask = []; //成功 resolved的task

    //变量function中的所有task(), 然后根据Pool limit来确定同时执行task的数量
    for(const task of functions){
        //在 当前 task任务执行时，使用then 方法中保存执行结果，并在完成后，将当前任务移出任务队列
        const currTask = task().then((res) => {
            //当 currTask 完成后，保存执行结果 => 把结果存入到最后的 resolved array中
            resolvedTask.push(res);
            //并在完成后，将当前任务移出任务队列 
            TaskQueue.delete(currTask);
        })
        TaskQueue.add(currTask);//把 当前的task() 加入到任务队列中执行

        //如果同时执行的task数量大于等于n（Promise pool lime）
        //使用 await + Promise.race 阻塞任务执行。
        //使用await暂停async function异步函数，然后使用Promise.race() 等到其中一个primose task完成（包括resloved 和 rejected）
        if(TaskQueue.size >= n){
            await Promise.race(TaskQueue); // Promise.race()只要当中的任何一个任务完成，就会输出结算值
        }
    }

    //Promise.allSettled 方法来等待执行完所有任务队列之后返回所有执行结果
    await Promise.allSettled(TaskQueue); //Promise.allSettled() 必须所有任务都完成后，才会输出结算值
    return resolvedTask;
};

//Test case:
 const sleep = (t) => new Promise(res => setTimeout(res, t));
 promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log) // After 900ms
 
