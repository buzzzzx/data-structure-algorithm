/**
 * Data structure: Linked list
 * methods:
 *  - push(element)
 *  - insert(element, index)
 *  - getElementAt(index)
 *  - remove(element)
 *  - indexOf(element)
 *  - removeAt(index)
 *  - isEmpty, size, toString
 */

import { defaultEquals } from "../utils";

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export default class LinkedList {
  constructor(equalFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalFn = equalFn;
  }

  push(element) {
    const node = new Node(element);
    if (this.head === undefined) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count += 1;
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const node = new Node(element);
    if (index === 0) {
      const nextElement = this.head;
      this.head = node;
      node.next = nextElement;
    } else {
      const previous = this.getElementAt(index - 1);
      const nextElement = previous.next;
      previous.next = node;
      node.next = nextElement;
    }

    this.count += 1;
    return true;
  }

  getElementAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let idx = index;
    let current = this.head;
    while (idx !== 0) {
      current = current.next;
      idx -= 1;
    }

    return current;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;
    let idx = 0;
    while (current !== undefined) {
      if (this.equalFn(current.element, element)) {
        return idx;
      }
      current = current.next;
      idx += 1;
    }

    return -1;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let removedElement;
    if (index === 0) {
      removedElement = this.head;
      this.head = this.head.next;
    } else {
      const before = this.getElementAt(index - 1);
      removedElement = before.next;
      before.next = removedElement.next;
    }

    this.count -= 1;
    return removedElement;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.head = undefined;
  }

  toString() {
    let res;
    if (!this.head) {
      res = "";
    } else {
      res = `${this.head.element}`;
      let current = this.head.next;
      while (!current) {
        res = `${res}, ${current.element}`;
        current = current.next;
      }
    }
    return res;
  }
}
