/**
 * 最短路径算法 Dijkstra：求单个源到其它源的最短路径
 */

const INF = Number.MAX_SAFE_INTEGER;

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

const dijkstra = (graph, src) => {
  const dist = [];
  const visited = [];
  const { length } = graph;
  // initialize dist and visited
  for (let i = 0; i < length; i += 1) {
    dist[i] = INF;
    visited[i] = false;
  }

  dist[src] = 0;
  for (let i = 1; i < length; i += 1) {
    const minV = minVertex(dist, visited);
    visited[minV] = true;
    for (let j = 0; j < length; j += 1) {
      if (
        !visited[j] &&
        graph[minV][j] !== 0 &&
        dist[j] > dist[minV] + graph[minV][j]
      ) {
        dist[j] = dist[minV] + graph[minV][j];
      }
    }
  }

  return dist;
};

const minVertex = (dist, visited) => {
  let min = INF;
  let minV = null;
  for (let i = 0; i < dist.length; i += 1) {
    if (!visited[i] && min > dist[i]) {
      min = dist[i];
      minV = i;
    }
  }

  return minV;
};

// test
console.log(dijkstra(graph, 0));
