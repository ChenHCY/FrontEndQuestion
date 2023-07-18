# Chain 链式调用 in JavaScript
主要原理就是：每次调用完函数后，返回自己（this），这样就能再次调用自己 Prototype Chaining原型链上 的 fn函数和 Attributes属性

==> 能做到 $("class").set().add().bind().html() 这样一路拉到底的操作。

