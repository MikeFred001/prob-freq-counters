"use strict";

/** return true if word can be built with letters passed to function
 * input -> "apple", "alppe" // true
 * input -> "apple", "hgiew" // false
 */

function canConstructWord(word, letters) {
  //TODO: Move the below pseudocode into the top of the function

  // Build a frequency object for word and letters
  // Iterate through word, compare and make sure they have the same letters
  // and values
  if (word === '') {
    return true;
  }
  //TODO: Possibly rename wordObj to wordFreqs
  let wordFreqs = {};
  let letterFreqs = {};
  for (let i = 0; i < word.length; i++) {
    wordFreqs[word[i]] = (wordFreqs[word[i]] || 0) + 1;
  }

  for (let i = 0; i < letters.length; i++) {
    letterFreqs[letters[i]] = (letterFreqs[letters[i]] || 0) + 1;
  }

  console.log("wordFreqs", wordFreqs, "letterFreqs", letterFreqs);

  //TODO: rename key to letter
  for (let letter in wordFreqs) {
    if (!(letter in letterFreqs) || wordFreqs[letter] > letterFreqs[letter]) {
      return false;
    };
  }
  return true;

}
