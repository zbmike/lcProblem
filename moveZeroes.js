var moveZeroes = function (nums) {
  let swapIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[swapIdx] = nums[i];
      swapIdx += 1;
    }
  }
  while (swapIdx < nums.length) {
    nums[swapIdx] = 0;
    swapIdx += 1;
  }
};
