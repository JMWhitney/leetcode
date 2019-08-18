const atoi = require('./atoi');

test('"42" should return 42', () => {
  expect(atoi("42")).toBe(42);
});

test(' "   -42" should return -42 ', () => {
  expect(atoi("   -42")).toBe(-42);
});

test('"4193 with words" should return 4193', () => {
  expect(atoi("4193 with words")).toBe(4193);
});

test('"words and 987" should return 0', () => {
  expect(atoi("words and 987")).toBe(0);
});

test('"-91283472332" should return -2147483648', () => {
  expect(atoi("-91283472332")).toBe(-2147483648);
});

test('"3.14159" should return 3', () => {
  expect(atoi("3.14159")).toBe(3);
});

test('"+-2" should return 0', () => {
  expect(atoi("+-2")).toBe(0);
})

test('"  -0012a42" should return -12', () => {
  expect(atoi("  -0012a42")).toBe(-12);
})