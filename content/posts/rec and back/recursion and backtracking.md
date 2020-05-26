---
title: "Recursion and Backtracking"
path: "/recursion-and-backtracking"
tags: ["Recursion and Backtracking"]
featuredImage: "./pablo-downloading.png"
excerpt: Introduction to Recursion and Backtracking.
created: 2020-05-26
updated: 2020-05-26
---

# Introduction
In this article we will learn about **recursion** , whicly is commonly used and also its relative to **backtracking**.

# 1 What is Recursion
Firstly, we understand meaning of **recusrion**. Recursion is basically a process which call itself again and again until we terminate it.
Function that calls itself is called *recursive*. 

## 1.1 Why Recursion

We use recursion because it is easiest method and short to implement than iterative method.

Recursion is most useful for tasks that can be defined in terms of similar subtasks.

## 1.2 Format of Recursive Function

Recursion function perform by calling smaller subtasks again and again itself. At one point, it can perform without calling itself and known as *base case*.

```
if(test for the base case)
    return some base case value
else if(test for another base case)
    return some other base case value
// the recursive case
else
    return(some work then recusrive call)
```
Let us take the problem of factorial using recusrion.

```java
int fact(int n){
    if(n==1)       // base case
        return 1;
    else if(n==0)
        return 1;
    else           // recursive case
        return n*fact(n-1);
}
```

## Recursion versus Iteration

**Recursion**
*  Terminates	when	a	base	case	is	reached.
* Each	recursive	call	requires	extra	space	on	the	stack	frame	(memory). 
* If	we	get	infinite	recursion,	the	program	may	run	out	of	memory	and	result	in	stack overflow. 
* Solutions	to	some	problems	are	easier	to	formulate	recursively.

**Iteration**
* Terminates	when	a	condition	is	proven	to	be	false. 
* Each	iteration	does	not	require	extra	space. 
* An	infinite	loop	could	loop	forever	since	there	is	no	extra	memory	being	created. 
* Iterative	solutions	to	a	problem	may	not	always	be	as	obvious	as	a	recursive solution

## Backtracking
**Backtracking**	is	an	improvement	of	the	brute	force	approach.	It	systematically	searches	for	a solution	to	a	problem	among	all	available	options.	In	backtracking,	we	start	with	one	possible option	out	of	many	available	options	and	try	to	solve	the	problem	if	we	are	able	to	solve	the problem	with	the	selected	move	then	we	will	print	the	solution	else	we	will	backtrack	and	select some	other	option	and	try	to	solve	it.	If	none	if	the	options	work	out	we	will	claim	that	there	is	no solution	for	the	problem.
**Backtracking**	is	a	form	of	recursion.	The	usual	scenario	is	that	you	are	faced	with	a	number	of options,	and	you	must	choose	one	of	these.	After	you	make	your	choice	you	will	get	a	new	set	of options;	just	what	set	of	options	you	get	depends	on	what	choice	you	made.	This	procedure	is repeated	over	and	over	until	you	reach	a	final	state.	If	you	made	a	good	sequence	of	choices,	your final	state	is	a	goal	state;	if	you	didn’t,	it	isn’t.
	
## Example	Algorithms	of	Backtracking
* Binary	Strings:	generating	all	binary	strings 
* Generating	k	–	ary	Strings 
* N-Queens	Problem 
* The	Knapsack	Problem 
* Generalized	Strings 
* Hamiltonian	Cycles	[refer	to	Graphs	chapter] 


If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)