const plusOne = require('./plusOne');

test('Receives the array [1,2,3] and modifies it to return [1,2,4]', () => {
  expect(plusOne([1,2,3])).toStrictEqual([1,2,4]);
});

test('Receives the array [4,3,2,1] and modifies it to return [4,3,2,2]', () => {
  expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2]);
});

test('Receives the array [9,9,9,9] and modifies it to return [1,0,0,0,0]', () => {
  expect(plusOne([9,9,9,9])).toStrictEqual([1,0,0,0,0]);
});

