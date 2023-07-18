/* Leetcode 2628. JSON Deep Equal
Given two objects o1 and o2, check if they are deeply equal.

For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. 

Two objects are also considered deeply equal if they pass the === equality check.

You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

Please solve it without using lodash's _.isEqual() function.

Example 1:

Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
Output: true
Explanation: The keys and values match exactly.

Example 2:

Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.

Example 3:

Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.

Example 4:

Input: o1 = true, o2 = false
Output: false
Explanation: true !== false
 

Constraints:

1 <= JSON.stringify(o1).length <= 10^5
1 <= JSON.stringify(o2).length <= 10^5
maxNestingDepth <= 1000
*/

/* Deep clone + iteration 自我迭代

遍历提取和判断Object里面的key值，然后进行迭代，

*/

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    //the exit condition
    //“==”只判断数值，“===”判断数值和element类型是否都一样
    if(o1 === o2){
        return true;
    }

    //如果有o1 o2存在不是object，并且有一方是null的情况下，o1 o2一定不一样
    if(typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null){
        return false;
    }

    //both of o1 o2 should be array
    if(Array.isArray(o1) !== Array.isArray(o2)){
        return false;
    }

    //如果o1 o2长度不一样,
    // Object.keys() 方法用于检索给定object对象 自身的可枚举属性名称的数组。 ==》 它以一个object 作为参数并返回一个包含object 所有 key value的数组。
    if(Object.keys(o1).length !== Object.keys(o2).length){
        return false;
    }

    //然后遍历o1中所有的key值，检查其是否也存在于o2中
    //递归每个key值，判断是否一样
    //如果递归的结果为false，表示o1和o2中存在difference key
    //这里需要使用 for...in 的形式 遍历对象
    for(const key in o1){
        if(!areDeeplyEqual(o1[key], o2[key])){
            return false;
        } 
    }

    return true;
};
