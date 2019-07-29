const { twoSum1, twoSum2 } = require('./twoSum');

test('Given nums = [2, 7, 11, 15], target = 9 return [0, 1].', () => {
  expect(twoSum1([2,7,11,15], 9)).toStrictEqual([0,1]);
  expect(twoSum2([2,7,11,15], 9)).toStrictEqual([0,1]);
});

test('Given nums = [3,2,4], target = 6 return [1, 2].', () => {
  expect(twoSum1([3,2,4], 6)).toStrictEqual([1,2]);
  expect(twoSum2([3,2,4], 6)).toStrictEqual([1,2]);
});

test('Given nums = [3,3], target = 6 return [0, 1].', () => {
  expect(twoSum1([3,3], 6)).toStrictEqual([0,1]);
  expect(twoSum2([3,3], 6)).toStrictEqual([0,1]);
});

test('Given nums = [3,1], target = 6 return an error message.', () => {
  expect(() => { twoSum1([3,1], 6) }).toThrowError("Invalid arguments: The target value cannot be produced from the given array");
  expect(() => { twoSum2([3,1], 6) }).toThrowError("Invalid arguments: The target value cannot be produced from the given array");
});