/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const arr = s.trim().split(/\s+/g);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i += 1;
    j -= 1;
  }
  return arr.join(" ");
};
