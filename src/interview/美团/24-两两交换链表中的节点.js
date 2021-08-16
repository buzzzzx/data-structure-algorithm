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

  const newHead = head.next;
  let prev = head;
  let curr = head.next;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    if (next && next.next) {
      prev.next = next.next;
      prev = next;
      curr = next.next;
    } else {
      prev.next = next;
      break;
    }
  }

  return newHead;
};
