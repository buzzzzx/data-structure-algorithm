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
    return head;
  }

  let former = head.next;
  let latter = head;
  let tmp;

  while (former) {
    tmp = former.next;
    latter.next = null;
    former.next = latter;

    latter = former;
    former = tmp;
  }

  return latter;
};
