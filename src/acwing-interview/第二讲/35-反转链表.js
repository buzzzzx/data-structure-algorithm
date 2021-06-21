/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代版本
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let p = head;
  let q = head.next;
  p.next = null;
  while (p && q) {
    let tmp = q.next;
    q.next = p;
    p = q;
    q = tmp;
  }

  return p;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 递归版本
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList1 = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let newHead;
  const helper = function (head) {
    if (head.next == null) {
      newHead = head;
      return head;
    }
    const tmp = helper(head.next);
    head.next = null;
    tmp.next = head;
    return head;
  };

  helper(head);
  return newHead;
};
