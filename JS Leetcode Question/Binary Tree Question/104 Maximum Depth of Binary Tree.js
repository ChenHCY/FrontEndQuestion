/* 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 10^4].
-100 <= Node.val <= 100
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
 * @return {number}
 */
var maxDepth = function(root) {
    let res = 0;

    const countDepth = (root, currDepth) => {
        //exit condition, root = null
        if(!root){
            return;
        }

        res = Math.max(res, currDepth);

        countDepth(root.left, currDepth + 1);
        countDepth(root.right, currDepth + 1);
    }

    countDepth(root, 1);
    return res;
};