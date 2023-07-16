/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let maxSum = -Infinity;
  let windowStart = 0;
  let currSum = 0; 
  for (let windowEnd = 0; windowEnd <= nums.length -1 ; windowEnd++) {
    currSum += nums[windowEnd];
    if (windowEnd >= k-1) {
      maxSum = Math.max(currSum, maxSum);
      currSum -= nums[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;  
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([2, 1, 5, 1, 3, 2], 3));
console.log(maxSlidingWindow([2, 3, 4, 1, 5], 2));
//console.log(maxSlidingWindow());