function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var pathSum = function (root, sum, presums = { "0": 1 }, prev = 0) {
  if (!root) return 0;
  let curr = prev + root.val;
  presums[curr] = (presums[curr] || 0) + 1;
  let res = (presums[curr - sum] || 0) - !sum;
  res +=
    pathSum(root.left, sum, presums, curr) +
    pathSum(root.right, sum, presums, curr);
  presums[curr]--;
  return res;
};

let root = new TreeNode(1);
console.log(pathSum(root, 1));
