/* 1. implement curry() 

Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
*/

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

// Currying 柯里化 in JS 的定义： curry()函数以一个函数fn作为参数并返回一个新的柯里化函数。return的fn 接受一个或多个参数，每次调用它时，它都会返回一个需要剩余参数的新函数。
//该过程一直持续到收到所有参数，此时将使用所有参数调用原始函数。

//Solution 1: 
function curry(fn) {
  // your code here
  return function curriedFunc(...args){
    //首先判断接受的args(参数)长度是否大于等于fn需要的长度
    if(args.length >= fn.length){ //如果确定是大于的
      return fn(...args); //使用当前参数调用fn 得到结果
    } else{ //如果args(参数)长度小于fn需要的长度
      return function(...moreArgs){
        return curriedFunc(...args, ...moreArgs); //继续接受参数，直到达到标准。
      }
    } 
  };
}

//Solution 2:
function curry(fn) {
  // your code here
  // 我们使用 apply()方法是一种函数方法，它允许您调用具有指定this值和数组或类数组对象作为参数的函数。
  return function curriedFunc(...args){
    //首先判断接受的args(参数)长度是否大于等于fn需要的长度
    if(args.length >= fn.length){ //如果确定是大于的
      return fn.apply(this, args);//使用当前参数调用fn 得到结果
    } else{ //如果args(参数)长度小于fn需要的长度
      return function(...moreArgs){ 
        return curriedFunc.apply(this, args.concat(moreArgs));//继续接受参数，直到达到标准。
      }
    } 
  };
}


//输出，调用的部分：
// 定义了 join() 函数，它接受三个参数并返回一个字符串。
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

//然后使用 curry() 函数创建一个新函数 curriedJoin，它是 join() 函数的柯里化版本。
const curriedJoin = curry(join)

//最后使用各种参数调用 curriedJoin() 函数来演示其行为。
console.log(curriedJoin(1, 2, 3)); // Output: '1_2_3'

console.log(curriedJoin(1)(2, 3)); // Output: '1_2_3'

console.log(curriedJoin(1, 2)(3)); // Output: '1_2_3'
