function decodeFruit(key, lock) {
  let idx = 0;
  let res = "";
  for (let i = 0; i < key.length; i += 1) {
    for (let j = idx; j < lock.length - 1; j += 1) {
      if (key[i] === lock[j]) {
        res = res + lock[j + 1];
        idx = j + 2;
        break;
      }
    }
  }
  console.log(res);
}

decodeFruit("apple", "ahpepllleo");
decodeFruit("pear", "asdppaxelwraapryxzpgcleasamre");
