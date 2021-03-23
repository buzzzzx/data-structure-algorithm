/**
 * Data structure: Binary Search Tree
 * Methods:
 * - insert
 * - search
 * - inOrderTraverse
 * - preOrderTraverse
 * - postOrderTraverse
 * - min, max
 * - remove
 */
import { Compare, defaultCompare } from "../utils";

export class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    }
    return node;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  // traverse
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node == null) {
      return;
    }
    this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node == null) {
      return;
    }

    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node == null) {
      return;
    }

    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let curr = node;
    while (curr != null && curr.left != null) {
      curr = curr.left;
    }
    return curr;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let curr = node;
    while (curr != null && curr.right != null) {
      curr = curr.right;
    }
    return curr;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return null;
      }

      if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      } else {
        const aux = this.minNode(node.right);
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
        return node;
      }
    }

    return node;
  }
}
