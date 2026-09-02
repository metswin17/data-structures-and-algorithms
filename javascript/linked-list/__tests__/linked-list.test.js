'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

  it('can properly insert into the linked list', () => {
    const list = new LinkedList();
  
    list.insert('A');
  
    expect(list.head.value).toEqual('A');
  });
  
  it('can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
  
    list.insert('A');
    list.insert('B');
    list.insert('C');
  
    expect(list.head.value).toEqual('C');
    expect(list.head.next.value).toEqual('B');
    expect(list.head.next.next.value).toEqual('A');
  });

  it('returns true when finding a value that exists', () => {
    const list = new LinkedList();
  
    list.insert('A');
    list.insert('B');
    list.insert('C');
  
    expect(list.includes('B')).toBe(true);
  });
  
  it('returns false when searching for a value that does not exist', () => {
    const list = new LinkedList();
  
    list.insert('A');
    list.insert('B');
    list.insert('C');
  
    expect(list.includes('Z')).toBe(false);
  });

  it('can properly return all values in the linked list as a string', () => {
    const list = new LinkedList();
  
    list.insert('A');
    list.insert('B');
    list.insert('C');
  
    expect(list.toString()).toEqual('{ C } -> { B } -> { A } -> NULL');
  });

});