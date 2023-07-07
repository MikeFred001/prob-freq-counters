"use strict";

/** Takes an array and keys and an array of values
 * returns an object containing the key/value pairs
 *
 * defines value as null if there is not enough values
 *
 * ignores the remaining values if there are not enough keys
 *
 * input --> ['x', 'y', 'z'], [1, 2]
 * output --> {'x': 1, 'y': 2, 'z': null}
 *
 * input --> ['a', 'b', 'c'], [1, 2, 3, 4];
 * output --> {'a': 1, 'b': 2, 'c': 3}
 *
 */

function twoArrayObject(keysArr, valsArr) {
  // Loop through first array, create new object using values in first array as
  // keys and values in second array as values
    // If there are more keys than values, pass null as the remaining values
    // If there are more values than keys, ignore the remaining values and
    // do not add them to the object.

  const keysToValsObj = {};
  for (let i = 0; i < keysArr.length; i++) {
    keysToValsObj[keysArr[i]] = valsArr[i] || null;
  }
  return keysToValsObj;
}
