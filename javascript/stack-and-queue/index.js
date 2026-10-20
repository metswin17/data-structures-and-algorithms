'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
  
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      throw new Error('Cannot pop from an empty stack');
    }
  
    const value = this.top.value;
    this.top = this.top.next;
  
    return value;
  }

  peek() {
    if (this.top === null) {
      throw new Error('Cannot peek at an empty stack');
    }
  
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
  
    if (this.back === null) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }
  
    this.back = newNode;
  }

  dequeue() {
    if (this.front === null) {
      throw new Error('Cannot dequeue from an empty queue');
    }
  
    const value = this.front.value;
    this.front = this.front.next;
  
    if (this.front === null) {
      this.back = null;
    }
  
    return value;
  }

  peek() {
    if (this.front === null) {
      throw new Error('Cannot peek at an empty queue');
    }
  
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;

    }

  }

    module.exports = { Node, Stack, Queue };

