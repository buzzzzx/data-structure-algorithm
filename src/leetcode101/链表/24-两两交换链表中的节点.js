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
const swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let newHead = head.next;
  let p1 = head;
  let p2 = head.next;
  let next = null;
  while (p2) {
    next = p2.next;
    p2.next = p1;
    if (next && next.next) {
      p1.next = next.next;
      p1 = next;
      p2 = p1.next;
    } else {
      p1.next = next;
      break;
    }
  }

  return newHead;
};
