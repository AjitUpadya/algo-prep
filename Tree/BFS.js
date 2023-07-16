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

const bfs = (root) => {
  if (!root) return [];
  const bfsNodes = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    bfsNodes.push(node.val);
    if (node.left)  q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return bfsNodes;
}

/**
 * Find height of tree
 * for each level, traverse in loop
 * @param {*} root 
 * @returns 
 */
const bfsRecursive = (root) => {
  if (!root)  return [];
  const nodes = [];

  // will process one level at a time
  const processEachLevel = (root, level) => {
    if (level === 0) nodes.push(root.val);
    else {
      if (root.left)  processEachLevel(root.left, level-1);
      if (root.right)  processEachLevel(root.right, level-1);
    }
  }
  const h = height(root);
  for (let i = 0; i < h; i++) {
    processEachLevel(root, i);
  }
  return nodes;
}

const height = (root) => {
  if (!root)  return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

// compares in order: 3, 9, 20, 15 (true), so BFS
const treeIncludes = (root, node) => {
  if (!root)  return false;
  return root.val === node.val || treeIncludes(root.left, node) || treeIncludes(root.right, node);
}


const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(bfsRecursive(root));
console.log(treeIncludes(root, new TreeNode(15))); // 

const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(bfsRecursive(root2));
console.log(treeIncludes(root2, new TreeNode(5)));

const root3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(6)), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(bfsRecursive(root3));
console.log(treeIncludes(root3, new TreeNode(33)));

const root4 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))));
console.log(bfsRecursive(root4));
console.log(treeIncludes(root4, new TreeNode(4)));