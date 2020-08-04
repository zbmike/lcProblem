const mat = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

var setZeroes = function (matrix) {
  let fr = false,
    fc = false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      fc = true;
      break;
    }
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      fr = true;
      break;
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      let idx = 1;
      while (idx < matrix[0].length) {
        matrix[i][idx] = 0;
        idx++;
      }
    }
  }
  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      let idx = 1;
      while (idx < matrix.length) {
        matrix[idx][i] = 0;
        idx++;
      }
    }
  }
  if (fr) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  if (fc) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};

setZeroes(mat);
console.log(mat);

a = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];
