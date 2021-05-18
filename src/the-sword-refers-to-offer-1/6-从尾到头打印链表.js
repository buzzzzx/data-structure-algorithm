/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function (head) {
  if (head == null) {
    return [];
  }
  let curr = head;
  const res = [];
  while (curr) {
    res.unshift(curr.val);
    curr = curr.next;
  }

  return res;
};
