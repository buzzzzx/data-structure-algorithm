/**
 * Data structure: Hash map
 * Methods:
 *  - put(key, value)
 *  - remove(key)
 *  - get(key)
 */

import { defaultToString } from "../utils";
import { ValuePair } from "./dictionary";
import LinkedList from "./linked-list";

class HashMap {
  constructor(toStrFn = defaultToString()) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key == null || value == null) {
      return false;
    }

    this.table[this.hashCode(key)] = new ValuePair(key, value);
    return true;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair == null) {
      return false;
    } else {
      delete this.table[hash];
      return true;
    }
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    let strKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; strKey.length; i += 1) {
      hash += strKey.charCodeAt(i);
    }

    return hash % 37; // 求余而不是直接返回，是为了避免这个操作数太大超过了最大表示范围
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }
}

/**
 * 处理 HashMap 的冲突问题的方法：
 *  - 分离链接
 *  - 线性探查
 */

// 分离链接
class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key == null || value == null) {
      return false;
    }

    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    if (linkedList == null) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].push(new ValuePair(key, value));
    return true;
  }

  get(key) {
    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    if (linkedList == null) {
      return undefined;
    } else {
      let curr = linkedList.head;
      while (curr) {
        if (curr.element.key === key) {
          return curr.element.value;
        }
        curr = curr.next;
      }
      return undefined;
    }
  }

  remove(key) {
    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    if (linkedList != null && !linkedList.isEmpty()) {
      let curr = linkedList.head;
      while (curr) {
        if (curr.element.key === key) {
          linkedList.remove(curr.element);
          if (linkedList.isEmpty()) {
            delete this.table[hash];
          }
          return true;
        }
        curr = curr.next;
      }
    }

    return false;
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    let strKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; strKey.length; i += 1) {
      hash += strKey.charCodeAt(i);
    }

    return hash % 37; // 求余而不是直接返回，是为了避免这个操作数太大超过了最大表示范围
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  // 比 lose lose 更好的散列函数是 djb2
  djb2HashCode(key) {
    const strKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < strKey.length; i += 1) {
      hash = hash * 33 + strKey.charCodeAt(i);
    }

    return hash % 1013;
  }
}

// TODO: 线性探查
