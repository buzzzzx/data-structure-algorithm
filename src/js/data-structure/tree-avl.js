/**
 * Data structure: AVL Tree
 * Description: 每次添加或删除需要保证任意节点左右子树的高度差最多为 1
 *              需要进行一些旋转操作：
 *               - LL：向右的单旋转
 *               - RR：向左的单旋转
 *               - LR：向右的双旋转（先RR旋转，再LL旋转）
 *               - RL：向左的双旋转（先LL旋转，再RR旋转）
 *
 */
import BinarySearchTree, { Node } from "./tree-bst";
import { Compare, defaultCompare } from "../utils";

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
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
    } else {
      return node;
    }

    // 检查是否失去平衡并进行相应操作
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        node = this.rotationLR(node);
      }
    } else if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
        node = this.rotationRL(node);
      } else {
        node = this.rotationRR(node);
      }
    }
    return node;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);

    if (node == null) {
      return node; // 不需要进行平衡
    }

    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      let balanceFactorLeft = this.getBalanceFactor(node.left);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        node = this.rotationLL(node);
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        node = this.rotationLR(node);
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      let balanceFactorRight = this.getBalanceFactor(node.right);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        node = this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        node = this.rotationRL(node);
      }
    }

    return node;
  }

  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 0:
        return BalanceFactor.BALANCED;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }

    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
}
