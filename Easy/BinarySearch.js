/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(nums.length === 1 && nums[0] === target)
    return 0;
  let lo = 0;
  let hi = nums.length;

  while(lo <= hi) {
    let mid = Math.round((lo + hi)/2);
    console.log(`index: ${mid} and nums[mid]: ${nums[mid]}`);
    if(nums[mid] === target)
      return mid;
    else if (nums[mid] > target) {
      hi = mid-1;
    } else 
      lo = mid+1;
  }
  return -1;
};

var searchR = function(nums, target) {
  if(nums.length === 1 && nums[0] === target)
    return 0;
  let mid = Math.round(nums.length/2);
  console.log(`comparing index ${mid} nums[mid] ${nums[mid]}`);
  if(nums[mid] === target)
    return mid;
  else if(nums[mid] > target) 
    return searchR(nums.slice(0, mid), target)
  else
    return searchR(nums.slice(mid), target)
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
console.log(search([1,2,3,4,5,6,7,8,9], 6));
console.log(search([5], 5));