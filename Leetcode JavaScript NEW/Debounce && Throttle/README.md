# Debounce in JavaScript
==> 防抖动 / 去抖动： 顾名思义 以免把一次事件误以为多次，敲键盘就是防抖最好的例子

Debounce 去抖动的基本思想： 单位时间内事件触发会被重置，避免事件被误伤触发多次。可以比作电梯，只要有一个进去，就需要多等一会

在调用函数之前，要等待最后一次调用fn结束后的一定时间。

如果在该时间段内fn被再次调用，计时器将重置，重新计算延迟时间，并且之前的函数会被覆盖取消掉。

==》 这种方法确保函数仅在一系列快速事件发生时，只执行一次。

在此题(Leetcode 2627) 中，就是当事件触发去执行某个函数时，每次都要等待设定的delay时间后，再去执行它，

如果在这个delay时间之内再次触发事件和对应的函数，之前的函数会被覆盖掉，并且需要重新计算等待时间，

现实的例子
```
1. 登录，发短信 等按钮避免用户点击太快，以至于发送了多次请求，需要防抖
2. 调整浏览器窗口大小时，resize改变尺寸过于频繁，照成计算了过多，所以需要进行防抖处理
3. 文本编辑器的实时保存，当无任何更改操作一秒后进行保存
```

```JavaScript
//fn是要去抖动的函数，t是fn设定需要等待的延迟时间
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
# Throttle in JavaScript 
==> 节流：控制水的流量，控制事件发生的频率，比如：控制时间为1s发生一次，或者一分钟发生一次。

Throttle 节流 的基本思想：单位时间内，事件只能触发一次，与服务器端的限流类似，可以比作红绿灯，每一次过一批

在调用函数之前，必须等待最后一次调用fn结束后的fn设定的延迟时间完成之后，才能调用。

如果在该段时间内fn被再次调用，在保留当前参数，再延迟时间完成之后进行调用。之前的调用的fn不会被覆盖取消

在处理可以快速触发的事件（例如滚动事件或调整大小事件）时，Throttle特别有用。通过Throttle function，可以限制它在特定时间间隔内被调用的次数。

在此题Leetcode 2676 中，就是每次记录当前的时间和上一次调用fn的时间的间隔，

==》如果这个间隔 大于fn设定的等待延迟时间，则立即调用fn

==》如果这个间隔，小于fn设定的等待延迟时间，则设定一个setTimeout, 等到剩余的延迟时间完成了，再调用fn

现实案例：
```
1. scroll事件： 每隔一秒 算一次 位置信息
2. 浏览器播放事件：每隔一秒 计算 一次 进度信息
3. input框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求
```

```JavaScript
 //fn：需要被节流的函数。t: 设定的fn需要延迟的时间
var throttle = function(fn, t) {
    //throttle： 一段时间只能触发一次, 一种用于确保以固定间隔调用函数的技术
    //确保无论触发事件发生的频率如何，函数都以固定的速率被调用。

    let timeOutId; //timeoutId 跟踪 setTimeout, 还没有到达延迟时间的timeID
    let lastCallTime = 0; //lastExecTime 存储最后一次调用fn的time。
    return function(...args) {
        const currTime = Date.now();
        //remainingTime 是通过从设定的fn延迟间隔中减去经过的时间来计算的
        const remainingTime = t - (currTime - lastCallTime); //也就是需要等待的fn完成的时间

        clearTimeout(timeOutId); //清理掉timeOutId

        if(remainingTime <= 0){ //表示上一次的fn已经完成了延迟时间，可以直接调用fn
            fn.apply(this, args); //调用fn
            lastCallTime = currTime; //更新调用fn的时间为最新时间
        } else { //如果还没有达到fn设定的延迟时间
            //设定一个setTimeout来保留参数，在完成等待后 进行调用
            timeOutId = setTimeout(() => {
                fn.apply(this, args); //在等待剩余的fn延迟时间后，进行调用fn
                lastCallTime = Date.now(); //更新最后一次调用fn的时间 为 最新时间
            }, remainingTime);
        }
    }
};
```

# What is the difference in throttle and Debounce in JavaScript?

1. `Throttling`: Throttling limits the rate at which a function is called by setting a maximum threshold for function invocations within a specific time interval. 

==> 节流通过 设置 `特定时间间隔内函数调用的最大阈值` 来限制函数调用的速率, 如果调用fn的频率超过了这个值，则会延迟当前的fn，知道之前的延迟时间结束 才会执行。

==> 节流对于您想要限制函数调用速率的场景很有用，例如滚动或调整事件大小。

2. `Debounce`: Debouncing: `Deboune` means the need waits for a quiet period after the last function call and then triggers the function. 

==> `Deboune` 是指在最后一次函数调用之后需要等待一段安静的时间，才能再次触发新函数。 但如果在延迟时间内，函数被再次触发，则之前的函数会被覆盖取消，并且重新计算延迟时间

==> 当您想要确保在一段安静的时间后执行某个功能时，去抖动很有用，例如搜索建议或自动保存。
