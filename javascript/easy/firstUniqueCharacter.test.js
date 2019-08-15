const firstUniqChar = require('./firstUniqueCharacter');

test('Receives the string "leetcode" and returns 0', () => {
  expect(firstUniqChar("leetcode")).toBe(0);
});

test('Receives the string "loveleetcode" and returns 2', () => {
  expect(firstUniqChar("loveleetcode")).toBe(2);
})

test('Receives the string "cc" and returns -1', () => {
  expect(firstUniqChar("cc")).toBe(-1)
})