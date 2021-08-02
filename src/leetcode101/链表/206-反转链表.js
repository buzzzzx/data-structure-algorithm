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
const reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let prev = head;
  let curr = prev.next;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    if (prev === head) {
      prev.next = null;
    }
    prev = curr;
    curr = next;
  }

  return prev;
};
