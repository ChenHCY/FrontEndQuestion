/* Leetcode 341. Flatten Nested List Iterator 
You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements 
may also be integers or other lists. Implement an iterator to flatten it.

Implement the NestedIterator class:

  1. NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList. int next() Returns the next integer in the nested list.
  2. boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
  3. Your code will be tested with the following pseudocode:

  initialize iterator with nestedList
      res = []
      while iterator.hasNext()
            append iterator.next() to the end of res
      return res
 If res matches the expected flattened list, then your code will be judged as correct.


Example 1:

Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

Example 2:

Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
 

Constraints:

1 <= nestedList.length <= 500
The values of the integers in the nested list is in the range [-10^6, 10^6].
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.values = []; //declare a new array to save all the number element

    //DFS function: traver all the element and Flatten to a 1D array
    const dfs = (list) => {
        for(const item of list){
            if(item.isInteger()){ //check if the element is a number
                this.values.push(item.getInteger()); //add into result arrat
            } else{ // check if the curr element is a array
                dfs(item.getList()); //call and run the dfs fucntion again
            }
        }
    }
    
    dfs(nestedList); //call and run the dfs function
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.values.length > 0; // if there are still some integers in the nested list
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.values.shift(); // Returns the next integer in the nested list.
};
