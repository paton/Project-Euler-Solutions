/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var approximateNthPrime = function(nth) {
  var approx = nth * Math.log(nth);
  var overshoot = nth * Math.log(Math.log(nth))
  return approx + overshoot;
}

var getNthPrime = function(nth) {
  var sieve = [],
      primes = [];

  var i = 2,
      upperBound = approximateNthPrime(nth);

  while (primes.length < nth) {
    // Is prime
    if (!sieve[i]) {
      primes.push(i);

      // Mark all multiples of this number since they aren't prime
      for (var j = i; j < upperBound; j += i) sieve[j] = true;
    }

    i++;
  }

  console.log(primes)

  return primes[nth - 1];
}

var nthPrime = getNthPrime(10001);
console.log(nthPrime);
// 104743