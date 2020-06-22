---
title: "Tree"
path: "/tree"
tags: ["Tree"]
featuredImage: "./1234.png"
excerpt: Introduction to Tree Data Structure.
created: 2020-06-01
updated: 2020-06-01
---

# 1 What is Tree

A	tree	is	a	non-linear data	structure	similar	to	a	linked	list	but	instead	of	each	node	pointing	simply	to	the next	node	in	a	linear	fashion,	each	node	points	to	a	number	of	nodes	A	tree	structure	is	a	way	of	representing	the	hierarchical	nature	of	a	structure in	a	graphical	form.

## 1.1 Glossary

*  The	root	of	a	tree	is	the	node	with	no	parents.	There	can	be	at	most	one	root	node	in a	tree.
*  An	edge	refers	to	the	link	from	parent	to	child
*  A	node	with	no	children	is	called	leaf	node
*  Children	of	same	parent	are	called	siblings 
*  A	node	p	is	an	ancestor	of	node	q	if	there	exists	a	path	from	root	to	q	and	p	appears on	the	path.	The	node	q	is	called	a	descendant	of	p. 
*  The	set	of	all	nodes	at	a	given	depth	is	called	the	level	of	the	tree	.	The	root	node	is	at	level	zero
*  The	depth	of	a	node	is	the	length	of	the	path	from	the	root	to	the	node
*  The	height	of	a	node	is	the	length	of	the	path	from	that	node	to	the	deepest	node.	The height	of	a	tree	is	the	length	of	the	path	from	the	root	to	the	deepest	node	in	the	tree. A	(rooted)	tree	with	only	one	node	(the	root)	has	a	height	of	zero
* Height	of	the	tree	is	the	maximum	height	among	all	the	nodes	in	the	tree	and	depth	of the	tree	is	the	maximum	depth	among	all	the	nodes	in	the	tree.	For	a	given	tree, depth	and	height	returns	the	same	value.	But	for	individual	nodes	we	may	get different	results. 
*  The	size	of	a	node	is	the	number	of	descendants	it	has	including	itself
*  If	every	node	in	a	tree	has	only	one	child	(except	leaf	nodes)	then	we	call	such	trees skew	trees.	If	every	node	has	only	left	child	then	we	call	them	left	skew	trees. Similarly,	if	every	node	has	only	right	child	then	we	call	them	right	skew	trees.

## 1.2 Binary Trees

A	tree	is	called	binary	tree	if	each	node	has	zero	child,	one	child	or	two	children.	Empty	tree	is also	a	valid	binary	tree.	We	can	visualize	a	binary	tree	as	consisting	of	a	root	and	two	disjoint binary	trees,	called	the	left	and	right	subtrees	of	the	root.

### 1.2.1 Types of Binary Trees
> **Strict	Binary	Tree**:	A	binary	tree	is	called	strict	binary	tree	if	each	node	has	exactly	two children	or	no	children.

> **Full	Binary	Tree**:	A	binary	tree	is	called	full	binary	tree	if	each	node	has	exactly	two	children and	all	leaf	nodes	are	at	the	same	level.

### 1.2.2 Properties of Binary Trees
*  The	number	of	nodes	n	in	a	full	binary	tree	is	2h+1	–	1.	Since,	there	are	h	levels	we need	to	add	all	nodes	at	each	level
[20	+	21+	22	+	···	+	2h	=	2h+1	–	1].
*  The	number	of	nodes	n	in	a	complete	binary	tree	is	between	2h	(minimum)	and	2h+1 –	1	(maximum)
* The	number	of	leaf	nodes	in	a	full	binary	tree	is	2h. 
* The	number	of	NULL	links	(wasted	pointers)	in	a	complete	binary	tree	of	n	nodes	is n	+	1.

### 1.2.3 Applications of Binary Trees
* Expression	trees	are	used	in	compilers. 
* Huffman	coding	trees	that	are	used	in	data	compression	algorithms. 
* Binary	Search	Tree	(BST),	which	supports	search,	insertion	and	deletion	on	a collection	of	items	in	O(logn)	(average). 
* Priority	Queue	(PQ),	which	supports	search	and	deletion	of	minimum	(or	maximum) on	a	collection	of	items	in	logarithmic	time	(in	worst	case).

### 1.2.4	Binary	Tree	Traversals

In	order	to	process	trees,	we	need	a	mechanism	for	traversing	them,	and	that	forms	the	subject	of this	section.	The	process	of	visiting	all	nodes	of	a	tree	is	called	tree	traversal.	Each	node	is processed	only	once	but	it	may	be	visited	more	than	once.	As	we	have	already	seen	in	linear	data structures	(like	linked	lists,	stacks,	queues,	etc.),	the	elements	are	visited	in	sequential	order.	But, in	tree	structures	there	are	many	different	ways.
Tree	traversal	is	like	searching	the	tree,	except	that	in	traversal	the	goal	is	to	move	through	the tree	in	a	particular	order.	In	addition,	all	nodes	are	processed	in	the	traversal	but	searching stops	when	the	required	node	is	found.

### Traversal	Possibilities

* **LDR**:	Process	left	subtree,	process	the	current	node	data	and	then	process	right subtree 
* **LRD**:	Process	left	subtree,	process	right	subtree	and	then	process	the	current	node data 
* **DLR**:	Process	the	current	node	data,	process	left	subtree	and	then	process	right subtree 
* **DRL**:	Process	the	current	node	data,	process	right	subtree	and	then	process	left subtree  
* **RDL**:	Process	right	subtree,	process	the	current	node	data	and	then	process	left subtree 
* **RLD**:	Process	right	subtree,	process	left	subtree	and	then	process	the	current	node data

### PreOrder Traversal
Preorder	traversal	is	defined	as	follows: 
* Visit	the	root. 
* Traverse	the	left	subtree	in	Preorder. 
* Traverse	the	right	subtree	in	Preorder.

```java
void PreOrder(struct BinaryTree *root){
    if(root){
        cout<<root->data;
        PreOrder(root->left);
        PreOrder(root->right);
    }
}
```
> Time Complexity:O(n)

>Space Complexity: O(n)

### InOrder	Traversal
In	Inorder	Traversal	the	root	is	visited	between	the	subtrees.	Inorder	traversal	is	defined	as follows: 
* Traverse	the	left	subtree	in	Inorder. 
* Visit	the	root. 
* Traverse	the	right	subtree	in	Inorder

```java
void InOrder(struct BinaryTree *root){
    if(root){
        InOrder(root->left);
        cout<<root->data;
        InOrder(root->right);
    }
}
```
> Time Complexity:O(n)

>Space Complexity: O(n)

### PostOrder	Traversal
In	postorder	traversal,	the	root	is	visited	after	both	subtrees.	Postorder	traversal	is	defined	as follows:
* Traverse	the	left	subtree	in	Postorder. 
* Traverse	the	right	subtree	in	Postorder. 
* Visit	the	root.


```java
void PostOrder(struct BinaryTree *root){
    if(root){
        PostOrder(root->left);
        PostOrder(root->right);
        cout<<root->data;
    }
}
```
> Time Complexity:O(n)

>Space Complexity: O(n)

## 1.3 Binary	Search	Trees	(BSTs)

### Why Binary Search Trees?
In	previous	sections	we	have	discussed	different	tree	representations	and	in	all	of	them	we	did not	impose	any	restriction	on	the	nodes	data.	As	a	result,	to	search	for	an	element	we	need	to check	both	in	left	subtree	and	in	right	subtree.	Due	to	this,	the	worst	case	complexity	of	search operation	is	O(n).
In	this	section,	we	will	discuss	another	variant	of	binary	trees:	Binary	Search	Trees	(BSTs).	As the	name	suggests,	the	main	use	of	this	representation	is	for	searching.	In	this	representation	we impose	restriction	on	the	kind	of	data	a	node	can	contain.	As	a	result,	it	reduces	the	worst	case average	search	operation	to	O(logn).

### Binary Search Tree Property

* The	left	subtree	of	a	node	contains	only	nodes	with	keys	less	than	the	nodes	key. 
* The	right	subtree	of	a	node	contains	only	nodes	with	keys	greater	than	the	nodes	key. 
* Both	the	left	and	right	subtrees	must	also	be	binary	search	trees.

### Binary Search Tree Declaration

```java
struct BinarySearchTree{
    int data;
    struct BinarySerchTree *left;
    struct BinarySerchTree *right;
}
```

## Important	Notes	on	Binary	Search	Trees
* Since	root	data	is	always	between	left	subtree	data	and	right	subtree	data, performing	inorder	traversal	on	binary	search	tree	produces	a	sorted	list. 
* While	solving	problems	on	binary	search	trees,	first	we	process	left	subtree,	then root	data,	and	finally	we	process	right	subtree.	This	means,	depending	on	the problem,	only	the	intermediate	step	(processing	root	data)	changes	and	we	do	not touch	the	first	and	third	steps. 
* If	we	are	searching	for	an	element	and	if	the	left	subtree	root	data	is	less	than	the element	we	want	to	search,	then	skip	it.	The	same	is	the	case	with	the	right	subtree.. Because	of	this,	binary	search	trees	take	less	time	for	searching	an	element	than regular	binary	trees.	In	other	words,	the	binary	search	trees	consider	either	left	or right	subtrees	for	searching	an	element	but	not	both. 
* The	basic	operations	that	can	be	performed	on	binary	search	tree	(BST)	are insertion	of	element,	deletion	of	element,	and	searching	for	an	element.	While performing	these	operations	on	BST	the	height	of	the	tree	gets	changed	each	time. Hence	there	exists	variations	in	time	complexities	of	best	case,	average	case,	and worst	case. 
* The	basic	operations	on	a	binary	search	tree	take	time	proportional	to	the	height	of the	tree.	For	a	complete	binary	tree	with	node	n,	such	operations	runs	in	O(lgn) worst-case	time.	If	the	tree	is	a	linear	chain	of	n	nodes	(skew-tree),	however,	the same	operations	takes	O(n)	worst-case	time.

### Finding an Element in Binary Search Tree
```java
struct BinarySearchTree(struct BinarySearchTree *root,int data){
    if(root == NULL)
        return NULL;
    if(data < root->data)
        return Find(root->left,data);
    else if(data > root->data)
        return(Find(root->right,data));
    return root;
}
```
>Time	Complexity:	O(n),	in	worst	case	(when	BST	is	a	skew	tree).	

> Space	Complexity:	O(n),	for recursive	stack

### Finding	Minimum	Element	in	Binary	Search	Trees
```java
struct BinarySearchTree(struct BinarySearchTree *root){
    if(root == NULL)
        return NULL;
    else if(root->left == NULL)
        return root;
    else
        return FindMin(root->left);
}
```

>Time	Complexity:	O(n),	in	worst	case	(when	BST	is	a	left	skew	tree). 

> Space	Complexity:	O(n),	for	recursive	stack.

### Finding	Maximum	Element	in	Binary	Search	Trees

```java
struct BinarySearchTree(struct BinarySearchTree *root){
    if(root == NULL)
        return NULL;
    else if(root->right == NULL)
        return root;
    else
        return FindMax(root->right);
}
```

> Time	Complexity:	O(n),	in	worst	case	(when	BST	is	a	right	skew	tree).

> Space	Complexity:	O(n),	for	recursive	stack.