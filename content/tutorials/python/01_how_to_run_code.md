+++
title="Running Code"
[extra]
prev="@/tutorials/python/00_installation.md"
next="@/tutorials/python/02_programming_overview.md"
+++

# How to Run Code

## Using the Interpreter

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
If you see '...' the interpreter recognizes that you have begun a multiline statement and is expecting more input.
If you wish to continue, you must indent (one space will work).
You can hit enter again to finish the multiline statement.
In practice, this will look something like:

```
>>> for i in range(1, 11):
...  print(f"Hello #{i}!")
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

Note that on the line with `print` there is a space in front!

## Running Code from a File
- Write the Python code using a [text editor](@/tutorials/python/misc.md#text-editors) or interactive developer environment (IDE) of your choice
- Save the file, remembering the name that you choose to give it
- Open a command prompt
- Optionally, [navigate](@/tutorials/python/misc.md#shell-navigation) to the directory that your file resides in
- Type in the name of your python program followed by the [path to your code file](@/tutorials/python/misc.md#files-and-file-paths):

```
python3 helloworld.py
```

It will interpret your file as code and run it from start to finish.
