/**
 * Definition for a binary tree node.
 * */
class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root)  return [];
  let rightToLeft = true;
  const q = [root];
  const results = [];
  
  while (q.length) {
    const size = q.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (node) {
        level.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (level.length) {
      if (!rightToLeft)  results.push(level.reverse())
      else results.push(level);
      rightToLeft = !rightToLeft;
    }
  }
  return results;
};

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(zigzagLevelOrder(root));

const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(zigzagLevelOrder(root1));

const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(zigzagLevelOrder(root2));