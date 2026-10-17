'use strict';

const LinkedList = require('../../linked-list');
const zipLists = require('../index');

describe('Zip Two Linked Lists', () => {
  test('alternates nodes from two equal-length lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert('C');
    list1.insert('B');
    list1.insert('A');

    list2.insert(3);
    list2.insert(2);
    list2.insert(1);

    const result = zipLists(list1, list2);

    expect(result.toString()).toBe(
      '{ A } -> { 1 } -> { B } -> { 2 } -> { C } -> { 3 } -> NULL'
    );
  });

  test('handles a first list that is longer', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
  
    list1.insert('D');
    list1.insert('C');
    list1.insert('B');
    list1.insert('A');
  
    list2.insert(2);
    list2.insert(1);
  
    const result = zipLists(list1, list2);
  
    expect(result.toString()).toBe(
      '{ A } -> { 1 } -> { B } -> { 2 } -> { C } -> { D } -> NULL'
    );
  });
  
  test('handles a second list that is longer', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
  
    list1.insert('B');
    list1.insert('A');
  
    list2.insert(4);
    list2.insert(3);
    list2.insert(2);
    list2.insert(1);
  
    const result = zipLists(list1, list2);
  
    expect(result.toString()).toBe(
      '{ A } -> { 1 } -> { B } -> { 2 } -> { 3 } -> { 4 } -> NULL'
    );
  });
  
  test('returns the second list when the first list is empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
  
    list2.insert('C');
    list2.insert('B');
    list2.insert('A');
  
    const result = zipLists(list1, list2);
  
    expect(result).toBe(list2);
    expect(result.toString()).toBe(
      '{ A } -> { B } -> { C } -> NULL'
    );
  });
  
  test('returns the first list when the second list is empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
  
    list1.insert('C');
    list1.insert('B');
    list1.insert('A');
  
    const result = zipLists(list1, list2);
  
    expect(result).toBe(list1);
    expect(result.toString()).toBe(
      '{ A } -> { B } -> { C } -> NULL'
    );
  });
  
  test('returns an empty list when both lists are empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
  
    const result = zipLists(list1, list2);
  
    expect(result).toBe(list2);
    expect(result.head).toBeNull();
    expect(result.toString()).toBe('NULL');
  });

});

