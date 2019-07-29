let binSearch = function (arr, x) { 
   
  let start=0, end=arr.length-1; 
        
  // Iterate while start not meets end 
  while (start<=end){ 

      // Find the mid index 
      let mid=Math.floor((start + end)/2); 
 
      // If element is present at mid, return True 
      if (arr[mid]===x) return mid; 

      // Else look in left or right half accordingly 
      else if (arr[mid] < x)  
           start = mid + 1; 
      else
           end = mid - 1; 
  } 
 
  return -1; 
} 
/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  //Create copy of nums so we don't mutate original array. Shallow copy will suffice.
  let array = nums.slice(0);

  //Sort array so we can binary search
  array.sort((a,b) => a - b);

  //Search each element and see if the element to sum to the target value is in the array
  for(let i = 0; i < array.length; i++) {
    j = binSearch(array, target - array[i]);
    if(j !== -1 && j !== i) {
      return [nums.indexOf(array[i]), nums.lastIndexOf(array[j])];
    }
  }
  throw new Error("Invalid arguments: The target value cannot be produced from the given array");
};

/**
 * This method is much faster, simpler, and space efficient than the above method.
 * Uses single pass dictionary lookup to do the searching.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  // Create object with each key-value pair being each value-index pair of nums. 
  // This way we have contant time lookup for our values.
  let dict = {};
  for(let i = 0; i < nums.length; i++) {
    let j = dict[target - nums[i]];
    if (j !== undefined && j !== i) {
      return [j, i];
    }
    dict[nums[i]] = i;
  }
  throw new Error("Invalid arguments: The target value cannot be produced from the given array");
};

module.exports = { twoSum1, twoSum2 }