+++
title="Running Code"
[extra]
prev="@/tutorials/python/introduction/01_installation.md"
next="@/tutorials/python/introduction/10_first_steps.md"
+++

# How to Run Code

This section is critical.
Ensure that you are comfortable with the steps on this page before progressing!

## The Interpreter

The interpreter is useful for playing with Python in an interactive manner.
It waits for you to type in code line by line, and immediately tries running it.

### On Windows:

- open up the [command line](@/tutorials/python/misc.md#shells)
- depending on the version installed, type `python` or `py` and hit enter
- to exit, type `quit()`, and hit enter

### On Linux:

- open up a terminal
- type `python3` and hit enter
- to exit, type `quit()`, and hit enter. You can also use `Ctrl+D`

Output should be similar to this:

```
Python 3.9.2 (default, Feb 28 2021, 17:03:44)
[GCC 10.2.1 20210110] on linux
Type "help", "copyright", "credits" or "license" for more information.
```

Inside the interpreter, you can type anything you like and Python will attempt to run it as code.
When you see the default prompt of '>>>' the interpreter is ready for you to type more things and hit enter.
I encourage you to play around with this now.
To start, try using the interpreter like a calculator:

```
>>> 2 + 2
4
>>> 9 / 3
3.0
```

If you see '...' the interpreter recognizes that you have begun a multiline statement and is expecting more input.
If you wish to continue, you must indent (one space will work).
You can hit enter again to finish the multiline statement.
In practice, this will look something like:

```
>>> for i in range(1, 11):
...  f"Hello #{i}!"
...
Hello #1!
Hello #2!
Hello #3!
Hello #4!
Hello #5!
Hello #6!
Hello #7!
Hello #8!
Hello #9!
Hello #10!
```

Note that on the second line there is a space in front!
Indentation levels are important!
Feel free to play with this example.

- What happens if you change the numbers 1 and 11 to other numbers?
- What if you change "Hello" to some other text?
- Does it still work if you remove the "f" at the front of line 2?

## Running Code from a File
- Write the Python code using a [text editor](@/tutorials/python/misc.md#text-editors) or interactive developer environment (IDE) of your choice
- Copy and paste the following code into the file:

```py
for i in range(1, 11):
    print(f"Hello #{i}!
```

- Save the file, remembering the location that you save it in and the name you choose to give it. Avoid spaces in the file name.
- Open a [command prompt](@/tutorials/python/misc.md#shells)
- Optionally, [navigate](@/tutorials/python/misc.md#shell-navigation) to the directory that your file resides in
- Type in the name of your Python program followed by the [path to your code file](@/tutorials/python/misc.md#files-and-file-paths):

```
$ python3 helloworld.py
Hello #1!
Hello #2!
Hello #3!
Hello #4!
Hello #5!
Hello #6!
Hello #7!
Hello #8!
Hello #9!
Hello #10!
```

Python will interpret your file as code and run it from start to finish.
You'll likely find that it is much simpler to edit and rerun your program, than to continuously enter the code into the interpreter.

If you wish to end a program early, you can close the terminal window, or hit `<Ctrl + c>`
