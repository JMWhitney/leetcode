/**
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  //Maps for constant time lookups
  let rows = new Set();
  let columns = new Set();
  let blocks = new Set();

  //Touch all elements
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {

      //Compute reused values once
      let value = board[i][j];

      // Touch all board elements
      // Construct sets as we pass
      // Return false if there is a duplicate in any set
      if ( value !== "."       &&
         ( rows.has( value + " in row " + i )         ||
           columns.has( value +  "in column " + j )   ||
           blocks.has( value + " at block " + Math.floor(i/3).toString() + Math.floor(j/3).toString() ) )) {
            return false;
      } else if ( value !== "." ) {
        rows.add( value + " in row " + i )
        columns.add( value +  "in column " + j );
        blocks.add( value + " at block " + Math.floor(i/3).toString() + Math.floor(j/3).toString() ); 
      }
    }
  }

  return true;
};

module.exports = isValidSudoku;