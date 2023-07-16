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
var maxDepth = function(root) {
  if (!root)  return 0;
  const q = [root];
  let mDepth = -Infinity;
  let levelDepth = 0;
  while(q.length) {
    const size = q.length; //  1, 2
    levelDepth++; // 1, 2
    for (let i = 0; i < size; i++) {
      const node = q.shift(); // 3, 9
      if (node) {
        if (node.left)  q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }
    mDepth = Math.max(mDepth, levelDepth); // 1, 2
    //console.log(`mDepth is now ${mDepth} and q is %o`, q);
  }
  return mDepth;
};

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth(root));

const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(maxDepth(root2));

const root3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(6)), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(maxDepth(root3));

const root4 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))));
console.log(maxDepth(root4));