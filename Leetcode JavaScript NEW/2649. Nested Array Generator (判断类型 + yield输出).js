/* Leetcode 2649. Nested Array Generator

Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.

A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.

inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

Example 1:

Input: arr = [[[6]],[1,3],[]]
Output: [6,1,3]
Explanation:
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true

Example 2:

Input: arr = []
Output: []
Explanation: There are no integers so the generator doesn't yield anything.
 

Constraints:

0 <= arr.flat().length <= 10^5
0 <= arr.flat()[i] <= 10^5
maxNestingDepth <= 10^5
*/

/**
 * @param {Array} arr
 * @return {Generator}
 */
//Solution 1:  详细解法
var inorderTraversal = function*(arr) {
  
    //首先使用flattenArray() function, 来展平Nested嵌套的数组arr[]
    const flattenArray = (inputArr) => {
        let res = []; //用来储存最后没有嵌套的数组
        inputArr.forEach((item) => {
            if(typeof item === 'number'){ //判断当前item是否为数字
                res.push(item); //是的直接加入到结果数组保存
            } else if(Array.isArray(item)){//如果当前还是array
                res = res.concat(flattenArray(item)); //迭代flattenArray() function 继续遍历和添加
            }
        });
        return res;// 得到一个没有任何Nested嵌套的数组，只由数字组成
    } 

    //通过flattenArray() function 得到一个只由数字组成 没有任何Nested嵌套的数组
    let flatArr = flattenArray(arr);
  
    //使用arr.shift() + while-loop,  达到每次输出arr[]第一个number element的效果
    while(flatArr.length){
        yield flatArr.shift();
    }
};

//Solution 2: 逻辑简写
var inorderTraversal = function*(arr) {
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){ //如果是数字，直接产生和调用
            yield arr[i];
        } else{ //如果当前的item 为array
            yield* inorderTraversal(arr[i]); //迭代调用
        }
    }
};

//Test case:
const gen = inorderTraversal([1, [2, 3]]);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
