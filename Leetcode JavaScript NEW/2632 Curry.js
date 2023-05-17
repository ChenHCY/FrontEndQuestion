/* Leetcode 2632. Curry

Given a function fn, return a curried version of that function.

A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either 
another curried function or the same value the original function would have returned.

In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), 
csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.

Example 1:

Input: 
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1],[2],[3]]
Output: 6
Explanation:
The code being executed is:
const curriedSum = curry(fn);
curriedSum(1)(2)(3) === 6;
curriedSum(1)(2)(3) should return the same value as sum(1, 2, 3).

Example 2:

Input:
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1,2],[3]]
Output: 6
Explanation:
curriedSum(1, 2)(3) should return the same value as sum(1, 2, 3).

Example 3:

Input:
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[],[],[1,2,3]]
Output: 6
Explanation:
You should be able to pass the parameters in any way, including all at once or none at all.
curriedSum()()(1, 2, 3) should return the same value as sum(1, 2, 3).

Example 4:

Input:
fn = function life() { return 42; }
inputs = [[]]
Output: 42
Explanation:
currying a function that accepts zero parameters should effectively do nothing.
curriedLife() === 42
 

Constraints:

1 <= inputs.length <= 1000
0 <= inputs[i][j] <= 10^5
0 <= fn.length <= 1000
inputs.flat().length == fn.length
function parameters explicitly defined
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
//Solution 1: 
var curry = function(fn) {
    return function curried(...args) {
        //首先判断接受的args(参数)长度是否大于等于fn需要的长度
        if(args.length >= fn.length){ //如果是的
            return fn(...args); //使用args参数调用fn 输出得到的结果
        } else{//如果args(参数)长度小于fn需要的长度
            return function(...moreArgs){ //curry化
                return curried(...args.concat(moreArgs))//继续接受参数，直到达到fn需要的长度。
            }
        }
    };
};


//Solution2: 使用了 fn.apply(this, args) 方法
var curry = function(fn) {
    return function curried(...args) {
        //首先如果传入的args参数长度与原函数fn定义的长度相等或更长，我们只用把参数传给fn调用
        if(args.length >= fn.length){
            //这里等于 return fn(...args);
            return fn.apply(this, args); //apply()是把当前的参数传递给args参数 在fn中调用
        } else{ //如果参数长度使小于原函数fn定义的长度
            //需要继续接受参数，所以先返回另一个包装器 pass
            return function(...moreArgs){
                //重新应用 curried
                return curried.apply(this, args.concat(moreArgs)); //将之前传入的参数与新的参数一起传入。
            }
        }
    };
};

//Tese Case
 function sum(a, b) { return a + b; }
 const csum = curry(sum);
 csum(1)(2) // 3
