---
title: "Queue"
path: "/queue"
tags: ["Queue"]
featuredImage: "./no.png"
excerpt: Basic introduction to some Data Structures topics.
created: 2020-05-30
updated: 2020-05-30
---

# 1 What is Queue?
A queue is a data structure for storing data. Queue is an ordered list in which insertion are done at one end(rear) and deletion are done at other end(front).It is called FIFO(First In First Out) or LILO(Last In Last Out).	
Similar to *Stacks* special names are given to queue operations. 
>When an element is inserted in queue, it is called **EnQueue**

>When an element is deleted from the queu, it is called **DeQueue**

## 1.1 How are Queues Used?
The	concept	of	a	queue	can	be	explained	by	observing	a	line	at	a	reservation	counter.	When	we enter	the	line	we	stand	at	the	end	of	the	line	and	the	person	who	is	at	the	front	of	the	line	is	the	one who	will	be	served	next.	He	will	exit	the	queue	and	be	served.
As	this	happens,	the	next	person	will	come	at	the	head	of	the	line,	will	exit	the	queue	and	will	be served.	As	each	person	at	the	head	of	the	line	keeps	exiting	the	queue,	we	move	towards	the	head of	the	line.	Finally	we	will	reach	the	head	of	the	line	and	we	will	exit	the	queue	and	be	served. This	behavior	is	very	useful	in	cases	where	there	is	a	need	to	maintain	the	order	of	arrival

## 1.2 Main Queue Operations
* **Enqueue**:Inserts an element in the Queue.
* **int DeQueue()**:Removes and returns the element at the front of the queue.

## 1.3 Auxiliary Queue Operations
* **int Front()**: Returns the element at the front.
* **int QueuueSize()**: Returns the number of elements stored in the queue.
* **int IsEmptyQueue()**: Indicates whether no elements are stored in the queue or not.

## 1.4 Applications

### Direct Applications
* Multiprogrmming
* Asynchronous data transfer
* Waiting times of customers at call center.

### Indirect Applications
* Auxiliary data structure for algorithms
* Componenet of other data structure

## 1.5 Implementations
* Simple circular array based implementation
* Dynamic circular array based implementation
* Linked List implementation

## Why Circular Arrays?
First,	let	us	see	whether	we	can	use	simple	arrays	for	implementing	queues	as	we	have	done	for stacks.	We	know	that,	in	queues,	the	insertions	are	performed	at	one	end	and	deletions	are performed	at	the	other	end.	After	performing	some	insertions	and	deletions	the	process	becomes easy	to	understand.
In	the	example	shown	below,	it	can	be	seen	clearly	that	the	initial	slots	of	the	array	are	getting wasted.	So,	simple	array		for	queue	is	not	efficient.	So we use circular array	That	means,	we	treat	the	last	element	and	the	first	array elements	as	contiguous.


## Performance and Limitations
```
Space Complexity(for n EnQueue operations)   :   O(n)
Time Complexity of EnQueue ()                :   O(1)
Time Complexity of DeQueue()                 :   O(1)
Time Complexity of IsEmptyQueue()            :   O(1)
Time Complexity of IsFullQueue()             :   O(1)
Time Complexity of QueueSize()               :   O(1)
Time Complexity of DeleteQueue()             :   O(1)
```
> **Limitations** 	The	maximum	size	of	the	queue	must	be	defined	as	prior	and	cannot	be	changed. 

## Dynamic Circular Array Implementation

### Performance

```
Space Complexity(for n EnQueue operations)   :   O(n)
Time Complexity of EnQueue ()                :   O(1)(Average)
Time Complexity of DeQueue()                 :   O(1)
Time Complexity of IsEmptyQueue()            :   O(1)
Time Complexity of IsFullQueue()             :   O(1)
Time Complexity of QueueSize()               :   O(1)
Time Complexity of DeleteQueue()             :   O(1)
```

## Linked List Implementation
Another	way	of	implementing	queues	is	by	using	Linked	lists.	EnQueue	operation	is	implemented by	inserting	an	element	at	the	end	of	the	list.	DeQueue	operation	is	implemented	by	deleting	an element.

### Performance

```
Space Complexity(for n EnQueue operations)   :   O(n)
Time Complexity of EnQueue ()                :   O(1)(Average)
Time Complexity of DeQueue()                 :   O(1)
Time Complexity of IsEmptyQueue()            :   O(1)
Time Complexity of DeleteQueue()             :   O(1)
```

If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)