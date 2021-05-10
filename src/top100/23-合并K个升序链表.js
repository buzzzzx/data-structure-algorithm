/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  const dummyHead = new ListNode(0);
  const pq = new PriorityQueue((a, b) => a.val - b.val);
  for (let l of lists) {
    if (l == null) {
      continue;
    }
    pq.enqueue(l);
  }
  let curr = dummyHead;
  while (!pq.isEmpty()) {
    let min = pq.dequeue();
    curr.next = min;
    curr = curr.next;
    if (min.next) {
      pq.enqueue(min.next);
    }
  }
  return dummyHead.next;
};

class PriorityQueue {
  constructor(compareFn) {
    this.tree = [];
    this.compareFn = compareFn;
  }

  isEmpty() {
    return this.tree.length === 0;
  }

  enqueue(element) {
    this.tree.push(element);
    this.tree.sort(this.compareFn);
  }

  dequeue() {
    return this.tree.shift();
  }

  getFirst() {
    return this.tree[0];
  }
}

// 两两合并 - 用归并的思想优化
const mergeKLists1 = function (lists) {
  const len = lists.length;
  if (len === 0) {
    return null;
  }
  if (len === 1) {
    return lists[0];
  }
  if (len === 2) {
    return merge(lists[0], lists[1]);
  }

  const mid = Math.floor(len / 2);
  const list1 = lists.slice(0, mid);
  const list2 = lists.slice(mid, len);

  return merge(mergeKLists(list1), mergeKLists(list2));
};

const merge = function (l1, l2) {
  let dummyHead = new ListNode(0);

  let curr = dummyHead;
  let p = l1;
  let q = l2;
  while (p && q) {
    if (p.val < q.val) {
      curr.next = new ListNode(p.val);
      p = p.next;
    } else {
      curr.next = new ListNode(q.val);
      q = q.next;
    }
    curr = curr.next;
  }

  curr.next = p ? p : q;

  return dummyHead.next;
};
