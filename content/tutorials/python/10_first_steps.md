+++
title="First Steps"
[extra]
prev="@/tutorials/python/02_how_to_run_code.md"
next="@/tutorials/python/11_first_projects.md"
+++

# Humble Beginnings

This tutorial is intended to be an interactive experience.
Type, **don't copy**, the code into your own files or into the interpreter and run them.
Don't be afraid to experiment!
Break things on purpose, change the code's behavior, and maybe even have some fun with it!

To start, let's explore two built-in tools provided to us by Python, `print` and `input`.

---
## <built-in function print\>
---

We can use `print` to print text to the screen.
It can be used in the following way:

{{ codeblock(fn="hello_world", lc="py") }}

Here, the spelling of print, parentheses after print, and quotation marks around 'Hello world' are all necessary for this code to work.
The content inside of the quotation marks does not matter. Python also allows you to use single or double quotes, so long as the opening and closing quotation marks match.

In Python, key words and built-in functions are case sensitive and only have one correct spelling.
`print` is an example of a built-in function, a tool provided in the language to perform a certain task; namely, printing text for the user of the program to read.
Computers are incredibly literal machines, `Print` or `prnt` are meaningless at the beginning of a Python program.

The parentheses are necessary any time we want to call a function; that is to say, to invoke its action.

The quotation marks around 'Hello world' tell Python that 'Hello world' is text data, rather than a label with special meaning.
We refer to the type of data for representing text 'Strings' in programming, sometimes abbreviated as `str`.
When you try running this code, experiment with removing the quotation marks and other pieces of the code to see how Python tries to tell us what we're doing wrong. 
'syntax error' may be a little vague to us right now, but getting comfortable with common errors will make it easier to know where to look for help and what to do next time.
Overall, Python makes the classic 'Hello world' programming tutorial very simple indeed!

At this point I wish to reiterate something, as I find it to be a common problem for beginners.

If you type anything in Python, **it MUST be defined**, otherwise you will get an error.

Some things are a keyword or are built-in to Python and start out defined. Other things, you will define yourself. Try not to confuse strings with syntactic elements of the language.
`"Dog"` has meaning as a string, or textual data. `Dog` has none, unless you define Dog.

---
## <built-in function input\>
---

`input` is also a function, and rather than displaying text TO the user, it waits for text FROM the user, that can then be used inside of the program.
When input is called, it waits for the user to hit the enter button.
When the user hits the enter button, any keys that they have pressed will be saved as a string, and 'returned' by input.

{{ codeblock(fn="input_noop", lc="py") }}

By itself, input is rather boring as it doesn't appear to do much; We give the program text, and it immediately discards it.
What we need is a way to store the text for later, so that we can manipulate it in some other way.

{{ codeblock(fn="input_and_print", lc="py") }}

Here, we are assigning the result of input, the *return value*, to a variable that we decided to call 'my\_variable'.
A variable is a label matched to information that it stores. 
The label can be used to retrieve the data at a later point in our program.
You can call your labels whatever you like, so long as it adheres to certain rules in Python regarding naming things.
You want to be sure to not reuse an important name, such as with a statement like `print = input()`. 
This would hide the built-in function `print` with whatever string input returns, and will likely lead to confusion with anyone reading the code later.

Generally speaking, a variable's label, or name, can have any character from a-z A-Z, and the digits 0-9, so long as the digit is NOT the first character in the name.
The underscore character '\_' is commonly used in lieu of spaces, which are not allowed in variable names.
So what do we do with our newly defined variable?
We print the data that it references, the very same string that we typed into `input`, and prepend 'You typed: ' in front.
Note that Python is quite clever, and understands that the plus operator, when used with 2 strings, should smoosh these strings together, or concatenate them.
Note also that we must specify that we want a space in 'You typed: '; Python won't do things like that implicitly.

`input` always returns what we type as a string, but sometimes we would like to interpret the value as a number so we can do fun things like maths.
Let's go ahead and change the name of our variable to better represent what we want it to be, a number:

{{ codeblock(fn="input_and_print_twice", lc="py") }}

This returns whatever you type in twice, regardless of if you type in a number or some random string of characters.
That's not quite what we want.
What we need is a way to try to interpret the string data as numeric data, in our case, as an integer:

{{ codeblock(fn="input_and_print_double_v1", lc="py") }}

The above snippet properly doubles the numbers that we type in.
`int` is being used here to interpret the result of input as an integer; a whole number.

With programming, there are often multiple approaches to a problem that are effectively the same:

{{ codeblock(fn="input_and_print_double_v2", lc="py") }}

{{ codeblock(fn="input_and_print_double_v3", lc="py") }}

{{ codeblock(fn="input_and_print_double_v4", lc="py") }}

These snippets all accomplish the same goal of doubling our number!

Note that there is a problem with this code.
What happens if we don't type in a number?
An error message pops up and ends the program!
Error messages tend to contain useful information for improving our programs when things go wrong, and sometimes we don't want them to end our program.
We will discuss error handling [later](@/tutorials/python/25_error_handling.md), an early example is also included below.

{{ codeblock(fn="futures_try_int_input", lc="py") }}

One final note before we continue: a common problem I see among beginners that start with `print` and `input` is that they try to use these two tools for everything.

`print` is ONLY for printing to the screen.

`input` is ONLY for getting text from the person running your program.

---
## A Few Steps Back...Using help()
---
Drop into the Python interpreter if you don't already have it open.
Type `help()` and then press enter.
Now, enter `print`, and you should see something like this:

```
print(...)
    print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

    Prints the values to a stream, or to sys.stdout by default.
    Optional keyword arguments:
    file:  a file-like object (stream); defaults to the current sys.stdout.
    sep:   string inserted between values, default a space.
    end:   string appended after the last value, default a newline.
    flush: whether to forcibly flush the stream.
```

So far, we have just been passing one value into the print function, specifically, string values.
The values that you pass into a function are referred to as **arguments** or **parameters**.
`print` has several more useful abilities beyond printing strings: it can print useful information for any Python object, and can even accept multiple objects, separated by commas.
For now, just know that almost everything in Python is an object.
Strings, integers, and functions are all objects.

The ability to take multiple arguments is denoted by the '...' in the 2nd line of the above example.
Try printing multiple things at once by placing the values inside the parentheses separated by commas!
The arguments from 'value' to '...' are referred to as positional arguments.
The other arguments are keyword arguments, to refer to them you must use their name.
Functions will be explained in more detail later on this page.
For now, if you wish to use keyword arguments, refer to the following example: `print('Hello world, with no line ending!', end='')` *('\n' is a way of indicating a new line)*.
When using keyword arguments, make sure to put them after any positional arguments that do not have a name specified.
If you forget, Python will remind you with an error!

Feel free to read the help for `input` as well!
It's ok if you don't understand everything the documentation is referring to, perhaps with the print function you have no concept of why forcibly flushing a stream is important, or what a stream even is.
However, this still gives you a great starting point, and helps you to know what question to ask next in your learning journey.

Not all of the help entries are as short as `print` and `input`.
Some of them will require scrolling, and present a lot of information that you might want to search through.
You can scroll using the up and down arrow keys, or `j` and `k` keys.
To search for a term, press `/`, type your search query, and hit enter.
To jump between matches, use `n` and `N` to go forwards and backwards respectively.
When you are ready to leave, hit `q`

You can also ask for help on other things, when inside interactive help, try typing one of: `modules, keywords, symbols, topics`.
Then, try typing in one of the subentries.
Many of the topics go quite in depth, and should match the official documentation online for your version of Python.
You can also get help outside of interactive help mode by using help as a function, and passing either a string with what you need help on (as listed in modules, keywords, etc), or a Python object.
I believe `help` to be an underutilized and underappreciated feature of Python that can help programmers of any skill level.

## Conditions and Branching

Your program reacting the same way to every possible input is boring.
Let's have it take a different action depending on what the user types:

{{ codeblock(fn="conditions_names", lc="py") }}

We are using several fancy new keywords: `if`, `elif` (Pythonese for else if), and `else`.

After the `if` and `elif` keywords, we need to put a conditional statement.
A conditional statement is a statement which is either true or false.
In our case, we are interested in checking if two things are equal.
If they are equal, then the statement is true, otherwise the statement will be false.
To do this comparison, we use the equality check operator: `==`.
Remember, when concerned about equality, always use two equal signs.
One equal sign is just for assigning variables!

Looking at our code, we first check if the user's name is Joshua.
If it is, we take a special action and print out: 'Greetings.  Would you like to play a game?'.
If it isn't Joshua, we then check to see if it is 'Dave'.
If it is, we print something different, this time: "I'm sorry, Dave.  I'm afraid I still can't open the podbay doors".
If the user's input is neither Joshua nor Dave, we have a default case to fall back onto, indicated by the `else`.
Note that `else` does not have a condition or any statement at all.
If we hit this final branch, we print out 'Hello, ' and their input.

After our conditional statements, or after the 'else' keyword, we MUST put a colon `:`.
Furthermore, on the next line, we must indent.
Some languages use brackets `{}` to group code together logically.
Python relies on levels of indentation using either tabs or spaces.
Take care not to mix them.
The standard level of indentation when coding in Python is 4 spaces; however, so long as you are consistent, your code will work.

Some text editors will indent for you when you add a new line.

If you have multiple lines indented to the same level, they will all execute if that branch is taken:

{{ codeblock(fn="conditions_indent", lc="py") }}

Return to the original indentation level when you wish to write code that occurs AFTER your if block.

{{ codeblock(fn="conditions_boolean_logic", lc="py") }}

Conditional statements can be combined with parentheses, `and`, and `or`.
Parentheses are used to have part of a statement evaluate as a group, similar to how they are used in mathematical expressions.
Using `and` to combine two statements means that the full condition will evaluate as true if and only if both sides are true.
`or` evaluates as true if either side is true, or if both are true.
You can negate a condition with `not` to test for the inverse of a condition.
If you want to check for a condition that is False, negating the condition would give you `True` and thus would let the branch evaluate.
Finally, if you wish to check that two items are not equal, you can use `!=`.

Some learners may appreciate a nice table.

### and

| p | q |p and q|
|---|---|-------|
| T | T | T     |
| T | F | F     |
| F | T | F     |
| F | F | F     |

### or

| p | q |p or q|
|---|---|------|
| T | T | T    |
| T | F | T    |
| F | T | T    |
| F | F | F    |

## Repetition, Looping

If we want to do the same thing more than once, repeating yourself is clumsy and hard to read.
We program to be lazy. A good mantra is DRY: Don't Repeat Yourself!
Loops provide the structure to do a task repeatedly, repeat until a condition is met, repeat until every item in a collection is examined, or repeat indefinitely.
Generally, code executes line by line, starting at the top and continuing to the bottom.
A loop breaks this rule, allowing code to circle back on itself.

Let's first examine the `while` loop:

{{ codeblock(fn="loops_scream", lc="py") }}

This code will cause your computer to print 'hello...' forever.
It is still ok to run it.
You can stop the code from executing by sending a 'keyboard interrupt', `Ctrl + c`.

The infinite loop can be a valuable tool for programs that need to run until the user performs some action to close it.
Let's combine a while loop with some earlier knowledge, and demonstrate how to exit a loop early with the `break` keyword:

{{ codeblock(fn="loops_input_to_break", lc="py") }}

This program will continually prompt the user for input and print it back out to them.
Unless, that is, the user enters 'q'.
This will cause the code to reach the `break` statement, causing the loop to be exited.
Since that is the end of this code sample, the program ends.

{{ codeblock(fn="loops_2_var_counter", lc="py") }}

This program uses 2 variables, and places a conditional statement just like the ones we use with 'if' blocks after the 'while' keyword.
Can you guess what you have to do to exit this program once it begins running?
No cheating by using a keyboard interrupt!

Sometimes in a loop, we want to skip to the next iteration if a condition is met.
We can use the `continue` keyword to do this.

{{ codeblock(fn="loops_simple_continue", lc="py") }}

This program prints out the number of each iteration, except for the cases where the iteration is equal to 3 or 7.
We see here a new type of conditional statement.
If you wish to check if a value is one of a set of values, you may use this syntax, placing the values in between the curly braces separated by commas as shown.

## Collections

Up until now, we've mostly dealt with individual items.
Python has several ways to organize and interact with multiple items:

{{ codeblock(fn="collections_instantiations", lc="py") }}

{{ codeblock(fn="collections_item_access_1", lc="py") }}

The simplest collection is the list.
You can access items in a list by index or by slice, which returns a sublist.
In the example above, you can see the slices have a colon in them.
Remember, to get an item at the BEGINNING of the list you use 0 as the index.
To access the last item in a list, you can either use the length of the list - 1 or simply -1 as the index.
For slices, the number to the left of the colon is the starting index.
If omitted, it is the beginning of the collection.
The number to the right is the end index plus 1.
The right side does *not* start with 0!

{{ codeblock(fn="collections_item_access_2", lc="py") }}

A dictionary is a mapping between keys and values.
It is indexed by a key which gives the associated value.

We created 2 other types of collections earlier.

Sets are useful when it comes to checking if something exists within a collection, or the difference between two collections.

Tuples are similar to lists, but they are immutable.
This means that you cannot add or remove items from a tuple once it is created.

Strings can also be indexed and iterated over in a manner similar to a tuple or list, allowing you to access individual characters.
Strings, like tuples, are immutable.

All of these collections have builtin helper functions for performing common tasks.
They also have common behaviors that allow you to treat any collection similarly.
For example, to get the length of a collection, call the builtin function `len` and pass in the collection as an argument.
To learn more about the builtins, try calling:

```py
help(list)
help(dict)
help(tuple)
help(set)
help(str)
```

This will show you how to add and remove items from a list, how to merge dictionaries, and more.
Finally, an introduction to 'for' loops:

{{ codeblock(fn="collections_item_access_3", lc="py") }}

These loops allows us to iterate more conveniently through each item in a collection in comparison to 'while' loops.
You may use tools that worked with 'while' loops here as well, such as `break` and `continue`.

## Functions

Last but not least on our whirlwind tour is an overview of functions.
The magic of functions lies in structuring our code.
We can write code inside of a function and then reuse it anywhere we please to avoid repetition.
Some functions, like `print` and `input`, exist predefined in Python.
We can also write our own:

{{ codeblock(fn="functions_define", lc="py") }}

The first line of a function is its signature.
Here we give the function a name.
Inside the parentheses, we indicate what data can be passed in to the function.

The values we are passing in are referred to as arguments or parameters to a function.
Much like variables, we can name our arguments almost anything.

When calling a function and specifying the arguments, you must provide the same number of arguments in the same position as they are written.
There are a few exceptions to this.
One is when an argument is given a default value, which we will see an example of soon.
The other is when you refer to the arguments by their name with the pattern `name=value`.

The lines after the signature, indented at least one level from the definition, constitute the body of a function.
The body of a function is any code that you desire.

One optional part of a function is the return statement.
In a similar way to how `input` returns a string, we can return data from inside our function to use elsewhere.
Once a return statement is hit, the function exits with the value given in the statement.
Please do NOT confuse returning a value with printing it!
These are two separate concepts.
If a function has no return statement, it will implicitly return None.
You may also have multiple return statements throughout your function.

Below is an example showing how to use default arguments:

{{ codeblock(fn="functions_default_args", lc="py") }}
