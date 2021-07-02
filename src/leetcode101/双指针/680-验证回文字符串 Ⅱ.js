/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left += 1;
      right -= 1;
    } else {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
  }

  return true;
};

const isPalindrome = function (s, i, j) {
  while (i < j) {
    if (s[i] === s[j]) {
      i += 1;
      j -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(validPalindrome("abbca"));
