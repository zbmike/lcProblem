var checkIfExist = function (arr) {
  let memo = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (memo.has(arr[i] / 2) || memo.has(arr[i] * 2)) return true;
    memo.add(arr[i]);
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
