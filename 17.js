/* 
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

var sumOfWordStrings = function(num) {
  var sumOfWords = 0,
      numWords, iString, numString = '';

  var numWords = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
  }

  for (var i = 1; i <= num; i++) {
    iString = i.toString()
    if (numWords[i]) {
      sumOfWords += numWords[i].length;
    } else {
      console.log(iString)
      if (i > 999) numString += numWords[iString[iString.length - 4]] + numWords[1000];
      if (i > 99) numString += numWords[iString[iString.length - 3]] + numWords[100];

      if (i > 19) {
        if (i > 99) numString += "and";
        numString += numWords[iString[iString.length - 2] + '0'] + numWords[iString[iString.length - 1]];
      } else if (i > 9) {
        numString += "and" + numWords[iString.slice(iString.length - 2, iString.length)];
      } else if (i > 0) {
        numString += "and" + numWords[iString.slice(iString.length - 1, iString.length)]
      }
      console.log(numString)
      numString = ''
    }

  }

  return sumOfWords;
}

9996

console.log(sumOfWordStrings(1000))








