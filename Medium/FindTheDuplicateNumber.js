/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0;
  let fast = 0; // 1
  while (true) {
    slow = nums[slow]; // 1 4 2
    fast = nums[nums[fast]]; // 2 2
    console.log(`slow is at ${slow} and fast ${fast}`);
    if (slow === fast) break;
  }
  console.log(`slow is at ${nums[slow]} at index ${slow} and fast is at ${nums[fast]} at index ${fast}`);

  slow = 0;
  while (nums[slow] !== nums[fast]) {
    slow = nums[slow]; // 1 3 2
    fast = nums[fast]; // 2 2 
    console.log(`slow is at ${slow} and fast ${fast}`);
  }
  console.log(`finally slow is at ${slow} with value ${nums[slow]}, fast at ${fast} with value ${nums[fast]}`);
  return nums[slow];
};

console.log(findDuplicate([1,3,4,2,2]) === 2);
console.log(findDuplicate([3,1,3,4,2]) === 3);
console.log(findDuplicate([1, 4, 4, 3, 2]) === 4);
console.log(findDuplicate([2, 1, 3, 3, 5, 4]) === 3);
console.log(findDuplicate([2, 4, 1, 4, 4]) === 4);
console.log(findDuplicate([2,5,9,6,9,3,8,9,7,1]) === 9);
console.log(findDuplicate([5,4,7,8,1,2,3,1,1,9]) === 1);