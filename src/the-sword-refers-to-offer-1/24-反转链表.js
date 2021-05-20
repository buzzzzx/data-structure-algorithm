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
const reverseList = function (head) {
  if (head == null) {
    return null;
  }

  let pre = head;
  let curr = head.next;
  while (curr) {
    let next = curr.next;
    curr.next = pre;
    if (pre === head) {
      pre.next = null;
    }

    pre = curr;
    curr = next;
  }

  return pre;
};
