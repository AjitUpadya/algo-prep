/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  // two pointers, keep moving right until weencounter a number greater than 0
  // then start comparing Math.abs() and push square to new array
  if (nums.length === 1)  return [nums[0] * nums[0]];
  let smallestIdx = 0;

  nums.forEach((num, idx) => {
    if (Math.abs(num) < Math.abs(nums[smallestIdx])) {
      smallestIdx = idx;
    }
  });

  let left = smallestIdx - 1;
  let right = smallestIdx + 1;
  let res = [nums[smallestIdx] * nums[smallestIdx]];
  while (left >= 0 && right < nums.length) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      res.push(nums[left] * nums[left]);
      left--;
    } else {
      res.push(nums[right] * nums[right]);
      right++;
    }
  }
  while (left >= 0) {
    res.push(nums[left] * nums[left]);
    left--;
  }
  while(right < nums.length) {
    res.push(nums[right] * nums[right]);
    right++;
  }
  
  return res;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
console.log(sortedSquares([1,2,3,11]));
console.log(sortedSquares([-5,-3,-2,-1]));