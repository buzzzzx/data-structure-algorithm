/**
 * 华为一面 2021-8-3
 * @param str
 * @return {number}
 */
function count(str) {
  if (str.length === 1) {
    return 1;
  }

  let res = 0;
  for (let i = 0; i < str.length; i += 1) {
    dfs(str, str[i], i);
  }

  function dfs(str, tmp, i) {
    if (i === str.length - 1) {
      res = isPalindrome(tmp) ? res + 1 : res;
      return;
    }

    if (isPalindrome(tmp)) {
      res += 1;
    }

    dfs(str, tmp + str[i + 1], i + 1);
  }

  return res;
}

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }

  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
}

// test
console.log(count("aaa"));
