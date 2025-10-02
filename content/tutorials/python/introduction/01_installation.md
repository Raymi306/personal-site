+++
title="Installation"
[extra]
prev="@/tutorials/python/introduction/00_programming_overview.md"
next="@/tutorials/python/introduction/02_how_to_run_code.md"
+++

# Installation

[link to download page](https://www.python.org/downloads/)

## Windows Installation

Find the download link for the latest stable version of Python and download it.
Once the download is complete, run the file.
A typical installer will guide you through the setup process, only requiring you to press 'Next'.
However, there are some options that it presents whose meaning might not be immediately obvious.
Of the options presented, **ensure that you select the checkmark to add Python to the [path](@/tutorials/python/misc.md).**

## Linux Installation

Linux distributions often come with a version of Python already installed.
It is worth checking the version on your system, this can be done with running `python3 -V` from the command line.
If you would like to use a newer version, package managers often have several versions available.
For some package managers, you may need to add another source to retrieve versions not normally included in your distribution's package manager.
Installing from source is also always an option.
Note that if you just type `python` there is a chance that you will be running the older Python 2 version.

## Alternatives to Installation

Having Python available to run on your local computer is very handy, but much of this tutorial can be followed by using an online Python interpreter.
At the time of writing, [Programiz](https://www.programiz.com/python-programming/online-compiler/) is one such option.
This also allows you to practice Python on devices that you are not able to modify, or on devices which do not easily support Python development.

## Managing Multiple Python Versions (advanced)

Managing multiple Python versions on one system can be frustrating.
Learning a tool such as [uv](https://docs.astral.sh/uv/) is advised if you find yourself working on projects with varying Python version requirements.
uv is more than a Python version management tool, it can also help with managing dependencies.
