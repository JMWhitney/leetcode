const isPalindrome = require('./isPalindrome');

test("Receives 'A man, a plan, a canal: Panama' and returns true", () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
})

test("Receives 'race a car' and returns false", () => {
  expect(isPalindrome('race a car')).toBe(false);
})

test("Receives the string '' and returns true.", () => {
  expect(isPalindrome('')).toBe(true);
})

test("Receives the string 'ABCDEDCBA' and returns true", () => {
  expect(isPalindrome("ABCDEDCBA")).toBe(true);
})

test("receives the string 'ab' and returns false", () => {
  expect(isPalindrome('ab')).toBe(false);
})