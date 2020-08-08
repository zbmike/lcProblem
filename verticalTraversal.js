var verticalTraversal = function (root) {
  const nodes = [];

  getNodeInfos(root, 0, 0, nodes);
  nodes.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);

  const map = new Map();

  for (const [x, _, val] of nodes) {
    if (!map.has(x)) map.set(x, []);
    map.get(x).push(val);
  }

  return [...map.values()];
};

const getNodeInfos = (node, x, y, nodeArr) => {
  if (node) {
    getNodeInfos(node.left, x - 1, y - 1, nodeArr);
    nodeArr.push([x, y, node.val]);
    getNodeInfos(node.right, x + 1, y - 1, nodeArr);
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(verticalTraversal(root));
