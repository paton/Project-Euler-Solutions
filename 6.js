/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var sumOfNaturalNumSquares = function(n) {
  var sum = Math.pow(n, 3) / 3;
  sum += Math.pow(n, 2) / 2;
  return sum + n / 6;
}

var squaredSumOfNaturalNums = function (n) {
  return Math.pow((n * (n + 1) / 2), 2);
}

var difference = squaredSumOfNaturalNums(100) - sumOfNaturalNumSquares(100);
console.log(difference)
// 25164150