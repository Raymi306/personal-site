+++
title="Guessing Game pt. 1"
[extra]
next="@/tutorials/python/101_guessing_game.md"
+++

# Variables, Conditionals, and Built-in Functions

```py
answer = "17"
guess_string = input('Guess a number between 1 and 100: ')
guess_integer = guess_string

if guess_integer == answer:
    print('You win!')
else:
    print('You lose!')
```
