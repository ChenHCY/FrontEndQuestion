/* Leetcode 2618. Check if Object Instance of Class

Write a function that checks if a given value is an instance of a given class or superclass. 

For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.

Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
*/

/* 此题是的考点就是JS的原型链继承

需要检查给定的对象obj 是否是给定 类class 或 超类superClass 的实例。

在 JavaScript 中，instanceof 运算符用于检查对象是否属于特定类或构造函数。

obj.constructor 属性是对用于创建对象 obj 的构造函数的引用。 它允许您从对象的实例访问构造函数

Object.getPrototypeOf() 方法用于直接访问或操作对象的原型。 它允许您检查继承链或向原型添加属性和方法。
*/

//Solution 1: 使用 instanceof 运算符
/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    //首先判断基础条件的false
    if(obj === null || classFunction === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }

    //`instanceof` 运算符用于判断一个对象（object）是否是特定构造函数（constructor）的实例。
    //它检查对象的原型链是否包含构造函数的原型。
    return Object(obj) instanceof classFunction;
};


//Solution 2: 使用 The Object.getPrototypeOf() method
var checkIfInstanceOf = function(obj, classFunction) {
    //首先判断基础条件的false
    if(obj === null || classFunction === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }

    //遍历全部的obj
    while(obj !== null){
        //如果obj的constructor的构造函数class === 给定的class
        if(obj.constructor === classFunction){
            return true;
        }

        //移动 和 继续检查原型链
        obj = Object.getPrototypeOf(obj); 
    }

    return false;
};
