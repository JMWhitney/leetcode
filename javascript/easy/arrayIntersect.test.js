const intersect = require('./arrayIntersect');

test('Receives the arrays [1,2,2,1] and [2,2] and returns [2,2]', () => {
  expect(intersect([1,2,2,1], [2,2])).toStrictEqual([2,2]);
});

test('Receives the arrays [4,9,5] and [9,4,9,8,4] and returns [4,9]', () => {
  expect(intersect([4,9,5], [9,4,9,8,4])).toStrictEqual([4,9]);
});