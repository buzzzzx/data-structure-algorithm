/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = function (words) {
  const len = words.length;
  const a = "a".charCodeAt(0);
  const masks = [];
  for (let i = 0; i < len; i += 1) {
    let tmp = 0;
    for (let ch of words[i]) {
      tmp |= 1 << (ch.charCodeAt(0) - a);
    }
    masks[i] = tmp;
  }

  let res = 0;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if ((masks[i] & masks[j]) === 0) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }

  return res;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
