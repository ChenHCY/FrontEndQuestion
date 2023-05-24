/*Leetcode 83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    //如果链表为空, 输出null
    if(!head){
        return null;
    }

    let dummy = head;

    //遍历每个node节点, 如果当前节点还存在下一个
    while(dummy.next){
        //如果找到重复val的节点，则跳过下一个节点
        if(dummy.val === dummy.next.val){
            dummy.next = dummy.next.next;
        } else{ //如果不重复，则移动dummy节点到下一个节点继续检查
            dummy = dummy.next; 
        }
    }

    return head;
    
};
