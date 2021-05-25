/**
 * @param {number} num
 * @return {number}
 */
const translateNum = function (num) {
  return helper(num.toString(), 0, num.toString().length - 1);
};

const helper = function (str, start, end) {
  if (start === end) {
    return 1;
  }

  if (str[start] === "0" || parseInt(str.substring(start, start + 2)) > 25) {
    return helper(str, start + 1, end);
  } else {
    if (start === end - 1) {
      return 2;
    } else {
      return helper(str, start + 1, end) + helper(str, start + 2, end);
    }
  }
};

console.log(translateNum(506));
