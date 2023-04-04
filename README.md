# FrontEndQuestion
Practice Front-End Development Question

# "for...in" and "for...of" in JavaScript
在 JavaScript 中，有两种不同的方式来遍历数组的元素或对象的属性：循环for...in和for...of循环。

"for...in": 用于遍历对象的属性, 使用此循环时，循环变量表示属性的名称，而不是值。

const object = {a: 1, b: 2, c: 3};

for (let key in object) {
  console.log(key); // "a", "b", "c"
  console.log(object[key]); // 1, 2, 3
}

"for...of": 循环用于遍历可迭代对象（例如数组）的值。使用此循环时，循环变量表示每个元素的值，而不是索引

const array = [1, 2, 3];

for (let value of array) {
  console.log(value); // 1, 2, 3
}

两者的区别就是："for...in"用于循环对象的属性，"for...of"用于循环可迭代对象的值（例如数组）。

# set() in JavaScript
申明： const set = new Set(array); 直接把一个array[]加入到hashset中

加入： push() ==> 修改原数组 ：array.push(4); 创建新数组，不修改原数组： const newArray = [...array, 4];

检查是否含有：has() ==> 用来检查set()中是否含有特定的element

# stack[] in JavaScript
申明： const stack = []; ==》因为JavaScript中是没有stack()函数的，所以是使用数组来实现堆栈的数据结构

stack() 是先进先出： 加入： push()   /   获取第一个元素并删除：pop();  / 获取第一个元素但不删除：stack[stack.length - 1] 

stack.join(''): stack中的所有元素组成一个字符串，然后输出

# unshift() in JavaScript
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

unshift()方法将一个或多个元素添加到数组的开头并返回数组的新长度。

# String.includes() in JavaScript

用来检查一个String中是否包含另外一个String, 有==》返回true / 没有==》返回false

# Array / String.slice() in JavaScript

In JavaScript, the slice() method is used to extract a portion of an array or a string and return it as a new array 
or string without modifying the original.

在 JavaScript 中，该.slice()方法用于提取数组或字符串的一部分，并在不修改原始数组或字符串的情况下将其作为新数组或字符串返回。

==> array.slice(start, end) / const arr = [1, 2, 3, 4, 5]; 

==> const newArr1 = arr.slice(1, 3); // [2, 3] 

==> const newArr2 = arr.slice(-2); // [4, 5]

start：提取的起始索引。如果为负，则它指定距数组末尾的偏移量。
end：提取的结束索引。如果省略，则 slice 提取到序列的末尾。如果为负，则它指定距数组末尾的偏移量。

# Array.shift() in JavaScript
In JavaScript, the shift() method is used to remove and return the first element of an array. 
This method modifies the original array and shifts all remaining elements one index lower.

在 JavaScript 中，该shift()方法用于移除和返回数组的第一个元素。此方法修改原始数组并将所有剩余元素下移一个索引。

==> const arr = [1, 2, 3, 4, 5]; 

==》 const firstElement = arr.shift(); // 1

==》 console.log(arr); // [2, 3, 4, 5]

# The difference in Array.shift() and Array.slice()
Array.shift()在使用过程中会修改原始数组， / Array.slice()方法在不会修改原始数组
