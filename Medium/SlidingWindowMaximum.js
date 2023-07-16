/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let out = [];
  let windowStart = 0;
  let currMax = -Infinity;
  for(let windowEnd = 0; windowEnd <= nums.length - 1; windowEnd++) {
    currMax = Math.max(currMax, nums[windowEnd], nums[windowStart]);
    //console.log(`currMax is ${currMax}`);
    if (windowEnd - windowStart === k-1) {
      out.push(currMax);
      //console.log(`pushing ${currMax} at ${windowStart} and ${windowEnd}`);
      if (currMax === nums[windowStart]) {
        currMax = -Infinity;
        //console.log('setting currMxa to -Infinity');
      }
      windowStart += 1;
    }
  }
  return out;  
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([5, 3, 4], 1));
console.log(maxSlidingWindow([2, 1, 5, 1, 3, 2], 3));
console.log(maxSlidingWindow([2, 3, 4, 1, 5], 2));
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
//console.log(maxSlidingWindow());