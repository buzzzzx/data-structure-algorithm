/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  if (head == null) {
    return null;
  }

  let fast = head;
  let slow = head;
  while (fast && slow) {
    fast = fast.next;
    slow = slow.next;
    if (fast) {
      fast = fast.next;
    } else {
      return null;
    }

    if (fast === slow) {
      slow = head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast;
    }
  }

  return null;
};
