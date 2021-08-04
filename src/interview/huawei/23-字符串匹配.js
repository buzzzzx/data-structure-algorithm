/**
 * 华为二面
 *    暴力
 *    KMP 算法
 * @param {string} str
 * @param {string} subStr
 * @return {number}
 */
function findIndex(str, subStr) {
  if (subStr.length === 0) {
    return 0;
  }
  for (let i = 0; i <= str.length - subStr.length; i += 1) {
    let flag = true;
    for (let j = 0; j < subStr.length; j += 1) {
      if (str[i + j] !== subStr[j]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      return i;
    }
  }
  return -1;
}

/**
 * KMP
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  if (m === 0) {
    return 0;
  }

  let next = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i += 1) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (needle[i] === needle[j]) {
      j += 1;
    }
    next[i] = j;
  }

  for (let i = 0, j = 0; i < n; i += 1) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j += 1;
    }
    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;
};

// test
console.log(findIndex("abcde", "cde"));
