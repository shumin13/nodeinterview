/*
  A JavaScript module which performs a bubble sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
  //  complete the function
  var array = input.sort(function(a,b){
    return a - b
  })
  return array
};
