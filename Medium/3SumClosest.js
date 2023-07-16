/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i+1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      console.log(`sum is ${sum}`);
      let diff = Math.abs(target - sum);
      if (diff < Math.abs(closest - target))
        closest = sum;

      if (sum < target)
        left++;
      else if (sum > target) right--;
      else return sum;
    }
  }
  return closest;
};

console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([-2, 0, 1, 2], 2));
console.log(threeSumClosest([-3, -1, 1, 2], 1));
console.log(threeSumClosest([1, 0, 1, 1], 100));
console.log(threeSumClosest([0, 1, 2], 3));

// -4, -1, 1, 2