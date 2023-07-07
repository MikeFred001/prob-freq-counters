"use strict";
// add whatever parameters you deem necessary & write docstring
/** use a pointer
 * input: sorted array of nums and a targetAvg
 * output: sum of two numbers divided by 2 = target average
*/
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    //TODO: label avg with const
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) {
      return true;
    }
    else if (avg > targetAvg) {
      right--;
    }
    else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
