var removeDuplicates = function (nums) {
  let i = 0;
  let count = 0;
  let ele = nums[0];
  while (i < nums.length) {
    if (nums[i] === ele) {
      count += 1;
      i += 1;
    } else {
      ele = nums[i];
      nums.splice(i - count, count - 1);
      i -= count - 1;
      count = 0;
    }
  }
  if (count > 1) {
    nums.splice(i - count, count - 1);
  }
  return nums.length;
};

var removeDuplicates2pointers = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

let arr = [1, 1];
removeDuplicates(arr);
console.log(arr);
