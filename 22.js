/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

// Node module for reading files
fs = require('fs');


fs.readFile('data/names.txt', 'utf-8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var names = data.toString().replace(/\"/g, '').split(',');
  console.log(findNameScore(names));
  // 871198282
});


var findNameScore = function(names) {
  names.sort();

  var nameSum, scoreSum = 0;
  for (var i = 0; i < names.length; i++) {
    nameSum = 0;
    for (var j = 0; j < names[i].length; j++)
      nameSum += names[i][j].charCodeAt() - 64;
    scoreSum += nameSum * (i + 1);
  }

  return scoreSum;
}