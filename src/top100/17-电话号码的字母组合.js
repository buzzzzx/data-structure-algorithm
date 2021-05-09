/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const len = digits.length;
  let res = [];

  for (let n of digits) {
    res = helper(n, res);
  }

  return res;
};

const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const helper = function (digit, res) {
  let tmp = [];

  if (res.length === 0) {
    return [...map[digit]];
  }

  for (let s of res) {
    for (let c of map[digit]) {
      tmp.push(s + c);
    }
  }

  return tmp;
};

console.log(letterCombinations("234"));
