var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 1) return 0;
  let count = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let start = 0;
  let end = 1;

  while (end < intervals.length) {
    if (intervals[end][0] < intervals[start][1]) {
      ++count;
      if (intervals[end][1] < intervals[start][1]) start = end;
    } else start = end;
    ++end;
  }
  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
);
