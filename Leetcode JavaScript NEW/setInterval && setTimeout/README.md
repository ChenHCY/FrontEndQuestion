# Scheduling A Call: setTimeout 和 setInterval
有时候我们并不想立即执行一个func函数，而是等待特定一段时间之后再执行，这就是所谓的 **计划调用**（scheduling a call）

目前有两种方式可以实现：
· setTimeout： 允许将函数推迟到一段时间间隔之后再执行。
· setInterval： 允许重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。

这两个方法并不在 JavaScript 的规范中。但是大多数运行环境都有内建的调度程序，并且提供了这些方法。目前来讲，所有浏览器以及 Node.js 都支持这两个方法。

# setTimeout: 延迟执行一次函数func

· `setTimeout` 用于在指定的延迟（以毫秒为单位）后执行一次函数（或一段代码）。

· 它需要两个参数：`要执行的函数`  和   `以毫秒为单位的延迟`。

· 基本语法： setTimeout(function, delay);

```JavaScript
setTimeout(function() {
  console.log("This code will run after 2000 milliseconds (2 seconds).");
}, 2000);
```
· 用 `clearTimeout` 来取消调度: setTimeout 在调用时会返回一个 “定时器标识符（timer identifier）”，==> 用它来取消执行。

==》 通常也需要使用call back()取消监视器
```JavaScript
let timerId = setTimeout(...);
clearTimeout(timerId);
```

# setInterval: 指定时间内重复执行一次函数 
· `setInterval` 用于以指定的时间间隔（以毫秒为单位）重复执行一个函数（或一段代码）。

· 它还需要两个参数：`要执行的函数`  和  `以毫秒为单位的间隔`。

· 基本语法：setInterval(function, interval);
```JavaScript
setInterval(function() {
  console.log("This code will run every 1000 milliseconds (1 second).");
}, 1000);
```

· 用 `clearInterval` 来取消调度:  setInterval 在调用时会返回一个 “定时器标识符（timer identifier）”，==> 用它来取消执行。
==》 通常也需要使用call back()取消监视器
```JavaScript
let timerId = setInterval(...);
clearInterval(timerId)
```

# 周期性调度有两种方式
