import LinkedList, { Node } from "./linked-list";
import { defaultEquals } from "../utils";

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    let current;
    const node = new DoublyNode(element, undefined, undefined);
    if (index === 0) {
      if (this.head) {
        current = this.head;
        this.head = node;
        node.next = current;
        current.prev = node;
      } else {
        // empty
        this.head = node;
        this.tail = node;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = node;
      node.prev = previous;
      node.next = current;
      current.prev = node;
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
      if (this.count === 1) {
        this.head = undefined;
        this.tail = undefined;
      } else {
        this.head = removed.next;
        removed.next.prev = undefined;
      }
    } else if (index === this.count - 1) {
      removed = this.tail;
      this.tail = removed.prev;
      this.tail.next = undefined;
      removed.prev = undefined;
    } else {
      let previous = this.getElementAt(index - 1);
      removed = previous.next;
      previous.next = removed.next;
      removed.next.prev = previous;
      removed.prev = undefined;
      removed.next = undefined;
    }

    this.count -= 1;
    return removed.element;
  }
}
