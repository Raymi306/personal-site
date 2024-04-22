+++
title="Variables"
[extra]
next="@/tutorials/python/digging_deeper/21_operators.md"
+++

# Variables
## Basics
Recall that a variable is a label and its associated data.
You can give this label a descriptive name, so long as it meets certain rules.
You may use the characters [a-zA-Z], the digits [0-9] so long as they are NOT the first character,
underscores '_', and many other UTF-8 characters.
It also must NOT be a [keyword](https://docs.python.org/3/reference/lexical_analysis.html#keywords).
The stored data may be any Python object.
It could be a number value that you wish to reuse or want to accumulate results in, a list, a string, and more.
To assign a variable, use the single equals sign '=' assignment operator.
Variable assignments are statements.
If you need a variable assignment as an expression, use ':='.
This can make for more concise code in some cases.

{{ codeblock(fn="variables_assignments", lc="py") }}

## Naming Conventions
Just because you can give a variable almost any name you want doesn't necessarily mean that you should.
Be kind to yourself, your future self, and others that may read the code when naming variables.
In Python, convention is to use "snake case" for variable and function names.
Snake case is all lower case with words separated by underscores. For example: "my_variable_name".
Constants, or variables that are not intended to change, should be screaming snake case, or all upper case with words separated by underscores.
For example: "MY_CONSTANT_VARIABLE".
Classes should use Pascal case. Each word should start with an upper case letter, and the rest are lower case.
For example: "MyClassName".
Unnecessarily short variables are hard to understand, as are unnecessarily long ones.
Be as descriptive as you need to be with the variable.
If there are important assumptions about the data that are not immediately obvious, such as a time being in seconds rather than minutes, consider adding that information to the variable name.
If you wish to use a variable that is a keyword or would override another, you may append an underscore to it.
For example, 'id' -> 'id_'.
If there is a variable that you do not need to use, use a single underscore for the variable name.

{{ codeblock(fn="variables_underscore_as_unused", lc="py") }}

## Scope
Scope is the concept of variable visibility.
That is to say, from where in code is a variable accessible.
A variable is 'in-scope' on succeeding lines, with the exception of inside of class definitions.
Class and function definitions create a new scope.

{{ codeblock(fn="variables_scope", lc="py") }}

One notable difference between Python and some other languages is that there is no new scope inside of blocks introduced by for loops, while loops, and if-elses.
The below is valid Python:

{{ codeblock(fn="variables_block_scope_good", lc="py") }}

Be careful if you take advantage of this, as it can be an easy way to introduce bugs.
Consider the instance where you forget to assign to the variable in one branch of an if-else:

{{ codeblock(fn="variables_block_scope_bad", lc="py") }}

In Python, [variable resolution occurs at runtime](https://docs.python.org/3/reference/executionmodel.html?highlight=variable%20scope#interaction-with-dynamic-features).
The below example shows one possibly unexpected ramification of this.

{{ codeblock(fn="runtime_variable_resolution", lc="py") }}

## Mutating Outer Scope Variables

Two keywords exist to allow you to assign to variables in a higher scope, 'nonlocal' and 'global'.
Below are some examples of variable assignment with and without using the keywords.

{{ codeblock(fn="variables_mutating_outer_scope", lc="py") }}

{{ codeblock(fn="variables_nonlocal", lc="py") }}

Mutating global variables can lead to unexpected behavior in different parts of your program far removed from where you made the change.
Mutating and overusing global variables is often considered bad practice.
If you find yourself relying heavily on the 'global' keyword, restructuring your code may be of great help.

## Mutable vs Immutable Objects
Some objects such as numbers, booleans, tuples, and strings are immutable in Python.
This means that if you want to perform an operation on them, a new object is created for the result as the original cannot be changed.
If you try and assign two variables to the same immutable object, and then make a change to one of the variables, a new object is created.
However, user-defined objects, lists, dictionaries, and sets are mutable objects.
If you point two variables at the same mutable object, changes to one will affect the other.
The best way to illustrate the consequences of this is an example:

{{ codeblock(fn="mutable_objects_no_copy", lc="py") }}

We may use the copy module to achieve the desired behavior.

{{ codeblock(fn="mutable_objects_copy", lc="py") }}
