// 1.1 Is Unique:
// Implement an algorithm to determine if a string has all unique chars. What if you cannot use additional data structures.

function isUnique(str) {
  // ***with any methods you like:
  // Time: O(n)
  // Space: O(n)
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) return false;
    else charMap[str[i]] = true;
  }

  return true;
  // ***without additional data structs:
  // does this count as we are actually using an array for the sort?
  //   let newStr = [...str].sort((a, b) => a.localeCompare(b)).join("");
  //   for (let i = 1; i < newStr.length; i++) {
  //     if (str[i] === str[i - 1]) return false;
  //   }
  //   return true;
  // ***From `answers` for "no additional data structures approach":
  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  //   for (var i = 0; i < str.length; i++) {
  //     for (var j = i + 1; j < str.length; j++) {
  //       if (str[i] === str[j]) {
  //         return false; // if match, return false
  //       }
  //     }
  //   }
  //   return true; // if no match, return true
}

// 1.2: Check Permutation:
// Given two strings, write a method to decide if one is a permutation of the other.
function isPermutation(word1, word2) {
  // easiest way is to sort them both, and compare:
  // Time: I think would be something better than O(2n), ie, O(2nlog2n)???
  // Space: Has to create 2 new arrays for word1 and word2, so it would be something
  // like: O(m+n): where m is length of word1, and n is length of word2
  let newWord1 = [...word1].sort((a, b) => a.localeCompare(b)).join("");
  let newWord2 = [...word2].sort((a, b) => a.localeCompare(b)).join("");

  return newWord1 === newWord2;
}

console.log(
  ////////////////
  isPermutation("asdf", "fdas2")
  ////////////////
);
