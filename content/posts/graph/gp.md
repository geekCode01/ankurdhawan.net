---
title: "Graph"
path: "/graph"
tags: ["Graph"]
featuredImage: "./graph1.png"
excerpt: Introduction to Graph Data Structure.
created: 2020-06-02
updated: 2020-06-02
---

# Introduction
In	the	real	world,	many	problems	are	represented	in	terms	of	objects	and	connections	between them.	For	example,	in	an	airline	route	map,	we	might	be	interested	in	questions	like:	“What’s	the fastest	way	to	go	from	Hyderabad	to	New	York?”		To	answer	these	questions	we	need	information	about	connections (airline	routes)	between	objects	(towns).	Graphs	are	data	structures	used	for	solving	these	kinds of	problems

# 1 Graph
Graph:	A	graph	is	a	pair	(V ,	E),	where	V	is	a	set	of	nodes,	called	vertices,	and	£	is	a	collection of	pairs	of	vertices,	called	edges.

*  Definitions	that	we	use: 
    * *Directed edge*
        * ordered	pair	of	vertices	(u,	v) 
        * first	vertex	u	is	the	origin 
        * second	vertex	v	is	the	destination 
        * Example:	one-way	road	traffic
    
    * *Undirected edge*
        * unordered	pair	of	vertices	(u,	v) 
        * Example:	railway	lines

    * *Directed graph*
        * all	the	edges	are	directed 
        * Example:	route	network

    * *Undirected graph*
        * all	the	edges	are	undirected 
        * Example:	flight	network

* A	self	loop	is	an	edge	that	connects	a	vertex	to	itself.
* Two	edges	are	parallel	if	they	connect	the	same	pair	of	vertices.
* The	Degree	of	a	vertex	is	the	number	of	edges	incident	on	it. 
* A	subgraph	is	a	subset	of	a	graph’s	edges	(with	associated	vertices)	that	form	a graph. 
* A	path	in	a	graph	is	a	sequence	of	adjacent	vertices.	Simple	path	is	a	path	with	no repeated	vertices.
* A	cycle	is	a	path	where	the	first	and	last	vertices	are	the	same.	A	simple	cycle	is	a cycle	with	no	repeated	vertices	or	edges	(except	the	first	and	last	vertices).
* We	say	that	one	vertex	is	connected	to	another	if	there	is	a	path	that	contains	both	of them. 
* A	graph	is	connected	if	there	is	a	path	from	every	vertex	to	every	other	vertex. 
* If	a	graph	is	not	connected	then	it	consists	of	a	set	of	connected	components.
* A	directed	acyclic	graph	[DAG]	is	a	directed	graph	with	no	cycles.
* A	forest	is	a	disjoint	set	of	trees. • A	spanning	tree	of	a	connected	graph	is	a	subgraph	that	contains	all	of	that	graph’s vertices	and	is	a	single	tree.	A	spanning	forest	of	a	graph	is	the	union	of	spanning trees	of	its	connected	components. 
* A	bipartite	graph	is	a	graph	whose	vertices	can	be	divided	into	two	sets	such	that	all edges	connect	a	vertex	in	one	set	with	a	vertex	in	the	other	set.
* In	weighted	graphs	integers	(weights)	are	assigned	to	each	edge	to	represent 

## 1.1 Applications of graph:

* Representing	relationships	between	components	in	electronic	circuits 
* Transportation	networks:	Highway	network,	Flight	network • Computer	networks:	Local	area	network,	Internet,	Web
* Databases:	For	representing	ER	(Entity	Relationship)	diagrams	in	databases,	for representing	dependency	of	tables	in	databases

## 1.2 Graph Representation
* Adjacency	Matrix 
* Adjacency	List 
* Adjacency	Set

### Adjacency	Matrix

### Graph	Declaration	for	Adjacency	Matrix

First,	let	us	look	at	the	components	of	the	graph	data	structure.	To	represent	graphs,	we	need	the number	of	vertices,	the	number	of	edges	and	also	their	interconnections.	So,the	graph	can	be declared	as:

```java
struct Graph{
    int V;
    int E;
    int **Adj;
} 
```

### Adjacency List

### Graph	Declaration	for	Adjacency	List
In	this	representation	all	the	vertices	connected	to	a	vertex	v	are	listed	on	an	adjacency	list	for that	vertex	v.	This	can	be	easily	implemented	with	linked	lists.	That	means,	for	each	vertex	v	we use	a	linked	list	and	list	nodes	represents	the	connections	between	v	and	other	vertices	to	which	v has	an	edge.
The	total	number	of	linked	lists	is	equal	to	the	number	of	vertices	in	the	graph.	The	graph	ADT can	be	declared	as:

```java
struct Graph{
    int V;
    int E;
    int *Adj;
}
```

### Adjacency Set
It	is	very	much	similar	to	adjacency	list	but	instead	of	using	Linked	lists,	Disjoint	Sets	[UnionFind]	are	used

## 1.3 Shortest Path Algorithms
Let	us	consider	the	other	important	problem	of	a	graph.	Given	a	graph	G	=	(V ,	E)	and	a
distinguished	vertex	s,	we	need	to	find	the	shortest	path	from	s	to	every	other	vertex	in	G.	There are	variations	in	the	shortest	path	algorithms	which	depend	on	the	type	of	the	input	graph	and	are given	below.

### Variations of Shortest Path Algorithms
>Shortest	path	in	unweighted	graph 

>Shortest	path	in	weighted	graph

>Shortest	path	in	weighted	graph	with	negative	edges

### Applications	of	Shortest	Path	Algorithms 
* Finding	fastest	way	to	go	from	one	place	to	another 
* Finding	cheapest	way	to	fly/send	data	from	one	city	to	another

### Shortest	Path	in	Unweighted	Graph

Let	s	be	the	input	vertex	from	which	we	want	to	find	the	shortest	path	to	all	other	vertices. Unweighted	graph	is	a	special	case	of	the	weighted	shortest-path	problem,	with	all	edges	a weight	of	1.	The	algorithm	is	similar	to	BFS	and	we	need	to	use	the	following	data	structures: 
* A	distance	table	with	three	columns	(each	row	corresponds	to	a	vertex): 
    * Distance	from	source	vertex. 
    * Path	–	contains	the	name	of	the	vertex	through	which	we	get	the	shortest distance. 
* A	queue	is	used	to	implement	breadth-first	search.	It	contains	vertices	whose distance	from	the	source	node	has	been	computed	and	their	adjacent	vertices	are	to be	examined.

### Shortest	path	in	Weighted	Graph	[Dijkstra’s]
A	famous	solution	for	the	shortest	path	problem	was	developed	by	Dijkstra.	Dijkstra’s	algorithm is	a	generalization	of	the	BFS	algorithm.	The	regular	BFS	algorithm	cannot	solve	the	shortest	path problem	as	it	cannot	guarantee	that	the	vertex	at	the	front	of	the	queue	is	the	vertex	closest	to source	s.
Before	going	to	code	let	us	understand	how	the	algorithm	works.	As	in	unweighted	shortest	path algorithm,	here	too	we	use	the	distance	table.	The	algorithm	works	by	keeping	the	shortest distance	of	vertex	v	from	the	source	in	the	Distance	table.	The	value	Distance[v]	holds	the distance	from	s	to	v.	The	shortest	distance	of	the	source	to	itself	is	zero.	The	Distance	table	for all	other	vertices	is	set	to	–1	to	indicate	that	those	vertices	are	not	already	processed.
After	the	algorithm	finishes,	the	Distance	table	will	have	the	shortest	distance	from	source	s	to each	other	vertex	v.	To	simplify	the	understanding	of	Dijkstra’s	algorithm,	let	us	assume	that	the given	vertices	are	maintained	in	two	sets.	Initially	the	first	set	contains	only	the	source	element and	the	second	set	contains	all	the	remaining	elements.	After	the	kth	iteration,	the	first	set	contains k	vertices	which	are	closest	to	the	source.	These	k	vertices	are	the	ones	for	which	we	have already	computed	the	shortest	distances	from	source.

### Notes	on	Dijkstra’s	Algorithm 
* It	uses	greedy	method:	Always	pick	the	next	closest	vertex	to	the	source. 
* It	uses	priority	queue	to	store	unvisited	vertices	by	distance	from	s. 
* It	does	not	work	with	negative	weights.

```java
void Dijkstra(struct Graph *G,int s){
    struct PriorityQueue *PQ=CreatePriorityQueue();
    int v,w;
    EnQueue(PQ,s);
    for(int i=0 ; i < G->V ; i++)
        Distance[i]=-1;
    Distance[s]=0;
    while((!isEmptyQueue(PQ)){
        v=DeleteMin(PQ);
        for all adjacent vertices w of v{
            Compute new distance d =Distance[v] + weight[v][w];
            if(Distance[w] == -1){
                Distance[w]=new distance d;
                Insert w in the priority queue with priority d
                Path[w]=v;
            }
            if(Distance[w] > new distance d){
                Distance[w]=new distance d;
                Update priority of vertex w to be d;
                Path[w]=v;
            }
        }
    }
}
```

### Bellman-ford Algorithm
If	the	graph	has	negative	edge	costs,	then	Dijkstra’s	algorithm	does	not	work.	The	problem	is	that once	a	vertex	u	is	declared	known,	it	is	possible	that	from	some	other,	unknown	vertex	v	there	is	a path	back	to	u	that	is	very	negative.	In	such	a	case,	taking	a	path	from	s	to	v	back	to	u	is	better than	going	from	s	to	u	without	using	v.	A	combination	of	Dijkstra’s	algorithm	and	unweighted algorithms	will	solve	the	problem.	Initialize	the	queue	with	s.	Then,	at	each	stage,	we	DeQueue	a vertex	v.	We	find	all	vertices	W	adjacent	to	v	such	that, distance	to	v	+	weight	(v,w)	<	old	distance	to	w
We	update	w	old	distance	and	path,	and	place	w	on	a	queue	if	it	is	not	already	there.	A	bit	can	be set	for	each	vertex	to	indicate	presence	in	the	queue.	We	repeat	the	process	until	the	queue	is empty.

```java

void BellmanFord(struct Graph *G,int s){
    struct Queue *Q=CreateQueue();
    int v,w;
    EnQueue(Q,s);
    Distance[s]=0;
    while((!IsEmptyQueue(Q)){
        v=DeQueue(Q);
        for all adjacent vertices w of v{
            Compute new distance d =Distance[v] + weight[v][w];
            if(ld distance to w > new distance d){
                Distance[v]=(distance to v)+ weight[v][w];
                Path[w]=v;
                if(w is there in queue)
                    EnQueue(Q,w)
            }
        }
    }
}
```

## 1.4 Minimal	Spanning	Tree
The	Spanning	tree	of	a	graph	is	a	subgraph	that	contains	all	the	vertices	and	is	also	a	tree.	A graph	may	have	many	spanning	trees.	As	an	example,	consider	a	graph	with	4	vertices	as	shown below.	Let	us	assume	that	the	corners	of	the	graph	are	vertices
The	algorithm	we	will	discuss	now	is	minimum	spanning	tree	in	an	undirected	graph.	We	assume that	the	given	graphs	are	weighted	graphs.	If	the	graphs	are	unweighted	graphs	then	we	can	still use	the	weighted	graph	algorithms	by	treating	all	weights	as	equal.	A	minimum	spanning	tree	of an	undirected	graph	G	is	a	tree	formed	from	graph	edges	that	connect	all	the	vertices	of	G	with minimum	total	cost	(weights).	A	minimum	spanning	tree	exists	only	if	the	graph	is	connected. There	are	two	famous	algorithms	for	this	problem: 
* Prim’s	Algorithm 
* Kruskal’s	Algorithm

### 1.4.1 Prim's Algorithm
Prim’s	algorithm	is	almost	the	same	as	Dijkstra’s	algorithm.	As	in	Dijkstra’s	algorithm,	in	Prim’s algorithm	we	keep	the	values	distance	and	paths	in	the	distance	table.	The	only	exception	is	that since	the	definition	of	distance	is	different,	the	updating	statement	also	changes	a	little.	The update	statement	is	simpler	than	before.

```java
void Prims(struct Graph *G,int s){
    struct PriorityQueue *PQ =CreatePriorityQueue();
    int v,w;
    EnQueue(PQ,s);
    Distance[s]=0;
    while((!isEmptyQueue(PQ)){
    v=DeleteMin(PQ);
        for all adjacent vertices w of v{
            Compute new distance d = Distance[v] + weight[v][w];
                if(Distance[w] == -1){
                    Distance[w]=weight[v][w];
                    Insert w in the priority queue with priority d;
                    Path[w]=v;
                }
                if(Distance[w] > new distance d){
                    Distance[w] = weight[v][w];
                    Update priority of vertex w to be d;
                    Path[w]=v;
                }
            }
        }
    }
}
```
>The	entire	implementation	of	this	algorithm	is	identical	to	that	of	Dijkstra’s	algorithm.	The running	time	is	O(|V|2)	without	heaps	[good	for	dense	graphs],	and	O	(ElogV)	using	binary	heaps [good	for	sparse	graphs].


### 1.4.2 Kruskal's Algorithm
The	algorithm	starts	with	V	different	trees	(V	is	the	vertices	in	the	graph).	While	constructing	the minimum	spanning	tree,	every	time	Kruskal’s	alorithm	selects	an	edge	that	has	minimum	weight and	then	adds	that	edge	if	it	doesn’t	create	a	cycle.	So,	initially,	there	are	|	V	|	single-node	trees	in the	forest.	Adding	an	edge	merges	two	trees	into	one.	When	the	algorithm	is	completed,	there	will be	only	one	tree,	and	that	is	the	minimum	spanning	tree.	There	are	two	ways	of	implementing Kruskal’s	algorithm:
* By	using	Disjoint	Sets:	Using	UNION	and	FIND	operations 
* By	using	Priority	Queues:	Maintains	weights	in	priority	queue

```java 
void Kruskal(strunct Graph *G){
    S=Φ;
    for(int v = 0; v < G->V ; v++)
        MakeSet(v);
    Sort edges of E by increasing weights w;
    for each edge (u,v) in E{
        if(FIND(u) != Find(v)){
            S=S U {(u,v)};
            UNION(u,v);
        }
    }
    return S;
}
```
>The	worst-case	running	time	of	this	algorithm	is	O(ElogE),	which	is	dominated	by	the	heap operations.	That	means,	since	we	are	constructing	the	heap	with	E	edges,	we	need	O(ElogE)	time to	do	that.
