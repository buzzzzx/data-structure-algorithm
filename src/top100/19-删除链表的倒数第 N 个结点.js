/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  let fast = dummyHead;
  for (let i = 0; i <= n; i += 1) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};

// hashmap
const removeNthFromEnd1 = function (head, n) {
  let curr = head;
  let pre = null;
  let cnt = 0;
  const map = {};
  while (curr != null) {
    map[cnt] = {
      node: curr,
      pre: pre,
    };
    cnt += 1;
    pre = curr;
    curr = curr.next;
  }

  const removed = map[cnt - n];
  pre = removed.pre;
  if (pre == null) {
    head = removed.node.next;
  } else {
    pre.next = removed.node.next;
  }
  removed.node.next = null;

  return head;
};
