/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let currB = headB;
  while (currA !== currB) {
    currA = currA == null ? headB : currA.next;
    currB = currB == null ? headA : currB.next;
  }

  return currA;
};

// 空间复杂度不满足 O(1) --> 不合格
const getIntersectionNode2 = function (headA, headB) {
  const hashmapA = new Map();
  let currA = headA;
  let currB = headB;
  while (currA) {
    hashmapA.set(currA, true);
    currA = currA.next;
  }

  while (currB) {
    if (hashmapA.get(currB) === true) {
      return currB;
    }
    currB = currB.next;
  }

  return null;
};

// 时间复杂度为 O(mn) --> 不合格
const getIntersectionNode1 = function (headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  let currB = headB;
  while (currB != null) {
    let currA = headA;
    while (currA != null) {
      if (currA === currB) {
        return currA;
      }
      currA = currA.next;
    }
    currB = currB.next;
  }

  return null;
};
