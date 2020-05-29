---
title: "Circular Linked Lists"
path: "/circular-linked-lists"
tags: ["Circular linked list"]
featuredImage: "./fogg-fatal-error-3.png"
excerpt: Introduction and all operations of Doubly Linked List.
created: 2020-05-28
updated: 2020-05-28
---

## 1 Circular Linked List
In	singly	linked	lists	and	doubly	linked	lists,	the	end	of	lists	are	indicated	with	NULL	value.	But circular	linked	lists	do	not	have	ends.	While	traversing	the	circular	linked	lists	we	should	be careful;	otherwise	we	will	be	traversing	the	list	infinitely.	In	circular	linked	lists,	each	node	has	a successor.	Note	that	unlike	singly	linked	lists,	there	is	no	node	with	NULL	pointer	in	a	circularly linked	list.	In	some	situations,	circular	linked	lists	are	useful.

```java
class node{
    int data;
    node *next;
}
```
In	a	circular	linked	list,	we	access	the	elements	using	the	head	node.
The	circular	list	is	accessible	through	the	node	marked	head.	To	count	the	nodes,	the	list	has	to	be traversed	from	the	node	marked	head,	with	the	help	of	a	dummy	node	current,	and	stop	the counting	when	current	reaches	the	starting	node	head.

>If	the	list	is	empty,	head	will	be	NULL,	and	in	that	case	set	count	=	0.	Otherwise,	set	the	current pointer	to	the	first	node,	and	keep	on	counting	till	the	current	pointer	reaches	the	starting	node

```java
int CircularList(node *head){
    node *current=head;
    int count=0;
    if(head==NULL)
        return 0;
    do{
        current=current->next;
        count++;
    }
    while(current!=head);
    return count;
}
```
>**Time	Complexity**:	O(n),	for	scanning	the	complete	list	of	size	n. 

>**Space	Complexity**:	O(1),	for	creating	one	temporary	variable.

## 1.1 Printing the Elements of a Circular Linked List
The list is being accessedd by *head* node. All nodes are arranged in circular fashion, the tail node will be the node previous to the head node.
We have to print the contents of the nodes starting with the head node.Print	its	contents, move	to	the	next	node	and	continue	printing	till	we	reach	the	head	node	again.

```java
void print(node *head){
    node *current=head;
    if(head==NULL)
        return;
    do{
        cout<<current->data<<" ";
        current=current->next;
    }
    while(current!=head);
}
```

>**Time	Complexity**:	O(n),	for	scanning	the	complete	list	of	size	n. 

>**Space	Complexity**:	O(1),	for	temporary	variable

## 1.2 Inserting a Node at the End of Circular Linked List

Let	us	add	a	node	containing	data,	at	the	end	of	a	list	(circular	list)	headed	by	head.	The	new node	will	be	placed	just	after	the	tail	node	(which	is	the	last	node	of	the	list),	which	means	it	will have	to	be	inserted	in	between	the	tail	node	and	the	first	node.
It can be done in three steps:
* Create	a	new	node	and	initially	keep	its	next	pointer	pointing	to	itself.
* Update	the	next	pointer	of	the	new	node	with	the	head	node	and	also	traverse	the	list to	the	tail.	That	means	in	a	circular	list	we	should	stop	at	the	node	whose	next	node is	head
* Update	the	next	pointer	of	the	previous	node	to	point	to	the	new	node	and	we	get	the list	as	shown	below

```java
void insertAtEnd(node **head,int data){
    node *current=*head;
    node *newNode=new node();
    if(!newNode){
        cout<<"memory error";
        return;
    }
    newNode->data=data;
    while(current->next!=*head)
        current=current->next;
    
    newNode->next=newNode;
    
    if(*head==NULL)
        *head=newNode;
    else
    {
        newNode->next=*head;
        current->next=newNode;
    }
}
```

>**Time	Complexity**:	O(n),	for	scanning	the	complete	list	of	size	n. 

>**Space	Complexity**:	O(1),	for	temporary	variable.

## 1.3 Inserting	a	Node	at	the	Front	of	a	Circular	Linked	List

The	only	difference	between	inserting	a	node	at	the	beginning	and	at	the	end	is	that,	after	inserting the	new	node,	we	just	need	to	update	the	pointer.	The	steps	for	doing	this	are	given	below: 
*  Create	a	new	node	and	initially	keep	its	next	pointer	pointing	to	itself.
* Update	the	next	pointer	of	the	new	node	with	the	head	node	and	also	traverse	the	list until	the	tail.	That	means	in	a	circular	list	we	should	stop	at	the	node	which	is	its previous	node	in	the	list
* Update	the	previous	head	node	in	the	list	to	point	to	the	new	node.
* Make	the	new	node	as	the	head.
```java
void insertAtBeg(node **head,int data){
    node *current=*head;
    node *newNode=new node();
    if(!newNode){
        cout<<"memory error";
        return;
    }
    newNode->data=data;
    while(current->next!=*head)
        current=current->next;
    newNode->next=newNode;

    if(*head==NULL)
        *head=newNode;
    else
    {
        newNode->next=*head;
        current->next=newNode;
        *head=newNode;
    }
    return;
}
```
>**Time	Complexity**:	O(n),	for	scanning	the	complete	list	of	size	n. 

  >**Space	Complexity**:	O(1),	for	temporary	variable.

  ## 1.4 Deleting	the	First	Node	in	a	Circular	List
  The	first	node	can	be	deleted	by	simply	replacing	the	next	field	of	the	tail	node	with	the	next	field of	the	first	node. 
* Find	the	tail	node	of	the	linked	list	by	traversing	the	list.	Tail	node	is	the	previous node	to	the	head	node	which	we	want	to	delete
* Create	a	temporary	node	which	will	point	to	the	head.	Also,	update	the	tail	nodes next	pointer	to	point	to	next	node	of	head
*  Now,	move	the	head	pointer	to	next	node.	Create	a	temporary	node	which	will	point to	head.	Also,	update	the	tail	nodes	next	pointer	to	point	to	next	node	of	head
```java
void DeleteFirst(node **head){
    node *temp=*head;
    node *current=*head;

    if(*head==NULL){
        cout<<"list is empty";
        return;
    }
    while(current->next!=*head){
        current=current->next;
    }
    current->next=*head->next;
    *head=*head->next;
    free(temp);
    return;
}
```
>**Time	Complexity**:	O(n),	for	scanning	the	complete	list	of	size	n. 
>**Space Complexity**:	O(1),	for	a	temporary	variable

## 1.5 Deleting	the	Last	Node	in	a	Circular	Linked	List
The	list	has	to	be	traversed	to	reach	the	last	but	one	node.	This	has	to	be	named	as	the	tail	node, and	its	next	field	has	to	point	to	the	first	node.

* Traverse	the	list	and	find	the	tail	node	and	its	previous	node
* Update	the	next	pointer	of	tail	node’s	previous	node	to	point	to	head.
* Dispose	of	the	tail	node.

```java
void DeleteLast(node **head){
    node *temp=*head,*current=*head;
    
    if(*head==NULL){
        cout<<"empty";
        return;
    }
    while(current->next!=*head){
        temp=current;
        current=current->next;
    }
    temp->next=current->next;
    free(current);
    return;
}
```
>**Time	Complexity**:	O(n),	for	scanning	the	complete	list	of	size	n.	

>**Space	Complexity**:	O(1),	for	a temporary	variable.

If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)