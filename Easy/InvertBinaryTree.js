/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeRecursive = function(root) {
  if (root) {
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
  }
  if (root && root.left) invertTreeRecursive(root.left);
  if (root && root.right) invertTreeRecursive(root.right);

  return root;
};

var invertTreeIterative = function(root) {
  const tmpRoot = new TreeNode(0, root, null);
  const q = [root];
  while(q.length) {
    const node = q.shift();
    if (node) {
      let tmp = node.left;
      node.left = node.right;
      node.right = tmp;
    }
    if (node && node.left) q.push(node.left);
    if (node && node.right) q.push(node.right);
  }
  return tmpRoot.left;
};

const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
const root1 = new TreeNode(1, new TreeNode(2));
const newRoot = invertTreeIterative(root);
console.log(`%o`, newRoot);