/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  const small = new ListNode(-1);
  const big = new ListNode(-1);
  let curr = head;
  let s = small;
  let b = big;
  while (curr) {
    if (curr.val < x) {
      s.next = curr;
      s = s.next;
    } else {
      b.next = curr;
      b = b.next;
    }
    curr = curr.next;
  }
  s.next = null;
  b.next = null;
  s.next = big.next;
  return small.next;
};
