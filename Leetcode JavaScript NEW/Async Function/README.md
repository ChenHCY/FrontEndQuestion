# Promise.race() in JavaScript
Promise.race()接受一个可迭代的Promise并返回一个新的Promise。 

只要iterable 中的任何 promise 解决，这个新的 promise 就会解决（解决或拒绝）。 

==> 输出的的结算值是第一个完成的Promise值。 `Promise.race(iterable)`

```JavaScript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 500);
});

Promise.race([promise1, promise2])
  .then(result => {
    console.log('Resolved:', result);
  })
  .catch(error => {
    console.log('Rejected:', error.message);
  });
```
在这个例子中，最先完成的是Promise 2, 根据Promise.race的规则， =》 最后输出的为'Promise 2 resolved'

# Promise.allSettled() in JavaScript
Promise.allSettled()是一个 JavaScript 方法，它接受一个iterable 的Promise 并返回一个新的 Promsie。

==> 必须要当中的所有Promsie都已解决时，无论它们是解决还是拒绝，这个new Promise 才会得到结果输出。

==> 新承诺的结算值是一组代表承诺结果的对象。 `Promise.allSettled(iterable)`

==> The iterable parameter is an iterable object, such as an array or a string, that contains promises.

```JavaScript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 rejected'));
  }, 500);
});

//Status: fulfilled 全部完成 ==》输出全部Promise的结果
Promise.allSettled([promise1, promise2])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Resolved:', result.value);
      } else {
        console.log('Rejected:', result.reason.message);
      }
    });
}); //Output:
/* Resolved: Promise 1 resolved
   Rejected: Promise 2 rejected
*/

//Status: Rejected: 只会输出状态为rejected的promise
Promise.allSettled([promise1, promise2])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'rejected') {
        console.log('Rejected:', result.reason.message);
      } 
    });
}); //输出为： 
/*ejected: Promise 2 rejected*/
```
三个特殊的属性：
  `Status`: 表示需要输出的Promise的状态，可以是'fulfilled'或'rejected'。
  `values`: 如果成功resolved promise, 输出Promise的value。否则，它是undefined。
  `reason`: 如果rejected promise，则输出Promsie中的reject message  否则，它是undefined

# await and async function in JavaScript
==> await keyword is used within an `asyncasync function to pauseasync function.

==> await 时用来暂停async function的运行， await只能在async函数内使用，表示这个函数始终返回一个Promise的结果

使用await时，async异步函数的执行将暂停，直到等待的Promise完成 （resolved 或 rejected）。

==》 如果承诺得到解决，则返回它解决的值。如果承诺被拒绝，则会抛出错误，
