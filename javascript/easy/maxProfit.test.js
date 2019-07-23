const maxProfit = require('./maxProfit');

test('Receives the array [7,1,5,3,6,4] and returns 7', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(7);
})

test('Receives the array [1,2,3,4,5] and returns 4', () => {
  expect(maxProfit([1,2,3,4,5])).toBe(4);
})

test('Receives the array [7,6,4,3,1] and returns 0', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0);
})