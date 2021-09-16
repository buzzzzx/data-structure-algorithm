let input;
while ((input = read_line())) {
  let maxMoney = 0;
  input = input.split(" ").map((a) => Number(a));
  let n = input[0];
  let m = input[1];
  let d = input[2];

  let ways = [];
  for (let i = 1; i < n; i += 1) {
    let si = readInt();
    let list = [];
    for (let j = 0; j < si; j += 1) {
      list.push(readInt());
      list.push(readInt());
    }
    ways.push(list);
  }

  if (dfs(ways, 0, m, d)) {
    console.log(maxMoney);
  } else {
    console.log("no");
  }

  function dfs(ways, curCity, leftMoney, leftDay) {
    if (leftDay < 0 || leftMoney < 0) {
      return false;
    }
    if (curCity === ways.length) {
      maxMoney = Math.max(maxMoney, leftMoney);
      return true;
    }
    let flag = false;
    let list = ways[curCity];
    for (let i = 0; i < list.length; i += 2) {
      leftMoney -= list[i];
      leftDay -= list[i + 1];
      let subCity = dfs(ways, curCity + 1, leftMoney, leftDay);
      if (subCity) {
        flag = true;
      }
      leftMoney += list[i];
      leftDay += list[i + 1];
    }
    return flag;
  }
}
