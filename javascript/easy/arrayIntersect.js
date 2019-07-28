/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let i = 0, j = 0, result = [];
  //Two pointers, advance through each array until the longest common subsequence is found

  if(nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
  
  while (i < nums1.length && j < nums2.length) {
    if(nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      j++;
    }
    i++;
  }
  return result;
};

module.exports = intersect;