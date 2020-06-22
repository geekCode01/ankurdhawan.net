---
title: "Master Theorem for Divide and Conquer"
path: "/master-theorem-for-divide-and-conquer"
tags: ["Mater-Theorem"]
featuredImage: "./pluto-bad-gateway.png"
excerpt: Introduction to Master Theorem for Divide and Conquer and method to solve theorem.
created: 2020-05-25
updated: 2020-05-25
---

# 1 Master Theorem for Divide and Conquer

In this article we basically understand about **Master Theorem for Divide and Conquer**.

All divide and conquer techiniques divides the problem into sub-problems and after doing some computation, they conquer them.
As an e.g **merge sort**

>In merge sort firstly we divide the list into two sublist.....so on.
>After sorting the sub-lists they merge together to form a sorted list and performs O(n) additional work for merging.

This gives the running time equation:
```
T(n) = 2T(n/2) + O(n);
```


The	given theorem can be used to determine the running time	of divide and conquer algorithms. For a	given program (algorithm), first we	try	to	find the recurrence relation for the problem. If the recurrence	is of the below	form then we can directly give the answer without fully solving	it.
So, according to master theorem the runtime of the above algorithm can also be expressed as:

```
T(n) = aT(n/b) + f(n)
```


```

where a ≥ 1,b > 1,k ≥ 0 and p is a real number, then:

1.if a > b^k, then T(n) = θ(nlog^(a) base b)

2.if a = b^k, then
(a) if p > -1, then T(n) = θ(n^(log)^(a)base b log^(p+1)n)
(b) if p = -1, then T(n) = θ(n^(log)^(a)base b ) loglogn)
(c) if p < -1, then T(n) = θ(n^(log)^(a)base b )

3.if a < b^k, then
(a) if p >= 0, then T(n) = θ(n^k log^(p)n)
(b) if p < 0, then T(n) = θ(n^k)
```

## 1.1 Divide and Conquer Master Theorem: Problems & Solution

**Problem-1**   T(n)	=	3T(n/2)	 +	n2 

**Solution:**	T(n)	=	3T(n/2)	 +	n2	=>	T(n) = Θ(n2)	(Master	Theorem	Case 3.a)

**Problem-2**   T(n)	=	4T(n/2)	 +	n2 

**Solution:**	T(n)	=	4T(n/2)	 +	n2	=>	T(n) = Θ(n2logn)	(Master	Theorem	Case 2.a) 

**Problem-3**   T(n)	=	T(n/2)	 +	n2 

**Solution:**	T(n)	=	T(n/2)	+	n2	=>	Θ(n2)	(Master	Theorem	Case	3.a) 

**Problem-4**   T(n)	=	2nT(n/2)	+	n^n 

**Solution:** 	T(n)	=	2nT(n/2)	+	n^n	=>	Does	not	apply	(a	is	not	constant) 

**Problem-5**   T(n)	=	16T(n/4)	+	n 

**Solution:**	T(n)	=	16T	(n/4)	+	n	=>	T(n)	=	Θ(n2)	(Master	Theorem	Case	1) 

**Problem-6**   T(n)	=	2T(n/2)	+	nlogn

**Solution:**	T(n)	=	2T(n/2)	+	nlogn	=>	T(n)	=	Θ(nlog2n)	(Master	Theorem	Case	2.a)

Above problems helps to understand how to solve divide and conquer theorem by just puttin the vlaues and find the recureence relation.
Divide and Conquer Master Theorem does not apply on negative numbers.




If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)