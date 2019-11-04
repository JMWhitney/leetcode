/**
 * Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
  // Alias for board dimensions
  const boardWidth = board.length;
  const boardHeight = board[0].length;

  // Board Buffer to determine which cells should flip
  let toUpdate = Array(boardWidth).fill(Array(boardHeight).fill(0));

  // Iterate over board to determine which cells should flip
  for(let row = 0; row < boardWidth; row++) {
    for(let column = 0; column < boardHeight; column++) {

      // Check surrounding cells for number of living neighbors
      let livingNeighbors = 0;
      for(let i = -1; i < 1; i++) {
        for(let j = -1; j < 1; j++) {

          const xPos = row + i;
          const yPos = column + j;
          // Make sure we don't go out of bounds
          if(xPos < 0 || xPos > boardWidth -1 || yPos < 0 || yPos > boardHeight-1) continue; 
          if(board[xPos][yPos]) livingNeighbors++;
          
        }

        // Cell is alive
        if(board[row][column]) {
        }
        // Cell is not alive
        else {
        }
      }
    }
  }
};

module.exports = gameOfLife;