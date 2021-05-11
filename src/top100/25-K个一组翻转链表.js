/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let pre, end;
  pre = end = dummyHead;
  while (end) {
    for (let i = 0; i < k && end != null; i += 1) {
      end = end.next;
    }
    if (end == null) {
      break;
    }
    let start = pre.next;
    let next = end.next;
    end.next = null;
    pre.next = reverse(start);
    start.next = next;
    end = pre = start;
  }

  return dummyHead.next;
};

const reverse = function (head) {
  let pre;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  return pre;
};
