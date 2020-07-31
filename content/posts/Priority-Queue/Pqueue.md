---
title: "Introduction to Priority Queues and Heaps"
path: "/introduction-to-priority-queues-and-heaps"
tags: ["Priority Queues and Heaps"]
featuredImage: "./pic.png"
excerpt: All concept about Priority Queues and Heaps.
created: 2020-05-30
updated: 2020-05-30
---

# 1 What is a Priority Queue ?

In some situations we may need to find the minimum/maximum element among a collection of
elements. We can do this with the help of Priority Queue ADT. A priority queue ADT is a data
structure that supports the operations Insert and DeleteMin (which returns and removes the
minimum element) or DeleteMax (which returns and removes the maximum element).
These operations are equivalent to EnQueue and DeQueue operations of a queue. The difference
is that, in priority queues, the order in which the elements enter the queue may not be the same in
which they were processed. An example application of a priority queue is job scheduling, which
is prioritized instead of serving in first come first serve.

## 1.1 Main Priority Queues Operations
A priority queue is a container of elements, each having an associated key.
* Insert (key, data): Inserts data with key to the priority queue. Elements are ordered
based on key.
* DeleteMin/DeleteMax: Remove and return the element with the smallest/largest key.
* GetMinimum/GetMaximum: Return the element with the smallest/largest key without
deleting it.

## 1.2 Priority Queue Applications
Priority queues have many applications - a few of them are listed below:
* Data compression: Huffman Coding algorithm
* Shortest path algorithms: Dijkstra’s algorithm
* Minimum spanning tree algorithms: Prim’s algorithm
* Event-driven simulation: customers in a line
* Selection problem: Finding kth- smallest element


## 1.3 Priority Queue Implementations
Before discussing the actual implementation, let us enumerate the possible options.


**Unordered Array Implementation**
Elements are inserted into the array without bothering about the order. Deletions (DeleteMax) are
performed by searching the key and then deleting.
> **Insertions complexity:** O(1).
 
> **DeleteMin complexity:** O(n).


**Unordered List Implementation**
It is very similar to array implementation, but instead of using arrays, linked lists are used.
> **Insertions complexity:** O(1). 

>**DeleteMin complexity:** O(n).

**Ordered Array Implementation**
Elements are inserted into the array in sorted order based on key field. Deletions are performed at
only one end.

>**Insertions complexity:** O(n). 

>**DeleteMin complexity:** O(1).

**Ordered List Implementation**
Elements are inserted into the list in sorted order based on key field. Deletions are performed at
only one end, hence preserving the status of the priority queue. All other functionalities associated
with a linked list ADT are performed without modification.
>**Insertions complexity:** O(n). 

>**DeleteMin complexity:** O(1).

**Binary Search Trees Implementation**


Both insertions and deletions take O(logn) on average if insertions are random

**Balanced Binary Search Trees Implementation**


Both insertions and deletion take O(logn) in the worst case.

**Binary Heap Implementation**


In subsequent sections we will discuss this in full detail. For now, assume that binary heap
implementation gives O(logn) complexity for search, insertions and deletions and O(1) for
finding the maximum or minimum element.

# 1.4 Heaps and Binary Heaps
## 1.4.1 What is a Heap?
A heap is a tree with some special properties. The basic requirement of a heap is that the value of
a node must be ≥ (or ≤) than the values of its children. This is called heap property. A heap also
has the additional property that all leaves should be at h or h – 1 levels (where h is the height of
the tree) for some h > 0 (complete binary trees). That means heap should form a complete binary
tree

### 1.4.2 Types of Heaps?
Based on the property of a heap we can classify heaps into two types:


* **Min heap**: The value of a node must be less than or equal to the values of its
children

* **Max heap**: The value of a node must be greater than or equal to the values of its
children

## Declaration of Heap
```javascript
struct Heap{
    int *array;
    int count;         //No of elements in heap
    int capacity;     //Size of heap
    int heap_count;  //MAX or MIN heap
}
```
