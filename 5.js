/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var isPrime = function(num) {
  if (num < 2) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

var findLCMOfSet = function(min, max) {
  // Create array of primes from set
  var primes = [];
  for (var i = min; i < max + 1; i++) {
    if (isPrime(i)) primes.push(i);
  }

  var lcm = 1;

  // Factor primes to highest degree, then multiply together to get LCM
  for (var j = 0; j < primes.length; j++) {
    var prime = primes[j],
        k = prime,
        highestDegree = 0;

    while (k < max) {
      highestDegree++;
      k *= prime;
    }

    lcm *= Math.pow(prime, highestDegree);
  }

  return lcm;
}

var leastCommonMultiple = findLCMOfSet(1, 20);
console.log(leastCommonMultiple);