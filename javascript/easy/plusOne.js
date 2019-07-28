/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length - 1;

  //Recursively carry the one if necessary. 
  (function addRecursive(index) {
    digits[index] = (digits[index] + 1) % 10;

    //If we need to rollover the last digit
    if(digits[index] === 0 && index === 0) {
      digits.unshift( 1 )
    }

    //Otherwise increment the next digit
    else if(digits[index] === 0) { 
      addRecursive(index - 1); 
    } 
    
    //Otherwise there is no one to carry.
    else { 
      return 
    }

  })(index);

  return digits;
};

module.exports = plusOne;