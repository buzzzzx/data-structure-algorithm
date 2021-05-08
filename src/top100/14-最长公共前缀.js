/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let res = strs[0];
  for (let i = 1; i < strs.length; i += 1) {
    while (!strs[i].startsWith(res)) {
      res = res.substring(0, res.length - 1);
    }
  }

  return res;
};

// 暴力法
const longestCommonPrefix1 = function (strs) {
  let res = "";
  outer: for (let i = 0; i < strs[0].length; i += 1) {
    let c = strs[0][i];
    for (let j = 1; j < strs.length; j += 1) {
      if (c !== strs[j][i]) {
        break outer;
      }
    }
    res += c;
  }

  return res;
};

// test
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
