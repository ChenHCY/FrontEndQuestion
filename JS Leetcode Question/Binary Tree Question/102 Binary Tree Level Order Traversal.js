/* 102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null){
        return [];
    }

    let res = [];
    let stack = [];
    stack.push(root);

    while(stack[0]){
        let currLevel = [];
        let size = stack.length;

        for(let i = 0; i < size; i++){
            let node = stack.shift(); //shift提取stack中的第一个数字
            currLevel.push(node.val);

            //判断有没有左右子树
            if(node.left !== null){
                stack.push(node.left);
            }

            if(node.right !== null){
                stack.push(node.right);
            }
        }

        res.push(currLevel);
    }

    return res;
};
