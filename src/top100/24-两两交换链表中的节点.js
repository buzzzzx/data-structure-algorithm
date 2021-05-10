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
  if (head == null) {
    return null;
  }
  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  let pre = dummyHead;
  let m = head.next;
  let n = head;
  while (m) {
    let tmp = m.next;
    m.next = n;
    n.next = tmp;
    pre.next = m;

    pre = n;
    m = m.next?.next?.next;
    n = n.next;
  }

  return dummyHead.next;
};
