/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/



// Brute force method. Takes too long.
var findSumOfDigitsOfFactorial = function(num) {
  var newProduct,
      product = [1],
      sum = 0,
      overflow = 0;

  for (var j = 2; j <= num; j++) {
    for (var k = product.length - 1; k >= 0; k--) {
      newProduct = (j * product[k]) + overflow;
      overflow = 0;

      while (newProduct > 9) {
        newProduct -= 10;
        overflow++;
      }

      product[k] = newProduct;
    }

    if (overflow) product.unshift(overflow);
    overflow = 0;

    while (product[product.length - 1] === 0) product.pop()
  }

  for (var i = 0; i < product.length; i++) sum += product[i];

  return sum;
}

console.log(findSumOfDigitsOfFactorial(5))