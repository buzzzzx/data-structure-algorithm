class MinHeap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getLeft(index) {
    return 2 * index + 1;
  }

  getRight(index) {
    return 2 * index + 2;
  }

  swap(a, b) {
    const tmp = this.items[a];
    this.items[a] = this.items[b];
    this.items[b] = tmp;
  }

  getParent(index) {
    if (index === 0) {
      return -1;
    }
    return Math.floor((index - 1) / 2);
  }

  siftDown(index) {
    let leftIdx = this.getLeft(index);
    let rightIdx = this.getRight(index);
    let siftIdx = index;
    if (
      leftIdx < this.size() &&
      this.compareFn(this.items[leftIdx], this.items[siftIdx]) < 0
    ) {
      siftIdx = leftIdx;
    }
    if (
      rightIdx < this.size() &&
      this.compareFn(this.items[rightIdx], this.items[siftIdx]) < 0
    ) {
      siftIdx = rightIdx;
    }

    if (siftIdx !== index) {
      this.swap(siftIdx, index);
      this.siftDown(siftIdx);
    }
  }

  siftUp(index) {
    if (index === 0) {
      return;
    }
    let parentIdx = this.getParent(index);
    while (
      index > 0 &&
      this.compareFn(this.items[parentIdx], this.items[index]) > 0
    ) {
      this.swap(parentIdx, index);
      index = parentIdx;
      parentIdx = this.getParent(index);
    }
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    const removed = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.siftDown(0);

    return removed;
  }

  insert(element) {
    if (element == null) {
      return false;
    }
    this.items.push(element);
    this.siftUp(this.size() - 1);
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.items[0];
  }
}

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
  if (lists.length === 0) {
    return null;
  }

  const pq = new MinHeap((a, b) => a.val - b.val);
  for (let l of lists) {
    pq.insert(l);
  }
  const dummyHead = new ListNode(-1);
  let curr = dummyHead;
  while (pq.size() !== 0) {
    const tmp = pq.extract();
    curr.next = new ListNode(tmp.val);
    curr = curr.next;
    pq.insert(tmp.next);
  }

  return dummyHead.next;
};
