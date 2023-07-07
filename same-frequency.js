"use strict";

/** Takes two integers
 * Returns true if their digit frequency is the same, false if not
 * input --> (123, 321) // true
 * input --> (34, 14) // false
 */
function sameFrequency(num1, num2) {
  // convert numbers to strings
  // compare the lengths of the string, if not equal, return false; else true

  num1 = String(num1);
  num2 = String(num2);

  if (num1.length !== num2.length) {
    return false;
  }

  const num1Freqs = {};
  const num2Freqs = {};
  for (let i = 0; i < num1.length; i++) {
    num1Freqs[num1[i]] = (num1Freqs[num1[i]] || 0) + 1;
    num2Freqs[num2[i]] = (num2Freqs[num2[i]] || 0) + 1;
  }

  for (let digit in num1Freqs) {
    if (num1Freqs[digit] !== num2Freqs[digit]) {
      return false;
    };
  }
  return true;
}
