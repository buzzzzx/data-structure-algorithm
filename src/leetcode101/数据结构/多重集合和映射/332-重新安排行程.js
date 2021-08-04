/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function (tickets) {
  const len = tickets.length;
  if (len === 1) {
    return tickets[0];
  }

  let map = {};
  for (let i = 0; i < len; i += 1) {
    const [from, to] = tickets[i];
    if (map[from]) {
      map[from].push(to);
    } else {
      map[from] = [to];
    }
  }
  for (let key in map) {
    map[key].sort();
  }

  function dfs(node) {
    const nextNodes = map[node];
    while (nextNodes && nextNodes.length) {
      let next = nextNodes.shift();
      dfs(next);
    }
    res.unshift(node);
  }

  const res = [];
  dfs("JFK");
  return res;
};

console.log(
  findItinerary([
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ])
);

console.log(
  findItinerary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ])
);
