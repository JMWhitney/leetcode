/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if( nums.lastIndexOf(nums[i]) !== i ) {
      return true;
    }
  }
  return false;
};

module.exports = containsDuplicate;