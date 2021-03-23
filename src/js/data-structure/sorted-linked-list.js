/**
 * Data structure: Sorted Linked List
 * Description: make sure every element inserted be sorted by compare function
 * Method:
 *  - getIndexNextElement(element): return the index should be inserted
 */
import LinkedList from "./linked-list";
import { defaultEquals, Compare, defaultCompare } from "../utils";

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    } else {
      let pos = this.getIndexNextSortedElement(element);
      return super.insert(pos);
    }
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    while (current) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      i += 1;
      current = current.next;
    }

    return i;
  }
}
