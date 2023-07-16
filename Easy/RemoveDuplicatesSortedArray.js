/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let first = 0;
  let second = 1;
  for (; second < nums.length; second++) {
    if (nums[first] !== nums[second]) {
      nums[first+1] = nums[second];
      first++;
    }
  }
  return first + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));
console.log(removeDuplicates([1]));