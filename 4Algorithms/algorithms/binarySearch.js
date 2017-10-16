/*
  A JavaScript module which performs a binary search on an array of numbers ordered low to high.  If the specified value is found its index in the input array is returned.  If the specified value is not found -1 is returned.
*/
module.exports = exports = function(input, value) {
  var bottom = 0, top = input.length - 1, index = null;
//  complete the function
  for (index = bottom; index <= top; index++) {
    if (input[index] === value) return index
  }
  return -1
};
