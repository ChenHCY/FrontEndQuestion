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

# .map(Number) in JavaScript

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

==> 修改原数组 ：array.push(4); 创建新数组， /  不修改原数组： const newArray = [...array, 4];

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
