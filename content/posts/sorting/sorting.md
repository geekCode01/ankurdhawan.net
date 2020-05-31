---
title: "Sorting"
path: "/sorting"
tags: ["sorting"]
featuredImage: "./sor.png"
excerpt: Sorting	is	an	algorithm	that	arranges	the	elements	of	a	list	in	a	certain	order
created: 2020-05-28
updated: 2020-05-28
---

# 1 Sorting
Sorting	is	an	algorithm	that	arranges	the	elements	of	a	list	in	a	certain	order	[either	ascending	or descending].	The	output	is	a	permutation	or	reordering	of	the	input.

## 1.2 Why Sorting is Necessary?
Sorting	is	one	of	the	important	categories	of	algorithms	in	computer	science	and	a	lot	of	research has	gone	into	this	category.	Sorting	can	significantly	reduce	the	complexity	of	a	problem,	and	is often	used	for	database	algorithms	and	searches

## 1.3 Classifications
* Internal Sort
* External Sort

### Internal Sort

Sort	algorithms	that	use	main	memory	exclusively	during	the	sort	are	called	internal	sorting algorithms.	This	kind	of	algorithm	assumes	high-speed	random	access	to	all	memory.

### External Sort
Sorting	algorithms	that	use	external	memory,	such	as	tape	or	disk,	during	the	sort	come	under	this category.

## 1.4 Bubble Sort
Bubble	sort	is	the	simplest	sorting	algorithm.	It	works	by	iterating	the	input	array	from	the	first element	to	the	last,	comparing	each	pair	of	elements	and	swapping	them	if	needed.	Bubble	sort continues	its	iterations	until	no	more	swaps	are	needed.	
The	only	significant	advantage	that	bubble	sort	has	over	other	implementations	is	that	it	can	detect whether	the	input	list	is	already	sorted	or	not.

### Implementation
```java
void BubbleSort(int A[],int n){
    for(int pass= n-1; pass >= 0; pass--){
        for(int i=0;i <= pass-1;i++){
            if(A[i] > A[i+1]){
                int temp=A[i];
                A[i]=A[i+1];
                A[i+1]=temp;
            }
        }
    }
}
```
## Performance
> **Worst case complexity**: O(n^2)

> **Best case complexity**: O(n)

>**Average case complexity**:O(n^2)

>**Worst case complexity**:O(1) auxiliary

## 1.5 Selection Sort

Selection	sort	is	an	in-place	sorting	algorithm.	Selection	sort	works	well	for	small	files.	It	is	used for	sorting	the	files	with	very	large	values	and	small	keys.	
It picks the smallest element from the list and place it as its correct position.
### Algorithm
1. Find	the	minimum	value	in	the	list
2. Swap	it	with	the	value	in	the	current	position 
3. Repeat	this	process	for	all	the	elements	until	the	entire	array	is	sorted

### Implementation
```java
void Selection(int A[],int n){
    int i,j,min,temp;
    for(i=0 ;i < n-1 ;i++){
        min=i;
        for(j=i+1;j < n;j++){
            if(A[j] < A[min])
                min=j;
        }
        //swap elements
        temp=A[min];
        A[min]=A[i];
        A[i]=temp;
    }
}
```
## Performance

> **Worst case complexity**: O(n^2)

> **Best case complexity**: O(n^2)

>**Average case complexity**:O(n^2)

>**Worst case complexity**:O(1) auxiliary

## 1.6 Insertion Sort
Insertion	sort	is	a	simple	and	efficient	comparison	sort.	In	this	algorithm,	each	iteration	removes an	element	from	the	input	data	and	inserts	it	into	the	correct	position	in	the	list	being	sorted.	

### Advantages
* Simple Implementation
* Efficient for small data
* Stable
* In-place

## Algorithm
Every	repetition	of	insertion	sort	removes	an	element	from	the	input	data,	and	inserts	it	into	the correct	position	in	the	already-sorted	list	until	no	input	elements	remain.	Sorting	is	typically	done in-place.	The	resulting	array	after	k	iterations	has	the	property	where	the	first	k	+	1	entries	are sorted

### Implementation
```java
void insertionSort(int A[],int n){
	int i,j,v;
	for(i=1;i <= n;i++){
		v=A[i];
		j=i;
		while(A[j-1] > v && j>=1){
			A[j]=A[j-1];
			j--;
		}
		A[j]=v;
	}
}
```

## Performance
> **Worst case complexity**: Θ(n^2)

> **Best case complexity**: Θ(n)

>**Average case complexity**:Θ(n^2)

>**Worst case complexity**:O(n^2)total, O(1) auxiliary

## 1.7 Merge Sort
It is basically a divide and conquer technique.

### Important	Notes
* Merging	is	the	process	of	combining	two	sorted	files	to	make	one	bigger	sorted	file. 
* Selection	is	the	process	of	dividing	a	file	into	two	parts:	k	smallest	elements	and	n	– k	largest	elements. 
* Selection	and	merging	are	opposite	operations
    * selection	splits	a	list	into	two	lists
    * merging	joins	two	files	to	make	one	file
* Merge	sort	is	Quick	sort’s	complement
* Merge	sort	accesses	the	data	in	a	sequential	manner 
* This	algorithm	is	used	for	sorting	a	linked	list
```java
void merge(int *a,int s,int e)
{
	int mid=(s+e)/2;
	int i=s;
	int j=mid+1;
	int k=s;
	int temp[1000];

	while(i<=mid && j<=e)
	{
		if(a[i]<a[j])
		{
			temp[k++]=a[i++];
		}
		else
		{
			temp[k++]=a[j++];
		}
	}

	while(i<=mid)
	{
		temp[k++]=a[i++];
	}
	while(j<=e)
	{
		temp[k++]=a[j++];
	}

	for(int i=s;i<=e;i++)
	{
		a[i]=temp[i];
	}
}
void mergesort(int a[],int s,int e)
{
	int mid=(s+e)/2;
	
	if(s>=e)
		return;

	mergesort(a,s,mid);
	mergesort(a,mid+1,e);
	merge(a,s,e);
}
```

> **Worst case complexity**: Θ(nlogn)

> **Best case complexity**: Θ(nlogn)

>**Average case complexity**:Θ(nlogn)

>**Worst case complexity**: Θ(n) auxiliary

## 1.8 Heap Sort
Heapsort	is	a	comparison-based	sorting	algorithm	and	is	part	of	the	selection	sort	family. Although	somewhat	slower	in	practice	on	most	machines	than	a	good	implementation	of	Quick sort,	it	has	the	advantage	of	a	more	favorable	worst-case	Θ(nlogn)	runtime.	Heapsort	is	an	inplace	algorithm	but	is	not	a	stable	sort.

### Performance

> **Worst case complexity**: Θ(nlogn)

> **Best case complexity**: Θ(nlogn)

>**Average case complexity**:Θ(nlogn)

>**Worst case complexity**: Θ(n) total , Θ(1) auxili ary

## 1.9 Quick Sort
Quick	sort	is	an	example	of	a	divide-and-conquer	algorithmic	technique.	It	is	also	called partition	exchange	sort.	It	uses	recursive	calls	for	sorting	the	elements,	and	it	is	one	of	the famous	algorithms	among	comparison-based	sorting	algorithms.
Divide:	The	array	A[low	...high]	is	partitioned	into	two	non-empty	sub	arrays	A[low	...q]	and	A[q +	1...	high],	such	that	each	element	of	A[low	...	high]	is	less	than	or	equal	to	each	element	of	A[q +	1...	high].	The	index	q	is	computed	as	part	of	this	partitioning	procedure.

### Implementation
```java
int partition(int *a,int s,int e,int n)
{
    int i=s-1;
    int pivot=a[e];
    for(int j=s;j<e;j++)
    {
        if(a[j]<=pivot)
        {
            i++;
            swap(a[i],a[j]);
        }
    }
    swap(a[i+1],a[e]);
    return(i+1);
}
void quick(int* a,int s,int e,int n)
{
    if(s>=e)
        return;

    int p=partition(a,s,e,n);
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
    cout<<endl;
    quick(a,s,p-1,n);
    quick(a,p+1,e,n);

}
```

### Performance

> **Worst case complexity**: O(n^2)

> **Best case complexity**: O(nlogn)

>**Average case complexity**:O(nlogn)

>**Worst case complexity**: O(1) 

## 1.10 Tree Sort
 Tree	sort	uses	a	binary	search	tree.	It	involves	scanning	each	element	of	the	input	and	placing	it into	its	proper	position	in	a	binary	search	tree.	This	has	two	phases
 * First	phase	is	creating	a	binary	search	tree	using	the	given	array	elements
 * Second	phase	is	traversing	the	given	binary	search	tree	in	inorder,	thus	resulting	in	a sorted	array

 # Comparison of Sorting Algorithm
 ```
 Name                  Average Case       Worst Case            Auxiliary Memory           is Stable?
________________________________________________________________________________________________________
 Bubble                  O(n^2)             O(n^2)                    1                       yes 
________________________________________________________________________________________________________
 Selection               O(n^2)             O(n^2)                    1                       no
________________________________________________________________________________________________________
 Insertion               O(n^2)             O(n^2)                    1                       yes
________________________________________________________________________________________________________
 Shell                     -                O(nlogn^2)                1                       no
________________________________________________________________________________________________________ 
 Merge Sort              O(nlogn)           O(nlogn)                depends                   yes
________________________________________________________________________________________________________
 Heap Sort               O(nlogn)           O(nlogn)                  1                       no
________________________________________________________________________________________________________
 Quick Sort              O(nlogn)           O(n^2)                   O(logn)                  depends
________________________________________________________________________________________________________ 
 Tree Sort               O(nlogn)           O(n^2)                   O(n)                     depends
```
 **Note**: n denotes the number of elements in the input

 ## 1.11 Linear Sorting Algorithms
 * Counting Sort
 * Bucket Sort
 * Radix Sort

 ## 1.12 Counting Sort
 Counting	sort	is	not	a	comparison	sort	algorithm	and	gives	O(n)	complexity	for	sorting.	To achieve	O(n)	complexity,	counting	sort	assumes	that	each	of	the	elements	is	an	integer	in	the range	1	to	K,	for	some	integer	K.	When	if	=	O(n),	the	counting	sort	runs	in	O(n)	time.	The	basic idea	of	Counting	sort	is	to	determine,	for	each	input	element	X,	the	number	of	elements	less	than X.	This	information	can	be	used	to	place	it	directly	into	its	correct	position.

## Implementation
```java
#include<bits/stdc++.h> 
using namespace std; 
  
void sort(vector <int>& arr) 
{ 
    int max = *max_element(arr.begin(), arr.end()); 
    int min = *min_element(arr.begin(), arr.end()); 
    int range = max - min + 1; 
      
    vector<int> count(range), output(arr.size()); 
    for(int i = 0; i < arr.size(); i++) 
        count[arr[i]-min]++; 
          
    for(int i = 1; i < count.size(); i++) 
           count[i] += count[i-1]; 
    
    for(int i = arr.size()-1; i >= 0; i--) 
    {  
         output[ count[arr[i]-min] -1 ] = arr[i];  
              count[arr[i]-min]--;  
    } 
      
    for(int i=0; i < arr.size(); i++) 
            arr[i] = output[i]; 
} 
  
void print(vector <int> & arr)  
{  
    for (int i=0; i < arr.size(); i++)  
        cout << arr[i] << " ";  
    cout << "\n";  
} 
  
int main() 
{ 
    int n;
    cin>>n;
    vector<int>arr;
    for(int i=0;i<n;i++)
    {
        int input;
        cin>>input;
        arr.push_back(input);
    } 
    sort(arr);
    print(arr);
    return 0; 
} 
```
>Total	Complexity:	O(K)	+	O(n)	+	O(K)	+	O(n)	=	O(n)	if	K	=O(n). Space	Complexity:	O(n)	if	K =O(n).

## 1.13 Bucket Sort
Like	Counting	sort,	Bucket	sort	also	imposes	restrictions	on	the	input	to	improve	the performance.	In	other	words,	Bucket	sort	works	well	if	the	input	is	drawn	from	fixed	set.	Bucket sort	is	the	generalization	of	Counting	Sort.	For	example,	assume	that	all	the	input	elements	from {0,	1,	.	.	.	,	K	–	1},	i.e.,	the	set	of	integers	in	the	interval	[0,	K	–	1].	That	means,	K	is	the	number of	distant	elements	in	the	input.	Bucket	sort	uses	K	counters.	The	ith	counter	keeps	track	of	the number	of	occurrences	of	the	ith	element.	Bucket	sort	with	two	buckets	is	effectively	a	version	of Quick	sort	with	two	buckets.
 ## Implementation
 ```java
#include<bits/stdc++.h>
using namespace std; 
  
// Function to sort arr[] of size n using bucket sort 
void bucketSort(int arr[], int n) 
{ 
    // 1) Create n empty buckets 
    vector<int> b[n]; 
     
    // 2) Put array elements in different buckets 
    for (int i=0; i<n; i++) 
    { 
       int bi = n*arr[i]; // Index in bucket 
       b[bi].push_back(arr[i]); 
    } 
  
    // 3) Sort individual buckets 
    for (int i=0; i<n; i++) 
       sort(b[i].begin(), b[i].end()); 
  
    // 4) Concatenate all buckets into arr[] 
    int index = 0; 
    for (int i = 0; i < n; i++) 
        for (int j = 0; j < b[i].size(); j++) 
          arr[index++] = b[i][j]; 
} 
  
/* Driver program to test above funtion */
int main() 
{ 
    int arr[] = {15,1,321,10,802,2,123,90,109,11}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    bucketSort(arr, n); 
  
    cout << "Sorted array is \n"; 
    for (int i=0; i<n; i++) 
       cout << arr[i] << " "; 
    return 0; 
} 
```
>**Time	Complexity**:	O(n).

>**Space	Complexity**:	O(n).
## 1.14 Radix Sort
 In	Radix	sort,	first	sort	the	elements	based	on	the	last	digit	[the	least	significant	digit].	These results	are	again	sorted	by	second	digit	[the	next	to	least	significant	digit].	Continue	this	process for	all	digits	until	we	reach	the	most	significant	digits.	Use	some	stable	sort	to	sort	them	by	last digit.	Then	stable	sort	them	by	the	second	least	significant	digit,	then	by	the	third,	etc.	If	we	use Counting	sort	as	the	stable	sort,	the	total	time	is	O(nd)	≈	O(n)

## Algorithm
1) Take	the	least	significant	digit	of	each	element.
2) Sort	the	list	of	elements	based	on	that	digit,	but	keep	the	order	of	elements	with	the same	digit	(this	is	the	definition	of	a	stable	sort).
 3) Repeat	the	sort	with	each	more	significant	digit.
 ## Implementation
 ```java
 #include<bits/stdc++.h>
using namespace std;
int getmax(int arr[],int n){
	    int max=arr[0];
	    for(int i=0;i<n;i++)
	    {
		    if(arr[i]>max)
		    {
			    arr[i]=max;
		    }
	    }
	    return max;
}
void countsort(int arr[],int n,int pos)
{
	    int i;
	    int count[10]={0};
	    for(i=0;i<n;i++)
		    count[(arr[i]/pos)%10]++;
	    for(i=1;i<=k;i++)
		    count[i]+=count[i-1];
	    for(i=n-1;i>=0;i--)
	    {
		    output[count[(arr[i]/pos)%10]-1]=arr[i];
		    count[(arr[i]/pos)%10]--;
	    }
	    for(i=0;i<n;i++)
		    arr[i]=output[i];
}
void radixsort(int arr[],int n)
{
	    int m=getmax(arr,n);
	    for(int pos=1;m/pos>0;pos*=10)
	    {
		    countsort(arr,n,pos);
	    }
}
void print(int arr[],int n)
{
	    for(int i=0;i<n;i++)
	    {
		    cout<<arr[i]<<""
	    }
}
int main()
{
	    int arr={170,45,75,90,802,24,2,66};
	    int n=sizeof(arr)/sizeof(arr[0]);
	    radixsort(arr,n);
	    print(arr,n);
	    return 0;
}
```

If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)