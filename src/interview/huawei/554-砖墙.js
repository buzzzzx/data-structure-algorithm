/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function (wall) {
  const hashmap = {};
  for (let w of wall) {
    let sum = 0;
    for (let i = 0; i < w.length - 1; i += 1) {
      sum += w[i];
      hashmap[sum] = hashmap[sum] ? hashmap[sum] + 1 : 1;
    }
  }
  let res = 0;
  for (let key in hashmap) {
    res = Math.max(res, hashmap[key]);
  }

  return wall.length - res;
};
