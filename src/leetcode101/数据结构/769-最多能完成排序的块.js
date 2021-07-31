/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
  let max = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    max = Math.max(max, arr[i]);
    if (max === i) {
      res += 1;
    }
  }
  return res;
};

console.log(maxChunksToSorted([1, 2, 0, 3]));
