/**
 * Data structure: Stack
 * Description: use doubly linked list as the inner structure to store elements
 */
import { DoublyLinkedList } from "./doubly-linked-list";

export class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(element) {
    this.items.insert(element, this.items.size() - 1);
  }

  pop() {
    return this.items.removeAt(this.items.size() - 1);
  }

  peek() {
    return this.items.getElementAt(this.items.size() - 1).element;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  clear() {
    return this.items.clear();
  }

  toString() {
    return this.items.toString();
  }
}
