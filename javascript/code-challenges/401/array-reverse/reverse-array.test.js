'use strict';

const reverseArray = require('./reverse-array.js');

describe('reverseArray', () => {

  test('Happy Path - reverses an array of numbers', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test('Expected Failure - result should not remain in original order', () => {
    expect(reverseArray([1, 2, 3])).not.toEqual([1, 2, 3]);
  });

  test('Edge Case - handles an empty array', () => {
    expect(reverseArray([])).toEqual([]);
  });

});