/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
  if (head == null) {
    return null;
  }

  const map = new Map();
  for (let curr = head; curr != null; curr = curr.next) {
    map.set(curr, new Node(curr.val, null, null));
  }
  for (let curr = head; curr != null; curr = curr.next) {
    map.get(curr).next = curr.next ? map.get(curr.next) : null;
    map.get(curr).random = curr.random ? map.get(curr.random) : null;
  }

  return map.get(head);
};
