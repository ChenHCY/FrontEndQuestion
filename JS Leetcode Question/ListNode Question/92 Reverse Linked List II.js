/*Leetcode 92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    //base case
    if(head == null){
        return head;
    }
    //创建一个新的dummy节点，并且接在head链表之前
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let count = 1;
    
    //find the previous node of lthe eft node
    //因为此题时要求反转[left, right]区域里面的所有节点，所以要找第left节点之前的一个节点
    while(count < left){
        prev = prev.next;
        count++;
    }
    
    let curr = prev.next;

    //.next in left side means connect with which node
    //.next in right side means next node of current node
    /* Example: 1(prev) -> 2(curr) -> 3(nextNode) -> 4 -> 5
        first time: 1(prev) -> 3 -> 2(curr) -> 4(nextNode) -> 5
        second time: 1(prev) -> 4(nextNode) -> 3 -> 2(curr) -> 5
    */
  //反转[left, right]区域里面的所有节点
    for(let i = left; i < right; i++){
        const nextNode = curr.next;
        curr.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next; //输出完成反转后的链表
};
