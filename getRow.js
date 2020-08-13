var getRow = function (rowIndex) {
  if (!rowIndex) return [1];

  let res = [1, 1];
  let row = 1;

  while (rowIndex > row) {
    const next = [];

    for (let i = 0; i < res.length - 1; i++) {
      next.push(res[i] + res[i + 1]);
    }
    res = [1, ...next, 1];
    row++;
  }
  return res;
};

console.log(getRow(3));
