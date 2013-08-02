/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// Probably a better way to do this.
// TODO: Optimize

var findProperDivisors = function(num) {
  var sum,
      sumOfAmicableNums = 0,
      amicableNumbers = [],
      sumOfDivisors = new Array(num);

  for (var i = 2; i <= num; i++) {
    for (var j = i * 2; j < num; j += i) {
      sumOfDivisors[j] = sumOfDivisors[j] + i || i + 1;
    }
  }

  for (var k = 0; k < num; k++) {
    sum = sumOfDivisors[k];
    if (sum && sumOfDivisors[sum] == k && k !== sum) amicableNumbers.push(k);
  }

  for (var l = 0; l < amicableNumbers.length; l++) sumOfAmicableNums += amicableNumbers[l];

  return sumOfAmicableNums;
}

console.log(findProperDivisors(10000));
// 31626