# Code Challenge 08: Zip Two Linked Lists

## Problem Domain

Write a function called `zipLists` that accepts two linked lists as arguments.

The function must combine the two linked lists by alternating nodes from each list, creating a single linked list.

The resulting linked list should begin with the head of the first list.

The function must:

- Alternate nodes from the first and second linked lists.
- Preserve the original order of nodes within each list.
- Handle linked lists of different lengths.
- Handle empty linked lists.
- Reuse existing nodes rather than creating new ones.

### Input

Two linked lists: `list1` and `list2`.

### Output

One linked list containing the nodes from both lists in alternating order.

## Test Cases

The `zipLists` function is tested using Jest to verify that it correctly combines two linked lists under different conditions.

| Test Case | Input | Expected Output |
|---|---|---|
| Equal-length lists | A → B → C and 1 → 2 → 3 | A → 1 → B → 2 → C → 3 |
| First list longer | A → B → C → D and 1 → 2 | A → 1 → B → 2 → C → D |
| Second list longer | A → B and 1 → 2 → 3 → 4 | A → 1 → B → 2 → 3 → 4 |
| First list empty | NULL and A → B → C | A → B → C |
| Second list empty | A → B → C and NULL | A → B → C |
| Both lists empty | NULL and NULL | NULL |

### Testing Results

All six Jest tests passed successfully.

The `linked-list-zip/index.js` implementation achieved 100% statement, branch, function, and line coverage.

Run the tests from the `javascript` directory using:

```bash
npm test -- --runInBand linked-list-zip
```

## Visualization

The `zipLists` function combines two linked lists by alternating their nodes, beginning with the first linked list.

### Before Zipping

```text
List 1:
[A] → [B] → [C] → NULL

List 2:
[1] → [2] → [3] → NULL
```

### Step-by-Step Process

**Step 1:** Connect A to 1.

```text
[A] → [1] → [B] → [C]
```

**Step 2:** Connect B to 2.

```text
[A] → [1] → [B] → [2] → [C]
```

**Step 3:** Connect C to 3.

```text
[A] → [1] → [B] → [2] → [C] → [3] → NULL
```

### Final Result

```text
Head
 ↓
[A] → [1] → [B] → [2] → [C] → [3] → NULL
```

The algorithm saves references to the next nodes before changing the links. This prevents losing access to the remaining nodes.

No new nodes are created; the existing nodes are connected in alternating order.

## Algorithm / Pseudocode

The algorithm uses two pointers to traverse the linked lists and alternate their nodes.

1. If the first linked list is empty, return the second linked list.
2. If the second linked list is empty, return the first linked list.
3. Set `current1` to the head of the first list.
4. Set `current2` to the head of the second list.
5. While both pointers reference existing nodes:
   - Save the next node from each list as `next1` and `next2`.
   - Connect the current node from the first list to the current node from the second list.
   - If another node exists in the first list, connect the second list's current node to it.
   - Otherwise, connect the second list's current node to its original next node.
   - Advance both pointers to their saved next nodes.
6. Return the first linked list.

### Pseudocode

```text
FUNCTION zipLists(list1, list2)

    IF list1.head IS NULL
        RETURN list2

    IF list2.head IS NULL
        RETURN list1

    current1 = list1.head
    current2 = list2.head

    WHILE current1 IS NOT NULL AND current2 IS NOT NULL

        next1 = current1.next
        next2 = current2.next

        current1.next = current2

        IF next1 IS NOT NULL
            current2.next = next1
        ELSE
            current2.next = next2

        current1 = next1
        current2 = next2

    RETURN list1
```

The algorithm modifies the existing node references without creating additional linked-list nodes.

## Verify

We verify the algorithm by tracing two linked lists of equal length.

### Initial Input

```text
List 1: A → B → C → NULL
List 2: 1 → 2 → 3 → NULL
```

### Step-by-Step Verification

**Iteration 1**

- `current1` points to A.
- `current2` points to 1.
- Save B as `next1` and 2 as `next2`.
- Connect A → 1 → B.
- Move `current1` to B and `current2` to 2.

**Iteration 2**

- `current1` points to B.
- `current2` points to 2.
- Save C as `next1` and 3 as `next2`.
- Connect B → 2 → C.
- Move `current1` to C and `current2` to 3.

**Iteration 3**

- `current1` points to C.
- `current2` points to 3.
- `next1` is NULL and `next2` is NULL.
- Connect C → 3 → NULL.
- Both pointers advance to NULL, ending the loop.

### Expected Result

```text
A → 1 → B → 2 → C → 3 → NULL
```

### Actual Result

The Jest test confirms that the resulting linked list matches the expected output.

All six Jest tests passed, including tests for unequal-length lists and empty lists.

## Big O Analysis

### Time Complexity: O(n + m)

The algorithm traverses both linked lists using two pointers.

- `n` represents the number of nodes in the first linked list.
- `m` represents the number of nodes in the second linked list.
- Each loop iteration processes one node from each list.
- The algorithm stops when either pointer reaches NULL.

The time complexity is **O(n + m)** as an upper bound. More precisely, because the loop stops when either list ends, the running time is **O(min(n, m))**.

### Space Complexity: O(1)

The algorithm uses a constant amount of additional memory.

It maintains four references:

- `current1`
- `current2`
- `next1`
- `next2`

The algorithm does not create new nodes or additional linked lists. Instead, it modifies the `.next` references of existing nodes.

Therefore, the auxiliary space complexity is **O(1)**.

### Summary

| Complexity | Big O |
|---|---|
| Time | O(min(n, m)) |
| Auxiliary Space | O(1) |

The algorithm efficiently combines the linked lists in place without requiring additional storage proportional to the input size.

## Whiteboard

![Code Challenge 08 — Zip Two Linked Lists Whiteboard](assets/Zip%20Two%20Linked%20Lists%20Cheat%20Sheet.png)