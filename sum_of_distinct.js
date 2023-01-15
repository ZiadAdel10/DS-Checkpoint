"use strict";

// A function to calculate the sum of distinct values of 2 sets of arrays
const result = function calcDistinct(setOne, setTwo) {
  let sum = 0;
  // Merge both arrays together
  let allValues = setOne.concat(setTwo);
  let sumOfAllValues = 0;

  for (let i = 0; i < setOne.length; i++) {
    for (let j = 0; j < setTwo.length; j++) {
      if (setOne[i] == setTwo[j]) sum += setOne[i] + setTwo[j];
    }
  }
  for (let i = 0; i < allValues.length; i++) {
    sumOfAllValues = sumOfAllValues + allValues[i];
  }
  const finalSum = sumOfAllValues - sum;

  return finalSum;
};

console.log(result([3, 1, 7, 9], [2, 4, 1, 9, 3]));
