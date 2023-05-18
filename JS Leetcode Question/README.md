# floating-point numbers in JavaScript
==> why 0.1 + 0.2 == 0.30000000000000004 not 0.3?

在 JavaScript 中，表达式 `0.1 + 0.2` 不等于 `0.3` 其实是很多编程语言的通病，并不是 JavaScript 特有的。

此行为是由于 浮点数在计算机中的表示和存储方式引起的。

浮点数使用固定位数以二进制格式存储。然而，大多数小数不能用二进制形式精确表示。在对这些数字执行算术运算时，这会导致小的舍入误差。

0.1 和 0.2，它们的二进制表示是循环分数(recurring fractions)，这意味着它们具有无限重复的数字(infinitely repeating digits)。当这些循环分数加在一起时，结果是一个与小数略有不同的表示形式 0.3。

==》因此，当您与 进行比较时0.1 + 0.2，0.3由于它们的二进制表示形式存在微小差异，

```JavaScript
const a = 0.1;
const b = 0.2;
const sum = a + b;
const epsilon = 0.0001;

if (Math.abs(sum - 0.3) < epsilon) {
  console.log("Equal");
} else {
  console.log("Not equal");
}
```
