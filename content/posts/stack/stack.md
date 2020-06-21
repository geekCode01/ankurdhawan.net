---
title: "Stack"
path: "/stack"
tags: ["stack"]
featuredImage: "./pablo.png"
excerpt: Introduction and all operations of Stack Data Structure.
created: 2020-05-28
updated: 2020-05-28
---
# 1 Stack

A stack is a linear data structure used for storing the data. In stack, the order in which the data arrives in data. It is LIFO(Last In First Out) or FILO(First In Last Out) means the data which inserts at last removes first from the stack.

In stack is an ordered list in which insertion and deletion are done at one end, called top.
There are two operations in stack:
* Push
* Pop

>When an element is inserted in a stack , called as *push*


>When an element is removed from stack , called as *pop*


Trying	to	pop	out	an	empty	stack	is	called	**underflow**	and	trying	to	push	an element	in	a	full	stack	is	called	**overflow**

## 1.1 Stack ADT

The following operations make a stack ADT.

### Main stack operations
* **Push(int data)**:Insert *data* onto stack
* **int Pop()**: Removes and returns the last inserted element.

### Auxiliary	stack	operations
* **int	Top()**:	Returns	the	last	inserted	element	without	removing	it.
* **int	Size()**:	Returns	the	number	of	elements	stored	in	the	stack. 
* **int	IsEmptyStack()**:	Indicates	whether	any	elements	are	stored	in	the	stack	or	not.
* **int	IsFullStack()**:	Indicates	whether	the	stack	is	full	or	not.

## 1.2 Direct	applications
* Balancing	of	symbols 
* Infix-to-postfix	conversion
* Evaluation	of	postfix	expression 
* Implementing	function	calls	(including	recursion) 
* Undo	sequence	in	a	text	editor 
* Matching	Tags	in	HTML	and	XML


## 1.3 Indirect	applications
* Auxiliary	data	structure	for	other	algorithms	(Example:	Tree	traversal	algorithms) 
* Component	of	other	data	structures	(Example:	Simulating	queue)

## 1.4 Implementation
There are many ways to implement stack ADT
* Simple array based implementation
* Dynamic array based impletation
* Linked lists implementation

## 1.4.1 Simple	Array	Implementation
This	implementation	of	stack	ADT	uses	an	array.	In	the	array,	we	add	elements	from	left	to	right and	use	a	variable	to	keep	track	of	the	index	of	the	top	element.
The	array	storing	the	stack	elements	may	become	full.	A	push	operation	will	then	throw	a	full stack	exception.	Similarly,	if	we	try	deleting	an	element	from	an	empty	stack	it	will	throw	stack empty	exception.

Here is simple stack code
```java

#include<bits/stdc++.h>
using namespace std;
class Stack {
private:
	int top;
	int arr[5];

public:
	Stack() {
		top = -1;
		for (int i = 0; i < 5; i++) {
			arr[i] = 0;
		}
	}

	bool isEmpty() {
		if (top == -1)
			return true;
		else
			return false;
	}
	bool isFull() {
		if (top == 4)
			return true;
		else
			return false;
	}

	void push(int val) {
		if (isFull()) {
			cout << "stack overflow" << endl;
		}
		else {
			top++; // 1
			arr[top] = val;
		}
	}

	int pop() {
		if (isEmpty()) {
			cout << "stack underflow" << endl;
			return 0;
		}
		else {
			int popValue = arr[top];
			arr[top] = 0;
			top--;
			return popValue;
		}
	}

	int count() {
		return (top + 1);
	}

	int peek(int pos) {
		if (isEmpty()) {
			cout << "stack underflow" << endl;
			return 0;
		}
		else {
			return arr[pos];
		}
	}

	void change(int pos, int val) {
		arr[pos] = val;
		cout << "value changed at location " << pos << endl;
	}

	void display() {
		cout << "All values in the Stack are " << endl;
		for (int i = 4; i >= 0; i--) {
			cout << arr[i] << endl;
		}
	}
};

int main() {
	Stack s1;
	int option, postion, value;

	do {
		cout << "What operation do you want to perform? Select Option number. Enter 0 to exit." << endl;
		cout << "1. Push()" << endl;
		cout << "2. Pop()" << endl;
		cout << "3. isEmpty()" << endl;
		cout << "4. isFull()" << endl;
		cout << "5. peek()" << endl;
		cout << "6. count()" << endl;
		cout << "7. change()" << endl;
		cout << "8. display()" << endl;
		cout << "9. Clear Screen" << endl << endl;

		cin >> option;
		switch (option) {
		case 0:
			break;
		case 1:
			cout << "Enter an item to push in the stack" << endl;
			cin >> value;
			s1.push(value);
			break;
		case 2:
			cout << "Pop Function Called - Poped Value: " << s1.pop() << endl;
			break;
		case 3:
			if (s1.isEmpty())
				cout << "Stack is Empty" << endl;
			else
				cout << "Stack is not Empty" << endl;
			break;
		case 4:
			if (s1.isFull())
				cout << "Stack is Full" << endl;
			else
				cout << "Stack is not Full" << endl;
			break;
		case 5:
			cout << "Enter position of item you want to peek: " << endl;
			cin >> postion;
			cout << "Peek Function Called - Value at position " << postion << " is " << s1.peek(postion) << endl;
			break;
		case 6:
			cout << "Count Function Called - Number of Items in the Stack are: " << s1.count() << endl;
			break;
		case 7:
			cout << "Change Function Called - " << endl;
			cout << "Enter position of item you want to change : ";
			cin >> postion;
			cout << endl;
			cout << "Enter value of item you want to change : ";
			cin >> value;
			s1.change(postion, value);
			break;
		case 8:
			cout << "Display Function Called - " << endl;
			s1.display();
			break;
		case 9:
			system("cls");
			break;
		default:
			cout << "Enter Proper Option number " << endl;
		}

	} while (option != 0);

	return 0;
}
```



```
Space Complexity(for n push operations):   O(n)
Time Complexity of Push()              :   O(1)
Time Complexity of Pop()               :   O(1)
Time Complexity of Size()              :   O(1)
Time Complexity of IsEmptyStack()      :   O(1)
Time Complexity of IsFullStack()       :   O(1)
Time Complexity of DeleteStack()       :   O(1)
```


## 1.4.2 Dynamic	Array	Implementation
First,	let’s	consider	how	we	implemented	a	simple	array	based	stack.	We	took	one	index	variable top	which	points	to	the	index	of	the	most	recently	inserted	element	in	the	stack.	To	insert	(or	push) an	element,	we	increment	top	index	and	then	place	the	new	element	at	that	index.


Similarly,	to	delete	(or	pop)	an	element	we	take	the	element	at	top	index	and	then	decrement	the top	index.	We	represent	an	empty	queue	with	top	value	equal	to	–1.	The	issue	that	still	needs	to be	resolved	is	what	we	do	when	all	the	slots	in	the	fixed	size	array	stack	are	occupied

```
Space Complexity(for n push operations):   O(n)
Time Complexity of Push()              :   O(1)
Time Complexity of Pop()               :   O(1)(Average)
Time Complexity of Size()              :   O(1)
Time Complexity of IsEmptyStack()      :   O(1)
Time Complexity of IsFullStack()       :   O(1)
Time Complexity of DeleteStack()       :   O(1)
```

## 1.4.3 Linked List Implementation
The	other	way	of	implementing	stacks	is	by	using	Linked	lists.	Push	operation	is	implemented	by inserting	element	at	the	beginning	of	the	list.	Pop	operation	is	implemented	by	deleting	the	node from	the	beginning	(the	header/top	node).

```java
#include<bits/stdc++.h>
using namespace std;

struct node
{
	int data;
	node *next;
};

class Stack
{
	node *top;
public:
	Stack()
	{
		top=NULL;
	}

	void push()
	{
		node *temp=new node();
		cout<<"data"<<endl;
		cin>>temp->data;
		temp->next=top;
		top=temp;
	}

	void pop()
	{
		node *temp=new node();
		temp=top;
		top=top->next;
		delete temp;
		cout<<"deleted"<<endl;
	}

	void display()
	{
		node *temp=new node();
		temp=top;
		while(temp!=NULL)
		{
			cout<<temp->data;
			temp=temp->next;
		}
	}
};

int main()
{
	Stack s;
	int n;
	do
	{
		cin>>n;
		switch(n)
		{
			case 0:
			break;
			case 1:
			s.push();
			break;
			case 2:
			s.pop();
			break;
			case 3:
			s.display();
			break;
		}
	}while(n!=0);
	return 0;
}
```

```
Space Complexity(for n push operations):   O(n)
Time Complexity of Push()              :   O(1)
Time Complexity of Pop()               :   O(1)(Average)
Time Complexity of Size()              :   O(1)
Time Complexity of IsEmptyStack()      :   O(1)
Time Complexity of IsFullStack()       :   O(1)
Time Complexity of DeleteStack()       :   O(n)
```

## 1.5 Comparing	Array	Implementation	and	Linked	List	Implementation

**Array	Implementation** 
* Operations	take	constant	time. 
* Expensive	doubling	operation	every	once	in	a	while.

**Linked	List	Implementation** 
* Grows	and	shrinks	gracefully.
* Every	operation	takes	constant	time	O(1). 
* Every	operation	uses	extra	space	and	time	to	deal	with	references