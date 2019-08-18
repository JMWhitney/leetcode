/**
 * Implement atoi which converts a string to an integer.
 * @param {string} str
 * @return {number}
 * The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−2^31) is returned.
 */
var myAtoi = function(str) {
  let isNegative = null;
  let integer = 0;

  // Traverse string left to right
  for(let i = 0; i < str.length; i++) {

    // Determine if string is negative or invalid
    if(isNegative === null) {

      // invalid parameter
      if(INVALID_CHAR.test(str[i])) {
        return 0;  
      }
      // It is negative
      if(str[i] === '-') {
        isNegative = true;
        continue;
      }
      // It is positive
      if(str[i] === '+') {
        isNegative = false;
        continue;
      } 
      // It is a valid int
      if(VALID_NUMBER.test(str[i])) {
        isNegative = false;
        integer += parseInt(str[i]);
        continue;
      }
    }
    //We've already determined if the string is valid or negative. Parse the int 
    else {
      if(!VALID_NUMBER.test(str[i])) { 
        break;
      } else {
        integer *= 10;
        integer += parseInt(str[i]);
      }
    }
  }

  if(isNegative) integer *= -1;

  // Clamp between INT_MIN and INT_MAX
  return integer <= INT_MIN ? INT_MIN : integer >= INT_MAX ? INT_MAX : integer; 
};

const INT_MIN = Math.pow(-2, 31);
const INT_MAX = Math.pow(2, 31) - 1;
const INVALID_CHAR = /[^0-9\-\+\s]/;
const VALID_NUMBER = /[0-9]/;

module.exports = myAtoi;