let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];

var merge = function (nums1, m, nums2, n) {
  m -= 1;
  n -= 1;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[m + n + 1] = nums1[m];
      m -= 1;
    } else {
      nums1[m + n + 1] = nums2[n];
      n -= 1;
    }
  }
};

merge(arr1, 3, arr2, 3);

console.log(arr1);
