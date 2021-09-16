function main(dateStr, updates) {
  let dateArr = dateStr.split(" ")[0].split("-");
  let timeArr = dateStr.split(" ")[1].split(":");
  let date = new Date(
    +dateArr[0],
    +dateArr[1],
    +dateArr[2],
    +timeArr[0],
    +timeArr[1],
    +timeArr[2]
  );

  for (let update of updates) {
    let sign = update[0] === "-" ? -1 : 1;
    let num = +update.slice(1, -1);
    let unit = update[update.length - 1];

    switch (unit) {
      case "W":
        date.setDate(date.getDate() + sign * num * 7);
        break;
      case "d":
        date.setDate(date.getDate() + sign * num);
        break;
      case "h":
        date.setHours(date.getHours() + sign * num);
        break;
      case "m":
        date.setMinutes(date.getMinutes() + sign * num);
        break;
      case "s":
        date.setSeconds(date.getSeconds() + sign * num);
        break;
    }
  }

  console.log(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${
      date.getHours() < 10 ? `${"0" + date.getHours()}` : date.getHours()
    }:${
      date.getMinutes() < 10 ? `${"0" + date.getMinutes()}` : date.getMinutes()
    }:${
      date.getSeconds() < 10 ? `${"0" + date.getSeconds()}` : date.getSeconds()
    }`
  );
}

main("2021-9-13 00:00:00", ["+5d", "+2h", "-1m"]);
