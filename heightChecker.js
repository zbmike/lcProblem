var heightChecker = function (heights) {
  let sortedHeights = [...heights].sort((a, b) => a - b);
  let change = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) change += 1;
  }
  return change;
};
