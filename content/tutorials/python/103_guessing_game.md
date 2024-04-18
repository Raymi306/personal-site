+++
title="Guessing Game pt. 4"
[extra]
prev="@/tutorials/python/102_guessing_game.md"
next="@/tutorials/python/104_guessing_game.md"
+++

# String Methods

```py
>>> help(str)
```

[Python Documentation](https://docs.python.org/3/library/stdtypes.html#string-methods)

```py
from random import randomint

while input('Play game? y/n: ').strip().lower() == 'y':
    answer = random.randint(1, 100)
    guess = int(input('Guess a number between 1 and 100: ').strip())

    if guess == answer:
        print('You win!')
    else:
        print('You lose!')
```
