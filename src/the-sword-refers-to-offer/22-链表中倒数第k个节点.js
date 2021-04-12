/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Solution 1
const getKthFromEnd = function (head, k) {
  if (head == null) {
    return head;
  }

  const length = getLength(head);
  if (k > length) {
    return null;
  }

  let count = 0;
  let curr = head;
  while (count !== length - k) {
    curr = curr.next;
    count += 1;
  }

  return curr;
};

const getLength = (head) => {
  let count = 0;
  let curr = head;
  while (curr) {
    count += 1;
    curr = curr.next;
  }
  return count;
};

// Solution 2 - 快慢双指针
const getKthFromEnd1 = function (head, k) {
  let former = head;
  let latter = head;

  // former 前进 k 步
  for (let i = 0; i < k; i += 1) {
    if (former != null) {
      former = former.next;
    } else {
      return null;
    }
  }

  // former 和 latter 一起走
  while (former != null) {
    former = former.next;
    latter = latter.next;
  }

  return latter;
};
