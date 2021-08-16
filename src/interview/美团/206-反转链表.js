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

  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
