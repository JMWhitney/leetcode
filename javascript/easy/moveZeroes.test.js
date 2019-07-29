const moveZeroes = require('./moveZeroes');

test('Modifies the array [0,1,0,3,12] in place to be [1,3,12,0,0]', () => {
  let nums = [0,1,0,3,12];
  moveZeroes(nums)
  expect(nums).toStrictEqual([1,3,12,0,0]);
})

test('Modifies the array [0,1,0,3,12] in place to be [1,3,12,0,0]', () => {
  let nums = [1,0,0,0,0,7,0,5,0,2];
  moveZeroes(nums);
  expect(nums).toStrictEqual([1,7,5,2,0,0,0,0,0,0]);
})