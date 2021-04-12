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
  let currL1 = l1;
  let currL2 = l2;
  const head = new ListNode(0);
  let curr = head;

  while (currL1 && currL2) {
    if (currL1.val < currL2.val) {
      curr.next = new ListNode(currL1.val);
      currL1 = currL1.next;
    } else {
      curr.next = new ListNode(currL2.val);
      currL2 = currL2.next;
    }
    curr = curr.next;
  }

  if (currL1 == null) {
    curr.next = currL2;
  }

  if (currL2 == null) {
    curr.next = currL1;
  }

  return head.next;
};
