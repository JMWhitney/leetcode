/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  let temp;
  
  for(let i = 0; i < k; i++) {
    temp = nums.pop();
    nums.unshift(temp);
  }
};

module.exports = rotate;