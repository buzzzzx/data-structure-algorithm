/**
 * Initialize your data structure here.
 */
const Trie = function () {
  this.nextNode = {};
  this.count = 0; // count 表示以当前单词结尾的单词数量
  this.prefix = 0; // prefix 表示以该节点之前的字符串为前缀的单词数量
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (word === "") {
    return;
  }
  let curr = this;
  for (let i = 0; i < word.length; i += 1) {
    if (!curr.nextNode[word[i]]) {
      curr.nextNode[word[i]] = new Trie();
    }
    curr = curr.nextNode[word[i]];
    curr.prefix += 1;
  }
  curr.count += 1;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (word === "") {
    return false;
  }
  let curr = this;
  for (let i = 0; i < word.length; i += 1) {
    if (!curr.nextNode[word[i]]) {
      return false;
    }
    curr = curr.nextNode[word[i]];
  }
  return curr.count !== 0;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (prefix === "") {
    return false;
  }
  let curr = this;
  for (let i = 0; i < prefix.length; i += 1) {
    if (!curr.nextNode[prefix[i]]) {
      return false;
    }
    curr = curr.nextNode[prefix[i]];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
