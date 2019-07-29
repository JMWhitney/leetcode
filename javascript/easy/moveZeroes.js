/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let numZeroes = 0;
  for(let i = 0; i < nums.length - numZeroes; i++) {
    if(nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      numZeroes++;
      i--;
    }
  }
};

module.exports = moveZeroes;