/*Leetcode 222. Count Complete Tree Nodes

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, 
and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.

Example 1:

Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:

Input: root = []
Output: 0

Example 3:

Input: root = [1]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 5 * 10^4].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.
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
//Solution 1: 使用递归，遍历左右子树的节点数量，最后算上根节点root
var countNodes = function(root) {
    if(root == null){
        return 0;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
};

//Solution 2: 使用 Complete Tree 完全二叉树的特性进行时间复杂度的优化
var countNodes = function(root) {
    if(root == null){
        return 0;
    }

    //申明两个新的TreeNode, 来计算左右子树的高度
    //避免root的起始点发生改变，影响后面如果左右子树不一样高度的节点数量计算
    let leftT = root;
    let rightT = root;

    //分别统计左右子树的高度
    let leftDepth = 0;
    while(leftT != null){
        leftT = leftT.left;
        leftDepth += 1;
    }

    let rightDepth = 0;
    while(leftT != null){
        rightT = rightT.right;
        rightDepth += 1;
    }

    //如果左右子树的高度层级相同，表示这是一个 Perfect Binary Tree 完美二叉树 所以节点位置都是满的 
    //=》 节点总数就是 2^h - 1
    if(leftDepth === rightDepth){
        return Math.pow(2, leftDepth) - 1;
    }

    //如果左右子树的高度层级不相同，表示有节点位置是空的，使用普通的二叉树统计节点数量的方法
    //递归：countNodes(root.left) + countNodes(root.right) + 1
    return countNodes(root.left) + countNodes(root.right) + 1;
};
