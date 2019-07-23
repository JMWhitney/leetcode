const containsDuplicates = require('./containsDuplicates');

test('Receives the array [1,2,3,1] and returns true', () => {
  expect(containsDuplicates([1,2,3,1])).toBe(true);
});

test('Receives the array [1,2,3,4] and returns false', () => {
  expect(containsDuplicates([1,2,3,4])).toBe(false);
})

test('Receives the array [1,1,1,3,3,4,3,2,4,2] and returns true', () => {
  expect(containsDuplicates([1,1,1,3,3,4,3,2,4,2])).toBe(true);
})