const gameOfLife = require('./GameOfLife');

test('game of life test 1', () => {
  let board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ];
  gameOfLife(board);
  expect(board).toBe([
    [0,0,0],
    [1,0,1],
    [0,1,1],
    [0,1,0]
  ]);
});