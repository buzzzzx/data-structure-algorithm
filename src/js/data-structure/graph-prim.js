/**
 * 最小生成树：Prim，针对有权无向连通图。 返回 graph 中边的子集，其中包含了所有的顶点，并且边的权值最小
 */

const prim = (graph) => {
  const key = [];
  const visited = [];
  const parent = [];
  const { length } = graph;
  // initialize key, visited and parent
  for (let i = 0; i < length; i += 1) {
    key[i] = INF;
    visited[i] = false;
    parent[i] = null;
  }

  key[0] = 0;
  parent[0] = -1;
  for (let i = 1; i < length; i += 1) {
    const u = minKey(graph, key, visited);
    visited[u] = true;
    for (let j = 0; j < length; j += 1) {
      if (!visited[j] && graph[u][j] !== 0 && key[j] > graph[u][j]) {
        key[j] = graph[u][j];
        parent[j] = u;
      }
    }
  }

  return {
    parent,
    key,
  };
};

const minKey = (graph, key, visited) => {
  let min = INF;
  let minK = null;
  for (let i = 0; i < key.length; i += 1) {
    if (!visited[i] && min > key[i]) {
      min = key[i];
      minK = i;
    }
  }

  return minK;
};

const INF = Number.MAX_SAFE_INTEGER;

// test
const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
];

console.log(prim(graph));
