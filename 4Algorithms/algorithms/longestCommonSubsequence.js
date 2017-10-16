/*
  A JavaScript module which resolves the longest common subsequence inside two input strings.  If there is  a subsequence, the longest one is returned.  If there is no common subsequence, -1 is returned.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Longest Common Subsequence - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Longest_common_subsequence#JavaScript.
*/
module.exports = exports = function(s1, s2) {
  //  complete the function
  var newS1 = s1.split('')
  var newS2 = s2.split('')
  var commonChar = false
  for (var i = 0; i < newS1.length; i++) {
    if (newS2.includes(newS1[i])) {
      commonChar = true
    }
  }
  if (!commonChar) return -1
};
