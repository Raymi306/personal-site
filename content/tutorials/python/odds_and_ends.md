+++
title="Odds and Ends"
weight=1000
+++

# Odds and Ends

## Random Python features

Every once in awhile, I find another Python feature that I didn't know existed.
One day, these findings might be integrated into another section of the tutorial.

### raise ... from None

```
>>> try:
...     raise Exception("blah blah blah")
... except Exception:
...     raise RuntimeError
...
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
Exception: blah blah blah

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
RuntimeError

>>> try:
...     raise Exception("blah blah blah")
... except Exception as err:
...     raise RuntimeError from err
...
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
Exception: blah blah blah

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
RuntimeError

>>> try:
...     raise Exception("blah blah blah")
... except Exception:
...     raise RuntimeError from None
...
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
RuntimeError
```

`None` is a valid object to pass to `from` when raising exceptions.
You can stop prior exception information from being printed in this way.

From [PEP-409](https://peps.python.org/pep-0409/)

### star assignment

```
>>> collection = [1, 2, 3, 4]
>>> first, *middle, last = collection
>>> first
1
>>> middle
[2, 3]
>>> last
4
```

Using the star/splat operator on the left side of an assignment is also possible.

From [PEP-3132](https://peps.python.org/pep-3132/)

## A note on "private" methods in Python

Too often I see programmers use a single leading underscore to indicate "kinda private" and two leading underscores for "extra private".
As a beginner Python programmer, I was also guilty of this.

The single leading underscore is the defacto method of indicating that a method is non-public.
Several static analysis tools such as linters will flag public accesses of these methods.

Double leading underscores (with fewer than 2 trailing underscores) invokes a name mangling algorithm.
This can be used if you are writing a class that you intend to be subclassed and you wish to avoid the possibility of a name collision.

The name mangling algorithm is:
- prepend a single underscore to the simple class name.
- add the method name, including the double leading underscores.

```py
class Foo:
    def __mangled(self):
        pass
```
```
>>> dir(Foo)
['_Foo__mangled', ...]
```

When I see random name mangled methods in a codebase, it is usually a great indicator that those methods have no unit test, as people doing this often have no idea how to bypass the name mangling.
If you do need to test or mock or otherwise manipulate such a method, now you know how.

See the relevant section in [PEP-8](https://peps.python.org/pep-0008/#designing-for-inheritance)
