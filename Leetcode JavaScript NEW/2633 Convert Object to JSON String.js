/* Leetcode 2633. Convert Object to JSON String

Given an object, return a valid JSON string of that object. 

You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. 

The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method. 

Example 1:

Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation: 
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().

Example 2:

Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.

Example 3:

Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
Explanation:
Objects and arrays can include other objects and arrays.

Example 4:

Input: object = true
Output: true
Explanation:
Primitive types are valid inputs.
 

Constraints:

object includes strings, integers, booleans, arrays, objects, and null
1 <= JSON.stringify(object).length <= 10^5
maxNestingLevel <= 1000
all strings will only contain alphanumeric characters
*/

/* 此题是关于在 JSON.stringify() 的情况下，把给定的一个object对象 改变成 该对象的有效 JSON 字符串

对象仅包含String字符串、number整数、array数组、object对象、boolean布尔值和empty空值。

考点在于 判断对象的数据类型，然后根据对应的模板 改写成正确JSON字符串的形式

判断 + 迭代

*/

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    //题目是给定一个对象，返回该对象的有效 JSON 字符串
    //对象仅包含String字符串、number整数、array数组、object对象、boolean布尔值和empty空值。
    //第一种情况，当对象为null时
    if(object === null){
        return '' + null;
    }

    //第二种情况，当对象为string时, 不需要任何改变，直接把object加入到JSON的String字符串中
    if(typeof object === 'string'){
        return `"${object}"`
    }

    //第三种情况，当对象为number整数,boolean布尔值和empty空值时，把其改为String形式加入到JSON的String字符串中
    if(typeof object === 'number' || typeof object === 'boolean'){
        return '' + object; //or object.toString() ==> 把其改为String形式加入到JSON的String字符串中
    } 

    //第四种情况，当对象为array的时候
    if(Array.isArray(object)){
        //提取这个Array里面的所有element, 然后进行迭代, 把结果存入一个arr[]中
        const arr = object.map((item) => jsonStringify(item));
        //然后把这个通过arr改为一个string类型，并且使用','分隔 =》使用array.join(',')
        //然后把结果arr 加入到JSON的String字符串中
        return `[${arr.join(',')}]`; 
    }

    //第五种情况，当对象为object的时候
    if(typeof object === 'object'){
        const itemArr = [];
        //遍历提取这个对象中的每一个属性key值, 把结果存入itemArray[] 中
        for(const key of Object.keys(object)){
            //把object的key值和value值，加入设定好的JSON的String字符串中
            //key值需要改成string形式，value值保持不变
            itemArr.push(`"${key}":${jsonStringify(object[key])}`);
        }
        //然后把这个通过itemArr 改为一个string类型，并且使用','分隔 =》使用itemArr.join(',')
        //然后把结果 itemArr 加入到JSON的String字符串中
        return `{${itemArr.join(',')}}`; // JSON的String字符串中
    } 
};
