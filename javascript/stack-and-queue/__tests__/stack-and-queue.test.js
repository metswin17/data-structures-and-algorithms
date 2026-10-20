'use strict';

const { Stack, Queue } = require('../index');

describe('Stack', () => {
  test('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();

    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Can successfully push onto a stack', () => {
    const stack = new Stack();
  
    stack.push(10);
  
    expect(stack.top.value).toBe(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
  
    stack.push(10);
    stack.push(20);
    stack.push(30);
  
    expect(stack.top.value).toBe(30);
    expect(stack.top.next.value).toBe(20);
    expect(stack.top.next.next.value).toBe(10);
    expect(stack.top.next.next.next).toBeNull();
  });

  test('Can successfully pop off the stack', () => {
    const stack = new Stack();
  
    stack.push(10);
    stack.push(20);
    stack.push(30);
  
    const removedValue = stack.pop();
  
    expect(removedValue).toBe(30);
    expect(stack.top.value).toBe(20);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
  
    stack.push(10);
    stack.push(20);
    stack.push(30);
  
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  
    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
  
    stack.push(10);
    stack.push(20);
    stack.push(30);
  
    const topValue = stack.peek();
  
    expect(topValue).toBe(30);
    expect(stack.top.value).toBe(30);
    expect(stack.top.next.value).toBe(20);
  });

  test('Calling pop or peek on an empty stack raises an exception', () => {
    const stack = new Stack();
  
    expect(() => stack.pop()).toThrow(
      'Cannot pop from an empty stack'
    );
  
    expect(() => stack.peek()).toThrow(
      'Cannot peek at an empty stack'
    );
  });

});

describe('Queue', () => {
  test('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();

    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });

  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
  
    queue.enqueue(10);
  
    expect(queue.front.value).toBe(10);
    expect(queue.back.value).toBe(10);
    expect(queue.isEmpty()).toBe(false);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
  
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
  
    expect(queue.front.value).toBe(10);
    expect(queue.front.next.value).toBe(20);
    expect(queue.back.value).toBe(30);
    expect(queue.back.next).toBeNull();
  });

  test('Can successfully dequeue the expected value from a queue', () => {
    const queue = new Queue();
  
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
  
    const removedValue = queue.dequeue();
  
    expect(removedValue).toBe(10);
    expect(queue.front.value).toBe(20);
    expect(queue.back.value).toBe(30);
  });

  test('Can successfully peek into a queue', () => {
    const queue = new Queue();
  
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
  
    const frontValue = queue.peek();
  
    expect(frontValue).toBe(10);
    expect(queue.front.value).toBe(10);
    expect(queue.front.next.value).toBe(20);
    expect(queue.back.value).toBe(30);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
  
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
  
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });

  test('Calling dequeue or peek on an empty queue raises an exception', () => {
    const queue = new Queue();
  
    expect(() => queue.dequeue()).toThrow(
      'Cannot dequeue from an empty queue'
    );
  
    expect(() => queue.peek()).toThrow(
      'Cannot peek at an empty queue'
    );
  });

});