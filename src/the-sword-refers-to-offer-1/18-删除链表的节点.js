/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const deleteNode = function (head, val) {
  if (head == null) {
    return null;
  }

  let pre = null;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      if (pre == null) {
        return curr.next;
      } else {
        pre.next = curr.next;
        break;
      }
    }
    pre = curr;
    curr = curr.next;
  }

  return head;
};
