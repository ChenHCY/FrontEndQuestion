/* Leetcode 2620. Counter

Given an integer n, return a counter function. This counter function initially returns n and then 
returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.

Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
At most 1000 calls to counter() will be made
*/

/* 此题是考察 JavaScript中 闭包clousre的概念

在 JavaScript 中，闭包是一个强大的特性，即使在父函数执行完毕后，它也允许函数从父作用域中记住和访问变量。

所以在这个示例中，Function createCounter() 定义了一个内部function countAddOne()

在function countAddOne(), 使用和访问了在createCounter()中定义的 变量sum

所以即使在createCounter()执行完毕之后，the closure variable 任然保留对于countAddOne()范围内变量值和function

所以当继续call counter()时，我们任然可以访问countAddOne()然后记录他的值

*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let sum = n - 1;
    //函数引用了在同一作用域以及任何外部作用域中声明的所有变量
    return countAddOne = () => {
        sum += 1;
        return sum;
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
