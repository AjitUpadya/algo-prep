/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    searchPairs(nums, -nums[i], i+1, triplets);
  }
  return triplets;
};

function searchPairs(nums, target, left, triplets) {
  let right = nums.length - 1;
  while (left < right) {
    let currSum = nums[left] + nums[right];
    if (currSum === target) {
      triplets.push([-target, nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (target > currSum) left++;
    else right--;
  }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-3, 0, 1, 2, -1, 1, -2]));
console.log(threeSum([-2,0,1,1,2]));