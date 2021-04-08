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
    return head;
  }

  let cur = head;
  if (cur.val === val) {
    head = cur.next;
  } else {
    let next = cur.next;
    while (next !== null) {
      if (next.val === val) {
        cur.next = next.next;
        break;
      }
      cur = next;
      next = cur.next;
    }
  }

  return head;
};
