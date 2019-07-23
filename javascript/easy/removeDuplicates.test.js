const removeDuplicates = require('./removeDuplicates');

test('Receives the array [1,1,2,2,2,3,4,5,5,5,6], removes all duplicates and returns 6', () => {
  let nums = [1,1,2,2,2,3,4,5,5,5,6];
  expect(removeDuplicates(nums)).toBe(6);
  expect(nums).toEqual([1,2,3,4,5,6]);
})