var hIndex = function (citations) {
  citations.sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < citations.length; i++) {
    const h = i + 1;

    if (citations[i] < h) {
      return result;
    }

    result = h;
  }

  return result;
};

console.log(hIndex([3, 0, 6, 1, 5]));
