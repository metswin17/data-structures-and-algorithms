'use strict';

function reverseArray(array) {
  const reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray[reversedArray.length] = array[i];
  }

  return reversedArray;
}

module.exports = reverseArray;