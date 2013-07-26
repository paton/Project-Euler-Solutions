/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

 var primeFactors = function(num) {
 	var sieve = [],
 		primeFactors = [];

 	for (var i = 2; i < num; i++) {
 		for (var j = i; j < num; j += i) {
 			console.log(sieve[j])
            if (!sieve[j]) {
              if (num % i === 0) primeFactors.push(i);
              sieve[j] = true;
              for (var k = j; k < num; k += j) sieve[k] = true;
            }
 		}
	}

	return primeFactors;
 }

 var primes = primeFactors(10);
 console.log(primes);