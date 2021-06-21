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
const entryNodeOfLoop = function (head) {
  if (head == null || head.next == null) {
    return null;
  }

  let slow = head;
  let fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    } else {
      return null;
    }

    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 使用 Set 来存储遍历过的结点
 * @param {ListNode} head
 * @return {ListNode}
 */
const entryNodeOfLoop1 = function (head) {
  if (head == null || head.next == null) {
    return null;
  }

  let set = new Set();
  let curr = head;
  while (curr) {
    if (set.has(curr)) {
      return curr;
    }

    set.add(curr);
    curr = curr.next;
  }

  return null;
};
