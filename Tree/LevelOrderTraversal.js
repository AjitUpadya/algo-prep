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
var levelOrder = function(root) {
  const result = [];
  const q = [];
  q.push(root);

   while (q.length > 0) {
     const level = [];
     const size = q.length;
     for (let i = 0; i < size; i++) {
       const node = q.shift();
       if (node) {
         level.push(node.val);
         q.push(node.left);
         q.push(node.right);
       }
     }
     if (level.length > 0) {
       result.push(level);
     }
    }
    return result;
};
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrder(root));