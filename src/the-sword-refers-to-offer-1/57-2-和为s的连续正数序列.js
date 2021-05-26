/**
 * @param {number} target
 * @return {number[][]}
 */
const findContinuousSequence = function (target) {
  const max = Math.floor(target / 2) + 1;
  const res = [];
  let sum = 3;
  let j = 2;
  const tmp = [1, 2];
  while (j <= max) {
    if (sum === target) {
      res.push([...tmp]);
      sum -= tmp.shift();
      j += 1;
      sum += j;
      tmp.push(j);
    } else if (sum < target) {
      j += 1;
      sum += j;
      tmp.push(j);
    } else {
      sum -= tmp.shift();
    }
  }

  return res;
};

console.log(findContinuousSequence(15));
