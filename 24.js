/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/


var findMillionthPermutation = function(digits) {
  digits = digits.split('').sort();
  var result = [];

  var factorial = function(num) {
    if (num === 1) return 1;
    if (num < 1) return 0;
    return factorial(num - 1) * num;
  }

  var permutationsNeeded = 1000000,
      permsAvailable = 0,
      digitsLength = digits.length,
      currentFactorial, stepsNeeded;

  for (var i = 0; i < digitsLength - 1; i++) {
    currentFactorial = factorial(digitsLength - i - 1);
    stepsNeeded = 0;
    permsAvailable = currentFactorial;

    while (permsAvailable < permutationsNeeded) {
      permsAvailable += currentFactorial;
      stepsNeeded++;
    }

    // Establish digit
    result.push(digits[stepsNeeded]);
    digits.splice(stepsNeeded, 1)

    // Adjust permutations needed
    permutationsNeeded = permutationsNeeded - (permsAvailable - currentFactorial);
  }



  return result;
};

console.log(findMillionthPermutation('0123456789'));




