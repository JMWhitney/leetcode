const singleNumber = require('./singleNumber');

test('Receives the array [2,2,1 and returns 1', () => {
  expect(singleNumber([2,2,1])).toBe(1);
})

test('Receives the array [4,1,2,1,2] and returns 4', () => {
  expect(singleNumber([4,1,2,1,2])).toBe(4)
})