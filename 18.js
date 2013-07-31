
/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

*/

// Solve using a 

function Tree() {};
Tree.prototype = {
  head: null
}

Tree.prototype.constructTree = function(data) {
  // Parse to arrays
  data = data.split('/');
  data = data.map(function(arr){ return arr.trim().split(' '); })

  // Create head
  this.head = {
    data: data[0][0],
    x: 0,
    y: 0,
    next1: null,
    next2: null
  }

  var addChildren = function(node, data) {
    if (!node.next1) {
      var nextNode1 = data[node.y + 1] ? data[node.y + 1][node.x] : false;
      if (nextNode1) {
        nextNode1 = {
          data: parseInt(nextNode1, 10),
          x: node.x,
          y: node.y + 1,
          next1: null,
          next2: null
        };
        node.next1 = addChildren(nextNode1, data);
      }
    }

    if (!node.next2) {
      var nextNode2 = data[node.y + 1] ? data[node.y + 1][node.x + 1] : false;
      if (nextNode2) {
        nextNode2 = {
          data: parseInt(nextNode2, 10),
          x: node.x + 1,
          y: node.y + 1,
          next1: null,          
          next2: null
        };
        node.next2 = addChildren(nextNode2, data);
      }
    }

    return node;
  }

  addChildren(this.head, data);

  return this.head;
}

var data = "75 /\
95 64 /\
17 47 82 /\
18 35 87 10 /\
20 04 82 47 65 /\
19 01 23 75 03 34 /\
88 02 77 73 07 63 67 /\
99 65 04 28 06 16 70 92 /\
41 41 26 56 83 40 80 70 33 /\
41 48 72 33 47 32 37 16 94 29 /\
53 71 44 65 25 43 91 52 97 51 14 /\
70 11 33 28 77 73 17 78 39 68 17 57 /\
91 71 52 38 17 14 91 43 58 50 27 29 48 /\
63 66 04 68 89 53 67 30 73 16 69 87 40 31 /\
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";

var tree = new Tree();
tree = tree.constructTree(data)


var findPathWithGreatestSum = function(node) {
  if (this.head) node = this.head;
  if (!node.next1 && !node.next2) return node.data;

  var node1Val = node.next1 ? node.next1.data : 0,
      node2Val = node.next2 ? node.next2.data : 0;



  if (node1Val > node2Val) {
    return findPathWithGreatestSum(node.next1) + node.next1.data;
  } else {
    return findPathWithGreatestSum(node.next2) + node.next2.data;    
  }
}

console.log(findPathWithGreatestSum(tree))












