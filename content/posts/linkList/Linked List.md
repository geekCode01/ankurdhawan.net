---
title: "Linked Lists"
path: "/linked-list"
tags: ["linked lists"]
featuredImage: "./pablo-finance.png"
excerpt: Introduction to Linked Lists.
created: 2020-05-27
updated: 2020-05-27
---

# 1 Linked Lists

A linked list is a data structure for storing data. It is a very vast and interesting topic.

A linked list has following properties:
 * The last element points to **NULL**
 * Does not waste memory
 * Can be made as long according to requirement

  ## 1.1 Linked Lists Operations
  We basically performs following operations on Linked Lists

 * **Main Linked Lists Operations** 
  >**Insert**: inserts an element into list

    >**Delete**: delete an element from the list

 * **Auxiliary Linked Lists Operations**
    >**Delete list**: removes all elements of list

    >**Count**: returns the number of nodes in the list

 ## 1.2 Why Linked Lists?

The main questions arise why linked lists ? To understand this, firstly we understand difference between array and linked list
```
Arrays
 - It consist of fixed number of data items.
 - Specified during declaration.
 - less memory required
 - Ineffective memory utilization

Linked lists
 - It is an ordered set comprising a variable number of data items.
 - No need to specify
 - more memory required
 - Efficient memory utilization

 ```
```
 Parameter                     Linked list                  Array
_________________________________________________________________________________________
 Indexing                        O(n)                         O(1)
__________________________________________________________________________________________
 Insertion/deletion at           O(1)                         O(n), if array is not full
 beginning
__________________________________________________________________________________________
 insertion at ending             O(n)                         O(1), if array is not full
__________________________________________________________________________________________
 deletion at ending              O(n)                         O(1)
__________________________________________________________________________________________
 insertion in middle             O(n)                         O(n), if array is not full
__________________________________________________________________________________________
 deletion in middle              O(n)                         O(n), if array is not full
__________________________________________________________________________________________
 wasted space                    O(n)                         0
__________________________________________________________________________________________
```
 It is not bad to choose linked lists over array but *linked list* have also some demerits over *arrays*

 * we can't access element directly in linked list but is poosible in array.
 * we can't insert or delete an element directly as in array, we have to traverse all the list firstly then we insert or delete by changing pointers/address, which is quite difficult in implement than array.

 ## 1.3 Advantages of Linked Lists
 * It can be *expanded* in constant time.
 * To add more element in array, we can allocate memory for certain number of elements, but in linked list, we can start with space for just one allocated element and *add* on new element easily.

 ## 1.4 Disadvantages of Linked Lists

 * Array is an random access which takes O(1) to access, but linked list takes O(n) in the [worst case](introduction-to-data-structures)
    [refer to this link].
 * Linked lists waste memory in terms of extra reference points.

## 1.5 There are basically three types of Linked Lists
* Singly Linked Lists
* Doubly Linked Lists
* Circular Linked Lists



 [Singly Linked Lists](singly-linked-list)

 [Doubly Linked Lists](doubly-linked-lists)

 [Circular Linked Lists](circular-linked-lists)



If you found this article please share it with your friends. I am also available on **Twitter** [Ankur Dhawan](https://twitter.com/AnkurDh86416728) 
For my daily updates you can also join our **whatsapp group clicking on** [join](https://chat.whatsapp.com/KTmCktGLllxDU7DgtLVcu7)