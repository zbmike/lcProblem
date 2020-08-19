var uniquePaths = function (m, n) {
  if (m < 1 || n < 1) {
    return 0;
  }

  if (m === 1 || n === 1) {
    return 1;
  }
  let memo = new Array(n).fill(0).map(() => new Array(2).fill(-1));

  let flag = 1;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (row === 0 || col === 0) {
        memo[flag][col] = 1;
      } else {
        memo[flag][col] = memo[flag][col - 1] + memo[flag ^ 1][col];
      }
    }
    flag ^= 1;
  }
  console.log(memo);

  return memo[flag ^ 1][m - 1];
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
