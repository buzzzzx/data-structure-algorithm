// let input;
// while ((input = readline())) {}

function main(s) {
  let map = new Map(); // 用一个 map 存储：序列长度-0的个数-1的个数 -> 边界
  let len = s.length;
  for (let i = len - 1; i >= 1; i -= 1) {
    // i 为序列长度
    let start = 0; // [start, start + i - 1]
    while (start + i - 1 < len) {
      let count1 = 0; // 1 的个数
      let count0 = 0; // 0 的个数
      for (let m = start; m <= start + i - 1; m += 1) {
        // 该序列区间 [start, start + i - 1] 统计 1 和 0 的个数
        s[m] === "1" ? count1++ : count0++;
      }
      let key = `${i}-${count0}-${count1}`;
      if (map.get(key) === undefined) {
        map.set(key, [start, start + i - 1]); // 如果没有则存进该区间
      } else {
        // 如果有，则说明找到了另外一个区间，就找到了两个区间
        let arr = map.get(key);
        // 输出，注意每个边界加 1
        console.log(arr[0] + 1, arr[1] + 1, start + 1, i - 1 + start + 1);
        return;
      }
      start += 1;
    }
  }
}

main("10000");
main("11011");
main("1011");
