/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const res = [];

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (dfs(heights, i, j, false, false)) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

const dfs = function (heights, i, j, tmpPacific, tmpAtlantic) {
  const height = heights[i][j];

  tmpPacific |= i === 0 || j === 0;
  if (!tmpPacific && i - 1 >= 0 && heights[i - 1][j] <= height) {
    tmpPacific |= dfs(heights, i - 1, j, tmpPacific, tmpAtlantic);
  }
  if (!tmpPacific && j - 1 >= 0 && heights[j - 1][j] <= height) {
    tmpPacific |= dfs(heights, i, j - 1, tmpPacific, tmpAtlantic);
  }

  tmpAtlantic |= i === heights.length - 1 || j === heights[0].length - 1;
  if (!tmpAtlantic && i + 1 < heights.length && heights[i + 1][j] <= height) {
    tmpAtlantic |= dfs(heights, i + 1, j, tmpPacific, tmpAtlantic);
  }
  if (
    !tmpAtlantic &&
    j + 1 < heights[0].length &&
    heights[i][j + 1] <= height
  ) {
    tmpAtlantic |= dfs(heights, i, j + 1, tmpPacific, tmpAtlantic);
  }

  return tmpPacific && tmpAtlantic;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
