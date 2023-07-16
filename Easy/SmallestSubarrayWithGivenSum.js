/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var smallestSubarrayWithGivenSum = function(nums, target) {
  let windowStart = 0;
  //let windowEnd = 0;
  let min = Infinity;
  let sum = nums[0];
  for(let windowEnd = 0; windowEnd < nums.length;) {
    if (sum >= target) {
      min = Math.min(min, windowEnd - windowStart + 1);
      sum -= nums[windowStart];
      windowStart += 1;
    } else {
      windowEnd += 1;
      sum += nums[windowEnd];
    }
  }
  return min === Infinity ? 0 : min;
}

console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7));
console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 8], 7));
console.log(smallestSubarrayWithGivenSum([3, 4, 1, 1, 6], 8));
console.log(smallestSubarrayWithGivenSum([1], 1));
console.log(smallestSubarrayWithGivenSum([2, 3, 1, 2, 4, 3], 7));
console.log(smallestSubarrayWithGivenSum([1, 4, 4], 4));