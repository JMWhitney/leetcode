/**
 * @param {number[]} nums   A sorted array of numbers
 * @return {number}         The length of the array after all duplicate numbers have been removed
 */
var removeDuplicates = function(nums) {
  for(let i = 0; i < nums.length; i++){
    while(nums.lastIndexOf(nums[i]) !== i) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

module.exports = removeDuplicates;