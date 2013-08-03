/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var findSumOfAbundantNumbers = function() {

  var divisors = [],
      max = 28123,
      abundantNums = [],
      numsMadeFromAbundantNums = [],
      sumOfNonAubundantSumNums = 0,
      j;

  // Find sum of divisors
  for (var i = 1; i < (28132 / 2) + 1; i++) {
    j = i * 2;
    while (j <= max) {
      divisors[j] ? divisors[j] += i : divisors[j] = i;
      j += i;
    }
  }

  // Find abundant nums
  for (var k = 0; k < divisors.length; k++)
    if (divisors[k] > k) abundantNums.push(k);

  // Find nums made from abundant nums
  var sum;
  for (var l = 0; l < abundantNums.length; l++) {
    for (var m = l; m < abundantNums.length; m++) {
      sum = abundantNums[m] + abundantNums[l];
      if (sum > max) break;
      numsMadeFromAbundantNums[sum] = true;
    }
  }

  // Find nums not made from sum of 2 abundant nums
  for (var n = 0; n < max; n++)
    if (!numsMadeFromAbundantNums[n]) sumOfNonAubundantSumNums += n;

  return sumOfNonAubundantSumNums;
}

console.log(findSumOfAbundantNumbers());
// 4179871

