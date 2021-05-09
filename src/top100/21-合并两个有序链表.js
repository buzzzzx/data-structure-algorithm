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
var mergeTwoLists = function (l1, l2) {
  const dummyhead = new ListNode(0);
  let p = l1;
  let q = l2;
  let m = dummyhead;
  while (p && q) {
    if (p.val < q.val) {
      m.next = new ListNode(p.val);
      p = p.next;
    } else {
      m.next = new ListNode(q.val);
      q = q.next;
    }
    m = m.next;
  }

  m.next = p ? p : q;

  return dummyhead.next;
};
