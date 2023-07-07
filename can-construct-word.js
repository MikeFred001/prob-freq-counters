"use strict";

/** return true if word can be built with letters passed to function
 * input -> "apple", "alppe" // true
 * input -> "apple", "hgiew" // false
 */

function canConstructWord(word, letters) {
  if (word === '') {
    return true;
  }

  let wordObj = {};
  let letterObj = {};
  for (let i = 0; i < word.length; i++) {
    wordObj[word[i]] = (wordObj[word[i]] || 0) + 1;
  }

  for (let i = 0; i < letters.length; i++) {
    letterObj[letters[i]] = (letterObj[letters[i]] || 0) + 1;
  }

  console.log("wordObj", wordObj, "letterObject", letterObj);

  for (let key in letterObj) {
    if (!(key in wordObj) || letterObj[key] < wordObj[key]) {
      return false;
    };
  }
  return true;
  // Build a frequency object for word and letters
  // Iterate through word, compare and make sure they have the same keys
  // and values
}
