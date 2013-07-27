/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/


var sumOfPrimesBelowNum = function(max) {
  var sieve = [],
      sumOfPrimes = 0;

  for (var i = 2; i < max; i++) {
    // Is prime
    if (!sieve[i]) {
      sumOfPrimes += i;
      // Mark all multiples of this number since they aren't prime
      for (var j = i; j < max; j += i) sieve[j] = true;
    }
  }

  return sumOfPrimes;
}

var sum = sumOfPrimesBelowNum(2000000);
console.log(sum);
// 142913828922




var factorial = function(num, product) {
  if (!product) product = 1;
  if (num < 2) return product;
  product *= num;
  num--;
  return factorial(num, product);
}

console.log(factorial(5))




