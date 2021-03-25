/**
 * Data structure: Graph
 * Methods:
 * - addVertex
 * - addEdge
 * - getVertices
 * - getAdjList
 * - toString
 */
import { Dictionary } from "./dictionary.js";

export class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v, u) {
    this.addVertex(v);
    this.addVertex(u);
    this.adjList.get(v).push(u);
    if (this.isDirected === false) {
      this.adjList.get(u).push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i += 1) {
      s += `${this.vertices[i]} -> `;
      const adj = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < adj.length; j += 1) {
        s += `${adj[j]} `;
      }
      s += "\n";
    }

    return s;
  }
}

// test
export const getNewGraph = () => {
  const graph = new Graph();
  const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  for (let i = 0; i < myVertices.length; i += 1) {
    graph.addVertex(myVertices[i]);
  }
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("A", "D");
  graph.addEdge("C", "D");
  graph.addEdge("C", "G");
  graph.addEdge("D", "G");
  graph.addEdge("D", "H");
  graph.addEdge("B", "E");
  graph.addEdge("B", "F");
  graph.addEdge("E", "I");
  return graph;
};

console.log(getNewGraph().toString());
