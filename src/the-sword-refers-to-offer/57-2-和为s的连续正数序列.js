/**
 * @param {number} target
 * @return {number[][]}
 */
const findContinuousSequence = function (target) {
  let tar = target;
  let i = 1;
  let res = [];
  while (tar > 0) {
    tar -= i;
    i += 1;
    if (tar > 0 && tar % i === 0) {
      let arr = [];
      let start = tar / i;
      for (let j = start; j < start + i; j += 1) {
        arr.push(j);
      }
      res.unshift(arr);
    }
  }

  return res;
};

// 滑动窗口
const findContinuousSequence1 = function (target) {
  let res = [];
  let i = 1;
  let j = 1;
  let sum = 0;
  let half = Math.floor(target / 2);
  while (i <= half) {
    if (sum < target) {
      sum += j;
      j += 1;
    } else if (sum > target) {
      sum -= i;
      i += 1;
    } else {
      let tmp = [];
      for (let n = i; n < j; n += 1) {
        tmp.push(n);
      }
      res.push(tmp);

      sum -= i;
      i += 1;
    }
  }

  return res;
};

// test
console.log(findContinuousSequence1(15));
