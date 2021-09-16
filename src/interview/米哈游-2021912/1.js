function main(s) {
  let map = {
    "}": "{",
    "]": "[",
  };
  let stack = [];
  let res = 0;
  for (let i = 0; i < s.length; i += 1) {
    let ch = s[i];
    if (ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      let peak = stack.pop();
      if (map[ch] !== peak) {
        res += 1;
      }
    }
  }

  console.log(res);
}

main("{[][}}");
main("[][]{{]]");
