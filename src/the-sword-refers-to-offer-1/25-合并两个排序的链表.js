/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }

  let p = l1;
  let q = l2;
  let head;
  if (p.val > q.val) {
    head = new ListNode(q.val);
    q = q.next;
  } else {
    head = new ListNode(p.val);
    p = p.next;
  }
  let curr = head;
  while (p && q) {
    if (p.val > q.val) {
      curr.next = new ListNode(q.val);
      q = q.next;
    } else {
      curr.next = new ListNode(p.val);
      p = p.next;
    }
    curr = curr.next;
  }

  curr.next = p ? p : q;

  return head;
};
