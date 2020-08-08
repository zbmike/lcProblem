// Data structure: set (hashmap) for fast lookup and deletion
// However an even faster and more space efficient way is to use xor operator
// Since the same number xoring together will always become bitwise 0,
// and 0 xoring any number the result is any number, the reserved space,
// after xoring every elements in the given array, will store the only single
// number, thus it is the result.

var singleNumber = function (nums) {
  let s = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) s.delete(nums[i]);
    else s.add(nums[i]);
  }

  console.log(Array.from(s)[0]);
};

var singleNumberXor = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i];
  }

  console.log(nums[0]);
};

console.log("singleNum");
singleNumber([4, 1, 2, 1, 2]);
singleNumber([2, 2, 1]);

console.log("singleNumXor");
singleNumberXor([4, 1, 2, 1, 2]);
singleNumberXor([2, 2, 1]);
