/**
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 * Note:
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  //Rotating a matrix 90 degrees clockwise is the same as making every column a row in reverse order and vice versa. 
  
  //vars
  let midColumn = Math.floor(matrix.length / 2);

  //Swap row and column values with ES6 syntax
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i+1; j < matrix[i].length; j++) {
      [ matrix[i][j] , matrix[j][i] ] = 
      [ matrix[j][i] , matrix[i][j] ];
    }
  }

  //Reverse order of rows
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < midColumn; j++) {
      [ matrix[i][j] , matrix[i][matrix.length - 1 - j] ] = 
      [ matrix[i][matrix.length - 1 - j], matrix[i][j] ]
    }
  }
};

module.exports = rotate;