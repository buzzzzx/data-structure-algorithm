/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  if (n === 0) {
    return [];
  }
  const res = [];
  dfs(res, 1, 0, n, "(");

  return res;
};

const dfs = function (res, lCnt, rCnt, n, tmp) {
  if (lCnt === n && rCnt === n) {
    res.push(tmp);
    return;
  }

  if (lCnt === n) {
    dfs(res, lCnt, rCnt + 1, n, tmp + ")");
  } else if (lCnt === rCnt) {
    dfs(res, lCnt + 1, rCnt, n, tmp + "(");
  } else {
    dfs(res, lCnt + 1, rCnt, n, tmp + "(");
    dfs(res, lCnt, rCnt + 1, n, tmp + ")");
  }
};

// test
console.log(generateParenthesis(4).length);
