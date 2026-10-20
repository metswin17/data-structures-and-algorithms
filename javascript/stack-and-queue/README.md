# Code Challenge 10: Stack and Queue

## Problem Domain

Implement Stack and Queue data structures using a linked list approach.

Both data structures use a Node class containing a value and a reference to the next node.

### Stack

A Stack follows the Last In, First Out (LIFO) principle.

Implement the following methods:

- `push(value)` - Adds a new node to the top of the stack.
- `pop()` - Removes and returns the top value.
- `peek()` - Returns the top value without removing it.
- `isEmpty()` - Returns true if the stack is empty.

Calling `pop()` or `peek()` on an empty stack must throw an exception.

### Queue

A Queue follows the First In, First Out (FIFO) principle.

Implement the following methods:

- `enqueue(value)` - Adds a new node to the back of the queue.
- `dequeue()` - Removes and returns the front value.
- `peek()` - Returns the front value without removing it.
- `isEmpty()` - Returns true if the queue is empty.

Calling `dequeue()` or `peek()` on an empty queue must throw an exception.

### Input

Values supplied to the Stack and Queue methods.

### Output

Updated data structures, returned values, Boolean empty-state results, or exceptions when required.

## Test Cases

The Stack and Queue implementations are tested using Jest.

### Stack Tests

| Test Case | Expected Result |
|---|---|
| Instantiate an empty stack | `top` is null and `isEmpty()` returns true |
| Push one value | New value becomes the top |
| Push multiple values | Values are stored in LIFO order |
| Pop from stack | Returns and removes the top value |
| Pop multiple values | Stack becomes empty |
| Peek at stack | Returns the top value without removing it |
| Pop or peek on empty stack | Throws an exception |

### Queue Tests

| Test Case | Expected Result |
|---|---|
| Instantiate an empty queue | `front` and `back` are null |
| Enqueue one value | Both `front` and `back` reference the new node |
| Enqueue multiple values | Values are stored in FIFO order |
| Dequeue from queue | Returns and removes the front value |
| Peek at queue | Returns the front value without removing it |
| Dequeue multiple values | Queue becomes empty |
| Dequeue or peek on empty queue | Throws an exception |

### Testing Results

All 14 required Jest tests passed successfully.

Run the tests from the `javascript` directory using:

```bash
npx jest stack-and-queue/__tests__/stack-and-queue.test.js --runInBand
```
## Visualization

### Stack — Last In, First Out (LIFO)

A Stack adds and removes nodes from the top.

After pushing 10, 20, and 30:

```text
TOP
 |
 v
[30] → [20] → [10] → NULL
```

Calling `pop()` removes and returns 30.

```text
TOP
 |
 v
[20] → [10] → NULL
```

Calling `peek()` returns 20 without removing it.

### Queue — First In, First Out (FIFO)

A Queue adds nodes at the back and removes nodes from the front.

After enqueuing 10, 20, and 30:

```text
FRONT                  BACK
  |                      |
  v                      v
[10] → [20] → [30] → NULL
```

Calling `dequeue()` removes and returns 10.

```text
FRONT          BACK
  |              |
  v              v
[20] → [30] → NULL
```

Calling `peek()` returns 20 without removing it.

### Key Difference

A Stack removes the most recently added value first.

A Queue removes the earliest added value first.

## Algorithm / Pseudocode

Both Stack and Queue use a Node class to store values and connect nodes.

Each Node contains:
- `value` - The data stored in the node.
- `next` - A reference to the next node, initially null.

### Stack Algorithm

A Stack maintains a `top` reference and follows LIFO order.

#### Push

1. Create a new node containing the provided value.
2. Set the new node's `next` reference to the current `top`.
3. Update `top` to reference the new node.

#### Push Pseudocode

```text
FUNCTION push(value)
    newNode = NEW Node(value)
    newNode.next = top
    top = newNode
```

#### Pop

The `pop()` method removes and returns the value at the top of the Stack.

1. Check whether the Stack is empty.
2. If the Stack is empty, throw an exception.
3. Save the value stored in the top node.
4. Move `top` to the next node.
5. Return the saved value.

#### Pop Pseudocode

```text
FUNCTION pop()
    IF top IS NULL
        THROW Error("Cannot pop from an empty stack")

    value = top.value
    top = top.next

    RETURN value
```

#### Peek

The `peek()` method returns the value at the top of the Stack without removing the node.

1. Check whether the Stack is empty.
2. If empty, throw an exception.
3. Return the value stored in the top node.

#### Peek Pseudocode

```text
FUNCTION peek()
    IF top IS NULL
        THROW Error("Cannot peek at an empty stack")

    RETURN top.value
```

#### IsEmpty

The `isEmpty()` method determines whether the Stack contains any nodes.

1. Check whether `top` is null.
2. Return true if `top` is null; otherwise, return false.

#### IsEmpty Pseudocode

```text
FUNCTION isEmpty()
    RETURN top IS NULL
```

### Queue Algorithm

A Queue maintains `front` and `back` references and follows FIFO order.

#### Enqueue

The `enqueue()` method adds a new node to the back of the Queue.

1. Create a new node containing the provided value.
2. Check whether the Queue is empty.
3. If empty, set `front` to the new node.
4. Otherwise, set the current back node's `next` reference to the new node.
5. Update `back` to reference the new node.

#### Enqueue Pseudocode

```text
FUNCTION enqueue(value)
    newNode = NEW Node(value)

    IF back IS NULL
        front = newNode
    ELSE
        back.next = newNode

    back = newNode
```

#### Dequeue

The `dequeue()` method removes and returns the value at the front of the Queue.

1. Check whether the Queue is empty.
2. If empty, throw an exception.
3. Save the value stored in the front node.
4. Move `front` to the next node.
5. If the Queue is now empty, set `back` to null.
6. Return the saved value.

#### Dequeue Pseudocode

```text
FUNCTION dequeue()
    IF front IS NULL
        THROW Error("Cannot dequeue from an empty queue")

    value = front.value
    front = front.next

    IF front IS NULL
        back = NULL

    RETURN value
```

#### Peek

The `peek()` method returns the value at the front of the Queue without removing the node.

1. Check whether the Queue is empty.
2. If empty, throw an exception.
3. Return the value stored in the front node.

#### Peek Pseudocode

```text
FUNCTION peek()
    IF front IS NULL
        THROW Error("Cannot peek at an empty queue")

    RETURN front.value
```

#### IsEmpty

The `isEmpty()` method determines whether the Queue contains any nodes.

1. Check whether `front` is null.
2. Return true if `front` is null; otherwise, return false.

#### IsEmpty Pseudocode

```text
FUNCTION isEmpty()
    RETURN front IS NULL
```

## Verify

### Stack Verification

Start with an empty Stack.

1. Call `push(10)` — Stack contains `[10]`.
2. Call `push(20)` — Stack contains `[20, 10]`, with 20 at the top.
3. Call `push(30)` — Stack contains `[30, 20, 10]`.
4. Call `peek()` — Returns 30 without removing it.
5. Call `pop()` — Returns 30; Stack now contains `[20, 10]`.
6. Call `pop()` twice — Returns 20, then 10.
7. Call `isEmpty()` — Returns true.
8. Call `pop()` on the empty Stack — Throws an exception.

### Queue Verification

Start with an empty Queue.

1. Call `enqueue(10)` — Queue contains `[10]`.
2. Call `enqueue(20)` — Queue contains `[10, 20]`.
3. Call `enqueue(30)` — Queue contains `[10, 20, 30]`.
4. Call `peek()` — Returns 10 without removing it.
5. Call `dequeue()` — Returns 10; Queue now contains `[20, 30]`.
6. Call `dequeue()` twice — Returns 20, then 30.
7. Call `isEmpty()` — Returns true.
8. Call `dequeue()` on the empty Queue — Throws an exception.

### Verification Results

Both implementations behave as expected.

The Stack follows Last In, First Out (LIFO).

The Queue follows First In, First Out (FIFO).

All 14 Jest tests passed successfully.

## Big O Analysis

### Time Complexity

Both Stack and Queue operations have O(1) time complexity.

| Data Structure | Operation | Time Complexity |
|---|---|---|
| Stack | `push()` | O(1) |
| Stack | `pop()` | O(1) |
| Stack | `peek()` | O(1) |
| Stack | `isEmpty()` | O(1) |
| Queue | `enqueue()` | O(1) |
| Queue | `dequeue()` | O(1) |
| Queue | `peek()` | O(1) |
| Queue | `isEmpty()` | O(1) |

Each operation works directly with the `top`, `front`, or `back` reference.

No loops or linked-list traversal are required.

### Space Complexity

Each individual operation uses O(1) auxiliary space.

The `push()` and `enqueue()` methods each allocate one new node.

The total space required to store n nodes is O(n).

### Summary

- Time Complexity: O(1) for every operation.
- Auxiliary Space Complexity: O(1) per operation.
- Total Data Structure Space Complexity: O(n).

## Whiteboard

The Stack and Queue diagrams illustrate the LIFO and FIFO principles.

[View Stack and Queue Whiteboard](./assets/whiteboard.md)