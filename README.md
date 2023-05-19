# FrontEndQuestion
Practice Front-End Development Question

# Array.reduce() in JavaScript
==> 用于将数组缩减为单个值。

 Array.reduce()是 JavaScript 中的高阶方法，它遍历数组的元素并对每个元素应用callback回调函数，并在运行过程中累积结果。
 
 可用于通过遍历数组中的每个元素并应用带有两个参数的callback回调函数, => 将数组缩减为单个值：acc表示累积值， curr表示当前值

```JavaScript
array.reduce(callback, initialValue);
```
reduce() 工作原理：
   `callback`：这是对数组的每个元素调用的函数。callback回调函数有四个参数：
          ==> 1. `accumulator`：每次迭代更新的累积值。(acc表示累积值)
          ==> 2. `currentValue`: 当前正在处理的元素。(curr表示当前值)
          ==> 3. `currentIndex`:（可选）正在处理的当前元素的索引。
          ==> 4. `array`: （可选）调用方法的原始数组
   `initialValue`（可选）：它是累加器的初始值。如果提供，运算的结果从这个初始值开始。如果省略，则将数组的第一个元素用作初始值。
 
==》简单来说，reduce()方法从左到右遍历数组，对每个元素执行callback回调函数。得到的结果成为下一次迭代的累加器的新值。最后，该reduce()方法返回最终的累加值。

```JavaScript
const array = [1, 2, 3, 4, 5];
//accumulator 累计值， currentValue 当前值
const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 表示initialValue 初始值
console.log(sum); // Output: 15
```

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

# Array.apply() in JavScript
在 JavaScript 中，apply()方法是一种函数方法，它允许您调用具有指定this值和数组或类数组对象作为参数的函数。
```JavaScript
function.apply(thisArg, [argsArray])
//function: 要调用的函数。
//thisArg：执行时要作为值传递给函数的this值。==》也表示当前的参数
//argsArray：包含要传递给函数的参数的数组或类数组对象。==》 总的参数合集

//Example:
function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
const person = {
  name: 'John',
  age: 30
};
greet.apply(person, ['Alice', 25]);  // Output: Hello, Alice! You are 25 years old.
```

# `${}` in JavaScript

在 JavaScript 中，`${}` 是一种用于 String字符串 插值 或 模板文字的语法。它允许您通过将表达式或变量包含在 `${}`.

```JavaScript
//Example 1：
const name = 'John';
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);  // Output: Hello, my name is John and I am 30 years old.
//Example 2：
const x = 10;
const y = 5;
const result = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(result);  // Output: The sum of 10 and 5 is 15.
```

# Object.hasOwnProperty() in JavaScript
`Object.hasOwnProperty()`属性：用来判断object中是否存在一个属性，没有就新建空数组，然后把数组元素放进去。

```JavaScript
object.hasOwnProperty(property)
//object: The object to check for the presence of a property.
//property: The name of the property to check.
```
如果指定的属性是对象的直接属性，则 hasOwnProperty() 方法返回 true，否则返回 false。

# Object.keys() in JavaScript
Object.keys() 方法用于检索给定obejct 自身的可枚举的 keys（属性）名称的数组。 

==》它以一个对象作为参数并返回一个包含对象属性名称的数组。

```JavaScript
const person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer'
};

const keys = Object.keys(person);

console.log(keys);  // Output: ["name", "age", "occupation"]
```

# Debounce in JavaScript
==> 防抖动 / 去抖动

Debounce 去抖动的基本思想： 在调用函数之前，要等待最后一个事件发生后的一定时间。

如果在该时间段内发生另一个事件，计时器将重置，函数调用将再次延迟。

==》 这种方法确保函数仅在一系列快速事件发生后执行一次。

在此题(Leetcode 2627) 中，就是当事件触发去执行某个函数时，每次都要等待delay时间后，再去执行它，

如果在这个delay时间之内再次触发事件和对应的函数，那么需要重新计算等待时间，

```JavaScript
//fn是要去抖动的函数，t是调用该函数之前最后一个事件之后要等待的时间
var debounce = function(fn, t) {
    let timeId = null; //判断计时器是否需要开启
    return function(...args) {
        if(timeId){ //判断计时器是否需要开启，也就是事件有没有再次被触发
            clearInterval(timeId); //需要重新计算等待时间，
            timeId = null; //定时器关闭
        }
        
      //每次遇见事件fn被触发 都需要开启一个新定时器
        timeId = setTimeout (() => { //使用setTimeout达到延迟delay时间后执行的效果
            fn(...args); //执行需要Debounce的函数
        }, t) //每次都要等待delay时间后
    }
};
```

# Promise in JavaScript
==> Promises 是现代 JavaScript 不可或缺的一部分，广泛用于处理异步任务。

Promise： In JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. 
It allows you to handle asynchronous operations in a more organized and readable manner, avoiding callback hell and enabling easier error handling and chaining of operations.

Promise 是一个对象，表示异步操作的最终完成或失败及其结果值。 它允许您以更有组织性和可读性的方式处理异步操作，避免回调地狱并使错误处理和操作链接更容易。

Promise 对象具有三种状态： 
    1. Pending：初始状态。 承诺既没有实现也没有被拒绝。
    2. Fulfilled：异步操作成功完成，承诺得到履行。 这意味着承诺的值可用并且可以使用 then() 方法访问。
    3. Rejected：异步操作失败，promise被拒绝。 这意味着发生错误，并且承诺的值不可用。 可以使用 catch() 或 finally() 方法访问拒绝原因。

运行过程：Promise 是使用 Promise 构造函数创建的，它以call back() 回调函数作为参数。 

call back() 回调函数，通常称为 executor 执行器，有两个参数：resolve解析 和 reject拒绝。 

在  executor 执行器 中，您执行aysnchronous operation 异步操作，完成后调用根据执行器内部的if条件 再适当的函数（resolve 或 reject）

==》从而更改 promise 的状态。

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

# chain of asynchronous operations in JavaScript

异步操作链: Promises 允许使用 then() 方法将多个异步操作链接在一起。 每个 then() 调用都会返回一个新的 promise，它可用于执行其他操作。 

==> 这种链接简化了顺序异步任务的处理。

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

# async/await function in JavaScript
==> 更简单的方法处理异步操作

# Closure in JavaScript
Closure(闭包): Closure is a feature that allows a function to access variables from its outer lexical scope. 
==> 相当于一个function, 许函数从其外部词法范围访问变量的功能。

在 JavaScript 中，闭包是一个强大的特性，即使在父函数执行完毕后，它也允许函数从父作用域中记住和访问变量。

```JavaScript
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
```

所以在这个示例中，Function createCounter() 定义了一个内部function countAddOne()

在function countAddOne(), 使用和访问了在createCounter()中定义的 变量sum

所以即使在createCounter()执行完毕之后，the closure variable闭包变量 任然保留对于countAddOne()范围内变量值和function

所以当继续call counter()时，我们任然可以访问countAddOne()然后记录sum的值 ==》 从而达成一个计时器的效果

# Inheritance and the prototype chain in JavaScript
Inheritance:  当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（object）都有一个私有属性（称之为 __proto__）指向它的构造函数的原型对象（prototype）

Prototype chain: 该原型对象也有一个自己的原型对象（__proto__），层层向上直到一个对象的原型对象为 null。==> 这就是原型链
==> 根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

# instanceof in JavaScript
`instanceof` 运算符用于检查一个object 是否属于 特定类 class 或构造函数function。

方法：`object instanceof constructor` ==> Leetcode 2618. Check if Object Instance of Class
这个用来判断一个对象（object）是否是特定构造函数（constructor）的实例。 它检查对象的原型链是否包含构造函数的原型。

然后返回一个boolean的值：有：true, 没有：false

```JavaScript
function Person(name) {
  this.name = name;
}

const person = new Person("John");

console.log(person instanceof Person);       // true
console.log(person instanceof Object);       // true
console.log(person instanceof Array);        // false
console.log(person instanceof Date);         // false
```

# Object.getPrototypeOf(obj) in JavaScript
Object.getPrototypeOf() 方法用于直接访问或操作对象的原型Prototype。 

==> 它允许您检查继承链或向原型添加属性和方法。

Object.getPrototypeOf(obj)方法：该方法返回指定对象obj的原型Prototype。 它用于检索与 obj 关联的原型Prototype Object。 

==> 原型是一个对象，它提供由构造函数或类的实例继承的属性和方法。
```JavaScript
function Person(name) {
  this.name = name;
}

const person = new Person("John");

console.log(Object.getPrototypeOf(person));  // Person {}
console.log(Object.getPrototypeOf(person) === Person.prototype);  // true

//`Object.getPrototypeOf(person)` 表示构造函数的原型person，并包含在Person构造函数中定义的属性和方法。
```

# Object.constructor in JavaScript
Object.constructor 属性是对用于创建对象 obj 的构造函数的引用。 

==> 它允许您从对象的实例访问构造函数。

这个属性指的是Object本身的构造函数。 它是对用于创建 Object 构造函数的函数的引用, 换句话说，Object.constructor 是指 Object 本身。

```JavaScript
//Object.constructor指的是Function构造函数
console.log(Object.constructor);  // [Function: Function]
console.log(Object.constructor === Object);  // true
````

# 总结 Object.constructor 与 Object.getPrototypeOf(obj) 
==》Object.constructor指的是Object本身的构造函数

==》Object.getPrototypeOf(obj)用于获取具体实例（obj）的原型对象，访问原型中定义的属性和方法。

# JSON.stringify() in JavaScript
In JavaScript, the JSON.stringify() method is used to convert a JavaScript object or value into a JSON string representation. 
==> It serializes the object or value, converting it into a string that can be stored or transmitted over a network.

JSON.stringify() 方法用于将 JavaScript 对象或值转换为 JSON 字符串表示形式。 它序列化对象或值，将其转换为可以存储或通过网络传输的字符串。

# Array.join() in JavaScript
The join() method is a useful way to convert an array into a string representation, with each element separated by a specified delimiter.

join() 方法是一种将数组转换为字符串表示形式的有用方法，每个元素由指定的分隔符分隔。

```JavaScript
array.join(separator)
//array: 需要转化成字符串的数组
//separator：用于分隔element的符号
```

join()方法遍历数组的元素并将每个元素转换为字符串。然后它连接这些字符串表示，用指定的分隔符分隔它们。如果没有提供分隔符，元素默认用逗号连接。

# Currying Function in JS 柯里化的函数
Currying 为实现多参函数提供了一个`递归降解`的实现思路—

==》把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数

在 JavaScript 中实现 Currying: 为了实现只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数这句话所描述的特性。

==》 总结来说：Currying 柯里化 in JS 的定义： curry()函数以一个函数fn作为参数并返回一个新的柯里化函数。

  ==> return的fn 接受一个或多个参数，每次调用它时，它都会返回一个需要剩余参数的新函数。
  
  ==> 该过程一直持续到收到所有参数，此时将使用所有参数调用原始函数。

For Example: 

```JavaScript
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
```

# BigInt(`0b${binary number}`) in JavaScript
使用 BigInt(`0b${binary number}`) 将里面的二进制数(binary numbers) 转化为 十进制数 (decimal numbers)

Example: ==>  BigInt(`0b${a}`) /  BigInt(`0b${b}`)

# (decimal numbers).toString(2) in JavaScript
使用 (decimal numbers).toString(2) 将一个十进制数 (decimal numbers)转回为二进制数(binary numbers)

Example: ==> (10).toString(2) // > '1010'

# "for...in" and "for...of" in JavaScript
在 JavaScript 中，有两种不同的方式来遍历数组的元素或对象的属性：循环for...in和for...of循环。

`for...in`: 用于遍历对象的属性, 使用此循环时，循环变量表示属性的名称，而不是值。
```JavaScript
const object = {a: 1, b: 2, c: 3};

for (let key in object) {
  console.log(key); // "a", "b", "c"
  console.log(object[key]); // 1, 2, 3
}
```

`for...of`: 循环用于遍历可迭代对象（例如数组）的值。使用此循环时，循环变量表示每个元素的值，而不是索引
```JavaScript
const array = [1, 2, 3];

for (let value of array) {
  console.log(value); // 1, 2, 3
}
```

两者的区别就是：`for...in`用于循环对象的属性，`for...of`用于循环可迭代对象的值（例如数组）。

# hashset() / Set() in JavaScript
申明： const set = new Set(array); 直接把一个array[]加入到hashset中

加入: add(number) ==> 加入一个number元素到set中

删除： delete(number) ==> 删除set中的一个元素

检查是否含有：has() ==> 用来检查set()中是否含有特定的element

next()： 可以用来返回输出set() 中的下一个值 ==》next() 方法返回一个具有两个属性的对象：

==> value，它包含序列中的下一个值；

==> done，如果序列中没有更多值，则为 true，否则为 false。当没有更多值的时候，输出 undefined

所以 `set.values().next().value` 是获取Set对象第一个值的简洁方法，因为该next()方法返回set()中的第一个值。

# hashmap() / Map() in JavaScript
申明： const map = new Map();

在 JavaScript 中，相当于哈希映射数据结构的是对象Map。该Map对象保存键值对并记住键的原始插入顺序。

==》 在JavaScript里面Map()的function: 加入： set(),  提取： get(), 检查Map对象是否包含特定键: has()

map.set(num, (map.get(num) || 0 ) + 1) ==》用来统计arr里面每个 number的数量， 然后存入hashmap中

==》 Hashmap(key, value)  ==> for(const key of map.keys()) ==> 提取遍历map的key part。

# Array.map(Number) in JavaScript

在 JavaScript 中，该.map()方法用于通过对现有数组的每个元素应用函数来创建新数组。

.map(Number)是 .map() 方法的一个特定用例，其中Number是将给定值转换为数字的内置对象。

`.map(Number) `  ==> 将字符串值数组转换为数字值数组

==》额外提示： 如果字符串数组里面存在非数字值，则转换后会在新array里面出现 NaN (Not a Number)

# stack[] in JavaScript
申明： const stack = []; ==》因为JavaScript中是没有stack()函数的，所以是使用数组来实现堆栈的数据结构

stack() 是先进先出： 加入： push()   /   获取第一个元素并删除：pop();  / 获取第一个元素但不删除：stack[stack.length - 1] 

stack.join(''): stack中的所有元素组成一个字符串，然后输出

# unshift() in JavaScript
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

unshift()方法将一个或多个元素添加到数组的开头并返回数组的新长度。

# String.includes() in JavaScript

用来检查一个String中是否包含另外一个String, 有==》返回true / 没有==》返回false

# Array.push() in JavaScript

`Array.push()` 把一个number加入到array[]中

==> 修改原数组 ：array.push(4); 

==> 创建新数组， /  不修改原数组： const newArray = [...array, 4];

# Array / String.slice() in JavaScript

In JavaScript, the slice() method is used to extract a portion of an array or a string and return it as a new array 
or string without modifying the original.

在 JavaScript 中，该.slice()方法用于提取数组或字符串的一部分，并在不修改原始数组或字符串的情况下将其作为新数组或字符串返回。

```JavaScript
array.slice(start, end) / const arr = [1, 2, 3, 4, 5]; 
const newArr1 = arr.slice(1, 3); // [2, 3] 
const newArr2 = arr.slice(-2); // [4, 5]
```

start：提取的起始索引。如果为负，则它指定距数组末尾的偏移量。
end：提取的结束索引。如果省略，则 slice 提取到序列的末尾。如果为负，则它指定距数组末尾的偏移量。

# Array.shift() in JavaScript
In JavaScript, the shift() method is used to remove and return the first element of an array. 
This method modifies the original array and shifts all remaining elements one index lower.

在 JavaScript 中，该shift()方法用于移除和返回数组的第一个元素。此方法修改原始数组并将所有剩余元素下移一个索引。

```JavaScript
const arr = [1, 2, 3, 4, 5]; 
const firstElement = arr.shift(); // 1
console.log(arr); // [2, 3, 4, 5]

==> 也可能用来依次提取Array的第一个数字element 
```JavaScript
const arr = [1, 2, 3, 4, 5]; 
while(arr.length >= 0){
  let temp = arr.shift();
  console.log(temp);
} //Output: 1 2 3 4 5
```

# The difference in Array.shift() and Array.slice()
Array.shift()在使用过程中会修改原始数组， / Array.slice()方法在不会修改原始数组

# Array.filter() in JavaScript
==> 数组过滤器

The filter() method creates a new array filled with elements that pass a test provided by a function.

==> 该filter()方法创建一个新数组，其中填充了通过函数提供的测试的元素。

The filter() method does not execute the function for empty elements.

==> 该filter()方法不执行空元素的功能。

The filter() method does not change the original array.

==> 该filter()方法不会更改原始数组。
