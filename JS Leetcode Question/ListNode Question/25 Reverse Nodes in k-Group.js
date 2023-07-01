/* Leetcode 25. Reverse Nodes in k-Group
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of 
nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Constraints:
The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    //base case
    if(!head || head.next == null){
        return head;
    }

    let count = 0;
    let curr = head;

    //每次找到一个range, 里面包含k个节点
    while(curr && count != k){
        curr = curr.next;
        count++;
    }

    if(count == k){
        //下一个区域的链表节点
        curr = reverseKGroup(curr, k);

        //反转当前这个range里面的链表节点
        while(count > 0){ //因为有k个节点，所以反转k次
            let temp = head.next;
            head.next = curr;
            curr = head;  //把下一个区域的节点curr 移动一位，继续反转
            head = temp; //把当前区域的head节点，移动一位，继续反转
            count--;
        }
        head = curr;
    }

    return head; //输出反转完成的链表
};
