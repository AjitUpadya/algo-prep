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

function dfs(root) {
  if (!root)  return [];
  // iterative
  const s = [root];
  const res = [];
  while(s.length) {
    const node = s.pop();
    if (node) {
      res.push(node.val);
      if (node.right) s.push(node.right);
      if (node.left)  s.push(node.left);
    }
  }
  //return res;
  return dfsR(root);
}

const dfsR = (node) => {
  if (!node)  return []; // base case when we hit null
  return [ node.val, ...dfsR(node.left), ...dfsR(node.right) ]; // otherwise append node val to list and call recursively
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(dfs(root)); // 

const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(dfs(root2));

const root3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(6)), undefined), new TreeNode(3, undefined, new TreeNode(5)));
console.log(dfs(root3));

const root4 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))));
console.log(dfs(root4));

const hasPathSum = (root, targetSum) => {
  if (!root)  return false;
  if (!root.left && !root.right)  return targetSum - root.val === 0;
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

// below doesn't work
// need to keep track of a currSum as we try root  to leftmost node and then repeat 
const hasPathSumI = (root, targetSum) => {
  if (!root)  return false;
  const s = [root];
  while(s.length) {
    const node = s.pop();
    if (node) {
      console.log(`comparing ${node.val} and ${targetSum}`);
      if (!node.left && !node.right && targetSum - node.val === 0)  return true;
      s.push(node.left);
      s.push(node.right);
      targetSum -= node.val;
    }
  }
  return false;
}

// console.log(hasPathSum(root, 30));
// console.log(hasPathSum(root2, 7));
// console.log(hasPathSum(root3, 100));


const sumNumbers = (root) => {
  return sumNumbersR(root, 0);
}

const sumNumbersR = (root, num) => {
  if (!root)  return 0;
  num = num * 10 + root.val;
  if (!root.left && !root.right)  return num;
  return sumNumbersR(root.left, num) + sumNumbersR(root.right, num);
}

// const root11 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(6)), undefined), new TreeNode(3, undefined, new TreeNode(5)));
// console.log(sumNumbers(root11));

const root12 = new TreeNode(6, new TreeNode(4, new TreeNode(6, null, new TreeNode(4, new TreeNode(2, new TreeNode(6)), null)), undefined), new TreeNode(1));
console.log(sumNumbers(root12));

const height = (root) => {
  if (!root)  return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

console.log(height(root4));