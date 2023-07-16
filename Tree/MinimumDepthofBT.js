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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;

  let minDepth = Infinity;
  let levelDepth = 0;
  const q = [root];
  while (q.length) {
    const size = q.length;
    levelDepth++;
    for (let i = 0 ; i < size; i++) {
      const node = q.shift();
      if (node) {        
        q.push(node.left);
        q.push(node.right);
        if (!node.left && !node.right) {
          minDepth = Math.min(levelDepth, minDepth);
        }
      }
    }
  }
  return minDepth;
};

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(minDepth(root));

const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(minDepth(root2));

const root3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(6)), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(minDepth(root3));

const root4 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))));
console.log(minDepth(root4));
