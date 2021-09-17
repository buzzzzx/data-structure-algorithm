function group(str) {
  let stackR = [];
  let stackY = [];
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    let ch = str[i];

    if (ch === "R") {
      stackR.push(ch + String(count++));
    } else if (ch === "B") {
      if (stackR.length) {
        stackR.pop();
      } else if (stackY.length) {
        stackY.pop();
      } else {
        console.log(0);
        return;
      }
    } else if (ch === "Y") {
      stackY.push(ch + String(count++));
    }
  }

  while (stackR.length) {
    let topY = stackY[stackY.length - 1];
    let topR = stackR[stackR.length - 1];
    if (topY[1] < topR[1]) {
      console.log(0);
      return;
    }
    stackR.pop();
    stackY.pop();
  }
  console.log(1);
}

// group("RBYBRBY");
// group("YYRY");
