/* Leetcode 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // first create the dummy node
    let dummyHead = new ListNode(0);
    let res = dummyHead;
    let sum = 0; // check the sum of two tree

    //travser all l1 and l2
    while(l1 || l2){
        sum = Math.floor(sum / 10); //计算之前是否有需要进位的值

        //if l1 have list node, add the value into sum and move to next
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }

        //if l1 have list node, add the value into sum and move to next
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }

        let currNodeValue = new ListNode(sum % 10); //计算结果节点的值，个位数，十位数要进位
        dummyHead.next = currNodeValue; // 把这新值赋值到res链表
        dummyHead = dummyHead.next; // 移动到下一个节点
    }

    //JS的除法都会自动进位，所以要使用math.floor()保留整数部分
    if(Math.floor(sum / 10) == 1){ // 整体和需要进位
        dummyHead.next = new ListNode(1);
    }

    return res.next; //输出res链表
};
