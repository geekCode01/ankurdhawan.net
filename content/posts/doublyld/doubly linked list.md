---
title: "Doubly Linked Lists"
path: "/doubly-linked-lists"
tags: ["Doubly linked list"]
featuredImage: "./fogg-searching-1.png"
excerpt: Introduction and all operations of Doubly Linked List.
created: 2020-05-30
updated: 2020-05-30
---

# 1 Doubly Linked Lists
In Doubly linked list we can access element from both direction: forward or backward , In simple words we can navigate in both directions.
In Doubly Linked list we can delete the node even we don't have the previous node's address.

```java
class node{
    public:
    int data;
    node *next;
    node *prev;
}
``` 
## 1.1 Disadvantages of Doubly Linked Lists
*  Each	node	requires	an	extra	pointer,	requiring	more	space.
*  The	insertion	or	deletion	of	a	node	takes	a	bit	longer	(more	pointer	operations).


## 1.2 Doubly Linked List Insertion

* Inserting a new node at the beginning
* Inserting a new node at the end of the list 
* Inserting a new node at the Middle

## 1.2.1 Inserting a Node in Doubly Linked List at the Beginning

In	this	case,	new	node	is	inserted	before	the	head	node.	Previous	and	next	pointers	need	to	be modified	and	it	can	be	done	in	two	steps:
*  Update	the	right	pointer	of	the	new	node	to	point	to	the	current	head	node	and	also	make	left	pointer	of	new	node	as	NULL
* Update	head	node’s	left	pointer	to	point	to	the	new	node	and	make	new	node	as head

## 1.2.2 Inserting a Node in Doubly Linked List at the Ending

In	this	case,	traverse	the	list	till	the	end	and	insert	the	new	node. 
* New	node	right	pointer	points	to	NULL	and	left	pointer	points	to	the	end	of	the	list.
* Update	right	pointer	of	last	node	to	point	to	new	node.

## 1.2.3 Inserting a Node in Doubly Linked List at the Middle

It traverse	the	list	to	the	position	node	and	insert	the	new	node

* New	node	right	pointer	points	to	the	next	node	of	the	position	node	where	we	want to	insert	the	new	node.	Also,	new	node	left	pointer	points	to	the	position	node

*  Position	node	right	pointer	points	to	the	new	node	and	the	next	node	of	position	node left	pointer	points	to	new	node

```java

void DLLinsert(node **head,int data,int pos){
    int k=1;
    node *temp,*newNode;
    newNode=new node();
    if(!newNode){
        cout<<"memory errer!";
        return;
    }
    newNode->data=data;
    if(position==1){
        newNode->next=*head;
        newNode->prev=NULL;

        if(*head)
        (*head)->prev=newNode;
        *head=newNode;
        return;
    }
    temp=*head;
    while((k<position -1 ) && temp->next!=NULL){
        temp=temp->next;
        k++;
    }
    if(k!=position){
        cout<<"desired position not exist"<<endl;
    }
    newNode->next=temp->next;
    newNode->prev=temp;
    if(temp->next)
        temp->next->prev=newNode;
    temp->next=newNode;
    return;
}
```

## 1.3 Doubly Linked List Insertion

* Deleting	the	first	node 
* Deleting	the	last	node 
* Deleting	an	intermediate	node

## 1.3.1 Deleting a Node in Doubly Linked List at the Beginning

In doubly linked list we can delete node at the beginning by just changing the link .It can be done in two ways
* Create a temporary node which points to the same node as that of head
* Move the head nodes pointer to the next node and change the heads left pointer to NULL.Then free the temporary node.

## 1.3.2 Deleting a Node in Doubly Linked List at the ending

We can delete the node from the end of the linked list in three steps
* Traverse the list and maintain the address of previous in previous node. When we reach the end we have two pointers , one pointing to the tail and other pointing to the node before the tail.
* Update the next pointer of previous node to the tail node with NULL.
* Free the tail node

## 1.3.3 Deleting an Intermediate Node in Doubly Linked List 

The	node	to	be	removed	is	always	located	between	two	nodes,	and	the	head	and	tail links	are	not	updated.	The	removal	can	be	done	in	two	steps:
* Similar	to	the	previous	case,	maintain	the	previous	node	while	also	traversing	the list.	Upon	locating	the	node	to	be	deleted,	change	the	previous	node’s	next	pointer to	the	next	node	of	the	node	to	be	deleted.
* Dispose	of	the	current	node	to	be	deleted.

```java
void DLLDelete(node **head,int position){
    node *temp,*temp2,temp=head;
    int k=1;
    if(*head==NULL){
        cout<<"list is empty"<<endl;
        return;
    }
    if(position==1){
        *head=(*head)->next;

        if(*head != NULL){
            (*head)->prev=NULL;
            free(temp);
            return;
        }
        while(k < position) && temp->next!=NULL){
            temp=temp->next;
            k++;
        }
        if(k != position-1){
            cout<<"desired position does not exist"<<endl;
        }
        temp2=temp->prev;
        temp2->next=temp->next;

        if(temp->next)
            temp->next->prev=temp2;    //Delete an intermediate node
            free(temp);
            return;
    }
}
```
>Time Complexity: O(n), for	scanning	the	complete	list

>Space Complexity: O(1) , for	creating	one	temporary	variable


If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)