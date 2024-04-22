+++
title="Part 3"
[extra]
prev="@/tutorials/python/guessing_game/101_guessing_game.md"
next="@/tutorials/python/guessing_game/103_guessing_game.md"
+++

# Loops!

```py
from random import randint

while True:
    answer = randint(1, 100)
    guess = int(input('Guess a number between 1 and 100: '))

    if guess == answer:
        print('You win!')
    else:
        print('You lose!')
```

```py
from random import randint

while input('Play game? y/n: ') == 'y':
    answer = randint(1, 100)
    guess = int(input('Guess a number between 1 and 100: '))

    if guess == answer:
        print('You win!')
    else:
        print('You lose!')
```
