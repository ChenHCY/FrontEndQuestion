/* Leetcode 2705. Compact Object
Given an object or array obj, return a compact object. A compact object is the same as the original object, 
except with keys containing falsy values removed. This operation applies to the object and any nested objects. 

Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 

Constraints:

obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 10^6
*/

/**
 * @param {Object} obj
 * @return {Object}
 */

var compactObject = function(obj) {
    //遍历对象，并对项分类讨论，可以分成三种情况：

    //1. 如果obj不是数组或对象，则可能是 String, number or Boolean值，所以如果值为true则返回原始值，false则返回null
    if (obj == null || typeof obj !== 'object') {
        return obj;
    }

    //2. 如果obj是一个数组，则过滤掉错误的值，并在每个元素上递归调用compactObject
    //从当前obj中 拿出每一个element 进行遍历和查找
    if(Array.isArray(obj)){
        const res = []
        //遍历枚举检查每一个element是否是True值，然后过滤掉false值（filter function）
        for(let element of obj){
            const val = compactObject(element);
            if(val){
                res.push(val);
            }
        }
        return res;
    }

    //3. 如果obj是一个对象，那么创建一个新对象并对每个值进行枚举，检查是否是false值 然后递归调用compactObject
    if(obj instanceof Object){
        const res = {};
        const keys = Object.keys(obj);
        for(let key of keys){
            const val = compactObject(obj[key]); //过滤false值
            if(val){
                res[key] = val;
            }
        }
        return res;
    }
};
