const isAnagram = require('./validAnagram');

test('Receives the strings "anagram" and "nagaram" and returns true', () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test('Receives the strings "rat" and "car" and returns false', () => {
  expect(isAnagram("rat", "car")).toBe(false);
});