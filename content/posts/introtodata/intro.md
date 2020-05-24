---
title: "Introduction to Data Structures and Algorithm"
path: "/introduction-to-data-structures"
tags: ["Basic Intro"]
featuredImage: "./clip-education.png"
excerpt: Basic introduction to some Data Structures topics.
created: 2020-05-24
updated: 2020-05-24
---

# 1.1 Variables

Before we move to the definition of variables, let us relate them to mathematical equation. All of us have solved many mathematical equations. As an example, consider the below equation:

  `x^2 + 2y - 2 = 1;`


Main point is to understand that both the variables (x and y) hold some **data**, means x and y are placeholders for representing data.
Same in  computer  science programming we need something for holding data, and **variables** is the way to do that.

# 1.2 Data Types

  The  **variables** x  and  y  can  take  any  values  such  as  integral numbers (10, 20), real numbers (0.23, 5.5), or just 0 and 1.We need to give them to the kind of values they can take, and **data type** is the name used in programming  for  this  purpose. Data Type is a set of predefined values.  
  `DataType variablename;`
  >Examples  of  data  types  are:  integer,  floating  point, double, byte , character, string etc. 

## Different data types contains different values.

        Data Type                Memory(Bytes)            Range                      
     ________________________ ___________________ ___________________________________ 
     int                         4                 -2,147,483,648 to 2,147,483,647    
     unsigned int                4                  0 to 4,294,967,295               
     short int                   2                 -32,768 to 32,76                  
     unsigned short int          4                  0 to 65,535                      
     long int                    8                 -2,147,483,648 to 2,147,483,647   
     float                       4                                                   
     double                      8                                                   
     long double                 16                                                   
  
   ## Declarations of Data Types
   ```python
   int x = 20;
   float y = 2.1;
   double z = 2.34;
   ```

There are two types of data types:-
* System-defined data types (Primitive data types)
* User-defined data types.

#### System-defined data types (Primitive data types)
>Data types that are defined by system are called primitive data types. The primitive data types provided by many programming languages are: int, float, char, double, bool, etc.
 
#### User-defined data types
>If the system-defined data types are not enough, then most programming languages allow the users
to define their own data types, called user – defined data types. Examples of user defined data types are: structures in C/C + + and classes in Java.


# 1.3 Data Structures
Based on the discussion above, once we have data in variables, we need some mechanism for manipulating  that  data  to  solve  problems. A data structure is a special format for organizing and storing data. General data structure types include arrays, files, linkedlists, stacks, queues, trees, graphs and so on.
Data structures are classified into two types:
 >* **Linear data structures**: Elements are accessed in a sequential order but it is notcompulsory to store all elements sequentially. Examples: Linked Lists, Stacks and Queues.
 >* **Non – linear data structures**: Elements of this data structure are stored/accessed in anon-linear order. Examples: Trees and graphs.

# 1.4 What is an Algorithm?

>An ***algorithm*** is the step-by-step unambiguous instructions to solve a given problem.

There are two main criteria for judging  the  merits  of algorithms:
* Correctness (does the algorithm give solution to the problem in a finite number of steps?) 
* Efficiency (how much resources (in terms of memory and time) does it take to execute) 

# 1.5 Goal of the Analysis of Algorithms
The goal of the analysis of algorithms is to compare algorithms in running time but also in terms of other factors (e.g., memory etc.)

### Typed of Analysis

There are three types of analysis of an algorithm:
* **Worst case**
    * It defines the input for which the algorithm takes a long time.
* **Best case**
    * Defines the input for which the algorithm takes the least time
* **Average case**
    * Defines the input for which the algorithm takes the average time.

```
Lower Bound <= Average Time <= Upper Bound
```  