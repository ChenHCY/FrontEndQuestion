/*Leetcode 86. Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:

Input: head = [2,1], x = 2
Output: [1,2]
 

Constraints:
The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let smallValue = new ListNode(0); // 小值List
    let currSmall = smallValue;

    let largeValue = new ListNode(0); // 大值List
    let currLarge = largeValue;

    while(head !== null){
        let curr = head; //每次提取当前遍历到的节点
        //然后进行判断大小
        if(curr.val < x){
            currSmall.next = curr; //把当前节点接到  小值List 后面
            currSmall = currSmall.next; //节点指针需要保持在最后一位。所以进行移动
        } else {
            currLarge.next = curr; //把当前节点接到  大值List 后面
            currLarge = currLarge.next; //节点指针需要保持在最后一位。所以进行移动
        }
        head = head.next;
    }

    currLarge.next = null; //结束currLarge， 链接null
    currSmall.next = largeValue.next; //小的节点值放在大节点值前面，所以拿小的节点值list进行连接
    return smallValue.next;
};
