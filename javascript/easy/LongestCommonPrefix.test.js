const lcp = require('./LongestCommonPrefix');

test('input: ["flower", "flow","flight"] output: "fl"', () => {
  expect(lcp(["flower", "flow","flight"])).toBe("fl");
});

test('input: ["dog","racecar","car"]', () => {
  expect(lcp(["dog","racecar","car"])).toBe("");
})

test('erroneous input: []', () => {
  expect(lcp([])).toBe("");
})