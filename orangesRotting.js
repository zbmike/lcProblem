var orangesRotting = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const rowDiff = [1, -1, 0, 0],
    colDiff = [0, 0, 1, -1];
  let rotQueue = [],
    minute = 0,
    fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) rotQueue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  while (fresh && rotQueue.length) {
    const next = [];
    minute++;

    for (let [r, c] of rotQueue) {
      for (let i = 0; i < rowDiff.length; i++) {
        const nextRow = r + rowDiff[i],
          nextCol = c + colDiff[i];

        if (
          nextRow < rows &&
          nextRow >= 0 &&
          nextCol < cols &&
          nextCol >= 0 &&
          grid[nextRow][nextCol] === 1
        ) {
          fresh--;
          grid[nextRow][nextCol] = 2;
          next.push([nextRow, nextCol]);
        }
      }
    }
    rotQueue = next;
  }
  return !fresh ? minute : -1;
};

const crate = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(crate));
