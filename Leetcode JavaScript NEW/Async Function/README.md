
# Promise in JavaScript
==> Promises 是现代 JavaScript 不可或缺的一部分，广泛用于处理异步任务。

Promise： In JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. 
It allows you to handle asynchronous operations in a more organized and readable manner, avoiding callback hell and enabling easier error handling and chaining of operations.

Promise 是一个对象，表示异步操作的最终完成或失败及其结果值。 它允许您以更有组织性和可读性的方式处理异步操作，避免回调地狱并使错误处理和操作链接更容易。

```
Promise 对象具有三种状态： 
    1. Pending：初始状态。 承诺既没有实现也没有被拒绝。
    2. Fulfilled：异步操作成功完成，承诺得到履行。 这意味着承诺的值可用并且可以使用 then() 方法访问。
    3. Rejected：异步操作失败，promise被拒绝。 这意味着发生错误，并且承诺的值不可用。 可以使用 catch() 或 finally() 方法访问拒绝原因。
```

运行过程：Promise 是使用 Promise 构造函数创建的，它以call back() 回调函数作为参数。 

call back() 回调函数，通常称为 executor 执行器，有两个参数：resolve解析 和 reject拒绝。 

在  executor 执行器 中，您执行aysnchronous operation 异步操作，完成后调用根据执行器内部的if条件 再适当的函数（resolve 或 reject）

==》从而更改 promise 的状态。

**Coding Example**:
```JavaScript
const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation 
  setTimeout(() => {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) { //如果满足这个if-条件
      //resolve解析这个promise
      resolve(randomNumber);
    } else { //如果不满足条件
      // Reject 拒绝这个promise
      reject(new Error('Something went wrong'));
    }
  }, 1000);
});

// Handling the promise
myPromise
  .then(result => { //then()方法用于提示处理完成状态
    console.log('Promise fulfilled with result:', result);
  })
  .catch(error => { // catch()方法用于提升处理拒绝状态
    console.error('Promise rejected with error:', error);
  })
  .finally(() => { //finally()方法用于执行代码，标志primise已经完成
    console.log('Promise completed');
  });
```

在这个例子中，promise 等待一秒钟，生成一个随机数，

然后在call back()中，判断if-条件 ==> 如果该数字小于 0.5，则 resolve解析 promise。否则，它会报错， reject拒绝 promise。

然后Handling the promise中，then()方法用于处理完成状态，catch()方法用于处理拒绝状态，finally()方法用于执行代码，标志primise已经完成，而不管承诺的状态如何。

# Promise.resolve() in JavaScript
`Promise.resolve()` 是 JavaScript Promise API 中的静态方法。它返回一个用给定值解析的 Promise 对象，或者如果给定值已经是一个 Promise，则返回一个已解析的 Promise。

```JavaScript
Promise.resolve(value) // value可以是任何有效的 JavaScript 值，包括 Promise。
==> 这是创建已使用特定值解析的 Promise 的便捷方法。
```
**Coding Example 1**:
```JavaScript
const value = 42;
const resolvedPromise = Promise.resolve(value);

resolvedPromise.then(result => {
  console.log(result); // Output: 42
}); // 我们创建了一个resolvedPromise值为 的已解决的承诺42。当我们调用.then()Promise 时，解析值 ( 42) 会打印到控制台。
```

**Coding Example 2**:
```JavaScript
const innerPromise = new Promise(resolve => setTimeout(() => resolve('Inner Promise'), 1000));
const resolvedPromise = Promise.resolve(innerPromise);

resolvedPromise.then(result => {
  console.log(result); // Output: Inner Promise
});
```

**Coding Example 3**:
```JavaScript
const resolvedPromise = Promise.resolve();

resolvedPromise.then(() => {
  console.log('Promise resolved successfully.');
});
// Promise.resolve()调用时不带任何参数。它创建了一个没有特定值的已解决的 Promise。
// 当我们调用 时.then()，回调将被执行，并将其打印 'Promise resolved successfully.'到控制台。
```

**总结来说** 
`Promise.resolve()` 在各种场景中都很有用，例如将非 Promise 值转换为 Promise、确保类似 Promise 的行为以及简化异步操作的处理。

# chain of asynchronous operations in JavaScript

异步操作链: Promises 允许使用 then() 方法将多个异步操作链接在一起。 每个 then() 调用都会返回一个新的 promise，它可用于执行其他操作。 

==> 这种链接简化了顺序异步任务的处理。

**Coding Example**:
```JavaScript
myPromise
  .then(result => {
    console.log('First promise fulfilled with result:', result);
    return result * 2; // Return a new value for the next promise
  })
  .then(result => {
    console.log('Second promise fulfilled with result:', result);
    return result + 5;
  })
  .then(result => {
    console.log('Third promise fulfilled with result:', result);
  })
  .catch(error => {
    console.error('Promise rejected with error:', error);
  })
  .finally(() => {
    console.log('Promise completed');
  });
```
在这个例子中，每个 then() 调用对从前一个 promise 传递的值执行一个操作，创建一个 异步操作链 chain of asynchronous operations。

# Promise.race() in JavaScript
`Promise.race()` 接受一个 iterable可迭代 的Promise并返回一个新的Promise。 

只要 iterable可迭代 中的任何 promise 解决，这个新的 promise 就会解决（解决或拒绝）。 

```JavaScript
Promise.race(iterable) //输出的的结算值是第一个完成的Promise值。
```
**Coding Example**:
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

# Promise.all() in JavaScript
`Promise.all()` 是 JavaScript Promise API 中的静态方法。它接受一个 iterable可迭代 的 Promise（通常是一个数组）作为输入，并返回一个新的 Promise

==> 当可迭代中的所有 `Promise` 都已实现时，该 Promise 会被实现；

==> 如果可迭代中的任何 `Promise` 被拒绝，则立即拒绝。

==> 返回的 Promise 将有一个数组，其中包含所有输入 `Promise` 的解析值，其顺序与原始可迭代的顺序相同。

```JavaScript
Promise.all(iterable); // iterable： 一个包含 Promise 对象的数组（或任何其他可迭代对象）。
```

**Coding Example**: 
```JavaScript
const promise1 = Promise.resolve(1); // 解析一个promise的给定值
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => data.userId);

Promise.all([promise1, promise2, promise3])
  .then(([result1, result2, result3]) => {
    console.log(result1); // 1
    console.log(result2); // 2
    console.log(result3); // 1 (data.userId from the fetched data)
    console.log('All promises resolved successfully.');
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```
`Promise.all()` 等待所有三个承诺解决（或拒绝）并返回一个新的承诺。

==> 在.then()调用的回调中Promise.all()，所有三个 Promise 的解析值分别从数组解构为result1、result2和result3。然后，它们的值将记录到控制台。

==> 如果可迭代拒绝中的任何承诺，Promise.all()将立即拒绝，并且.catch()块将处理错误。

**** 总结来说： `Promise.all()` 当您有多个可以独立执行的异步操作并且您希望等待所有操作完成后再根据其结果执行另一个操作时，通常会使用该操作。

# Promise.allSettled() in JavaScript
`Promise.allSettled()` 是一个 JavaScript 方法，它接受一个 iterable可迭代 的Promise 并返回一个新的 Promsie。

==> 必须要当中的所有Promsie都已解决时，无论它们是解决还是拒绝，这个new Promise 才会得到结果输出。

==> 新承诺的结算值是一组代表承诺结果的对象。 `Promise.allSettled(iterable)`

==> The iterable parameter is an iterable object, such as an array or a string, that contains promises.

**Coding Example**:
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

```
三个特殊的属性：
  ·`Status`: 表示需要输出的Promise的状态，可以是'fulfilled'或'rejected'。
  ·`values`: 如果成功resolved promise, 输出Promise的value。否则，它是undefined。
  ·`reason`: 如果rejected promise，则输出Promsie中的reject message  否则，它是undefined
```

# await and async function in JavaScript
==> `await` keyword is used within an `async function` to pause-async function.
“await”关键字在“async function”中用于暂停异步函数。

==> 更简单的方法处理异步操作 ==> await 是用来暂停async function的运行， await只能在async函数内使用，表示这个函数始终返回一个Promise的结果

使用await时，async异步函数的执行将暂停，直到等待的Promise完成 （resolved 或 rejected）。

==》 如果承诺得到解决，则返回它解决的值。如果承诺被拒绝，则会抛出错误，
