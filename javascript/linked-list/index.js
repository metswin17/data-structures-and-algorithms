'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
  
    newNode.next = this.head;
    this.head = newNode;

  }

  includes(value) {
    let current = this.head;
  
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
  
      current = current.next;
    }
  
    return false;
  }

  toString() {
    let current = this.head;
    let result = '';
  
    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
  
    return `${result}NULL`;
  }

}

module.exports = LinkedList;