/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Note:
 *Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  //Boundaries
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(-2, 31);

  let reverse = 0;
  let isNegative;
  
  //Check sign and make sure x is positive
  if(x < 0) {
    isNegative = true;
    x = Math.abs(x);
  }

  //Take one number off the right, and shift it on to the reverse
  while(x > 0) {
    reverse *= 10;
    reverse += x % 10;
    x = Math.floor(x / 10);
  }

  //If our reversed number is outside boundaries
  if(reverse < INT_MIN || reverse > INT_MAX) {
    return 0
  } else {
    return isNegative ? reverse * -1 : reverse;
  }
};

module.exports = reverse;