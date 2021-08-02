/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (head == null || head.next == null) {
    return true;
  }
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverseList(slow.next);
  slow = slow.next;
  while (slow) {
    if (head.val !== slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }

  return true;
};

const reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
