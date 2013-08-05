/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
*/


var findFibTermWithNumDigits = function(numDigits, current, prev) {
  if (!prev) prev = [1];
  if (!current) current = [1];
  var nextPrev = current.join('').split('');

  var j, k, overflow = 0;
  for (var i = 0; i < current.length; i++) {
    j = prev.length - i - 1;
    k = current.length - i - 1;

    var newDigit = current[k] + parseInt(prev[j] || 0,10) + overflow;
    overflow = 0;
    
    while (newDigit > 9) {
      overflow++;
      newDigit -= 10;
    }
    current[k] = newDigit;
  }

  // Account for overflow
  var oString;
  while (overflow >= 1) {
    oString = overflow.toString();
    current.unshift(parseInt(oString[oString.length - 1],10));
    overflow /= 10;
  }

  if (current.length >= numDigits)
    return 3;
  else
    return findFibTermWithNumDigits(numDigits, current, nextPrev) + 1;

}



console.log(findFibTermWithNumDigits(1000));
// 4782


