---
title: "Singly Linked List"
path: "/singly-linked-list"
tags: ["singly linked lists"]
featuredImage: "./eastwood-page-not-found.png"
excerpt: Introduction to Singly Linked List which is very vast and important topic.
created: 2020-05-30
updated: 2020-05-30
---
# 1 Singly Linked Lists

Generally **linked list** means singly linked list. The list consists of number of nodes in which each node has a next pointer. The link of the last node refers to *NULL* means it is a last node.

Following are the type declaration for a linked lists:

```java
struct node{
    int data;
    struct node *next;
}
```
## 1.1 Linked Lists Operations
* Traversing the list
* Inserting an item
* Deleting an item

 ## 1.2 Traversing the Linked List

 In linked list, *head* points to the first node. To traverse the list we do following:
  * Follow the pointer
  * Display the contents of the nodes
  * Stop when the next pointer points to **NULL**

    Following code prints the list with extra print function
  ```java
  int List(struct *head){
      struct node *current=head;
      int count=0;
      while(current != NULL){
          count++;
          current=current->next;
      }
      return count;
  }
  ```
  >Time complexity: O(n) for scanning the whole list n.

    >Space Complexity: O(1) for creating a temporary variable.

    ## 1.3 Singly Linked List Insertion
    * Insert a new node at the beginning
    * Insert a new node at the end
    * Insert a new node at the middle of the list

    ## 1.3.1 Insert a node in Singly Linked List at the Beginning

    In this a new node is inserted at the beginning before the current head node.
    * Update	the	next	pointer	of	new	node,	to	point	to	the	current	head.
    * Update	head	pointer	to	point	to	the	new	node

    we can also use classe in linked list like the code given below whic insert a node at beginning

```java
    class node{
        public:
        int data;
        node *next;
    }

```
```java
    void insertbeg(int DATA) {
	node* newnode = new node();                                 
	newnode->data = DATA;
	newnode->next = head;
	head = newnode;
}
```
 ## 1.3.2 Insert a node in Singly Linked List at the ending

 In this a new node is inserted at the ending.
 * New	nodes	next	pointer	points	to	NULL.
  *  Last	nodes	next	pointer	points	to	the	new	node.

```java
  void insertend(int DATA) {
	node* newnode = new node();
	newnode->data = DATA;
	newnode->next = 0;
	if (head == 0) {
		head = newnode;
	}
	else {
		node* temp;
		temp = head;
		while (temp->next != 0) {
			temp = temp->next;
		}
		temp->next = newnode;
	}
}
```

## 1.3.3 Insert a node in Singly Linked List at the Given position

We can insert node at a given position.
In this we can use count. So we can place a node by comparing it with count.
Following is the basic code which easily helps you to unserstand.

```java
void insertagn()     
{

	int pos, i = 1;
	cout << "enter position after which you want to insert a node" << endl;
	cin >> pos;

	node* temp = head;
	int count = 0;
	while (temp !=0)
	{
		count++;
		temp = temp->next;
	}
	
	if (pos > count) {
		cout << "invalid statement" << endl;
	}
	else {
		node* ptr;
		ptr = head;
		while (i < pos) {
			ptr = ptr->next;
			i++;
		}
		node* temp = new node();
		cout << "enter data" << endl;
		cin >> temp->data;
		temp->next = ptr->next;
		ptr->next = temp;
	}
}
```
>Time complexity: O(n) in worst case we may need to insert the node at the end of the list

>Space complexity: O(1) for creating one temporary variable

## 1.4 Singly Linked List Deletion

* Deleting the first node
* Deleting the last node
* Deleting after a given node 

## 1.4.1 Deleting the First Node in Singly Linked List

* Create a temporary node which points to same node as that of head
* Now, move the head pointer to the next node and free temporary node

```java
void delbeg() {
	node* temp;
	temp = head;
	head = temp->next;
	free(temp);
}
```

## 1.4.2 Deleting the Last Node in Singly Linked List
* Traverse the list and while traversing maintain previous node.	By the	time	we	reach	the	end	of	the	list,	we	will	have	two	pointers,	one	pointing	to	the tail	node	and	the	other	pointing	to	the	node	before	the	tail	node.
* Update previous node next pointer to NULL

```java
void delend() {
	node* temp = head;
	node* prevnode=head;
	while (temp->next != 0) {
		prevnode = temp;
		temp = temp->next;
	}
	if (temp == head) {
		head = 0;
	}
	else {
		prevnode->next = 0;
	}
	free(temp);
}
```

## 1.4.3 Deleting the node after the given Position

This is similar to inserting a node at given position
We use count to count the number of nodes in the list and after deleting it, we have to free the node.
```java
void delet() {                                    
	node* temp;
	temp = head;
	int pos, i = 1;
	cout << "enter the position " << endl;
	cin >> pos;
	int count = 0;
	node* ptr;
	ptr = head;
	while (ptr != 0) {
		count++;
		ptr = ptr->next;
	}
	if (pos > count) {
		cout << "SORRY!!!!!! you cannot have a node at this position:::" << endl;
	}
	else {
		while (i < pos) {
			temp = temp->next;
			i++;
		}
		node* nextnode;
		nextnode = temp->next;
		temp->next = nextnode->next;
		free(nextnode);
	}
}
```

## 1.5 Some other basic operations
* Reverse a linked list
* count the number of nodes

## Reverse a linked list

In this we maintain prevNode, currentNode and nextnode.

```java
void reverse() {
	node* prenode = 0;
	node* currentnode=head;
	node* nextnode=0;
	while (currentnode != 0) {
		nextnode = currentnode->next;
		currentnode->next = prenode;
		prenode = currentnode;
		currentnode = nextnode;
	}
	head = prenode;
}
```

## Count the number of nodes in the linked list
In this we simply have to traverse the whole list and increase count by one at each move.

```java
int getcount() {
	node* temp = head;
	int count = 0;
	while (temp != NULL)
	{
		count++;
		temp = temp->next;
	}
	cout << "total no of nodes in list are " << count << endl;
	return count;
}
```


If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)