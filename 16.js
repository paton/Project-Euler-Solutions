/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

var findSumOfDigits = function(exp) {
  var newDigit,
      sum = 0,
      digits = [1],
      overflow = 0;

  for (var i = exp; i > 0; i--) {
    // Double each digit, account for overflows
    for (var j = digits.length - 1; j >= 0; j--) {
      newDigit = digits[j] * 2 + overflow;
      overflow = 0;

      while (newDigit > 9) {
        newDigit -= 10;
        overflow += 1;
      }

      digits[j] = newDigit;

      if (overflow > 0 && j === 0) {
        digits.unshift(overflow);
        overflow = 0;
      }
    }
  }

  // Sum digits
  for (var k = 0; k < digits.length; k++) sum += digits[k];

  return sum;
}

console.log(findSumOfDigits(50))
// 1366