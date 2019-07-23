const rotate = require('./rotateArray');

test('Receives the array [1,2,3,4,5,6,7] and 3 and modifies it to be [5,6,7,1,2,3,4]', () => {
  let nums = [1,2,3,4,5,6,7];
  rotate(nums, 3);
  expect(nums).toStrictEqual([5,6,7,1,2,3,4]);
});

test('Receives the array [-1, -100, 3, 99] and 2 and modifies it to be [3,99,-1,-100]', () => {
  let nums = [-1, -100, 3, 99];
  rotate(nums, 2);
  expect(nums).toStrictEqual([3,99,-1,-100]);
});