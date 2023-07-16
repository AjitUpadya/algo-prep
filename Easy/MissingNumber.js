/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let expectedSum = 0;
  for (let i = 0; i < nums.length+1; i++) {
    expectedSum += i;
  }
  console.log(`real sum is ${sum} and expected sum is ${expectedSum}`);
  return expectedSum - sum;
};

// Tests
console.log(missingNumber([3,0,1]) === 2);
console.log(missingNumber([0,1]) === 2);
console.log(missingNumber([9,6,4,2,3,5,7,0,1]) === 8);
console.log(missingNumber([0]) === 1);
console.log(missingNumber([4, 0 ,3 , 1]) === 2);