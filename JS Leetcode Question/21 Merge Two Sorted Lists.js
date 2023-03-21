/* Leetcode 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

//Recursive Method
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1){ //list1 == null ==> list1 did not have any node
        return list2;
    }

    if(!list2){//l2 == null ==> l2 did not have any node
        return list1;
    }

    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        //console.log(list1.val);
        return list1;
    }

    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
};

//Basic ListNode connect
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let list = new ListNode(0, null);
    let res = list;

    while(list1 && list2){
        if(list1.val < list2.val){
            list.next = new ListNode(list1.val);
            list1 = list1.next;
        } else{
            list.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        list = list.next; // move to next node
    }

    //if there the two list is not same length
    list.next = list1 || list2;
    return res.next;
};
