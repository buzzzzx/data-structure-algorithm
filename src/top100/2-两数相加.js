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
const addTwoNumbers = function (l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }

  let carry = 0;
  const res = new ListNode(0, undefined);
  let curr = res;
  let p1 = l1;
  let p2 = l2;

  while (p1 || p2) {
    let x = p1 ? p1.val : 0;
    let y = p2 ? p2.val : 0;
    let val = x + y + carry;
    carry = Math.floor(val / 10);
    curr.next = new ListNode(val % 10, undefined);
    curr = curr.next;
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }

  if (carry === 1) {
    curr.next = new ListNode(carry, undefined);
  }

  return res;
};
