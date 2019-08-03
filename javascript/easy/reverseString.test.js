const reverseString = require('./reverseString');

test('Receives the character array ["h","e","l","l","o"] and modifies it in place to be ["o","l","l","e","h"]', () => {
  let s = ["h","e","l","l","o"];
  reverseString(s);
  expect(s).toStrictEqual(["o","l","l","e","h"]);
});

test('Receives the character array ["H","a","n","n","a","h"] and modifies it in place to be ["h","a","n","n","a","H"]', () => {
  let s = ["H","a","n","n","a","h"];
  reverseString(s);
  expect(s).toStrictEqual(["h","a","n","n","a","H"])
})

test('Receives the alphabet in order and reverses it', () => {
  let s = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  reverseString(s);
  expect(s).toStrictEqual(['z','y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'])
})