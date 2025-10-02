+++
title="Installation"
[extra]
prev="@/tutorials/python/introduction/00_programming_overview.md"
next="@/tutorials/python/introduction/02_how_to_run_code.md"
+++

# Installation

This page can be safely skimmed for information of interest to you.
Before proceeding, you will either need Python confirmed to be installed on your system, or a way to run Python code online.

[link to the official python.org download page](https://www.python.org/downloads/)

## Windows Installation

Find the download link for the latest stable version of Python and download it.
Once the download is complete, run the file.
A typical installer will guide you through the setup process, only requiring you to press 'Next'.
However, there are some options that it presents whose meaning might not be immediately obvious.
Of the options presented, **ensure that you select the checkmark to add Python to the [path](@/tutorials/python/misc.md).**

## Unix Installation

Linux and BSD distributions typically come with a version of Python already installed.
In my limited experience with MacOS, Python was preinstalled on those systems as well.
It is worth checking the version on your system, this can generally be done by running `python3 -V` from the command line.
Note that if you just type `python` there is a chance that you will be running the older version 2 of Python.

## Alternatives to Installation

Having Python available to run on your local computer is very handy, but much of this tutorial can be followed by using an online Python interpreter.
At the time of writing, [Programiz](https://www.programiz.com/python-programming/online-compiler/) is one such option.
This also allows you to practice Python on devices that you are not able to modify, or on devices which do not easily support Python development.

## On Versions

Python versions are often broken into 3 numbers separated by periods, for instance:

3.13.7

The first number represents the major version.
At the time of writing, Python major version 3, or simply Python 3, is the newest and most commonly used option.
The latest stable Python 3 version is generally a very safe choice to install, and should be fully compatible with this tutorial.
As the second number changes, features are added, and in some cases features are changed or removed.
"Core" language features of interest to the learner are generally stable.

Python 2 is no longer an appropriate version to develop new code with, as it is no longer supported.

An interested reader may refer to [the Python documentation regarding versioning](https://docs.python.org/3/faq/general.html#how-does-the-python-version-numbering-scheme-work)
for a detailed explainer of the significance of each part of a Python version.

For an idea of what constitutes an "old" Python version, refer to [this python.org chart](https://devguide.python.org/versions/).
Of interest will be identifying which versions are "end of life".

## Managing Multiple Python Versions (advanced)

Managing multiple Python versions on one system can be frustrating.
Learning a tool such as [uv](https://docs.astral.sh/uv/) is advised if you find yourself working on projects with varying Python version requirements.
