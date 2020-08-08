var findDuplicates = function (nums) {
  const set = new Set();
  const res = [];
  for (const num of nums) {
    if (!set.has(num)) set.add(num);
    else res.push(num);
  }
  return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
