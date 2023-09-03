/*Judge True or False.js*/

console.log([0] == false); //这里是只有两个等号，所以是loose equality operator 松散相等运算符 
//不是严格比较

if ([0]) {
console.log("I'm True");
} else {
console.log("I'm False");
}


//Out print: 
true
"I'm True"

/*Reason:
在 JavaScript 中，当您使用 == 运算符来比较不同类型的值时，JavaScript 会在进行比较之前尝试将这些值转换为通用类型。 这个过程称为类型强制。

1. [0] 是一个只有一个元素的数组，即数字 0。   &&     false 是一个布尔值。
当您使用 == 比较数组与布尔值时，JavaScript 会尝试将这两个值转换为通用类型。 在这种情况下，它将尝试将数组转换为布尔值

然后：
2. ==> 数组 [0] 被转换为boolean值。 在 JavaScript 中，空数组或包含所有假值（如 [0]）的数组被视为“true值”，因此 [0] 会转换为 true。

3. 现在，左侧为true，右侧为 false。 然后 JavaScript 尝试比较这两个值。 因此松散相等运算符返回 true。
*/
