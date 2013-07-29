/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

var createMatrix = function(dimensions) {
  var matrix = [];
  for (var i = 0; i <= dimensions; i++) {
    matrix.push([]);
    for (var j = 0; j <= dimensions; j++) {
      matrix[i][j] = 1;
    }
  }
  return matrix;
}

///
/// Some dynamic programming, better than brute force
///

var pathsFromCornerToCorner = function(matrix) {
  var size = matrix.length;
  for (var x = size - 2; x >= 0; x--)
    for (var y = size - 2; y >= 0; y--)
      matrix[x][y] = matrix[x + 1][y] + matrix[x][y + 1]
  return matrix[0][0];
}
var pointMatrix = createMatrix(20);
console.log(pathsFromCornerToCorner(pointMatrix))
// 137846528820

///
/// Brute force solution
///

var pathsFromCornerToCorner = function(matrix, x, y) {
  if (!x) x = 0;
  if (!y) y = 0;

  var nextX = x + 1,
      nextY = y + 1,
      nextXExists = matrix[nextX] ? matrix[nextX][y] : false,
      nextYExists = matrix[x][nextY];

  if (nextXExists) pathsFromCornerToCorner(pointMatrix, nextX, y);
  if (nextYExists) pathsFromCornerToCorner(pointMatrix, x, nextY);
  if (!nextXExists && !nextYExists) window.count++;

  return;
}

window.count = 0;
var pointMatrix = createMatrix(20);
pathsFromCornerToCorner(pointMatrix)
// 137846528820