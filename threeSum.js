var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j + 1] === nums[j]) j++;
        while (nums[k - 1] === nums[k]) k--;
        j++;
        k--;
      } else if (sum < 0) j += 1;
      else k -= 1;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return res;
};

var threeSumNoGo = function (nums) {
  const map = new Map();
  const res = [];
  for (const num of nums) {
    if (!map.has(num)) map.set(num, 1);
    else map.set(num, map.get(num) + 1);
  }
  const ansArr = Array.from(map.keys());
  for (const ans of ansArr) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== ans && map.get(-ans - nums[i]) > 0) {
        if (-ans - nums[i] === nums[i] && map.get(-ans - nums[i]) > 1) {
          res.push([ans, -ans - nums[i], nums[i]]);
          map.set(nums[i], 0);
        } else {
          res.push([ans, -ans - nums[i], nums[i]]);
          map.set(nums[i], 0);
          map.set(-ans - nums[i], 0);
        }
      }
    }
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSumNoGo(nums));
