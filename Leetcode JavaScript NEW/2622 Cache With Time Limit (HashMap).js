/* Leetcode 2622. Cache With Time Limit

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

Example 1:

Input: 
["TimeLimitedCache", "set", "get", "count", "get"]
[[], [1, 42, 100], [1], [], [1]]
[0, 0, 50, 50, 150]
Output: [null, false, 42, 1, -1]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
At t=50, key=1 is requested and the value of 42 is returned.
At t=50, count() is called and there is one active key in the cache.
At t=100, key=1 expires.
At t=150, get(1) is called but -1 is returned because the cache is empty.

Example 2:

Input: 
["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
[[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
[0, 0, 40, 50, 120, 200, 250]
Output: [null, false, true, 50, 50, -1]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
At t=50, get(1) is called which returned 50.
At t=120, get(1) is called which returned 50.
At t=140, key=1 expires.
At t=200, get(1) is called but the cache is empty so -1 is returned.
At t=250, count() returns 0 because the cache is empty.
 

Constraints:

0 <= key <= 10^9
0 <= value <= 10^9
0 <= duration <= 1000
total method calls will not exceed 100
*/

/* 此题的考点事JS的HashMap储存 和 setTimeout的用法

在 JavaScript 中，setTimeout()函数用于在指定的延迟多少时间后，安排函数的执行或表达式的计算。

它通常用于创建延迟、在特定时间间隔后执行代码或实现动画和异步行为。

*/


var TimeLimitedCache = function() {
    this.map = new Map(); //因为全局的function都要使用这个hashmap,所以这里是this
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
//创建和储存key value, 同时使用setTimeout, 形成能保留duration时间的效果
TimeLimitedCache.prototype.set = function(key, value, duration) {
    //首先检查map是否已经存在这个key值
    let existedKey = this.map.has(key);
    //如果已经存在，需要覆盖value和持续时间
    //所以要清除旧的时间和value
    if(existedKey){
        let obj = this.map.get(key);
        clearTimeout(obj.timer); //清除时间
    }
    //如果没有已经存在，则直接创建新的setTimeout, 然后存入hashmap
  //setTimeout的作用就是延迟指定时间后，执行其内部的表达式
    let timer = setTimeout(() => {
        this.map.delete(key); //当duration的时间到达，不再保留key值
    }, duration);

    this.map.set(key, {
        value: value,
        timer: timer,
    })

    // return true if the same un-expired key already exists and false otherwise. 
    return existedKey;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
 //检查是否存在一个未过期的键。如果是的，返回这个键相关的值。否则返回 -1 
TimeLimitedCache.prototype.get = function(key) {
    if(this.map.has(key)){
        let currObj = this.map.get(key);
        return currObj.value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
 //返回未过期键的总数。
TimeLimitedCache.prototype.count = function() {
    return this.map.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 */
 obj.set(1, 42, 1000); // false
 obj.get(1) // 42
 obj.count() // 1
 
