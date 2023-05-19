/* Leetcode 2695. Array Wrapper
Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10

Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"

Example 3:

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0
 

Constraints:

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
Note: nums is the array passed to the constructor
*/

/**
 * @param {number[]} nums
 */
class ArrayWrapper{
    constructor(props){
        this.nums = props;
    }
};

ArrayWrapper.prototype.valueOf = function() {
    //reduce() 执行叠加效果。 两个参数： acc表示累积值， curr表示当前值
    return this.nums.reduce((acc, curr) => acc + curr, 0); // 使用reduce() 进行叠加， 初始值从0开始
}

ArrayWrapper.prototype.toString = function() {
    //使用JSON.stringify() 把参数nums[] 改为一个方括号括起来的逗号分隔字符串
    return JSON.stringify(this.nums);
}

//Test case:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"
