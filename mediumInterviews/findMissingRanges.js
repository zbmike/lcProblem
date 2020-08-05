// Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
// Output: ["2", "4->49", "51->74", "76->99"]

var findMissingRanges = function (arr, lower, upper) {
  const result = [];
  let next = lower;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < next) continue;
    if (arr[i] === next) {
      next++;
      continue;
    }
    // next < arr[i]
    result.push(next === arr[i] - 1 ? `${next}` : `${next}->${arr[i] - 1}`);
    next = arr[i] + 1;
  }
  if (next <= upper) {
    result.push(next === upper ? `${next}` : `${next}->${upper}`);
  }
  return result;
};

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
