const reverse = require('./reverseInteger');

test('Receives the integer 123 and returns 321', () => {
  expect(reverse(123)).toBe(321);
});

test('Receives the integer -123 and returns -321', () => {
  expect(reverse(-123)).toBe(-321);
})

test('Receives the integer 120 and returns 21', () => {
  expect(reverse(120)).toBe(21);
})