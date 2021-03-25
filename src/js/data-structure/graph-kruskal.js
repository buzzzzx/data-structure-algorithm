/**
 * 最小生成树：Kruskal，针对有权无向连通图。 返回 graph 中边的子集，其中包含了所有的顶点，并且边的权值最小
 */

const kruskal = (graph) => {
  const { length } = graph;
  const cost = [];
  // initialize cost
  for (let i = 0; i < length; i += 1) {
    cost[i] = [];
    for (let j = 0; j < length; j += 1) {
      cost[i][j] = graph[i][j];
    }
  }
  const parent = [];
  let count = 0;
  let a, b, u, v;

  while (count < length - 1) {
    // find smallest weighted edge
    let min = INF;
    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length; j += 1) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }

    u = find(u, parent);
    v = find(v, parent);

    if (union(u, v, parent)) {
      count += 1;
    }

    cost[a][b] = cost[b][a] = INF;
  }

  return parent;
};

const INF = Number.MAX_SAFE_INTEGER;

const find = (i, parent) => {
  while (parent[i]) {
    i = parent[i];
  }
  return i;
};

const union = (u, v, parent) => {
  if (u !== v) {
    parent[v] = u;
    return true;
  }
  return false;
};

// test
const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
];

console.log(kruskal(graph));
