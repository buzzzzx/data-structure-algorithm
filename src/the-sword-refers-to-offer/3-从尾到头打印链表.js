/*function ListNode(x) {
    this.val = x;
    this.next = null;
}*/

function printListFromTailToHead(head) {
  const res = [];
  let curr = head;
  while (curr) {
    res.unshift(curr.val);
    curr = curr.next;
  }

  return res;
}
