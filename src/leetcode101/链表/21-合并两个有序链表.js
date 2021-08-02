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
const mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  const dummyHead = new ListNode(-1);
  let curr = dummyHead;
  let p = l1;
  let q = l2;
  while (p && q) {
    if (p.val < q.val) {
      curr.next = new ListNode(p.val);
      p = p.next;
    } else {
      curr.next = new ListNode(q.val);
      q = q.next;
    }
    curr = curr.next;
  }

  if (q) {
    curr.next = q;
  }
  if (p) {
    curr.next = p;
  }

  return dummyHead.next;
};
