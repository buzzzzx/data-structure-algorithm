function findRepeatNumber(nums) {
  const { length } = nums;
  let idx = 0;
  while (idx !== length) {
    let num = nums[idx];
    if (num === idx) {
      idx += 1;
    } else {
      let numInIdx = nums[num];
      if (numInIdx === num) {
        return num;
      } else {
        let tmp = nums[num];
        nums[num] = num;
        nums[idx] = tmp;
      }
    }
  }
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
