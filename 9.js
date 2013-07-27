/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var findProductOfPythagoreanTriplet = function(sum) {
  var c, triplet;
  for (var a = 1; a < sum; a++) {
    for (var b = 1; b < sum; b++) {
      c = 1000 - a - b;
      if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) return a * b * c;
    }
  }
}

console.log(findProductOfPythagoreanTriplet(1000))
// 31875000