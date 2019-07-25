/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = nums[0];
  for(let i = 1; i < nums.length; i++) {
    ans = ans^nums[i];
  }
  return ans
};

module.exports = singleNumber;