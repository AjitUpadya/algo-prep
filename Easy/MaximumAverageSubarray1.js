/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const n = nums.length-1;
  let maxAverage = nums[0];
  let windowSum = windowStart = 0;
  //let windowStart = 0;
  for (let windowEnd = 0; windowEnd <= nums.length-1; windowEnd++) {
    windowSum += nums[windowEnd];
    if(windowEnd >= k-1) {
      console.log(`window average at index ${windowStart} is ${windowSum/k}`);
      let currWindowAvg = windowSum/k;
      maxAverage = Math.max(maxAverage, currWindowAvg);
      windowSum -= nums[windowStart];
      windowStart += 1;
    }
  }
  return maxAverage;

};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
console.log(findMaxAverage([-1], 1));