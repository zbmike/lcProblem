var thirdMax = function (nums) {
  let top = [];
  for (let i = 0; i < nums.length; i++) {
    if (top.findIndex((ele) => ele === nums[i]) === -1) {
      top.push(nums[i]);
      top.sort((a, b) => b - a);
      if (top.length > 3) top.pop();
    }
  }
  return top.length < 3 ? Math.max(...top) : top[2];
};

console.log(thirdMax([1, -2147483648, 2]));
