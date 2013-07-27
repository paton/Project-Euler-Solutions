/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var getLargetPrimeFactor = function(max) {
	var sieve = [],
		largestPrimeFactor,
		sqrtOfMax = Math.sqrt(max);

	// Loop through all potential prime factors, which must be less than the square root
	for (var i = 3; i < sqrtOfMax; i += 2) {
		// Is prime
    if (!sieve[i]) {
    	// Is factor
      if (max % i === 0) largestPrimeFactor = i;

      // All multiples of this number aren't prime
      for (var j = i; j < sqrtOfMax; j += i) sieve[j] = true;
    }
  }

  return largestPrimeFactor;
}

var largestPrimeFactor = getLargetPrimeFactor(600851475143);
console.log(largestPrimeFactor);
// 6857