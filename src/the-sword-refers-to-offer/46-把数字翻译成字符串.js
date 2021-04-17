/**
 * @param {number} num
 * @return {number}
 */
const translateNum = function (num) {
  let s = num.toString();
  let len = s.length;

  return helper(s, 0, len - 1);
};

const helper = function (s, start, end) {
  if (start === end) {
    return 1;
  }

  if (s[start] === "0" || parseInt(s.substring(start, start + 2)) > 25) {
    return helper(s, start + 1, end);
  } else {
    if (start + 1 === end) {
      return 2;
    } else {
      return helper(s, start + 1, end) + helper(s, start + 2, end);
    }
  }
};

// console.log(translateNum(12258));
console.log(translateNum(506));
