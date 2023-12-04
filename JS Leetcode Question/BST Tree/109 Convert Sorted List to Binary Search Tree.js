/*Leetcode 109. Convert Sorted List to Binary Search Tree

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example 1:
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:
Input: head = []
Output: []
 
Constraints:

The number of nodes in head is in the range [0, 2 * 10^4].
-10^5 <= Node.val <= 10^5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const arr = [];
    //首先把head链表中的所有值都压入 arr中，方便我们提取和使用
    while(head){
        arr.push(head.val);
        head = head.next;
    }

    const buildBST = (start, end) => {
        if(start > end){
            return null;
        }

        const mid = (start + end) >>> 1;     // 求中间索引 中间元素是根节点的值
        const root = new TreeNode(arr[mid]); //给中间值构建根节点
        root.left = buildBST(start, mid - 1);
        root.right = buildBST(mid + 1, end);
        return root;
    }

    //然后进行分治， 每次提取中间点为根节点，然后链接左右子树
    return buildBST(0, arr.length - 1);
};
