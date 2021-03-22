import LinkedList, { Node } from "./linked-list";
import { defaultEquals } from "../utils";

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    let current;
    let node = new Node(element);
    if (index === 0) {
      if (this.count === 0) {
        this.head = node;
        node.next = this.head;
      } else {
        current = this.head;
        this.head = node;
        node.next = current;
        let last = this.getElementAt(this.count - 1);
        last.next = this.head;
      }
    } else {
      let previous = this.getElementAt(index - 1);
      node.next = previous.next;
      previous.next = node;
    }

    this.count += 1;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let removed;
    if (index === 0) {
      removed = this.head;
      this.head = removed.next;
      let last = this.getElementAt(this.count - 1);
      last.next = this.head;
    } else {
      let previous = this.getElementAt(index - 1);
      removed = previous.next;
      previous.next = removed.next;
    }

    this.count -= 1;
    return removed.element;
  }
}
