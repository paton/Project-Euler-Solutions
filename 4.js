/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var isPalindrome = function(num) {
  num = num.toString();
  var reverseNum = num.split('').reverse().join('');
  return num === reverseNum;
}

var check;
for (var i = 100; i < 1000; i++) {
  for (j = 100; j < 1000; j++) {
    check = i * j;
    if (isPalindrome(check)) {
      console.log(check)
    }
  }
}