---
title: "Searching"
path: "/searching"
tags: ["searching"]
featuredImage: "./error.png"
excerpt: Searching is the process of finding an item from the collection of items.
created: 2020-05-31
updated: 2020-05-31
---
# 1 Searching
Searching is the process of finding an item from the collection of items.	The	items	may	be	stored	as	records	in	a	database,	simple	data	elements	in arrays,	text	in	files,	nodes	in	trees,	vertices	and	edges	in	graphs,	or	they	may	be	elements	of	other search	spaces.

# 1.1 Why do we need Searching?
We know computers stores a large amount of information. To retrieve this information we need bery efficient searching algorithms.There	are	certain	ways	of	organizing	the	data	that	improves	the	searching	process. 

## 1.2 Types of Searching

* Unordered Linear Search
* Sorted/Ordered Linear Search
* Binary Search
* Interpolation Search
* Binary Search Trees

## 1.2.1 Unordered Linear Search

Let	us	assume	we	are	given	an	array	where	the	order	of	the	elements	is	not	known , means list is not sorted. So we have to traverse the whole list and find whether the element is there in the list or not.

```java
int UnorderedLinearSearch(int A[],int n,int data){
    for(int i = 0; i < n;i++){
        if(A[i]==data)
            return i;
    }
    return -1;
}
```
> **Time Complexity**:  	O(n),	in	the	worst	case	we	need	to	scan	the	complete	array.	Space	complexity: O(1).

## 1.2.2	Sorted/Ordered	Linear	Search
If		elements	are in 	sorted order ,	then	in	many	cases	we	don’t	have	to	scan	the complete	array	to	see	if	the	element	is	there	in	the	given	array	or	not.	In	the	algorithm	below,	it can	be	seen	that,	at	any	point	if	the	value	at	A[i]	is	greater	than	the	data	to	be	searched,	then	we just	return	–1	without	searching	the	remaining	array
```java
int OrderedLinearSearch(int A[],int n,int data){
    for(int i = 0;i < n;i++){
        if(A[i] == data)
            return i;
        else if(A[i]>data)
            return -1;
    }
    return -1;
}
```
>**Time	complexity**	of	this	algorithm	is	O(n).This	is	because	in	the	worst	case	we	need	to	scan	the complete	array.	But	in	the	average	case	it	reduces	the	complexity	even	though	the	growth	rate	is the	same.
Space	complexity:	O(1)

## 1.2.3 Binary Search
Let	us	consider	the	problem	of	searching	a	word	in	a	dictionary.		we	go	to some of the page in the dictionary	[say,	middle	page]	and	start	searching	from	that	point.	If	the	name	that	we are	searching	is	the	same	then	the	search	is	complete.	If	the	page	is	before	the	selected	pages	then  we apply	the	same	process	for	the	first	half;	otherwise	apply	the	same	process	to	the	second	half. Binary	search	also	works	in	the	same	way.This is a binary search algorithm

```
mid=low + (high - low)/2 or (low + high)/2;
```

```java
int BinarySearchIterative(int A[],int n,int data){
	int low=0;
	int high=n-1;
	while(low <= high){
		mid = low + (high-low)/2;
		if(A[mid] == data)
			return mid;
		else if(A[mid] < data)
			low=mid+1;
		else 
			high=mid-1;
	}
	return -1;
}

int BinarySearchRecursive(int A[],int low,int high,int data){
	int mid= low + (high-low)/2;
	if(low > high)
		return -1;
	if(A[mid] == data)
		return mid;
	else if(A[mid] < data)
		return BinarySearchRecursive(A,mid + 1 ,high,data);
	else
		return BinarySearchRecursive(A,low,mid - 1 ,data);
	return -1;
}
```
>**Time	Complexity**:	O(logn).

>**Space	Complexity**:	O(1)	[for	iterative	algorithm].

## 1.2.4 Interpolation Search
Undoubtedly	binary	search	is	a	great	algorithm	for	searching	with	average	running	time complexity	of	logn.	It	selects the	middle	element of the 	list,	discarding	one half	or	the	other,	again	depending	on	the	comparison	between	the	key	value	found	at	the	estimated (middle)	position	and	the	key	value	sought.	
In	the	mathematics,	interpolation	is	a	process	of	constructing	new	data	points		known	data	points.	In	computer	science,	one	often	has	a	number	of	data	points which	represent	the	values	of	a	function	for	a	limited	number	of	values	of	the	independent variable.	

``` 
Linear interpolation takes two data points
y = y1 + (y2 - y1) (x - x1)/(x2 - x1)   at point (x,y) 

```
```java
int InterpolationSearch(int A[],int data){
    int low=0 ,mid,high = sizeof(A) - 1;
    while(low <= high){
        mid = low + (((data - A[low])*(high-low))/A[high]-A[low]));
        if(data == A[mid])
            return mid+1;
        if(data < A[mid])
            high=mid-1;
        else
            low=mid + 1;
    }
    return -1;
}
```

## 1.2.5 Comparison Basic Searching Algorithms

```
Implementation                Search-Worst Case        Search-Average Case
____________________________________________________________________________
Unordered Array                    n                        n/2
____________________________________________________________________________
Ordered Array                      logn                     logn
____________________________________________________________________________
Undordered List                    n                        n/2
____________________________________________________________________________
Ordered List                       n                        n/2
____________________________________________________________________________
Binary Search Trees                n                        logn
____________________________________________________________________________
Interpolation search               n                        log(logn)

```
If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)