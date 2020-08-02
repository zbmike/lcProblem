var createTargetArray = function (nums, index) {
  const target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};

// const nums = [0, 1, 2, 3, 4],
//   index = [0, 1, 2, 2, 1];

const nums = [1, 2, 3, 4, 0],
  index = [0, 1, 2, 3, 0];
// const test = [];
// test.splice(0, 0, 1);
// console.log(test);
console.log(createTargetArray(nums, index));
