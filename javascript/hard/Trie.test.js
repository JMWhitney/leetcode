const Trie = require('./Trie');

test('Trie test 1', () => {
  let trie = new Trie();

  expect(trie.insert("apple")).toBeFalsy();
  expect(trie.search("apple")).toBe(true);
  expect(trie.search("app")).toBe(false);
  expect(trie.startsWith("app")).toBe(true);
  expect(trie.insert("app")).toBeFalsy();
  expect(trie.search("app")).toBe(true);
});

test('Trie test 2', () => {
  let trie = new Trie();

  expect(trie.search("a")).toBe(false);
})

test('Trie test 3', () => {
  let trie = new Trie();

  expect(trie.insert("cat")).toBeFalsy();
  expect(trie.insert("car")).toBeFalsy();
  expect(trie.insert("done")).toBeFalsy();
  expect(trie.insert("do")).toBeFalsy();
  expect(trie.insert("trie")).toBeFalsy();
  expect(trie.insert("try")).toBeFalsy();

  expect(trie.search("cat")).toBe(true);
  expect(trie.search("car")).toBe(true);
  expect(trie.search("done")).toBe(true);
  expect(trie.search("do")).toBe(true);
  expect(trie.search("trie")).toBe(true);
  expect(trie.search("try")).toBe(true);

  expect(trie.search("c")).toBe(false);
  expect(trie.search("ca")).toBe(false);
  expect(trie.search("d")).toBe(false);
  expect(trie.search("t")).toBe(false);
  expect(trie.search("tr")).toBe(false);

  expect(trie.startsWith("c")).toBe(true);
  expect(trie.startsWith("ca")).toBe(true);
  expect(trie.startsWith("d")).toBe(true);
  expect(trie.startsWith("t")).toBe(true);
  expect(trie.startsWith("tr")).toBe(true);
})