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
const quickSortList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let left = new ListNode(-1);
  let mid = new ListNode(-1);
  let right = new ListNode(-1);
  let ltail = left;
  let mtail = mid;
  let rtail = right;

  let pivot = head.val;
  let curr = head;
  while (curr) {
    if (curr.val < pivot) {
      ltail.next = curr;
      ltail = ltail.next;
    } else if (curr.val === pivot) {
      mtail.next = curr;
      mtail = mtail.next;
    } else {
      rtail.next = curr;
      rtail = rtail.next;
    }

    curr = curr.next;
  }

  ltail.next = mtail.next = rtail.next = null;
  left.next = quickSortList(left.next);
  right.next = quickSortList(right.next);

  getTail(left).next = mid.next;
  getTail(left).next = right.next;

  return left.next;
};

const getTail = function (head) {
  while (head.next) {
    head = head.next;
  }

  return head;
};
