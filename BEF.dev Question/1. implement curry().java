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
    //我们还使用 fn 函数的 length 属性来确定它期望的参数数量。
    if(args.length >= fn.length){ //确定是否还有剩余的参数，直到接收所有参数
      return fn(...args);
    } else{ //直接接收所有参数，然后使用所有参数调用原始函数。
      return function(...moreArgs){
        return curriedFunc(...args, ...moreArgs); //然后使用所有参数调用原始函数。
      }
    } 
  };
}

//Solution 2:
function curry(fn) {
  // your code here
  // 我们使用 apply() 方法用给定的参数调用原始函数。
  return function curriedFunc(...args){
    //我们还使用 fn 函数的 length 属性来确定它期望的参数数量。
    if(args.length >= fn.length){ //确定是否还有剩余的参数，直到所有参数
      return fn.apply(this, args);
    } else{ //直接接收所有参数，然后使用所有参数调用原始函数。
      return function(...moreArgs){ 
        return curriedFunc.apply(this, args.concat(moreArgs)); // 使用所有参数调用原始函数。
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
