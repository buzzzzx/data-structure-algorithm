/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = function (s, n) {
  // const left = s.slice(0, n);
  // const right = s.slice(n, s.length);
  // return right + left;
  let l = "",
    r = "";

  let num = n;
  for (let c of s) {
    num-- > 0 ? (r += c) : (l += c);
  }

  return l + r;
};
